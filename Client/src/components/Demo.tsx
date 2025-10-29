import { useState, useEffect } from "react";
import { Copy, Link2, Check, Trash2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

interface Article {
  url: string;
  summary: string;
}

export default function Demo() {
  const [article, setArticle] = useState<Article>({
    url: "",
    summary: "",
  });

  const [allArticles, setAllArticles] = useState<Article[]>([]);
  const copiedUrl = "";

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles") || "[]"
    );
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  // const handleSubmit = async (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const { data } = await getSummary({ articleUrl: article.url });

  //   if (data?.summary) {
  //     const newArticle = { ...article, summary: data.summary };
  //     const updatedArticles = [newArticle, ...allArticles];
  //     setArticle(newArticle);
  //     setAllArticles(updatedArticles);
  //     localStorage.setItem("articles", JSON.stringify(updatedArticles));
  //   } else if (error) {
  //     alert("Error fetching summary. Please try again.");
  //   }
  // };

  // const handleCopy = (e: React.MouseEvent, url: string) => {
  //   e.stopPropagation();
  //   navigator.clipboard.writeText(url);
  //   setCopiedUrl(url);
  //   setTimeout(() => setCopiedUrl(""), 1500);
  // };

  // const handleRemove = (e: React.MouseEvent, url: string) => {
  //   e.stopPropagation();
  //   const updatedArticles = allArticles.filter((item) => item.url !== url);
  //   setAllArticles(updatedArticles);
  //   localStorage.setItem("articles", JSON.stringify(updatedArticles));
  //   if (article.url === url) {
  //     setArticle({ url: "", summary: "" });
  //   }
  // };

  const getDomainFromUrl = (url: string) => {
    try {
      const domain = new URL(url).hostname.replace("www.", "");
      return domain;
    } catch {
      return url;
    }
  };

  return (
    <section id="demo" className="w-full py-20 md:py-32 scroll-mt-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-50 dark:bg-orange-500/10 border border-orange-200 dark:border-orange-500/30">
            <Sparkles className="h-4 w-4 text-orange-600 dark:text-orange-400" />
            <span className="text-sm font-medium text-orange-700 dark:text-orange-300">
              Try It Now
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold tracking-tight text-slate-900 dark:text-slate-100">
            See It In Action
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-2xl mx-auto">
            Paste any article URL below and experience the magic of instant
            summarization
          </p>
        </div>

        {/* Demo Component Code */}
        <div className="w-full max-w-xl mx-auto">
          <Card className="border-slate-200 dark:border-slate-700/50 shadow-lg bg-white/80 backdrop-blur-sm dark:bg-slate-800/80">
            <CardHeader className="pb-2">
              <CardTitle className="text-xl">Article Summarizer</CardTitle>
              <CardDescription>
                Enter a URL to an article you want to summarize
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form
                className="relative flex justify-center items-center"
                // onSubmit={handleSubmit}
              >
                <div className="relative w-full">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <Link2 className="h-4 w-4 text-slate-400" />
                  </div>
                  <Input
                    type="url"
                    placeholder="Enter a URL to summarize..."
                    className="pl-10 pr-20 py-6 border-slate-200 dark:border-slate-700 focus-visible:ring-blue-500"
                    value={article.url}
                    onChange={(e) =>
                      setArticle({ ...article, url: e.target.value })
                    }
                    required
                  />
                  <Button
                    type="submit"
                    className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white"
                  >
                    Summarize
                  </Button>
                </div>
              </form>

              {allArticles.length > 0 && (
                <div className="mt-4">
                  <h3 className="text-sm font-medium text-slate-500 dark:text-slate-400 mb-2">
                    History
                  </h3>
                  <ScrollArea className="h-[180px] rounded-md border border-slate-200 dark:border-slate-700 p-2">
                    <div className="space-y-2">
                      {allArticles.map((item, index) => (
                        <div
                          key={`link-${index}`}
                          onClick={() => setArticle(item)}
                          className={`flex justify-between items-center rounded-md p-2 transition-colors cursor-pointer ${
                            article.url === item.url
                              ? "bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800"
                              : "hover:bg-slate-50 dark:hover:bg-slate-800/50 border border-transparent"
                          }`}
                        >
                          <div className="flex items-center gap-2 overflow-hidden">
                            <Badge
                              variant="outline"
                              className="shrink-0 bg-orange-100 text-orange-700 hover:bg-orange-100 border-orange-200 dark:bg-orange-900/30 dark:text-orange-400 dark:border-orange-800"
                            >
                              {getDomainFromUrl(item.url)}
                            </Badge>
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-sm text-slate-600 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 truncate"
                              onClick={(e) => e.stopPropagation()}
                            >
                              {item.url.length > 32
                                ? item.url.slice(0, 32) + "..."
                                : item.url}
                            </a>
                          </div>
                          <div className="flex items-center gap-1 shrink-0">
                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8"
                                    // onClick={(e) => handleCopy(e, item.url)}
                                  >
                                    {copiedUrl === item.url ? (
                                      <Check className="h-4 w-4 text-green-500" />
                                    ) : (
                                      <Copy className="h-4 w-4 text-slate-500" />
                                    )}
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>
                                  {copiedUrl === item.url
                                    ? "Copied!"
                                    : "Copy URL"}
                                </TooltipContent>
                              </Tooltip>
                            </TooltipProvider>

                            <TooltipProvider>
                              <Tooltip>
                                <TooltipTrigger asChild>
                                  <Button
                                    variant="ghost"
                                    size="icon"
                                    className="h-8 w-8 text-slate-500 hover:text-red-500"
                                    // onClick={(e) => handleRemove(e, item.url)}
                                  >
                                    <Trash2 className="h-4 w-4" />
                                  </Button>
                                </TooltipTrigger>
                                <TooltipContent>Remove</TooltipContent>
                              </Tooltip>
                            </TooltipProvider>
                          </div>
                        </div>
                      ))}
                    </div>
                  </ScrollArea>
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
