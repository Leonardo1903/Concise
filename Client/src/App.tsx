import Hero from "@/components/Hero";
import Demo from "@/components/Demo";
import { ThemeProvider } from "@/components/theme-provider";

export default function Home() {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <main className="min-h-screen bg-linear-to-b from-slate-50 to-slate-100 dark:from-slate-950 dark:to-slate-900">
        <div className="relative z-10 flex justify-center items-center flex-col max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <Hero />
          <Demo />
        </div>

        {/* Background decoration */}
        <div className="fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -z-10 inset-0 bg-[radial-gradient(ellipse_at_top_right,--theme(--color-blue-200/20),transparent_50%),radial-gradient(ellipse_at_bottom_left,--theme(--color-orange-200/20),transparent_50%)] dark:bg-[radial-gradient(ellipse_at_top_right,--theme(--color-blue-900/20),transparent_50%),radial-gradient(ellipse_at_bottom_left,--theme(--color-orange-900/20),transparent_50%)]" />
          <div className="absolute inset-0 bg-grid-slate-200/50 mask-[linear-gradient(to_bottom,transparent,black,transparent)] dark:bg-grid-slate-800/20" />
        </div>
      </main>
    </ThemeProvider>
  );
}
