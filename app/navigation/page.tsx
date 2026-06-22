import { Header } from '@/components/header';
import { Card } from '@/components/card';
import Link from 'next/link';

export default function NavigationPage() {
  const features = [
    {
      icon: '🏢',
      title: 'Indoor Mapping',
      description: 'High-precision indoor positioning using BLE beacons and WiFi triangulation',
    },
    {
      icon: '🧭',
      title: 'Pathfinding',
      description: 'Optimal route calculation considering obstacles and traffic patterns',
    },
    {
      icon: '🚗',
      title: 'Vehicle Guidance',
      description: 'Real-time turn-by-turn directions with hazard warnings',
    },
    {
      icon: '📡',
      title: 'Positioning',
      description: 'Centimeter-level accuracy using multi-sensor fusion',
    },
  ];

  const capabilities = [
    {
      category: 'Localization',
      items: ['GPS/GNSS', 'WiFi Fingerprinting', 'BLE Beacons', 'Inertial Measurement'],
    },
    {
      category: 'Navigation',
      items: ['Route Planning', 'Turn-by-Turn Guidance', 'Traffic Integration', 'Hazard Avoidance'],
    },
    {
      category: 'Integration',
      items: ['Map Data', 'Real-time Updates', 'Cloud Sync', 'Multi-Vehicle Coordination'],
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4 space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold mb-2">Advanced Navigation Module</h1>
            <p className="text-muted-foreground">Next-generation vehicle positioning and guidance system</p>
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, idx) => (
              <Card key={idx} glow={idx % 2 === 0 ? 'cyan' : 'orange'} className="text-center">
                <div className="text-4xl mb-3">{feature.icon}</div>
                <h3 className="font-semibold mb-2">{feature.title}</h3>
                <p className="text-sm text-muted-foreground">{feature.description}</p>
              </Card>
            ))}
          </div>

          {/* Navigation Demo */}
          <div className="glass-lg border border-cyan-500/30 p-8 rounded-lg h-96">
            <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-orange-500/5 rounded-lg"></div>
            <div className="relative z-10 h-full flex flex-col items-center justify-center">
              <div className="w-24 h-24 rounded-full bg-gradient-to-br from-cyan-400 to-cyan-500 flex items-center justify-center text-white font-bold text-2xl mb-4">
                V
              </div>
              <p className="text-foreground font-semibold mb-2">Current Location</p>
              <p className="text-muted-foreground text-sm">Downtown District, Main Street</p>
              <p className="text-orange-400 text-sm mt-6">⬆ 2.3 km to destination</p>
            </div>
          </div>

          {/* Capabilities */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Navigation Capabilities</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {capabilities.map((cap, idx) => (
                <Card key={idx} glow={idx % 2 === 0 ? 'cyan' : 'orange'} className="border border-cyan-500/20">
                  <h3 className="text-lg font-semibold mb-4 text-cyan-400">{cap.category}</h3>
                  <ul className="space-y-2">
                    {cap.items.map((item, iidx) => (
                      <li key={iidx} className="text-sm text-muted-foreground flex items-center gap-2">
                        <span className="text-orange-400">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </Card>
              ))}
            </div>
          </div>

          {/* Integration Points */}
          <div className="glass-lg border border-orange-500/30 p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-6">System Integration</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="font-semibold text-orange-400 mb-4">Data Sources</h3>
                <ul className="space-y-3">
                  {['Satellite Networks', 'Ground Infrastructure', 'Mobile Networks', 'Beacon Systems'].map((source, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <span className="w-2 h-2 bg-cyan-400 rounded-full"></span>
                      {source}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-cyan-400 mb-4">Output Channels</h3>
                <ul className="space-y-3">
                  {['Display Interface', 'Voice Guidance', 'Haptic Feedback', 'Autonomous Systems'].map((output, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm">
                      <span className="w-2 h-2 bg-orange-400 rounded-full"></span>
                      {output}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Performance Stats */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: 'Accuracy', value: '±2m', icon: '📍' },
              { label: 'Update Rate', value: '10Hz', icon: '⚡' },
              { label: 'Coverage', value: '99.9%', icon: '📡' },
              { label: 'Latency', value: '<50ms', icon: '⏱️' },
            ].map((stat, idx) => (
              <Card key={idx} className="text-center">
                <div className="text-3xl mb-2">{stat.icon}</div>
                <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                <p className="text-2xl font-bold text-cyan-400">{stat.value}</p>
              </Card>
            ))}
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-4 justify-center pt-8 border-t border-cyan-500/20">
            <Link href="/dashboard" className="px-6 py-2 rounded-lg border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all text-sm">
              Dashboard
            </Link>
            <Link href="/architecture" className="px-6 py-2 rounded-lg border border-orange-500/50 text-orange-400 hover:bg-orange-500/10 transition-all text-sm">
              System Architecture
            </Link>
            <Link href="/" className="px-6 py-2 rounded-lg border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all text-sm">
              Home
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
