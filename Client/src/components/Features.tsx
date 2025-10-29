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
    className: "md:col-span-2 md:row-span-2",
    gradient: "from-yellow-500/10 to-orange-500/10",
  },
  {
    icon: Shield,
    title: "Privacy First",
    description: "Your data stays local. We don't store your articles.",
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-blue-500/10 to-cyan-500/10",
  },
  {
    icon: History,
    title: "Local History",
    description: "Access your summaries anytime, saved in your browser.",
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-purple-500/10 to-pink-500/10",
  },
  {
    icon: Share2,
    title: "Easy Sharing",
    description: "Copy and share summaries with one click.",
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-green-500/10 to-emerald-500/10",
  },
  {
    icon: Clock,
    title: "Save Time",
    description: "Read 80% less, retain 100% of key information.",
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-rose-500/10 to-red-500/10",
  },
  {
    icon: Globe,
    title: "Universal Support",
    description: "Works with any article URL from across the web.",
    className: "md:col-span-1 md:row-span-1",
    gradient: "from-indigo-500/10 to-blue-500/10",
  },
];

export default function Features() {
  return (
    <section className="w-full py-20 md:py-32 bg-slate-50/50 dark:bg-slate-900/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/30">
            <Sparkles className="h-4 w-4 text-blue-600 dark:text-blue-400" />
            <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
              Features
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            Everything You Need
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Powerful features designed to make your reading more efficient
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 md:grid-rows-3 gap-4 max-w-6xl mx-auto auto-rows-fr">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <Card
                key={index}
                className={`${feature.className} group relative overflow-hidden border-slate-200 dark:border-slate-700/50 hover:border-slate-300 dark:hover:border-slate-600 transition-all duration-300 hover:shadow-lg dark:bg-slate-800/50`}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
                />
                <div className="relative p-6 md:p-8 h-full flex flex-col justify-between">
                  <div>
                    <div className="mb-4">
                      <div className="inline-flex p-3 rounded-xl bg-white dark:bg-slate-900 shadow-sm border border-slate-200 dark:border-slate-700">
                        <Icon className="h-6 w-6 text-blue-600 dark:text-blue-400" />
                      </div>
                    </div>
                    <h3 className="text-xl font-semibold mb-2 text-slate-900 dark:text-slate-100">
                      {feature.title}
                    </h3>
                  </div>
                  <p className="text-slate-600 dark:text-slate-300 leading-relaxed">
                    {feature.description}
                  </p>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
