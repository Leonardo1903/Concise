export default function Popup() {
  const handleClick = () => {
    if (typeof window !== "undefined" && window.chrome && window.chrome.tabs) {
      window.chrome.tabs.query(
        { active: true, currentWindow: true },
        (tabs) => {
          const tab = tabs[0];
          if (tab && tab.url) {
            const url = encodeURIComponent(tab.url);
            const summarizerUrl = `https://concise-iota.vercel.app/?url=${url}`;
            window.chrome.tabs.create({ url: summarizerUrl });
          }
        }
      );
    } else {
      alert("Chrome API is not available.");
    }
  };

  return (
    <div className="p-4 w-64">
      <h1 className="text-xl font-bold mb-4">AI Article Summarizer</h1>
      <button
        onClick={handleClick}
        className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-2 px-4 rounded"
      >
        Summarize This Page
      </button>
    </div>
  );
}
