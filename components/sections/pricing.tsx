import { Check } from "lucide-react";
import { cta, pricing } from "@/lib/content";
import { BookButton } from "../book-button";
import { SectionHeading } from "../section-heading";

export function Pricing() {
  return (
    <section id="pricing" className="scroll-mt-24 w-full px-3 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading title={pricing.heading} />
        <div className="mx-auto max-w-md">
          <div className="glass-panel rounded-2xl border border-white/80 p-8 text-center shadow-[0_14px_40px_rgba(15,23,42,0.14)] sm:rounded-3xl">
            <p className="text-base text-slate-400 line-through">{pricing.original}</p>
            <p className="font-heading text-5xl font-bold tracking-tight text-mint-dark">
              {pricing.current}
            </p>
            <ul className="mt-6 space-y-3 text-left">
              {pricing.features.map((feature) => (
                <li key={feature} className="flex items-start gap-2 text-sm text-slate-700">
                  <Check className="mt-0.5 h-4 w-4 shrink-0 text-mint-dark" />
                  {feature}
                </li>
              ))}
            </ul>
            <p className="mt-6 text-sm font-semibold text-mint-dark">{pricing.moneyBack}</p>
            <p className="mt-2 text-sm font-bold text-orange-500">{pricing.spots}</p>
            <BookButton className="mt-6 w-full" showArrow>
              {cta.enroll}
            </BookButton>
          </div>
        </div>
      </div>
    </section>
  );
}
