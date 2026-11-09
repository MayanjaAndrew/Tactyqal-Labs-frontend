import {
  FileText,
  Globe,
  Handshake,
  Lightbulb,
  Scale,
  Search,
  TrendingUp,
  Users,
  ArrowUpRight,
  type LucideIcon,
} from "lucide-react";
import { tools } from "@/lib/content";
import { SectionHeading } from "../section-heading";

const icons: Record<(typeof tools.items)[number]["icon"], LucideIcon> = {
  Lightbulb,
  TrendingUp,
  Users,
  FileText,
  Search,
  Handshake,
  Scale,
  Globe,
};

export function Tools() {
  return (
    <section id="tools" className="scroll-mt-24 w-full px-3 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading title={tools.heading} description={tools.subheading} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {tools.items.map((tool) => {
            const Icon = icons[tool.icon];
            return (
              <a
                key={tool.title}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-panel group flex items-start gap-3 rounded-2xl border border-white/80 p-5 shadow-[0_12px_36px_rgba(15,23,42,0.1)] transition-all hover:-translate-y-0.5 hover:shadow-[0_16px_44px_rgba(15,23,42,0.16)] sm:rounded-3xl"
              >
                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-teal-50 text-mint-dark">
                  <Icon className="h-5 w-5" />
                </div>
                <div className="min-w-0">
                  <p className="font-heading text-sm font-semibold text-slate-900">
                    {tool.title}
                  </p>
                  <span className="mt-1 inline-flex items-center gap-1 text-xs font-medium text-slate-500 group-hover:text-mint-dark">
                    Open tool
                    <ArrowUpRight className="h-3 w-3" />
                  </span>
                </div>
              </a>
            );
          })}
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href={tools.allHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-950 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-transform hover:scale-[1.04] hover:bg-black"
          >
            {tools.cta}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
