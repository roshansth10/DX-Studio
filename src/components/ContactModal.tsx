import React, { useState, useEffect } from 'react';
import { ThemeMode } from '../types';
import { X, Send, Check, ArrowRight } from 'lucide-react';

interface ContactModalProps {
  isOpen: boolean;
  onClose: () => void;
  theme: ThemeMode;
}

export const ContactModal: React.FC<ContactModalProps> = ({ isOpen, onClose, theme }) => {
  const [services, setServices] = useState<string[]>(['UI/UX Design']);
  const [budget, setBudget] = useState('$10k - $25k');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const availableServices = [
    'Brand & Identity',
    'UI/UX Design',
    'Web Development',
    'E-Commerce',
    'SEO & Growth',
    'Creative Technology',
  ];

  const budgetTiers = ['< $10k', '$10k - $25k', '$25k - $50k', '$50k+'];

  const toggleService = (svc: string) => {
    setServices((prev) =>
      prev.includes(svc) ? prev.filter((s) => s !== svc) : [...prev, svc]
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const isDark = theme === 'obsidian';

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-neutral-950/85 backdrop-blur-md overflow-y-auto">
      <div className="relative my-auto flex w-full max-w-2xl flex-col overflow-hidden rounded-3xl border border-neutral-800 bg-neutral-900 text-white shadow-2xl">
        {/* Header */}
        <div className="flex items-center justify-between border-b border-neutral-800 px-6 py-4">
          <div className="flex items-center gap-2">
            <span className="font-mono text-xs text-blue-500 font-bold">START A PROJECT</span>
            <span className="text-neutral-500">•</span>
            <span className="text-xs text-neutral-400">DX Studio Client Brief</span>
          </div>

          <div className="flex items-center gap-2">
            <kbd className="hidden sm:inline font-mono text-[10px] text-neutral-400 border border-neutral-700 bg-neutral-800/80 px-1.5 py-0.5 rounded">
              ESC
            </kbd>
            <button
              onClick={onClose}
              aria-label="Close dialog (Escape)"
              className="flex h-8 w-8 items-center justify-center rounded-full border border-neutral-700 bg-neutral-800 text-neutral-400 hover:text-white transition-colors"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-6 sm:p-8">
          {submitted ? (
            <div className="py-12 text-center space-y-4">
              <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-blue-600/20 text-blue-500 border border-blue-500/40">
                <Check className="h-8 w-8" />
              </div>
              <h3 className="font-heading text-2xl sm:text-3xl font-bold">Brief Received</h3>
              <p className="mx-auto max-w-md text-sm text-neutral-300">
                Thank you, {name || 'Partner'}. A senior creative director at DX Studio will review your project scope and schedule an introduction within 24 hours.
              </p>
              <button
                onClick={onClose}
                className="mt-6 rounded-full bg-blue-600 px-6 py-2.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-blue-500"
              >
                Close Window
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <h3 className="font-heading text-2xl font-bold mb-1">Let's build something exceptional.</h3>
                <p className="text-xs font-mono text-neutral-400">
                  Select your required services and outline your vision.
                </p>
              </div>

              {/* Service Selection Chips */}
              <div>
                <label className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block mb-2 font-semibold">
                  Required Capabilities
                </label>
                <div className="flex flex-wrap gap-2">
                  {availableServices.map((svc) => {
                    const isSelected = services.includes(svc);
                    return (
                      <button
                        type="button"
                        key={svc}
                        onClick={() => toggleService(svc)}
                        className={`rounded-full px-3.5 py-1.5 text-xs font-mono transition-all ${
                          isSelected
                            ? 'bg-blue-600 text-white font-bold shadow-sm'
                            : 'border border-neutral-700 bg-neutral-800/80 text-neutral-300 hover:border-neutral-500'
                        }`}
                      >
                        {svc}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Budget Tiers */}
              <div>
                <label className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block mb-2 font-semibold">
                  Estimated Budget
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                  {budgetTiers.map((tier) => (
                    <button
                      type="button"
                      key={tier}
                      onClick={() => setBudget(tier)}
                      className={`rounded-xl py-2 px-3 text-xs font-mono text-center transition-all ${
                        budget === tier
                          ? 'border border-blue-500 bg-blue-950/40 text-blue-400 font-bold'
                          : 'border border-neutral-800 bg-neutral-800/50 text-neutral-400 hover:border-neutral-700'
                      }`}
                    >
                      {tier}
                    </button>
                  ))}
                </div>
              </div>

              {/* Contact Inputs */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block mb-1">
                    Your Name
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Maya Lindqvist"
                    className="w-full rounded-xl border border-neutral-700 bg-neutral-800/80 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-blue-500 focus:outline-hidden"
                  />
                </div>
                <div>
                  <label className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block mb-1">
                    Work Email
                  </label>
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="maya@company.com"
                    className="w-full rounded-xl border border-neutral-700 bg-neutral-800/80 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-blue-500 focus:outline-hidden"
                  />
                </div>
              </div>

              <div>
                <label className="font-mono text-[11px] uppercase tracking-wider text-neutral-400 block mb-1">
                  Project Overview / Goals
                </label>
                <textarea
                  rows={3}
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Tell us about your brand, current challenges, target launch date, and key expectations..."
                  className="w-full rounded-xl border border-neutral-700 bg-neutral-800/80 px-3.5 py-2.5 text-sm text-white placeholder-neutral-500 focus:border-blue-500 focus:outline-hidden"
                />
              </div>

              {/* Submit */}
              <button
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-blue-600 py-3.5 text-xs font-bold uppercase tracking-wider text-white hover:bg-blue-500 transition-colors shadow-lg"
              >
                <span>Send Project Brief</span>
                <Send className="h-3.5 w-3.5" />
              </button>
            </form>
          )}
        </div>
      </div>
    </div>
  );
};
