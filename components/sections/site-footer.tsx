import { Clock, Mail, Phone, Zap } from "lucide-react";
import { contact, site } from "@/lib/content";
import { BookButton } from "../book-button";

export function SiteFooter() {
  return (
    <footer id="contact" className="scroll-mt-24 w-full px-3 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <div className="glass-panel overflow-hidden rounded-2xl border border-white/80 shadow-[0_14px_40px_rgba(15,23,42,0.12)] sm:rounded-3xl lg:grid lg:grid-cols-[1.1fr_0.9fr]">
          <div className="bg-slate-950 p-8 text-white sm:p-10">
            <p className="text-xs font-bold tracking-widest text-mint uppercase">
              {contact.title}
            </p>
            <h2 className="font-heading mt-2 text-3xl font-bold">{contact.heading}</h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-300">{contact.blurb}</p>
            <ul className="mt-8 space-y-4 text-sm">
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-mint" />
                <a href={`mailto:${contact.email}`} className="hover:text-mint">
                  {contact.email}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-mint" />
                <a
                  href={`tel:${contact.phone.replace(/[^\d+]/g, "")}`}
                  className="hover:text-mint"
                >
                  {contact.phone}
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-mint" />
                {contact.hours}
              </li>
              <li className="flex items-center gap-3">
                <Zap className="h-4 w-4 text-mint" />
                {contact.responseTime}
              </li>
            </ul>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-10">
            <h3 className="font-heading text-2xl font-bold text-slate-900">
              {contact.calendarTitle}
            </h3>
            <p className="mt-2 text-sm text-slate-600">
              Pick a time that works. We’ll take it from there.
            </p>
            <BookButton showArrow className="mt-6 w-full sm:w-auto">
              {contact.calendarTitle}
            </BookButton>
            <p className="mt-8 text-xs text-slate-400">© {site.name}</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
