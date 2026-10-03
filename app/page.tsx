import Link from "next/link";
import { Mic, Flame, Sparkles } from "lucide-react";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-6 max-w-md mx-auto">
      {/* Top Bar */}
      <header className="w-full flex items-center justify-between py-4">
        <h1 className="text-2xl font-bold tracking-tight text-emerald-400">
          Habla
        </h1>
        <div className="flex items-center gap-1.5 bg-slate-800 px-3 py-1.5 rounded-full border border-slate-700">
          <Flame className="w-4 h-4 text-amber-500 fill-amber-500" />
          <span className="text-sm font-semibold text-slate-200">
            5 Day Streak
          </span>
        </div>
      </header>

      {/* Main Action Area */}
      <section className="w-full flex flex-col items-center text-center my-auto gap-6">
        <div className="space-y-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium px-2.5 py-1 rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
            <Sparkles className="w-3.5 h-3.5" /> Today's Scenario
          </span>
          <h2 className="text-3xl font-extrabold text-white">
            Ordering Coffee in Madrid
          </h2>
          <p className="text-slate-400 text-sm max-w-xs mx-auto">
            Practice ordering drinks, asking for Wi-Fi, and paying polite
            compliments.
          </p>
        </div>

        {/* Big Mic Call-to-Action */}
        <Link
          href="/talk"
          className="relative group flex items-center justify-center w-36 h-36 bg-gradient-to-br from-emerald-500 to-teal-600 rounded-full shadow-lg shadow-emerald-500/25 active:scale-95 transition-transform"
        >
          <div className="absolute inset-0 rounded-full bg-emerald-400 animate-ping opacity-20 pointer-events-none" />
          <Mic className="w-16 h-16 text-slate-950" />
        </Link>

        <p className="text-xs text-slate-500">
          Tap to start 3-min conversation
        </p>
      </section>

      {/* Footer Navigation */}
      <footer className="w-full bg-slate-800/80 backdrop-blur-md border border-slate-700/50 rounded-2xl p-4 text-center">
        <p className="text-xs text-slate-400">
          <span className="font-semibold text-emerald-400">Cognate Hint:</span>{" "}
          Coffee in Spanish is <span className="underline italic">Café</span>{" "}
          (similar to Tagalog <span className="italic">Kape</span>).
        </p>
      </footer>
    </main>
  );
}
