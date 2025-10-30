import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Globe, Download, MousePointerClick, Sparkles } from "lucide-react";

export default function ExtensionShowcase() {
  return (
    <section
      id="demo"
      className="w-full border-b border-[rgba(55,50,47,0.12)] dark:border-[rgba(255,255,255,0.08)]"
    >
      <div className="container mx-auto px-6 md:px-24 py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <div className="px-3.5 py-1.5 bg-white dark:bg-[#2a2520] shadow-[0px_0px_0px_4px_rgba(55,50,47,0.05)] dark:shadow-[0px_0px_0px_4px_rgba(255,255,255,0.05)] overflow-hidden rounded-[90px] inline-flex justify-start items-center gap-2 border border-[rgba(2,6,23,0.08)] dark:border-[rgba(255,255,255,0.12)]">
                <div className="w-3.5 h-3.5 relative overflow-hidden flex items-center justify-center">
                  <Globe className="h-3.5 w-3.5 text-[#37322F] dark:text-[#E0DEDB]" />
                </div>
                <div className="text-center flex justify-center flex-col text-[#37322F] dark:text-[#E0DEDB] text-xs font-medium leading-3">
                  Chrome Extension
                </div>
              </div>

              <h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight text-[#49423D] dark:text-[#E0DEDB]">
                Summarize Any Page With One Click
              </h2>

              <p className="text-base md:text-lg text-[#605A57] dark:text-[#A8A3A0] font-normal leading-7">
                Install our Chrome extension and get instant summaries while
                browsing. No need to copy and paste URLs — just click and read.
              </p>

              <div className="space-y-4 pt-4">
                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[#37322F] dark:bg-[#E0DEDB] flex items-center justify-center mt-1">
                    <span className="text-xs font-bold text-white dark:text-[#37322F]">
                      1
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#49423D] dark:text-[#E0DEDB] mb-1">
                      Install Extension
                    </h4>
                    <p className="text-sm text-[#605A57] dark:text-[#A8A3A0] leading-6">
                      Add Concise to your Chrome browser in seconds
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[#37322F] dark:bg-[#E0DEDB] flex items-center justify-center mt-1">
                    <span className="text-xs font-bold text-white dark:text-[#37322F]">
                      2
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#49423D] dark:text-[#E0DEDB] mb-1">
                      Browse Any Article
                    </h4>
                    <p className="text-sm text-[#605A57] dark:text-[#A8A3A0] leading-6">
                      Navigate to any article or blog post online
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="shrink-0 w-6 h-6 rounded-full bg-[#37322F] dark:bg-[#E0DEDB] flex items-center justify-center mt-1">
                    <span className="text-xs font-bold text-white dark:text-[#37322F]">
                      3
                    </span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-[#49423D] dark:text-[#E0DEDB] mb-1">
                      Click to Summarize
                    </h4>
                    <p className="text-sm text-[#605A57] dark:text-[#A8A3A0] leading-6">
                      Get an instant summary without leaving the page
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-6">
                <Button
                  size="lg"
                  className="group h-10 px-12 py-1.5 relative bg-[#37322F] hover:bg-[#2A2520] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] overflow-hidden rounded-full text-white text-[13px] font-medium leading-5 transition-all"
                  onClick={() =>
                    window.open("https://chrome.google.com/webstore", "_blank")
                  }
                >
                  <div className="w-full h-[41px] absolute left-0 top-0 bg-linear-to-b from-[rgba(255,255,255,0)] to-[rgba(0,0,0,0.10)] mix-blend-multiply pointer-events-none"></div>
                  <Download className="mr-2 h-4 w-4 relative z-10" />
                  <span className="relative z-10">
                    Add to Chrome - It's Free
                  </span>
                </Button>
              </div>
            </div>

            {/* Right Visual */}
            <div className="relative">
              {/* Browser Window Mockup */}
              <Card className="overflow-hidden border border-[rgba(50,45,43,0.12)] dark:border-[rgba(255,255,255,0.12)] shadow-[0px_8px_24px_rgba(50,45,43,0.12)] dark:shadow-[0px_8px_24px_rgba(0,0,0,0.5)]">
                {/* Browser Header */}
                <div className="bg-[rgba(55,50,47,0.03)] dark:bg-[rgba(255,255,255,0.03)] p-3 flex items-center gap-2 border-b border-[rgba(55,50,47,0.12)] dark:border-[rgba(255,255,255,0.12)]">
                  <div className="flex gap-2">
                    <div className="w-3 h-3 rounded-full bg-[#FF5F57]" />
                    <div className="w-3 h-3 rounded-full bg-[#FEBC2E]" />
                    <div className="w-3 h-3 rounded-full bg-[#28C840]" />
                  </div>
                  <div className="flex-1 mx-4 px-4 py-1.5 bg-white dark:bg-[#1a1918] rounded-md text-xs text-[#605A57] dark:text-[#A8A3A0] border border-[rgba(55,50,47,0.12)] dark:border-[rgba(255,255,255,0.12)]">
                    example.com/article
                  </div>
                </div>

                {/* Extension Popup */}
                <div className="bg-white dark:bg-[#1a1918] p-8">
                  <div className="space-y-4">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center gap-2">
                        <div className="w-8 h-8 rounded-lg bg-[#37322F] dark:bg-[#E0DEDB] flex items-center justify-center">
                          <Sparkles className="h-4 w-4 text-white dark:text-[#37322F]" />
                        </div>
                        <span className="font-semibold text-[#49423D] dark:text-[#E0DEDB]">
                          Concise
                        </span>
                      </div>
                      <Globe className="h-5 w-5 text-[#605A57] dark:text-[#A8A3A0]" />
                    </div>

                    <div className="space-y-3">
                      <div className="p-4 bg-[rgba(55,50,47,0.05)] dark:bg-[rgba(255,255,255,0.05)] rounded-lg border border-[rgba(55,50,47,0.12)] dark:border-[rgba(255,255,255,0.12)]">
                        <div className="flex items-center gap-2 mb-2">
                          <MousePointerClick className="h-4 w-4 text-[#37322F] dark:text-[#E0DEDB]" />
                          <span className="text-sm font-medium text-[#49423D] dark:text-[#E0DEDB]">
                            Current Page
                          </span>
                        </div>
                        <p className="text-xs text-[#605A57] dark:text-[#A8A3A0] leading-relaxed">
                          Click "Summarize" to get an instant summary of this
                          article
                        </p>
                      </div>

                      <Button className="w-full h-10 bg-[#37322F] hover:bg-[#2A2520] dark:bg-[#E0DEDB] dark:hover:bg-white text-white dark:text-[#37322F] shadow-[0px_0px_0px_2.5px_rgba(255,255,255,0.08)_inset] rounded-full">
                        <Sparkles className="mr-2 h-4 w-4" />
                        Summarize This Page
                      </Button>

                      <div className="p-3 bg-[rgba(55,50,47,0.03)] dark:bg-[rgba(255,255,255,0.03)] rounded-lg border border-[rgba(55,50,47,0.08)] dark:border-[rgba(255,255,255,0.08)]">
                        <p className="text-xs text-[#605A57] dark:text-[#A8A3A0] mb-2 font-medium">
                          Recent Summaries
                        </p>
                        <div className="space-y-2">
                          <div className="text-xs text-[#605A57] dark:text-[#A8A3A0] truncate">
                            • example.com/article-1
                          </div>
                          <div className="text-xs text-[#605A57] dark:text-[#A8A3A0] truncate">
                            • example.com/article-2
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>

              {/* Floating Badge */}
              <div className="absolute -top-4 -right-4 px-4 py-2 bg-[#37322F] dark:bg-[#E0DEDB] text-white dark:text-[#37322F] rounded-full shadow-lg text-sm font-semibold rotate-12">
                Free Forever
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
