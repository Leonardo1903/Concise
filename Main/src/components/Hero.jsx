// import Logo from "@/assets/logo.png";

// export default function Hero() {
//   return (
//     <>
//       <header className="w-full flex justify-center items-center flex-col">
//         <nav className="flex justify-between items-center w-full mb-10 pt-3">
//           <img src={Logo} alt="Logo" className="w-28 object-contain" />
//           <button
//             type="button"
//             onClick={() => window.open("")}
//             className="rounded-full border border-black bg-black py-1.5 px-5 text-sm text-white transition-all hover:bg-white hover:text-black"
//           >
//             Github
//           </button>
//         </nav>

//         <h1 className="mt-5 text-5xl font-extrabold leading-[1.15] text-black sm:text-6xl text-center;">
//           Summarize Articles with
//           <br className="max-md:hidden" />
//           <span className="bg-gradient-to-r from-amber-500 via-orange-600 to-yellow-500 bg-clip-text text-transparent">
//             OpenAI GPT-4
//           </span>
//         </h1>
//         <h2 className="mt-5 text-lg text-gray-600 sm:text-xl text-center max-w-2xl">
//           Simplify your reading with our intelligent summarizer that transforms
//           lengthy articles into clear and concise summaries
//         </h2>
//       </header>
//     </>
//   );
// }

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
          onClick={() => window.open("https://github.com")}
        >
          <Github className="h-4 w-4" />
          <span>GitHub</span>
        </Button>
      </nav>

      <div className="text-center space-y-4 max-w-3xl">
        <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight text-navy-900 dark:text-white">
          Summarize Articles with{" "}
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 via-blue-600 to-orange-500">
            OpenAI GPT-4
          </span>
        </h1>
        <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Simplify your reading with our intelligent summarizer that transforms
          lengthy articles into clear and concise summaries
        </p>
      </div>
    </header>
  );
}
