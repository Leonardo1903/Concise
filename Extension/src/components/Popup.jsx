import { useState } from "react";
import { ExternalLink, Loader2 } from "lucide-react";
import Logo from "../assets/logo.png";

export default function Popup() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    if (window !== "undefined" && window.chrome && window.chrome.tabs) {
      window.chrome.tabs.query(
        { active: true, currentWindow: true },
        (tabs) => {
          const tab = tabs[0];
          if (tab && tab.url) {
            const url = encodeURIComponent(tab.url);
            const summarizerUrl = `https://concise-iota.vercel.app/?url=${url}`;
            window.chrome.tabs.create({ url: summarizerUrl });
            setIsLoading(false);
          }
        }
      );
    } else {
      alert("Chrome API is not available.");
      setIsLoading(false);
    }
  };

  return (
    <div className="p-5 w-72 bg-gradient-to-b from-slate-50 to-slate-100">
      <div className="flex flex-col items-center space-y-4">
        {/* Logo */}
        <div className="flex items-center justify-center mb-1">
          <img
            src={Logo}
            alt="Concise Logo"
            className="w-28 object-contain mb-2"
          />
        </div>

        <div className="w-full bg-white rounded-lg shadow-sm border border-slate-200 p-4">
          <h2 className="text-navy-900 font-medium text-sm mb-2">
            Current Page
          </h2>
          <p className="text-slate-500 text-xs mb-4">
            Click the button below to generate a concise summary of this
            article.
          </p>

          <button
            onClick={handleClick}
            disabled={isLoading}
            className="w-full bg-gradient-to-r from-blue-500 to-orange-500 hover:from-blue-600 hover:to-orange-600 text-white font-medium py-2.5 px-4 rounded-md flex items-center justify-center transition-all"
          >
            {isLoading ? (
              <>
                <Loader2 className="h-4 w-4 animate-spin mr-2" />
                Processing...
              </>
            ) : (
              <>
                <ExternalLink className="h-4 w-4 mr-2" />
                Summarize This Page
              </>
            )}
          </button>
        </div>

        <div className="text-xs text-slate-500 text-center">
          Powered by OpenAI GPT-4
        </div>
      </div>
    </div>
  );
}
