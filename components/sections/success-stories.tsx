"use client";

import { useState } from "react";
import Image from "next/image";
import { stories, storiesHeading } from "@/lib/content";
import { SectionHeading } from "../section-heading";

function StoryCard({ story }: { story: (typeof stories)[number] }) {
  const [index, setIndex] = useState(0);

  return (
    <article className="glass-panel flex flex-col overflow-hidden rounded-2xl border border-white/80 shadow-[0_12px_36px_rgba(15,23,42,0.1)] sm:rounded-3xl">
      <div className="relative aspect-[16/10] bg-slate-100">
        <Image
          src={story.images[index]}
          alt={`${story.name} screenshot ${index + 1}`}
          fill
          sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
          className="object-cover object-top"
        />
      </div>
      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="mb-3 flex items-center gap-1.5">
          {story.images.map((_, i) => (
            <button
              key={i}
              type="button"
              aria-label={`Go to image ${i + 1}`}
              onClick={() => setIndex(i)}
              className={`h-1.5 rounded-full transition-all ${
                i === index ? "w-6 bg-slate-900" : "w-2 bg-slate-300 hover:bg-slate-400"
              }`}
            />
          ))}
        </div>
        <h3 className="font-heading text-lg font-semibold text-slate-900">{story.name}</h3>
        <p className="mt-2 text-sm leading-relaxed text-slate-600">{story.description}</p>
      </div>
    </article>
  );
}

export function SuccessStories() {
  return (
    <section id="stories" className="scroll-mt-24 w-full px-3 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading title={storiesHeading} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {stories.map((story) => (
            <StoryCard key={story.id} story={story} />
          ))}
        </div>
      </div>
    </section>
  );
}
