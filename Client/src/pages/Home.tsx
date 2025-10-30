import {
  Navbar,
  Hero,
  Features,
  HowItWorks,
  ExtensionShowcase,
} from "@/components";
import CTA from "@/components/CTA";

export default function Home() {
  return (
    <div className="min-h-screen bg-white dark:bg-[#1a1918]">
      <Navbar />

      <main className="relative pt-16">
        <Hero />
        <Features />
        <HowItWorks />
        <ExtensionShowcase />
        <CTA />
      </main>
    </div>
  );
}
