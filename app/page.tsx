import { HeroCards } from "@/components/hero-cards";
import { HeroVideo } from "@/components/hero-video";
import { Navbar } from "@/components/navbar";
import { Blog } from "@/components/sections/blog";
import { Faq } from "@/components/sections/faq";
import { Founder } from "@/components/sections/founder";
import { Pricing } from "@/components/sections/pricing";
import { Program } from "@/components/sections/program";
import { SiteFooter } from "@/components/sections/site-footer";
import { SuccessStories } from "@/components/sections/success-stories";
import { Testimonials } from "@/components/sections/testimonials";
import { Tools } from "@/components/sections/tools";
import { WhyUs } from "@/components/sections/why-us";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col items-center bg-canvas pb-16 selection:bg-mint selection:text-white">
      <div className="sticky top-0 z-50 w-full bg-canvas/80 backdrop-blur-xl">
        <div className="mx-auto w-full max-w-[1440px] px-3 sm:px-6 lg:px-8">
          <Navbar />
        </div>
      </div>

      <header
        id="home"
        className="flex w-full max-w-[1440px] flex-col gap-3 px-3 pt-3 sm:gap-4 sm:px-6 sm:pt-4 lg:px-8"
      >
        <div className="relative aspect-video min-h-[380px] max-h-[720px] w-full overflow-hidden rounded-2xl bg-black shadow-2xl sm:min-h-[460px] sm:rounded-3xl md:min-h-[520px] lg:min-h-[580px]">
          <HeroVideo />
        </div>
      </header>

      <HeroCards />
      <SuccessStories />
      <Program />
      <WhyUs />
      <Founder />
      <Tools />
      <Testimonials />
      <Blog />
      <Pricing />
      <Faq />
      <SiteFooter />
    </div>
  );
}
