import { program } from "@/lib/content";
import { BookButton } from "../book-button";
import { SectionHeading } from "../section-heading";

export function Program() {
  return (
    <section id="program" className="scroll-mt-24 w-full px-3 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading title={program.heading} />
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {program.weeks.map((week, index) => (
            <div
              key={week.id}
              className="glass-panel rounded-2xl border border-white/80 p-6 shadow-[0_12px_36px_rgba(15,23,42,0.1)] sm:rounded-3xl"
            >
              <p className="text-xs font-bold tracking-widest text-mint-dark uppercase">
                {week.label}
              </p>
              <p className="mt-3 font-heading text-xl font-semibold text-slate-900">
                {week.title}
              </p>
              <p className="mt-4 text-3xl font-bold text-slate-200">{index + 1}</p>
            </div>
          ))}
        </div>

        <blockquote className="glass-panel mt-8 rounded-2xl border-l-4 border-mint p-6 sm:rounded-3xl sm:p-8">
          <p className="font-heading text-lg font-medium text-slate-900 italic sm:text-xl">
            “{program.quote}”
          </p>
          <footer className="mt-3 text-sm font-semibold text-slate-500">
            — {program.quoteAuthor}
          </footer>
        </blockquote>

        <div className="mt-8 flex flex-col items-center gap-3 text-center">
          <p className="text-sm font-medium text-slate-700 sm:text-base">
            {program.sessions}
          </p>
          <p className="text-sm font-semibold text-mint-dark">{program.outcomes}</p>
          <BookButton showArrow className="mt-2">
            {program.cta}
          </BookButton>
        </div>
      </div>
    </section>
  );
}
