"use client";

import { useEffect } from "react";
import { Mail, Phone, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { contact } from "@/lib/content";

type BookingModalProps = {
  open: boolean;
  onClose: () => void;
};

export function BookingModal({ open, onClose }: BookingModalProps) {
  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") onClose();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <div className="fixed inset-0 z-[80] flex items-center justify-center p-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-slate-950/70 backdrop-blur-md"
          />

          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 15 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 15 }}
            className="relative z-10 flex max-h-[90vh] w-full max-w-3xl flex-col overflow-hidden rounded-3xl border border-slate-100 bg-white shadow-2xl"
          >
            <div className="flex items-start justify-between gap-4 px-6 pb-3 pt-6 sm:px-8">
              <div>
                <span className="rounded-full bg-teal-50 px-2.5 py-0.5 text-xs font-bold uppercase tracking-wider text-teal-700">
                  Free consultation
                </span>
                <h3 className="mt-2 text-2xl font-bold text-slate-900">
                  {contact.calendarTitle}
                </h3>
                <p className="mt-1 text-sm text-slate-600">{contact.blurb}</p>
              </div>
              <button
                type="button"
                onClick={onClose}
                aria-label="Close booking modal"
                className="rounded-full p-2 text-slate-400 transition-colors hover:bg-slate-100 hover:text-slate-700"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="min-h-0 flex-1 overflow-y-auto px-6 pb-6 sm:px-8">
              <iframe
                src={contact.calendarUrl}
                title={contact.calendarTitle}
                className="h-[520px] w-full rounded-2xl border border-slate-200 bg-white"
              />
              <p className="mt-4 text-center text-xs text-slate-500">
                If the calendar does not load, email us or call instead.
              </p>
              <div className="mt-3 flex flex-wrap items-center justify-center gap-4 text-sm text-slate-700">
                <a
                  href={`mailto:${contact.email}`}
                  className="inline-flex items-center gap-1.5 font-medium hover:text-slate-950"
                >
                  <Mail className="h-4 w-4 text-mint-dark" />
                  {contact.email}
                </a>
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                  className="inline-flex items-center gap-1.5 font-medium hover:text-slate-950"
                >
                  <Phone className="h-4 w-4 text-mint-dark" />
                  {contact.phone}
                </a>
              </div>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
