import { TopBar } from "@/components/TopBar";
import { Hero } from "@/components/Hero";
import { Process } from "@/components/Process";
import { About } from "@/components/About";
import { Testimonials } from "@/components/Testimonials";
import { CtaCircles } from "@/components/CtaCircles";
import { SuccessStories } from "@/components/SuccessStories";
import { Faq } from "@/components/Faq";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Page() {
  return (
    <main className="bg-cream text-ink">
      <TopBar />
      <Hero />
      <Process />
      <About />
      <Testimonials />
      <CtaCircles />
      <SuccessStories />
      <Faq />
      <Contact />
      <Footer />
    </main>
  );
}
