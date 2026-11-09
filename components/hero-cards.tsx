"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { cta, hero, pricing, testimonials } from "@/lib/content";

export function HeroCards() {
  return (
    <section className="relative z-30 mx-auto w-full max-w-[1440px] px-3 sm:-mt-14 sm:px-6 lg:-mt-16 lg:px-8 -mt-12">
      <div className="grid w-full grid-cols-1 items-stretch gap-3 sm:gap-4 md:grid-cols-3 lg:gap-5">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="glass-panel flex min-h-[220px] flex-col justify-between rounded-2xl border border-white/80 p-6 shadow-[0_12px_36px_rgba(15,23,42,0.12)] transition-shadow duration-300 group sm:rounded-3xl sm:p-7 lg:min-h-[250px] lg:p-8 hover:shadow-[0_16px_44px_rgba(15,23,42,0.18)]"
        >
          <div className="flex flex-wrap items-center gap-2">
            <span className="rounded-full bg-mint px-3 py-1 text-[11px] font-semibold text-slate-950">
              {pricing.badgeLimited}
            </span>
            <span className="rounded-full border border-mint px-3 py-1 text-[11px] font-semibold text-mint-dark">
              {pricing.badgeGuaranteed}
            </span>
          </div>
          <div className="my-3">
            <p className="text-sm text-slate-400 line-through">{pricing.original}</p>
            <p className="font-heading text-4xl font-bold tracking-tight text-mint-dark">
              {pricing.current}
            </p>
          </div>
          <a
            href="#pricing"
            className="group/link inline-flex items-center gap-1.5 text-xs font-bold text-slate-900 underline decoration-slate-900/80 underline-offset-4 transition-colors hover:text-teal-800 hover:decoration-teal-800 sm:text-[13px]"
          >
            <span>{cta.learnMore}</span>
            <ArrowRight className="h-3.5 w-3.5 -translate-x-1 opacity-0 transition-all group-hover/link:translate-x-0 group-hover/link:opacity-100" />
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex min-h-[220px] flex-col items-center justify-center rounded-2xl border border-slate-100 bg-white p-6 text-center shadow-[0_14px_40px_rgba(15,23,42,0.15)] sm:rounded-3xl sm:p-7 lg:min-h-[250px] lg:p-8"
        >
          <h1 className="max-w-md font-heading text-xl leading-[1.2] font-bold tracking-tight text-slate-900 sm:text-2xl lg:text-[26px]">
            {hero.headline}
          </h1>
          <p className="mt-3 max-w-[340px] text-xs leading-relaxed text-slate-500 sm:text-[13px]">
            {hero.bullets.join(" • ")}
          </p>
        </motion.div>

        <motion.a
          href="#testimonials"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="glass-panel flex min-h-[220px] flex-col justify-between rounded-2xl border border-white/80 p-6 shadow-[0_12px_36px_rgba(15,23,42,0.12)] transition-shadow duration-300 sm:rounded-3xl sm:p-7 lg:min-h-[250px] lg:p-8 hover:shadow-[0_16px_44px_rgba(15,23,42,0.18)]"
        >
          <div className="flex -space-x-2.5">
            {testimonials.slice(0, 3).map((person) => (
              <Image
                key={person.name}
                src={person.avatar}
                alt={person.name}
                width={36}
                height={36}
                className="h-8 w-8 rounded-full border-2 border-white object-cover ring-1 ring-slate-200 sm:h-9 sm:w-9"
              />
            ))}
          </div>
          <div className="space-y-1 py-2">
            {hero.stats.map((stat) => (
              <p key={stat.label} className="text-sm text-slate-700">
                <span className="font-bold text-slate-900">{stat.value}</span>{" "}
                {stat.label}
              </p>
            ))}
          </div>
          <p className="text-xs text-slate-500 sm:text-[13px]">
            Real students. Real apps. See what they say.
          </p>
        </motion.a>
      </div>
    </section>
  );
}
