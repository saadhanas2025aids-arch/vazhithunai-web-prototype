import Link from 'next/link';

export function Hero() {
  return (
    <div className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient orbs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-1/4 w-96 h-96 bg-cyan-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-32 right-1/4 w-96 h-96 bg-orange-500/10 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }}></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="mb-8 inline-block">
          <div className="glass px-6 py-3 border border-cyan-500/30 rounded-full">
            <span className="text-cyan-400 text-sm font-semibold">Advanced Vehicle Safety System</span>
          </div>
        </div>

        <h1 className="text-5xl md:text-7xl font-bold mb-6 text-balance leading-tight">
          <span className="bg-gradient-to-r from-cyan-400 via-cyan-200 to-cyan-400 bg-clip-text text-transparent">
            Vazhithunai
          </span>
          <br />
          <span className="text-foreground">Collision Detection System</span>
        </h1>

        <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-12">
          Smartphone-based vehicle collision detection with real-time alerts, advanced sensor fusion, and intelligent safety protocols powered by cutting-edge technology.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <Link
            href="/dashboard"
            className="px-8 py-3 rounded-lg bg-cyan-500 text-background font-semibold hover:bg-cyan-400 transition-all glow-cyan shadow-lg"
          >
            View Dashboard
          </Link>
          <Link
            href="/collision-detection"
            className="px-8 py-3 rounded-lg border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all"
          >
            Try Simulator
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-20">
          <div className="glass-lg p-6 border border-cyan-500/20">
            <div className="text-2xl font-bold text-cyan-400 mb-2">Real-time</div>
            <p className="text-sm text-muted-foreground">Live collision detection and alerts</p>
          </div>
          <div className="glass-lg p-6 border border-orange-500/20">
            <div className="text-2xl font-bold text-orange-400 mb-2">Accurate</div>
            <p className="text-sm text-muted-foreground">98.5% detection accuracy rate</p>
          </div>
          <div className="glass-lg p-6 border border-cyan-500/20">
            <div className="text-2xl font-bold text-cyan-400 mb-2">Smart</div>
            <p className="text-sm text-muted-foreground">AI-powered threat assessment</p>
          </div>
        </div>
      </div>
    </div>
  );
}
