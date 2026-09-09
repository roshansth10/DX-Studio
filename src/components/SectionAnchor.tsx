import React, { useState } from 'react';
import { Hash, Check, Link2 } from 'lucide-react';

interface SectionAnchorProps {
  id: string;
  label?: string;
  className?: string;
  variant?: 'badge' | 'inline' | 'icon-only';
}

export const SectionAnchor: React.FC<SectionAnchorProps> = ({
  id,
  label,
  className = '',
  variant = 'badge',
}) => {
  const [copied, setCopied] = useState(false);

  const handleClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();

    // 1. Smooth scroll to target section with offset
    const target = document.getElementById(id);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth' });
    }

    // 2. Update address bar hash without page reload
    if (window.history.pushState) {
      window.history.pushState(null, '', `#${id}`);
    } else {
      window.location.hash = id;
    }

    // 3. Copy full URL to clipboard
    const fullUrl = `${window.location.origin}${window.location.pathname}#${id}`;
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(fullUrl).then(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 2200);
      }).catch(() => {
        setCopied(true);
        setTimeout(() => setCopied(false), 1500);
      });
    } else {
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    }
  };

  if (variant === 'icon-only') {
    return (
      <a
        href={`#${id}`}
        onClick={handleClick}
        title={copied ? `Copied direct link #${id}` : `Direct anchor to #${id} (Click to copy)`}
        aria-label={`Direct link to ${label || id} section`}
        className={`group/anchor relative inline-flex items-center justify-center h-6 w-6 rounded-md transition-all duration-200 opacity-40 hover:opacity-100 hover:text-blue-600 focus:opacity-100 focus:outline-none focus:ring-1 focus:ring-blue-500 ${className}`}
      >
        {copied ? (
          <Check className="h-3.5 w-3.5 text-emerald-500 animate-in zoom-in-75 duration-150" />
        ) : (
          <Hash className="h-3.5 w-3.5 transition-transform duration-200 group-hover/anchor:scale-110" />
        )}

        {/* Subtle hover tooltip */}
        <span className="pointer-events-none absolute left-full ml-2 hidden sm:group-hover/anchor:inline-flex items-center whitespace-nowrap rounded-md bg-neutral-900 text-white dark:bg-white dark:text-neutral-950 px-2 py-0.5 font-mono text-[10px] font-medium shadow-md transition-opacity duration-150 z-20">
          {copied ? 'Link copied!' : `#${id}`}
        </span>
      </a>
    );
  }

  // Default 'badge' variant: A refined, subtle tag that seamlessly integrates into eyebrows
  return (
    <a
      href={`#${id}`}
      onClick={handleClick}
      title={copied ? `Copied direct link to #${id}` : `Click to copy direct link to #${id}`}
      aria-label={`Anchor link to ${label || id} section`}
      className={`group/anchor inline-flex items-center gap-1.5 rounded-md px-2 py-0.5 font-mono text-[11px] font-medium transition-all duration-200 opacity-70 hover:opacity-100 hover:border-blue-500/40 hover:text-blue-600 focus:opacity-100 focus:outline-none ${
        copied
          ? 'bg-emerald-500/10 text-emerald-600 border border-emerald-500/30'
          : 'theme-text-subtle hover:bg-blue-500/5'
      } ${className}`}
    >
      {copied ? (
        <>
          <Check className="h-3 w-3 text-emerald-600 animate-in zoom-in-75 duration-150" />
          <span className="text-[10px] text-emerald-600 font-semibold">Copied #{id}</span>
        </>
      ) : (
        <>
          <span className="opacity-60 group-hover/anchor:opacity-100 group-hover/anchor:text-blue-600 transition-colors">
            #
          </span>
          <span className="group-hover/anchor:underline underline-offset-2">
            {id}
          </span>
          <Link2 className="h-2.5 w-2.5 opacity-0 -translate-x-1 group-hover/anchor:opacity-80 group-hover/anchor:translate-x-0 transition-all duration-200 text-blue-600" />
        </>
      )}
    </a>
  );
};
