import React, { useState } from "react";
import { STORE_INFO } from "../data/luxecartData";
import { Mail, Phone, MapPin, Send, Clock } from "lucide-react";

export const ContactPage: React.FC = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "Order Inquiry",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  return (
    <main className="min-h-screen bg-neutral-950 text-white pt-28 pb-24 px-4 sm:px-6 lg:px-8 font-body">
      <div className="max-w-7xl mx-auto space-y-16">
        {/* Hero Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <span className="font-mono text-xs font-bold uppercase tracking-[0.25em] text-red-500">
            FLAGSHIP BOUTIQUE & CONCIERGE
          </span>
          <h1 className="font-heading text-4xl sm:text-6xl font-bold tracking-tight">
            Get in Touch
          </h1>
          <p className="text-neutral-400 text-base sm:text-lg leading-relaxed font-light">
            Whether you have a question about an order, a piece you're considering, or a membership inquiry, our team is here to help.
          </p>
        </div>

        {/* 3 Contact Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          <div className="p-8 bg-neutral-900 border border-neutral-800 space-y-4 hover:border-neutral-700 transition-colors">
            <div className="w-10 h-10 border border-red-600/40 flex items-center justify-center text-red-500">
              <Mail className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white">Email</h3>
            <a
              href={`mailto:${STORE_INFO.email}`}
              className="text-white font-mono text-xs sm:text-sm block hover:text-red-500 transition-colors"
            >
              {STORE_INFO.email}
            </a>
            <p className="text-xs text-neutral-500 font-mono">Response within 24 hours</p>
          </div>

          <div className="p-8 bg-neutral-900 border border-neutral-800 space-y-4 hover:border-neutral-700 transition-colors">
            <div className="w-10 h-10 border border-red-600/40 flex items-center justify-center text-red-500">
              <Phone className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white">Phone</h3>
            <span className="text-white font-mono text-xs sm:text-sm block">{STORE_INFO.phone}</span>
            <p className="text-xs text-neutral-500 font-mono">{STORE_INFO.hours}</p>
          </div>

          <div className="p-8 bg-neutral-900 border border-neutral-800 space-y-4 hover:border-neutral-700 transition-colors">
            <div className="w-10 h-10 border border-red-600/40 flex items-center justify-center text-red-500">
              <MapPin className="w-5 h-5 stroke-[1.5]" />
            </div>
            <h3 className="font-heading text-xl font-bold text-white">Flagship Location</h3>
            <span className="text-white font-mono text-xs sm:text-sm block">{STORE_INFO.address}</span>
            <p className="text-xs text-neutral-500 font-mono">Walk-in & VIP Appointments</p>
          </div>
        </div>

        {/* Location & Map Block */}
        <div className="bg-neutral-900 border border-neutral-800 p-8 sm:p-12 space-y-6">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-neutral-800 pb-6">
            <div>
              <span className="font-mono text-xs uppercase tracking-widest text-red-500">
                STORE LOCATION
              </span>
              <h2 className="font-heading text-2xl font-bold text-white mt-1">
                LuxeCart — Durbar Marg, Kathmandu
              </h2>
              <p className="text-xs text-neutral-400 font-mono mt-1">
                {STORE_INFO.address} • Phone: {STORE_INFO.phone}
              </p>
            </div>
            <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
              <Clock className="w-4 h-4 text-red-500" />
              <span>Open Today: 9:00 AM – 6:00 PM NPT</span>
            </div>
          </div>

          {/* Styled Map Card */}
          <div className="relative aspect-[21/9] sm:aspect-[24/9] w-full rounded-none overflow-hidden bg-neutral-950 border border-neutral-800 flex items-center justify-center text-center p-6">
            <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:16px_16px]" />
            <div className="relative z-10 space-y-2">
              <div className="w-12 h-12 rounded-full bg-red-600/20 text-red-500 flex items-center justify-center mx-auto border border-red-600/40">
                <MapPin className="w-6 h-6" />
              </div>
              <h4 className="font-heading text-lg font-bold text-white">
                Visit Our Durbar Marg Boutique
              </h4>
              <p className="text-xs text-neutral-400 font-mono max-w-md">
                Located in the heart of Kathmandu's luxury retail district, opposite Kings Way. Private concierge parking available.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form Section */}
        <div className="max-w-3xl mx-auto bg-neutral-900 border border-neutral-800 p-8 sm:p-12">
          {formSubmitted ? (
            <div className="text-center space-y-4 py-8">
              <div className="w-16 h-16 bg-red-600/20 text-red-500 flex items-center justify-center mx-auto border border-red-600/40">
                <Send className="w-8 h-8 stroke-[1.5]" />
              </div>
              <h3 className="font-heading text-2xl font-bold">Message Received</h3>
              <p className="text-neutral-300 text-sm max-w-md mx-auto font-light">
                Thank you for reaching out to LuxeCart Concierge in Durbar Marg. A member of our team will respond to your inquiry within 24 hours.
              </p>
              <button
                onClick={() => setFormSubmitted(false)}
                className="mt-4 px-6 py-2.5 bg-neutral-800 hover:bg-neutral-700 text-xs font-mono uppercase tracking-wider text-white"
              >
                Send Another Message
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <h2 className="font-heading text-2xl sm:text-3xl font-bold mb-6">
                Send a Message
              </h2>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="Aarav Sharma"
                    className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:border-red-600 focus:outline-none min-h-[44px]"
                  />
                </div>

                <div className="space-y-2">
                  <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300">
                    Your Email *
                  </label>
                  <input
                    type="email"
                    required
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="isabella@example.com"
                    className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:border-red-600 focus:outline-none min-h-[44px]"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300">
                  Subject *
                </label>
                <select
                  value={formData.subject}
                  onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                  className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white focus:border-red-600 focus:outline-none min-h-[44px]"
                >
                  <option value="Order Inquiry">Order Inquiry</option>
                  <option value="Product Question">Product Question</option>
                  <option value="Membership">Membership</option>
                  <option value="Press">Press</option>
                  <option value="Other">Other</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="block text-xs font-mono uppercase tracking-wider text-neutral-300">
                  Message *
                </label>
                <textarea
                  required
                  rows={5}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="How can our concierge team assist you today?"
                  className="w-full bg-neutral-950 border border-neutral-800 px-4 py-3 text-sm text-white placeholder-neutral-600 focus:border-red-600 focus:outline-none"
                />
              </div>

              <button
                type="submit"
                className="w-full bg-red-600 hover:bg-red-700 text-white font-bold font-mono text-xs uppercase tracking-[0.2em] py-4 transition-all duration-300 min-h-[48px] cursor-pointer shadow-lg active:scale-95 flex items-center justify-center gap-2"
              >
                <span>Submit Inquiry</span>
                <Send className="w-4 h-4 stroke-[1.5]" />
              </button>

              <div className="pt-4 text-center border-t border-neutral-800">
                <p className="text-xs text-neutral-400 font-mono">
                  For press inquiries, please reach out to{" "}
                  <a
                    href={`mailto:${STORE_INFO.pressEmail}`}
                    className="text-red-500 hover:underline"
                  >
                    {STORE_INFO.pressEmail}
                  </a>
                  .
                </p>
              </div>
            </form>
          )}
        </div>
      </div>
    </main>
  );
};
