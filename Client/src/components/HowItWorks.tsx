import { Card } from "@/components/ui/card";
import { Link2, Sparkles, FileText, ArrowRight } from "lucide-react";

const steps = [
  {
    icon: Link2,
    title: "Paste URL",
    description: "Copy any article link and paste it into Concise",
    color: "text-blue-600 dark:text-blue-400",
    bgColor: "bg-blue-100 dark:bg-blue-950/50",
  },
  {
    icon: Sparkles,
    title: "AI Processing",
    description: "Our AI analyzes and extracts key information",
    color: "text-purple-600 dark:text-purple-400",
    bgColor: "bg-purple-100 dark:bg-purple-950/50",
  },
  {
    icon: FileText,
    title: "Get Summary",
    description: "Receive a concise, easy-to-read summary instantly",
    color: "text-orange-600 dark:text-orange-400",
    bgColor: "bg-orange-100 dark:bg-orange-950/50",
  },
];

export default function HowItWorks() {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-950/50 border border-orange-200 dark:border-orange-800">
            <Sparkles className="h-4 w-4 text-orange-600 dark:text-orange-400" />
            <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
              How It Works
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
            Simple & Efficient
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Three easy steps to transform any article into a digestible summary
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">
            {/* Connection Lines (Desktop) */}
            <div className="hidden md:block absolute top-20 left-1/4 right-1/4 h-0.5 bg-linear-to-r from-blue-200 via-purple-200 to-orange-200 dark:from-blue-900 dark:via-purple-900 dark:to-orange-900" />

            {steps.map((step, index) => {
              const Icon = step.icon;
              return (
                <div key={index} className="relative">
                  <Card className="relative overflow-hidden border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700 transition-all duration-300 hover:shadow-lg group">
                    <div className="p-8 text-center space-y-4">
                      {/* Step Number */}
                      <div className="flex justify-center items-center mb-4">
                        <div className={`relative inline-flex items-center justify-center w-16 h-16 rounded-2xl ${step.bgColor}`}>
                          <Icon className={`h-8 w-8 ${step.color}`} />
                          <div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white dark:bg-slate-900 border-2 border-slate-200 dark:border-slate-800 flex items-center justify-center">
                            <span className="text-xs font-bold text-slate-700 dark:text-slate-300">
                              {index + 1}
                            </span>
                          </div>
                        </div>
                      </div>

                      <h3 className="text-xl font-semibold text-slate-900 dark:text-white">
                        {step.title}
                      </h3>
                      <p className="text-slate-600 dark:text-slate-400 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </Card>

                  {/* Arrow (Mobile) */}
                  {index < steps.length - 1 && (
                    <div className="md:hidden flex justify-center my-4">
                      <ArrowRight className="h-6 w-6 text-slate-300 dark:text-slate-700 rotate-90" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

        {/* Info Card */}
        <div className="max-w-3xl mx-auto mt-16">
          <Card className="border-blue-200 dark:border-blue-800 bg-linear-to-br from-blue-50 to-blue-100 dark:from-blue-950/30 dark:to-blue-900/30">
            <div className="p-8 text-center space-y-4">
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-blue-600 dark:bg-blue-500">
                <Sparkles className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-white">
                Powered by Advanced AI
              </h3>
              <p className="text-slate-700 dark:text-slate-300 max-w-2xl mx-auto">
                Concise uses state-of-the-art natural language processing to understand context,
                identify key points, and generate accurate summaries that preserve the essence
                of the original article.
              </p>
            </div>
          </Card>
        </div>
      </div>
    </section>
  );
}
