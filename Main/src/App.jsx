// import "./App.css";
// import Hero from "@/components/Hero";
// import Demo from "@/components/Demo";

// function App() {
//   return (
//     <>
//       <main>
//         <div
//           className="fixed w-screen min-h-screen flex justify-center
//         pt-[120px] pb-[160px] px-6 pointer-events-none
//         before:content-[''] before:absolute before:inset-0 before:z-20
//         before:bg-[radial-gradient(circle,rgba(2,0,36,0)_0,#fafafa_100%)]
//         after:content-[''] after:absolute after:inset-0 after:z-10
//         after:bg-[url('/src/assets/grid.svg')] after:opacity-40 after:invert"
//         >
//           <div
//             className="relative z-30 w-full max-w-[640px] h-fit
//           before:content-[''] before:absolute before:inset-0
//           before:bg-[radial-gradient(at_27%_37%,_hsla(215,98%,61%,1)_0px,_transparent_0%),radial-gradient(at_97%_21%,_hsla(125,98%,72%,1)_0px,_transparent_50%),radial-gradient(at_52%_99%,_hsla(354,98%,61%,1)_0px,_transparent_50%),radial-gradient(at_10%_29%,_hsla(256,96%,67%,1)_0px,_transparent_50%),radial-gradient(at_97%_96%,_hsla(38,60%,74%,1)_0px,_transparent_50%),radial-gradient(at_33%_50%,_hsla(222,67%,73%,1)_0px,_transparent_50%),radial-gradient(at_79%_53%,_hsla(343,68%,79%,1)_0px,_transparent_50%)]
//           before:filter-[blur(100px)_saturate(150%)] before:top-20 before:opacity-15"
//           />
//         </div>

//         <div className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto sm:px-16 px-6">
//           <Hero />
//           <Demo />
//         </div>
//       </main>
//     </>
//   );
// }

// export default App;

import Hero from "@/components/Hero";
import Demo from "@/components/Demo";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Hero />
          <Demo />
        </div>

        {/* Background decoration */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -z-10 inset-0 bg-[radial-gradient(ellipse_at_top_right,theme(colors.blue.200/20),transparent_50%),radial-gradient(ellipse_at_bottom_left,theme(colors.orange.200/20),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_right,theme(colors.blue.900/20),transparent_50%),radial-gradient(ellipse_at_bottom_left,theme(colors.orange.900/20),transparent_50%)]" />
          <div className="absolute inset-0 bg-grid-slate-200/50 [mask-image:linear-gradient(to_bottom,transparent,black,transparent)] dark:bg-grid-slate-800/20" />
        </div>
      </main>
    </ThemeProvider>
  );
}
