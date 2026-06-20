import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Problem } from "@/components/Problem";
import { Why } from "@/components/Why";
import { Solution } from "@/components/Solution";
import { Proof } from "@/components/Proof";
import { Pricing } from "@/components/Pricing";
import { FAQ } from "@/components/FAQ";
import { FinalCta } from "@/components/FinalCta";
import { Footer } from "@/components/Footer";
import { MobileCtaBar } from "@/components/MobileCtaBar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Problem />
        <Why />
        <Solution />
        <Proof />
        <Pricing />
        <FAQ />
        <FinalCta />
      </main>
      <Footer />
      <MobileCtaBar />
    </>
  );
}
