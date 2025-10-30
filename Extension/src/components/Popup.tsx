import { useState } from "react";
import { ExternalLink, Loader2 } from "lucide-react";
import Logo from "../assets/logo.png";

export default function Popup() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);

    if (typeof window !== "undefined" && window.chrome && window.chrome.tabs) {
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
    <div className="p-5 w-72 bg-background">
      <div className="flex flex-col items-center space-y-4">
        {/* Logo */}
        <div className="flex items-center justify-center mb-1">
          <img
            src={Logo}
            alt="Concise Logo"
            className="w-28 object-contain mb-2"
          />
        </div>

        <div className="w-full bg-card rounded-lg shadow-sm border border-border p-4">
          <h2 className="text-card-foreground font-medium text-sm mb-2">
            Current Page
          </h2>
          <p className="text-muted-foreground text-xs mb-4">
            Click the button below to generate a concise summary of this
            article.
          </p>

          <button
            onClick={handleClick}
            disabled={isLoading}
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 px-4 rounded-md flex items-center justify-center transition-all disabled:opacity-50"
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

        <div className="text-xs text-muted-foreground text-center">
          Powered by Gemini
        </div>
      </div>
    </div>
  );
}
