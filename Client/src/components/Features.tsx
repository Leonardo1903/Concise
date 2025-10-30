import { Card } from "@/components/ui/card";
import {
  Zap,
  Shield,
  History,
  Share2,
  Globe,
  Sparkles,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Get summaries in under 10 seconds. No waiting, just instant results.",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays local. We don't store your articles.",
  },
  {
    icon: History,
    title: "Local History",
    description: "Access your summaries anytime, saved in your browser.",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Copy and share summaries with one click.",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Read 80% less, retain 100% of key information.",
  },
  {
    icon: Globe,
    title: "Universal Support",
    description: "Works with any article URL from across the web.",
  },
];

export default function Features() {
  return (
    <section
      id="features"
      className="w-full border-b border-[rgba(55,50,47,0.12)] dark:border-[rgba(255,255,255,0.08)]"
    >
      <div className="container mx-auto px-6 md:px-24 py-16 md:py-20">
        <div className="text-center space-y-4 mb-16">
          <div className="px-3.5 py-1.5 bg-white dark:bg-[#2a2520] shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] dark:shadow-[0px_0px_0px_4px_rgba(255,255,255,0.05)] overflow-hidden rounded-[90px] inline-flex justify-start items-center gap-2 border border-[rgba(2,6,23,0.08)] dark:border-[rgba(255,255,255,0.12)]">
            <div className="w-3.5 h-3.5 relative overflow-hidden flex items-center justify-center">
              <Sparkles className="h-3.5 w-3.5 text-[#37322F] dark:text-[#E0DEDB]" />
            </div>
            <div className="text-center flex justify-center flex-col text-[#37322F] dark:text-[#E0DEDB] text-xs font-medium leading-3">
              Features
            </div>
          </div>
          <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-[#49423D] dark:text-[#E0DEDB]">
            Everything You Need
          </h2>
          <p className="text-base md:text-lg text-[#605A57] dark:text-[#A8A3A0] font-normal leading-7 max-w-2xl mx-auto">
            Powerful features designed to make your reading more efficient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className="group relative overflow-hidden border border-[rgba(50,45,43,0.12)] dark:border-[rgba(255,255,255,0.12)] hover:border-[rgba(50,45,43,0.20)] dark:hover:border-[rgba(255,255,255,0.20)] transition-all duration-300 bg-white dark:bg-[#1a1918] shadow-none hover:shadow-[0px_2px_8px_rgba(50,45,43,0.08)] dark:hover:shadow-[0px_2px_8px_rgba(0,0,0,0.3)]"
              >
                <div className="relative p-6 flex flex-col gap-4">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-[rgba(55,50,47,0.05)] dark:bg-[rgba(255,255,255,0.05)] border border-[rgba(55,50,47,0.08)] dark:border-[rgba(255,255,255,0.08)] self-start">
                    <Icon className="h-5 w-5 text-[#37322F] dark:text-[#E0DEDB]" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-semibold text-[#49423D] dark:text-[#E0DEDB]">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-[#605A57] dark:text-[#A8A3A0] leading-6">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
