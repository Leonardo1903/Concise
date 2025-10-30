import { Button } from "@/components/ui/button";
import { ArrowRight, Download, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToDemo = () => {
    const demoSection = document.getElementById("demo");
    demoSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full border-b border-[rgba(55,50,47,0.12)] dark:border-[rgba(255,255,255,0.08)]">
      <div className="container mx-auto px-6 md:px-24 py-16 md:py-24">
        <div className="flex flex-col items-center text-center space-y-6 max-w-[680px] mx-auto">
          {/* Badge */}
          <div className="px-3.5 py-1.5 bg-white dark:bg-[#2a2520] shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] dark:shadow-[0px_0px_0px_4px_rgba(255,255,255,0.05)] overflow-hidden rounded-[90px] flex justify-start items-center gap-2 border border-[rgba(2,6,23,0.08)] dark:border-[rgba(255,255,255,0.12)]">
            <div className="w-3.5 h-3.5 relative overflow-hidden flex items-center justify-center">
              <Sparkles className="h-3.5 w-3.5 text-[#37322F] dark:text-[#E0DEDB]" />
            </div>
            <div className="text-center flex justify-center flex-col text-[#37322F] dark:text-[#E0DEDB] text-xs font-medium leading-3">
              AI-Powered Summarization
            </div>
          </div>

          {/* Main Headline */}
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold leading-tight md:leading-[60px] tracking-tight text-[#49423D] dark:text-[#E0DEDB]">
            Read Less, Learn More
          </h1>

          {/* Subheadline */}
          <p className="text-base md:text-lg text-[#605A57] dark:text-[#A8A3A0] font-normal leading-7 max-w-2xl">
            Transform lengthy articles into clear, concise summaries in seconds.
            <br className="hidden md:block" />
            Powered by advanced AI for smarter reading.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="group h-10 px-12 py-1.5 relative bg-[#37322F] hover:bg-[#2A2520] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full text-white text-[13px] font-medium leading-5 transition-all"
              onClick={scrollToDemo}
            >
              <div className="w-full h-[41px] absolute left-0 top-0 bg-linear-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply pointer-events-none"></div>
              <span className="relative z-10">Try it Now</span>
              <ArrowRight className="ml-2 h-4 w-4 relative z-10 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="h-10 px-12 py-1.5 border border-[rgba(55,50,47,0.12)] dark:border-[rgba(255,255,255,0.12)] text-[#37322F] dark:text-[#E0DEDB] rounded-full text-[13px] font-medium leading-5 hover:bg-[rgba(55,50,47,0.05)] dark:hover:bg-[rgba(255,255,255,0.05)] transition-all"
              onClick={() =>
                window.open("https://chrome.google.com/webstore", "_blank")
              }
            >
              <Download className="mr-2 h-4 w-4" />
              Get Extension
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-12 pt-12 border-t border-[rgba(55,50,47,0.12)] dark:border-[rgba(255,255,255,0.08)] w-full max-w-md mt-8">
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-semibold text-[#49423D] dark:text-[#E0DEDB] tracking-tight">
                &lt;10s
              </span>
              <span className="text-sm text-[#605A57] dark:text-[#A8A3A0] font-medium">
                Average Time
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-semibold text-[#49423D] dark:text-[#E0DEDB] tracking-tight">
                100+
              </span>
              <span className="text-sm text-[#605A57] dark:text-[#A8A3A0] font-medium">
                Articles Processed
              </span>
            </div>
            <div className="flex flex-col items-center gap-1">
              <span className="text-3xl font-semibold text-[#49423D] dark:text-[#E0DEDB] tracking-tight">
                Free
              </span>
              <span className="text-sm text-[#605A57] dark:text-[#A8A3A0] font-medium">
                Forever
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
