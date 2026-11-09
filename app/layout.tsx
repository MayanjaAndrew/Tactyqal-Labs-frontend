import type { Metadata } from "next";
import type { ReactNode } from "react";
import { Outfit, Plus_Jakarta_Sans } from "next/font/google";
import { BookingProvider } from "@/components/booking-provider";
import { site } from "@/lib/content";
import "./globals.css";

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

const outfit = Outfit({
  variable: "--font-outfit",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

export const metadata: Metadata = {
  title: `${site.name} — ${site.tagline}`,
  description: site.description,
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html
      lang="en"
      className={`${plusJakarta.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-canvas text-slate-900">
        <BookingProvider>{children}</BookingProvider>
      </body>
    </html>
  );
}
