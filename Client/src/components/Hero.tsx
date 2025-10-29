import { Button } from "@/components/ui/button";
import { ArrowRight, Chrome, Sparkles } from "lucide-react";

export default function Hero() {
  const scrollToDemo = () => {
    const demoSection = document.getElementById("demo");
    demoSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative w-full py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              AI-Powered Summarization
            </span>
          </div>

          {/* Main Headline */}
          <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold tracking-tight">
            Read Less,
            <br />
            <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-600 via-blue-500 to-orange-500">
              Learn More
            </span>
          </h1>

          {/* Subheadline */}
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-400 max-w-2xl">
            Transform lengthy articles into clear, concise summaries in seconds.
            Powered by advanced AI for smarter reading.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button
              size="lg"
              className="group bg-linear-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-6 text-lg"
              onClick={scrollToDemo}
            >
              Try it Now
              <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="group border-2 px-8 py-6 text-lg"
              onClick={() => window.open("https://chrome.google.com/webstore", "_blank")}
            >
              <Chrome className="mr-2 h-5 w-5" />
              Get Extension
            </Button>
          </div>

          {/* Stats */}
          <div className="flex flex-wrap justify-center gap-8 pt-8 text-sm text-slate-600 dark:text-slate-400">
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">
                &lt;10s
              </span>
              <span>Average Time</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">
                100+
              </span>
              <span>Articles Summarized</span>
            </div>
            <div className="flex flex-col items-center">
              <span className="text-2xl font-bold text-slate-900 dark:text-white">
                Free
              </span>
              <span>Forever</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
