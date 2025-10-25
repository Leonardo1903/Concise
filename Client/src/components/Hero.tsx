import { Button } from "@/components/ui/button";
import { Github } from "lucide-react";
import Logo from "@/assets/logo.png";

export default function Hero() {
  return (
    <header className="w-full flex justify-center items-center flex-col mb-8">
      <nav className="flex justify-between items-center w-full mb-10 pt-3">
        <div className="flex items-center">
          <img src={Logo} alt="Concise Logo" className=" w-28 object-contain" />
        </div>
        <Button
          variant="outline"
          size="sm"
          className="gap-2 transition-all border-blue-600 text-blue-600 hover:bg-blue-50 hover:text-blue-700"
          onClick={() => window.open("https://github.com/Leonardo1903/Concise")}
        >
          <Github className="h-4 w-4" />
          <span>GitHub</span>
        </Button>
      </nav>
      <div className="text-center space-y-6 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-navy-900 dark:text-white">
          Read Less, Learn More.
          <br className="hidden sm:block" />
          <span className="bg-clip-text text-transparent bg-linear-to-r from-blue-500 via-blue-600 to-orange-500">
            Instant Article Summaries
          </span>
        </h1>
        <p className="text-lg sm:text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Paste any article link and get a clear, concise summary in seconds.
          <br className="hidden sm:block" />
          Powered by advanced AI for smarter, faster reading.
        </p>
      </div>
    </header>
  );
}
