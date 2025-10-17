import { useState, useEffect } from "react";
import {
  Copy,
  Link2,
  Loader2,
  Check,
  ExternalLink,
  Trash2,
  X,
} from "lucide-react";
import { useLazyGetSummaryQuery } from "@/services/article";
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

export default function Demo() {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [allArticles, setAllArticles] = useState([]);
  const [copiedUrl, setCopiedUrl] = useState("");
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles") || "[]"
    );
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const sharedUrl = params.get("url");
    if (!sharedUrl) return;

    const existing = allArticles.find((item) => item.url === sharedUrl);

    if (existing) {
      setArticle(existing);
    } else {
      const fetchSummary = async () => {
        const { data } = await getSummary({ articleUrl: sharedUrl });
        if (data?.summary) {
          const newArticle = { url: sharedUrl, summary: data.summary };
          const updatedArticles = [newArticle, ...allArticles];
          setArticle(newArticle);
          setAllArticles(updatedArticles);
          localStorage.setItem("articles", JSON.stringify(updatedArticles));
        } else if (error) {
          alert("Failed to fetch summary. Please try again.");
        }
      };

      setArticle({ url: sharedUrl, summary: "" });
      fetchSummary();
    }

    params.delete("url");
    const newUrl =
      window.location.pathname +
      (params.toString() ? "?" + params.toString() : "");
    window.history.replaceState({}, "", newUrl);
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { data } = await getSummary({ articleUrl: article.url });

    if (data?.summary) {
      const newArticle = { ...article, summary: data.summary };
      const updatedArticles = [newArticle, ...allArticles];
      setArticle(newArticle);
      setAllArticles(updatedArticles);
      localStorage.setItem("articles", JSON.stringify(updatedArticles));
    } else if (error) {
      alert("Error fetching summary. Please try again.");
    }
  };

  const handleCopy = (e, url) => {
    e.stopPropagation();
    navigator.clipboard.writeText(url);
    setCopiedUrl(url);
    setTimeout(() => setCopiedUrl(""), 1500);
  };

  const handleRemove = (e, url) => {
    e.stopPropagation();
    const updatedArticles = allArticles.filter((item) => item.url !== url);
    setAllArticles(updatedArticles);
    localStorage.setItem("articles", JSON.stringify(updatedArticles));
    if (article.url === url) {
      setArticle({ url: "", summary: "" });
    }
  };

  const getDomainFromUrl = (url) => {
    try {
      const domain = new URL(url).hostname.replace("www.", "");
      return domain;
    } catch (error) {
      return url;
    }
  };

  return (
    <section className="w-full max-w-xl mx-auto">
      <Card className="border-0 shadow-lg bg-white/80 backdrop-blur-sm dark:bg-slate-900/80">
        <CardHeader className="pb-2">
          <CardTitle className="text-xl">Article Summarizer</CardTitle>
          <CardDescription>
            Enter a URL to an article you want to summarize
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <form
            className="relative flex justify-center items-center"
            onSubmit={handleSubmit}
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
                disabled={isFetching}
              />
              <Button
                type="submit"
                className="absolute right-1 top-1 bottom-1 bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white"
                disabled={isFetching}
              >
                {isFetching ? (
                  <Loader2 className="h-4 w-4 animate-spin" />
                ) : (
                  "Summarize"
                )}
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
                                onClick={(e) => handleCopy(e, item.url)}
                              >
                                {copiedUrl === item.url ? (
                                  <Check className="h-4 w-4 text-green-500" />
                                ) : (
                                  <Copy className="h-4 w-4 text-slate-500" />
                                )}
                              </Button>
                            </TooltipTrigger>
                            <TooltipContent>
                              {copiedUrl === item.url ? "Copied!" : "Copy URL"}
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
                                onClick={(e) => handleRemove(e, item.url)}
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

          {isFetching ? (
            <Card className="border border-slate-200 dark:border-slate-700 shadow-sm">
              <CardContent className="p-8 flex justify-center items-center">
                <div className="flex flex-col items-center gap-2">
                  <Loader2 className="h-8 w-8 text-blue-500 animate-spin" />
                  <p className="text-sm text-slate-500 dark:text-slate-400">
                    Generating summary...
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : article.summary ? (
            <Card className="border border-slate-200 dark:border-slate-700 shadow-sm relative">
              <CardHeader className="pb-2 flex flex-row items-start justify-between">
                <div className="flex flex-col gap-1">
                  <CardTitle className="text-lg flex items-center gap-2">
                    <span>Summary</span>
                    {article.url && (
                      <a
                        href={article.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center text-xs font-normal text-blue-500 hover:text-blue-600"
                      >
                        <ExternalLink className="h-3 w-3 mr-1" />
                        View Original
                      </a>
                    )}
                  </CardTitle>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-7 w-7 text-slate-400 hover:text-red-500"
                  onClick={() => setArticle({ url: "", summary: "" })}
                  aria-label="Close summary"
                >
                  <X className="h-5 w-5" />
                </Button>
              </CardHeader>
              <CardContent>
                <div className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                  {article.summary}
                </div>
              </CardContent>
            </Card>
          ) : null}
        </CardContent>
      </Card>
    </section>
  );
}
