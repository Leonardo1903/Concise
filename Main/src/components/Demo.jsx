import { useState, useEffect } from "react";
import { Copy, Link2, Loader, Check, X } from "lucide-react";
import { useLazyGetSummaryQuery } from "@/services/article";

export default function Demo() {
  const [article, setArticle] = useState({
    url: "",
    summary: "",
  });

  const [allArticles, setAllArticles] = useState([]);
  const [copiedUrl, setCopiedUrl] = useState(""); // <-- Add this line
  const [getSummary, { error, isFetching }] = useLazyGetSummaryQuery();

  useEffect(() => {
    const articlesFromLocalStorage = JSON.parse(
      localStorage.getItem("articles")
    );
    if (articlesFromLocalStorage) {
      setAllArticles(articlesFromLocalStorage);
    }
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
    }
    if (error) {
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

  return (
    <>
      <section className="mt-16 w-full max-w-xl">
        <div className="flex flex-col w-full gap-2">
          <form
            className="relative flex justify-center items-center"
            onSubmit={handleSubmit}
          >
            <Link2 className="absolute left-0 my-2 ml-3 w-5 h-5 text-gray-500" />
            <input
              type="url"
              placeholder="Enter a URL to summarize..."
              className="block w-full rounded-md border border-gray-200 bg-white py-2.5 pl-10 pr-12 text-sm shadow-lg font-satoshi font-medium focus:border-black focus:outline-none focus:ring-0 peer"
              value={article.url}
              onChange={(e) => setArticle({ ...article, url: e.target.value })}
              required
            />
            <button
              type="submit"
              className="absolute right-0 my-2 mr-3 rounded-md bg-black py-2.5 px-4 text-sm font-medium text-white transition-all 
              peer-focus:border-gray-700
                peer-focus
              "
            >
              <span className="flex items-center gap-2">Summarize</span>
            </button>
          </form>

          <div className="flex flex-col gap-1 max-h-60 overflow-y-auto">
            {allArticles.length > 0 &&
              allArticles.map((item, index) => (
                <div
                  key={`link-${index}`}
                  onClick={() => setArticle(item)}
                  className="flex justify-between items-center bg-white border border-gray-200 rounded-md p-2 shadow-sm"
                >
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-medium text-blue-600 hover:underline"
                  >
                    {item.url}
                  </a>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => handleCopy(e, item.url)}
                      className="text-gray-500 hover:text-gray-700 flex items-center"
                    >
                      {copiedUrl === item.url ? (
                        <Check className="w-5 h-5 text-green-500" />
                      ) : (
                        <Copy className="w-5 h-5" />
                      )}
                    </button>
                    <button
                      onClick={(e) => handleRemove(e, item.url)}
                      className="text-gray-400 hover:text-red-500 flex items-center"
                      title="Remove"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
          </div>

          <div>
            {isFetching ? (
              <div className="flex justify-center items-center">
                <Loader className="w-5 h-5 animate-spin" />
              </div>
            ) : (
              article.summary && (
                <div className="bg-white border border-gray-200 rounded-md p-4 shadow-sm">
                  <h3 className="text-lg font-semibold">Summary</h3>
                  <p className="mt-2 text-sm text-gray-700">
                    {article.summary}
                  </p>
                </div>
              )
            )}
          </div>
        </div>
      </section>
    </>
  );
}
