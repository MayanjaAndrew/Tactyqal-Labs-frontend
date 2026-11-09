import Image from "next/image";
import { testimonials } from "@/lib/content";
import { SectionHeading } from "../section-heading";

export function Testimonials() {
  return (
    <section
      id="testimonials"
      className="scroll-mt-24 w-full px-3 py-16 sm:px-6 lg:px-8 lg:py-24"
    >
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading title="What Our Students Say" />
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="glass-panel rounded-2xl border border-white/80 p-6 shadow-[0_12px_36px_rgba(15,23,42,0.1)] sm:rounded-3xl"
            >
              <div className="mb-4 flex items-center gap-3">
                <Image
                  src={item.avatar}
                  alt={item.name}
                  width={48}
                  height={48}
                  className="h-12 w-12 rounded-full object-cover ring-2 ring-white"
                />
                <h3 className="font-heading font-semibold text-slate-900">{item.name}</h3>
              </div>
              <p className="text-sm leading-relaxed text-slate-600">“{item.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
