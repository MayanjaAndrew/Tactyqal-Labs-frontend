"use client";

import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { navItems, site } from "@/lib/content";
import { BookButton } from "./book-button";
import { cta } from "@/lib/content";

export function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeNav, setActiveNav] = useState<string>("");

  useEffect(() => {
    const sectionIds = navItems.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    if (elements.length === 0) return;

    const onScroll = () => {
      const fromTop = 140;
      let current = "";
      for (const el of elements) {
        if (el.getBoundingClientRect().top - fromTop <= 0) {
          current = el.id;
        }
      }
      setActiveNav(current);
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleNavClick = (id: string) => {
    setActiveNav(id);
    setMobileOpen(false);
  };

  return (
    <nav className="relative z-40 w-full px-2 py-2 sm:px-4 sm:py-3">
      <div className="flex w-full items-center justify-between">
        <a
          href="#home"
          className="group flex items-center gap-2 text-slate-800 transition-colors hover:text-slate-950"
        >
          <span className="relative flex h-5 w-5 items-center justify-center">
            <span className="h-[18px] w-[18px] rounded-[3px] border-[1.75px] border-slate-800 transition-transform group-hover:scale-105" />
          </span>
          <span className="font-heading text-lg font-bold tracking-tight sm:text-xl">
            {site.name}
          </span>
        </a>

        <div className="hidden items-center gap-7 md:flex lg:gap-10">
          {navItems.map((item) => {
            const isActive = activeNav === item.id;
            return (
              <a
                key={item.id}
                href={item.href}
                onClick={() => handleNavClick(item.id)}
                className={`relative cursor-pointer py-1 text-sm tracking-normal transition-colors duration-200 ${
                  isActive
                    ? "font-semibold text-slate-950"
                    : "font-medium text-slate-700 hover:text-slate-950"
                }`}
              >
                {item.label}
                {isActive && (
                  <motion.div
                    layoutId="activeNavIndicator"
                    className="absolute -bottom-1 right-0 left-0 h-[2px] rounded-full bg-slate-900"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </a>
            );
          })}
        </div>

        <div className="hidden md:flex">
          <BookButton showArrow>{cta.book}</BookButton>
        </div>

        <button
          type="button"
          onClick={() => setMobileOpen((open) => !open)}
          aria-label="Toggle navigation menu"
          className="rounded-lg border border-slate-300 bg-white/60 p-2 text-slate-800 backdrop-blur-md transition-colors hover:bg-white md:hidden"
        >
          {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -10, scale: 0.98 }}
            className="mx-auto mt-3 rounded-2xl border border-slate-200 bg-white/95 p-5 shadow-2xl backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col gap-3">
              {navItems.map((item) => (
                <a
                  key={item.id}
                  href={item.href}
                  onClick={() => handleNavClick(item.id)}
                  className="rounded-xl px-4 py-2.5 text-left text-base font-medium text-slate-700 transition-colors hover:bg-slate-100 hover:text-slate-950"
                >
                  {item.label}
                </a>
              ))}
              <div className="border-t border-slate-200 pt-2">
                <BookButton className="w-full">{cta.book}</BookButton>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
