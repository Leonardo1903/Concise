import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Chrome, Download, MousePointerClick, Sparkles } from "lucide-react";

export default function ExtensionShowcase() {
  return (
    <section className="w-full py-20 md:py-32 bg-gradient-to-br from-blue-50 via-slate-50 to-orange-50 dark:from-blue-950/20 dark:via-slate-900 dark:to-orange-950/20">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 dark:bg-blue-950/50 border border-blue-200 dark:border-blue-800">
                <Chrome className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                <span className="text-sm font-medium text-blue-700 dark:text-blue-300">
                  Chrome Extension
                </span>
              </div>

              <h2 className="text-4xl md:text-5xl font-bold tracking-tight">
                Summarize Any Page
                <br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-orange-500">
                  With One Click
                </span>
              </h2>

              <p className="text-xl text-slate-600 dark:text-slate-400 leading-relaxed">
                Install our Chrome extension and get instant summaries while browsing.
                No need to copy and paste URLs — just click and read.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center mt-1">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">1</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      Install Extension
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Add Concise to your Chrome browser in seconds
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center mt-1">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">2</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      Browse Any Article
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Navigate to any article or blog post online
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 dark:bg-blue-950/50 flex items-center justify-center mt-1">
                    <span className="text-xs font-bold text-blue-600 dark:text-blue-400">3</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-slate-900 dark:text-white mb-1">
                      Click to Summarize
                    </h4>
                    <p className="text-slate-600 dark:text-slate-400">
                      Get an instant summary without leaving the page
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  size="lg"
                  className="group bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-700 hover:to-blue-600 text-white px-8 py-6 text-lg"
                  onClick={() => window.open("https://chrome.google.com/webstore", "_blank")}
                >
                  <Download className="mr-2 h-5 w-5" />
                  Add to Chrome - It's Free
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              {/* Browser Window Mockup */}
              <Card className="overflow-hidden border-2 border-slate-300 dark:border-slate-700 shadow-2xl">
                {/* Browser Header */}
                <div className="bg-slate-200 dark:bg-slate-800 p-3 flex items-center gap-2 border-b border-slate-300 dark:border-slate-700">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-red-500" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500" />
                    <div className="w-3 h-3 rounded-full bg-green-500" />
                  </div>
                  <div className="flex-1 mx-4 px-4 py-1.5 bg-white dark:bg-slate-900 rounded-md text-xs text-slate-500 dark:text-slate-400">
                    example.com/article
                  </div>
                </div>

                {/* Extension Popup */}
                <div className="bg-gradient-to-br from-white to-slate-50 dark:from-slate-900 dark:to-slate-950 p-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-orange-500 flex items-center justify-center">
                          <Sparkles className="h-4 w-4 text-white" />
                        </div>
                        <span className="font-semibold text-slate-900 dark:text-white">
                          Concise
                        </span>
                      </div>
                      <Chrome className="h-5 w-5 text-slate-400" />
                    </div>

                    <div className="space-y-3">
                      <div className="p-4 bg-blue-50 dark:bg-blue-950/30 rounded-lg border border-blue-200 dark:border-blue-800">
                        <div className="flex items-center gap-2 mb-2">
                          <MousePointerClick className="h-4 w-4 text-blue-600 dark:text-blue-400" />
                          <span className="text-sm font-medium text-blue-900 dark:text-blue-100">
                            Current Page
                          </span>
                        </div>
                        <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                          Click "Summarize" to get an instant summary of this article
                        </p>
                      </div>

                      <Button className="w-full bg-gradient-to-r from-blue-600 to-blue-500 text-white">
                        <Sparkles className="mr-2 h-4 w-4" />
                        Summarize This Page
                      </Button>

                      <div className="p-3 bg-slate-100 dark:bg-slate-800 rounded-lg">
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">
                          Recent Summaries
                        </p>
                        <div className="space-y-2">
                          <div className="text-xs text-slate-500 dark:text-slate-500 truncate">
                            • example.com/article-1
                          </div>
                          <div className="text-xs text-slate-500 dark:text-slate-500 truncate">
                            • example.com/article-2
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-orange-500 text-white rounded-full shadow-lg text-sm font-semibold rotate-12">
                Free Forever
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
