"use client";

import type { ReactNode } from "react";
import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { useBooking } from "./booking-provider";

type BookButtonProps = {
  children: ReactNode;
  className?: string;
  showArrow?: boolean;
  variant?: "primary" | "mint";
};

export function BookButton({
  children,
  className = "",
  showArrow = false,
  variant = "primary",
}: BookButtonProps) {
  const { openBooking } = useBooking();

  const styles =
    variant === "mint"
      ? "bg-mint text-slate-950 hover:bg-teal-300"
      : "bg-slate-950 hover:bg-black text-white shadow-[0_4px_16px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_24px_rgba(0,0,0,0.4)]";

  return (
    <motion.button
      type="button"
      onClick={openBooking}
      whileHover={{ scale: 1.04, y: -1 }}
      whileTap={{ scale: 0.96 }}
      className={`group inline-flex items-center justify-center gap-1.5 rounded-full px-6 py-2.5 text-sm font-semibold tracking-normal transition-colors cursor-pointer ${styles} ${className}`}
    >
      <span>{children}</span>
      {showArrow && (
        <ArrowUpRight className="h-3.5 w-3.5 opacity-80 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
      )}
    </motion.button>
  );
}
