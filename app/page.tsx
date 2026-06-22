import { Header } from '@/components/header';
import { Hero } from '@/components/hero';
import Link from 'next/link';

function FeaturesSection() {
  const features = [
    {
      title: 'Real-Time Detection',
      description: 'Instant collision detection using smartphone sensors and computer vision',
      icon: '🎯',
    },
    {
      title: 'Smart Algorithms',
      description: 'Advanced ML models predict potential collisions before they happen',
      icon: '⚡',
    },
    {
      title: 'Multi-Sensor Fusion',
      description: 'Combines accelerometer, gyroscope, GPS, and camera data',
      icon: '🔄',
    },
    {
      title: 'Emergency Alerts',
      description: 'Instant notifications and emergency contact triggers',
      icon: '🚨',
    },
    {
      title: 'Driver Analytics',
      description: 'Detailed reports on driving behavior and safety metrics',
      icon: '📊',
    },
    {
      title: 'Cloud Integration',
      description: 'Secure data sync and centralized analytics dashboard',
      icon: '☁️',
    },
  ];

  return (
    <section className="py-24 border-t border-cyan-500/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-4">Key Features</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Comprehensive vehicle safety system with cutting-edge technology
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, idx) => (
            <div key={idx} className="glass-lg p-6 hover:border-cyan-500/50 transition-all group">
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">{feature.icon}</div>
              <h3 className="text-lg font-semibold mb-2 text-cyan-400">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function TechStackSection() {
  return (
    <section className="py-24 border-t border-cyan-500/20">
      <div className="container mx-auto px-4">
        <div className="glass-lg p-12 border border-cyan-500/30">
          <h2 className="text-3xl font-bold mb-8 text-center">Technology Stack</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: 'Sensor Fusion', value: 'Multi-Source' },
              { label: 'Processing', value: 'Real-Time ML' },
              { label: 'Architecture', value: 'Distributed' },
              { label: 'Accuracy', value: '98.5%' },
            ].map((item, idx) => (
              <div key={idx}>
                <div className="text-2xl font-bold text-orange-400">{item.value}</div>
                <p className="text-xs text-muted-foreground mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-24 border-t border-cyan-500/20">
      <div className="container mx-auto px-4">
        <div className="glass-lg p-12 border border-orange-500/30 rounded-xl text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Enhance Vehicle Safety?</h2>
          <p className="text-muted-foreground max-w-xl mx-auto mb-8">
            Experience the future of collision detection and vehicle safety monitoring
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/dashboard"
              className="px-8 py-3 rounded-lg bg-cyan-500 text-background font-semibold hover:bg-cyan-400 transition-all"
            >
              Launch Dashboard
            </Link>
            <Link
              href="/collision-detection"
              className="px-8 py-3 rounded-lg border border-orange-500/50 text-orange-400 hover:bg-orange-500/10 transition-all"
            >
              Try Simulator
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="relative">
        <Hero />
        <FeaturesSection />
        <TechStackSection />
        <CTASection />

        <footer className="border-t border-cyan-500/20 py-12">
          <div className="container mx-auto px-4 text-center text-muted-foreground text-sm">
            <p>Vazhithunai - Advanced Vehicle Safety System © 2024</p>
            <p className="mt-2">Smartphone-based collision detection powered by AI</p>
          </div>
        </footer>
      </main>
    </>
  );
}
