import { Resend } from "resend";

const MAX_NAME_LENGTH = 120;
const MAX_EMAIL_LENGTH = 254;
const MAX_SERVICES_LENGTH = 500;
const MAX_BUDGET_LENGTH = 100;
const MAX_MESSAGE_LENGTH = 5000;
const MAX_REQUEST_BODY_LENGTH = 16 * 1024;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTROL_CHARACTER_PATTERN = /[\u0000-\u001F\u007F]/;
const RATE_LIMIT_WINDOW_MS = 60 * 1000;
const MAX_REQUESTS_PER_WINDOW = 5;

const requestsByIp = new Map<string, { count: number; resetAt: number }>();

interface ContactRequest {
  name?: unknown;
  email?: unknown;
  services?: unknown;
  budget?: unknown;
  message?: unknown;
  website?: unknown;
}

interface ContactRequestWithHttp {
  method?: string;
  body?: ContactRequest;
  headers: Record<string, string | string[] | undefined>;
  socket?: { remoteAddress?: string };
}

interface ContactResponse {
  status: (code: number) => ContactResponse;
  json: (body: unknown) => ContactResponse;
  end: () => ContactResponse;
}

const getString = (value: unknown) =>
  typeof value === "string" ? value.trim() : "";

const isPlainObject = (value: unknown): value is Record<string, unknown> =>
  typeof value === "object" &&
  value !== null &&
  !Array.isArray(value) &&
  Object.getPrototypeOf(value) === Object.prototype;

const sanitizeSubjectName = (value: string) =>
  value.replace(/[\u0000-\u001F\u007F]+/g, " ").replace(/\s+/g, " ").trim();

const getHeader = (
  headers: ContactRequestWithHttp["headers"],
  name: string,
) => {
  const value = headers[name] ?? headers[name.toLowerCase()];
  return typeof value === "string" ? value : value?.[0];
};

const escapeHtml = (value: string) =>
  value.replace(
    /[&<>"']/g,
    (character) =>
      ({
        "&": "&amp;",
        "<": "&lt;",
        ">": "&gt;",
        '"': "&quot;",
        "'": "&#039;",
      })[character] ?? character,
  );

const getClientIp = (request: ContactRequestWithHttp) => {
  const vercelForwardedFor = getHeader(
    request.headers,
    "x-vercel-forwarded-for",
  );
  const realIp = getHeader(request.headers, "x-real-ip");
  const forwardedFor = getHeader(request.headers, "x-forwarded-for");
  const candidate =
    vercelForwardedFor?.split(",")[0]?.trim() ||
    realIp?.split(",")[0]?.trim() ||
    forwardedFor?.split(",").pop()?.trim();

  return candidate || request.socket?.remoteAddress?.trim() || "unknown";
};

const isRateLimited = (ip: string) => {
  const now = Date.now();

  // Vercel instances do not share memory. This is only a per-instance
  // best-effort limiter; production-wide limiting requires an external store.
  for (const [key, entry] of requestsByIp) {
    if (entry.resetAt <= now) requestsByIp.delete(key);
  }

  const current = requestsByIp.get(ip);

  if (!current || current.resetAt <= now) {
    requestsByIp.set(ip, {
      count: 1,
      resetAt: now + RATE_LIMIT_WINDOW_MS,
    });
    return false;
  }

  current.count += 1;
  return current.count > MAX_REQUESTS_PER_WINDOW;
};

export default async function handler(
  request: ContactRequestWithHttp,
  response: ContactResponse,
) {
  if (request.method === "OPTIONS") {
    return response.status(204).end();
  }

  if (request.method !== "POST") {
    return response.status(405).json({ error: "Method not allowed." });
  }

  const contentLength = Number(
    getHeader(request.headers, "content-length") ?? "0",
  );
  if (
    (Number.isFinite(contentLength) && contentLength > MAX_REQUEST_BODY_LENGTH) ||
    (!isPlainObject(request.body) && request.body !== undefined)
  ) {
    return response
      .status(
        Number.isFinite(contentLength) &&
          contentLength > MAX_REQUEST_BODY_LENGTH
          ? 413
          : 400,
      )
      .json({
        error:
          Number.isFinite(contentLength) &&
          contentLength > MAX_REQUEST_BODY_LENGTH
            ? "Request is too large."
            : "Invalid request body.",
      });
  }

  if (isRateLimited(getClientIp(request))) {
    return response
      .status(429)
      .json({ error: "Too many requests. Please try again shortly." });
  }

  if (!isPlainObject(request.body)) {
    return response.status(400).json({ error: "Invalid request body." });
  }

  const body = request.body;
  if (new TextEncoder().encode(JSON.stringify(body)).length > MAX_REQUEST_BODY_LENGTH) {
    return response.status(413).json({ error: "Request is too large." });
  }

  const allowedFields = new Set([
    "name",
    "email",
    "services",
    "budget",
    "message",
    "website",
  ]);
  if (Object.keys(body).some((field) => !allowedFields.has(field))) {
    return response.status(400).json({ error: "Invalid request body." });
  }

  const name = getString(body.name);
  const email = getString(body.email);
  const services = getString(body.services);
  const budget = getString(body.budget);
  const message = getString(body.message);

  if (
    (body.website !== undefined && typeof body.website !== "string") ||
    getString(body.website)
  ) {
    return response.status(400).json({ error: "Invalid submission." });
  }

  if (
    !name ||
    name.length > MAX_NAME_LENGTH ||
    CONTROL_CHARACTER_PATTERN.test(name) ||
    !email ||
    email.length > MAX_EMAIL_LENGTH ||
    !EMAIL_PATTERN.test(email) ||
    CONTROL_CHARACTER_PATTERN.test(email) ||
    !services ||
    services.length > MAX_SERVICES_LENGTH ||
    CONTROL_CHARACTER_PATTERN.test(services) ||
    !budget ||
    budget.length > MAX_BUDGET_LENGTH ||
    CONTROL_CHARACTER_PATTERN.test(budget) ||
    !message ||
    message.length > MAX_MESSAGE_LENGTH ||
    /[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/.test(message)
  ) {
    return response
      .status(400)
      .json({ error: "Please provide valid project details." });
  }

  const { CONTACT_EMAIL, EMAIL_FROM, RESEND_API_KEY } = process.env;
  if (!CONTACT_EMAIL || !EMAIL_FROM || !RESEND_API_KEY) {
    console.error("Contact email configuration is incomplete.");
    return response
      .status(500)
      .json({ error: "Email service is not configured." });
  }

  const safeName = escapeHtml(name);
  const safeEmail = escapeHtml(email);
  const safeServices = escapeHtml(services);
  const safeBudget = escapeHtml(budget);
  const safeMessage = escapeHtml(message).replace(/\n/g, "<br />");
  const subjectName = sanitizeSubjectName(name);

  try {
    const resend = new Resend(RESEND_API_KEY);
    const { error } = await resend.emails.send({
      from: EMAIL_FROM,
      to: CONTACT_EMAIL,
      replyTo: email,
      subject: `New Project Brief — ${subjectName}`,
      text: [
        `Name: ${name}`,
        `Email: ${email}`,
        `Services: ${services}`,
        `Budget: ${budget}`,
        "",
        message,
      ].join("\n"),
      html: `
        <h2>New Project Brief</h2>
        <p><strong>Name:</strong> ${safeName}</p>
        <p><strong>Email:</strong> ${safeEmail}</p>
        <p><strong>Services:</strong> ${safeServices}</p>
        <p><strong>Budget:</strong> ${safeBudget}</p>
        <p><strong>Message:</strong><br />${safeMessage}</p>
      `,
    });

    if (error) {
      console.error("Resend failed to send contact email.", error);
      return response
        .status(502)
        .json({ error: "We couldn't send your project brief." });
    }
  } catch (error) {
    console.error("Unexpected error while sending contact email.", error);
    return response
      .status(502)
      .json({ error: "We couldn't send your project brief." });
  }

  return response.status(200).json({ success: true });
}
