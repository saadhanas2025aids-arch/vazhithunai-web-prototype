'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/dashboard', label: 'Dashboard' },
    { href: '/collision-detection', label: 'Simulator' },
    { href: '/alerts', label: 'Alerts' },
    { href: '/architecture', label: 'Architecture' },
    { href: '/navigation', label: 'Navigation' },
    { href: '/future', label: 'Roadmap' },
  ];

  return (
    <header className="sticky top-0 z-50 glass-lg border-b border-cyan-500/20 backdrop-blur-xl">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between gap-8">
          <Link href="/" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center text-white font-bold text-lg group-hover:shadow-lg glow-cyan transition-all">
              V
            </div>
            <div>
              <div className="text-lg font-bold text-cyan-400">Vazhithunai</div>
              <div className="text-xs text-muted-foreground">Vehicle Safety</div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-1">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className={`px-4 py-2 rounded-lg text-sm transition-all ${
                  pathname === item.href
                    ? 'text-cyan-400 bg-cyan-400/10 border border-cyan-500/30'
                    : 'text-foreground hover:text-cyan-400 hover:bg-cyan-400/5'
                }`}
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:flex gap-2">
            <button className="px-4 py-2 rounded-lg border border-cyan-500/30 text-cyan-400 hover:bg-cyan-400/10 transition-all text-sm">
              Status: Online
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
