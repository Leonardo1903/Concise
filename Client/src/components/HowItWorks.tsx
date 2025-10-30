import { Card } from "@/components/ui/card";
import { Link2, Sparkles, FileText, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Link2,
    title: "Paste URL",
    description: "Copy any article link and paste it into Concise",
  },
  {
    icon: Sparkles,
    title: "AI Processing",
    description: "Our AI analyzes and extracts key information",
  },
  {
    icon: FileText,
    title: "Get Summary",
    description: "Receive a concise, easy-to-read summary instantly",
  },
];

export default function HowItWorks() {
  return (
    <section
      id="how-it-works"
      className="w-full border-b border-[rgba(55,50,47,0.12)] dark:border-[rgba(255,255,255,0.08)]"
    >
      <div className="container mx-auto px-6 md:px-24 py-16 md:py-20">
        <div className="text-center space-y-4 mb-16">
          <div className="px-3.5 py-1.5 bg-white dark:bg-[#2a2520] shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] dark:shadow-[0px_0px_0px_4px_rgba(255,255,255,0.05)] overflow-hidden rounded-[90px] inline-flex justify-start items-center gap-2 border border-[rgba(2,6,23,0.08)] dark:border-[rgba(255,255,255,0.12)]">
            <div className="w-3.5 h-3.5 relative overflow-hidden flex items-center justify-center">
              <Sparkles className="h-3.5 w-3.5 text-[#37322F] dark:text-[#E0DEDB]" />
            </div>
            <div className="text-center flex justify-center flex-col text-[#37322F] dark:text-[#E0DEDB] text-xs font-medium leading-3">
              How It Works
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-[#49423D] dark:text-[#E0DEDB]">
            Simple & Efficient
          </h2>
          <p className="text-base md:text-lg text-[#605A57] dark:text-[#A8A3A0] font-normal leading-7 max-w-2xl mx-auto">
            Three easy steps to transform any article into a digestible summary
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-4 items-center">
            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="flex items-center gap-4">
                  <Card className="relative overflow-hidden border border-[rgba(50,45,43,0.12)] dark:border-[rgba(255,255,255,0.12)] hover:border-[rgba(50,45,43,0.20)] dark:hover:border-[rgba(255,255,255,0.20)] transition-all duration-300 bg-white dark:bg-[#1a1918] shadow-none hover:shadow-[0px_2px_8px_rgba(50,45,43,0.08)] dark:hover:shadow-[0px_2px_8px_rgba(0,0,0,0.3)] flex-1">
                    <div className="p-8 text-center space-y-4">
                      <div className="flex justify-center items-center mb-4">
                        <div className="relative inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-[rgba(55,50,47,0.05)] dark:bg-[rgba(255,255,255,0.05)] border border-[rgba(55,50,47,0.08)] dark:border-[rgba(255,255,255,0.08)]">
                          <Icon className="h-7 w-7 text-[#37322F] dark:text-[#E0DEDB]" />
                          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-[#37322F] dark:bg-[#E0DEDB] flex items-center justify-center">
                            <span className="text-xs font-bold text-white dark:text-[#37322F]">
                              {index + 1}
                            </span>
                          </div>
                        </div>
                      </div>
                      <h3 className="text-xl font-semibold text-[#49423D] dark:text-[#E0DEDB]">
                        {step.title}
                      </h3>
                      <p className="text-sm text-[#605A57] dark:text-[#A8A3A0] leading-6">
                        {step.description}
                      </p>
                    </div>
                  </Card>
                  {index < steps.length - 1 && (
                    <ArrowRight className="hidden md:block h-8 w-8 text-[#37322F] dark:text-[#E0DEDB] shrink-0 animate-pulse" />
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Info Card */}
        <div className="max-w-3xl mx-auto mt-16">
          <Card className="border border-[rgba(50,45,43,0.12)] dark:border-[rgba(255,255,255,0.12)] bg-[rgba(55,50,47,0.02)] dark:bg-[rgba(255,255,255,0.02)] shadow-none">
            <div className="p-8 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[#37322F] dark:bg-[#E0DEDB]">
                <Sparkles className="h-5 w-5 text-white dark:text-[#37322F]" />
              </div>
              <h3 className="text-2xl font-semibold text-[#49423D] dark:text-[#E0DEDB]">
                Powered by Gemini
              </h3>
              <p className="text-sm text-[#605A57] dark:text-[#A8A3A0] leading-6 max-w-2xl mx-auto">
                Utilising the power of Google's Gemini, Concise delivers
                unparalleled accuracy and efficiency in summarising articles.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
