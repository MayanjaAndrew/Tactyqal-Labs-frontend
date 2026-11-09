import Image from "next/image";
import { ArrowUpRight } from "lucide-react";
import { blog } from "@/lib/content";
import { SectionHeading } from "../section-heading";

export function Blog() {
  return (
    <section id="blog" className="scroll-mt-24 w-full px-3 py-16 sm:px-6 lg:px-8 lg:py-24">
      <div className="mx-auto max-w-[1440px]">
        <SectionHeading title={blog.heading} />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {blog.posts.map((post) => (
            <article
              key={post.href}
              className="glass-panel flex flex-col overflow-hidden rounded-2xl border border-white/80 shadow-[0_12px_36px_rgba(15,23,42,0.1)] sm:rounded-3xl"
            >
              <div className="relative aspect-[16/10] bg-slate-100">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-1 flex-col p-5 sm:p-6">
                <h3 className="font-heading text-lg font-semibold text-slate-900">
                  {post.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {post.excerpt}
                </p>
                <p className="mt-3 text-xs text-slate-400">
                  By {post.author} • {post.readTime} • {post.date}
                </p>
                <a
                  href={post.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-4 inline-flex items-center gap-1 text-sm font-bold text-slate-900 underline decoration-slate-900/80 underline-offset-4 hover:text-teal-800"
                >
                  Read More
                  <ArrowUpRight className="h-3.5 w-3.5" />
                </a>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center">
          <a
            href={blog.allHref}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full bg-slate-950 px-6 py-2.5 text-sm font-semibold text-white shadow-[0_4px_16px_rgba(0,0,0,0.3)] transition-transform hover:scale-[1.04] hover:bg-black"
          >
            {blog.cta}
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </div>
    </section>
  );
}
