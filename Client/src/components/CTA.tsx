import { Button } from "./ui/button";

export default function CTA() {
  return (
    <div className="w-full relative overflow-hidden flex flex-col justify-center items-center border-b border-[rgba(55,50,47,0.12)] dark:border-[rgba(255,255,255,0.08)]">
      {/* Content */}
      <div className="w-full px-6 md:px-24 py-12 md:py-16 relative z-10">
        {/* Diagonal Pattern Background */}
        <div className="absolute inset-0 w-full h-full overflow-hidden opacity-30">
          <div className="w-full h-full relative">
            {Array.from({ length: 200 }).map((_, i) => (
              <div
                key={i}
                className="absolute h-4 w-full -rotate-45 origin-top-left outline-[0.5px] outline-[rgba(55,50,47,0.08)] dark:outline-[rgba(255,255,255,0.06)] outline-offset-[-0.25px]"
                style={{
                  top: `${i * 16 - 120}px`,
                  left: "-100%",
                  width: "300%",
                }}
              />
            ))}
          </div>
        </div>

        <div className="w-full max-w-[586px] mx-auto px-6 py-8 flex flex-col justify-start items-center gap-6 relative z-20">
          <div className="w-full flex flex-col justify-start items-start gap-3">
            <div className="w-full text-center flex justify-center flex-col text-[#49423D] dark:text-[#E0DEDB] text-3xl md:text-5xl font-semibold leading-tight md:leading-14 tracking-tight">
              Start Reading Smarter Today
            </div>
            <div className="w-full text-center text-[#605A57] dark:text-[#A8A3A0] text-base leading-7 font-medium">
              Join thousands of readers who save time with AI-powered summaries.
              <br />
              Transform the way you consume content, one article at a time.
            </div>
          </div>
          <div className="w-full max-w-[497px] flex flex-col justify-center items-center">
            <Button
              size="lg"
              className="px-12 py-1.5 relative bg-[#37322F] hover:bg-[#2A2520] dark:bg-[#E0DEDB] dark:hover:bg-white shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full"
            >
              <div className="w-full h-[41px] absolute left-0 top-0 bg-linear-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply" />
              <span className="relative z-10 text-white dark:text-[#37322F] text-[13px] font-medium leading-5">
                Get Started Now
              </span>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
