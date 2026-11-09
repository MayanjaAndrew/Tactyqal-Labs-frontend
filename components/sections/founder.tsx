import { founder } from "@/lib/content";
import { SectionHeading } from "../section-heading";

export function Founder() {
  return (
    <section id="founder" className="scroll-mt-24 w-full px-3 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[960px]">
        <SectionHeading title={founder.heading} description={founder.description} />
        <div className="overflow-hidden rounded-2xl border border-white/80 bg-black shadow-[0_14px_40px_rgba(15,23,42,0.16)] sm:rounded-3xl">
          <iframe
            src={founder.youtubeSrc}
            title={founder.heading}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="aspect-video w-full"
          />
        </div>
      </div>
    </section>
  );
}
