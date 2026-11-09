import {
  GraduationCap,
  IndianRupee,
  Infinity as InfinityIcon,
  Landmark,
  Laptop,
  Megaphone,
  Trophy,
  type LucideIcon,
} from "lucide-react";
import { whyUs } from "@/lib/content";
import { SectionHeading } from "../section-heading";

const icons: Record<(typeof whyUs.items)[number]["icon"], LucideIcon> = {
  GraduationCap,
  Laptop,
  Trophy,
  Landmark,
  IndianRupee,
  Infinity: InfinityIcon,
  Megaphone,
};

export function WhyUs() {
  return (
    <section id="why" className="scroll-mt-24 w-full px-3 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading title={whyUs.heading} />
        <div className="mb-8 overflow-hidden rounded-2xl border border-white/80 shadow-[0_12px_36px_rgba(15,23,42,0.1)] sm:rounded-3xl">
          <video
            src={whyUs.videoSrc}
            autoPlay
            loop
            muted
            playsInline
            className="aspect-[21/9] w-full object-cover"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {whyUs.items.map((item) => {
            const Icon = icons[item.icon];
            return (
              <article
                key={item.title}
                className="glass-panel rounded-2xl border border-white/80 p-6 shadow-[0_12px_36px_rgba(15,23,42,0.1)] sm:rounded-3xl"
              >
                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-2xl bg-teal-50 text-mint-dark">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="font-heading text-lg font-semibold text-slate-900">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {item.description}
                </p>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
