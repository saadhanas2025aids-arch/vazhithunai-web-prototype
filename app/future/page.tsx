import { Header } from '@/components/header';
import { Card } from '@/components/card';
import Link from 'next/link';

export default function FuturePage() {
  const features = [
    {
      title: 'V2V Communication',
      description: 'Vehicle-to-Vehicle wireless communication for real-time threat sharing',
      status: 'planned',
      timeline: '2025 Q2',
      impact: 'High',
    },
    {
      title: 'Autonomous Response',
      description: 'Automatic evasive maneuvers without driver intervention',
      status: 'planned',
      timeline: '2025 Q3',
      impact: 'Critical',
    },
    {
      title: 'AI-Powered Analytics',
      description: 'Advanced machine learning for predictive maintenance and risk assessment',
      status: 'in-development',
      timeline: '2025 Q1',
      impact: 'High',
    },
    {
      title: 'Multi-Modal Sensors',
      description: 'Integration with LIDAR, Radar, and Thermal imaging',
      status: 'in-development',
      timeline: '2025 Q2',
      impact: 'Critical',
    },
    {
      title: 'Cloud Integration',
      description: 'Real-time data sync with cloud analytics platform',
      status: 'development',
      timeline: '2024 Q4',
      impact: 'Medium',
    },
    {
      title: 'AR Safety Alerts',
      description: 'Augmented Reality display for hazard visualization',
      status: 'planned',
      timeline: '2026 Q1',
      impact: 'High',
    },
    {
      title: 'Insurance Integration',
      description: 'Direct integration with insurance providers for claims',
      status: 'planned',
      timeline: '2025 Q4',
      impact: 'Medium',
    },
    {
      title: 'Fleet Management',
      description: 'Multi-vehicle fleet tracking and management dashboard',
      status: 'planned',
      timeline: '2026 Q1',
      impact: 'High',
    },
  ];

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'in-development':
        return { bg: 'bg-orange-500/10', border: 'border-orange-500/30', text: 'text-orange-400' };
      case 'planned':
        return { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400' };
      case 'development':
        return { bg: 'bg-yellow-500/10', border: 'border-yellow-500/30', text: 'text-yellow-400' };
      default:
        return { bg: 'bg-cyan-500/10', border: 'border-cyan-500/30', text: 'text-cyan-400' };
    }
  };

  const getImpactColor = (impact: string) => {
    switch (impact) {
      case 'Critical':
        return 'text-red-400';
      case 'High':
        return 'text-orange-400';
      case 'Medium':
        return 'text-yellow-400';
      default:
        return 'text-cyan-400';
    }
  };

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4 space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold mb-2">Future Roadmap</h1>
            <p className="text-muted-foreground">Upcoming features and enhancements for Vazhithunai</p>
          </div>

          {/* Roadmap Timeline */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold">Development Timeline</h2>
            <div className="glass-lg border border-cyan-500/30 p-8 rounded-lg">
              <div className="flex items-center justify-between mb-8">
                {['2024 Q4', '2025 Q1', '2025 Q2', '2025 Q3', '2026'].map((quarter, idx) => (
                  <div key={idx} className="text-center flex-1">
                    <p className="text-sm font-semibold text-cyan-400">{quarter}</p>
                    <div className="w-2 h-2 bg-cyan-400 rounded-full mx-auto mt-2"></div>
                  </div>
                ))}
              </div>
              <div className="w-full h-1 bg-gradient-to-r from-cyan-500 to-orange-500 rounded-full"></div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="space-y-6">
            <h2 className="text-xl font-semibold">Planned Features</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {features.map((feature, idx) => {
                const statusColor = getStatusColor(feature.status);
                const impactColor = getImpactColor(feature.impact);

                return (
                  <Card
                    key={idx}
                    glow={idx % 2 === 0 ? 'cyan' : 'orange'}
                    className={`border ${statusColor.border}`}
                  >
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold flex-1">{feature.title}</h3>
                      <span className={`text-xs px-2 py-1 rounded-full whitespace-nowrap ml-2 ${statusColor.bg} ${statusColor.text}`}>
                        {feature.status}
                      </span>
                    </div>

                    <p className="text-sm text-muted-foreground mb-4">{feature.description}</p>

                    <div className="flex items-center justify-between text-xs">
                      <div className="flex items-center gap-4">
                        <span className="text-muted-foreground">
                          <span className="text-cyan-400 font-semibold">{feature.timeline}</span>
                        </span>
                      </div>
                      <span className={`font-semibold ${impactColor}`}>{feature.impact} Impact</span>
                    </div>
                  </Card>
                );
              })}
            </div>
          </div>

          {/* Research Areas */}
          <div className="glass-lg border border-orange-500/30 p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-6">Research & Innovation</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-orange-400 mb-4">Active Research</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    'Quantum-Based Positioning',
                    '5G/6G Integration',
                    'Edge AI Optimization',
                    'Neuromorphic Processing',
                  ].map((research, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="text-cyan-400">→</span>
                      {research}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-cyan-400 mb-4">Strategic Partnerships</h3>
                <ul className="space-y-3 text-sm">
                  {[
                    'Autonomous Vehicle Platforms',
                    'Insurance Providers',
                    'Government Agencies',
                    'Research Institutions',
                  ].map((partner, idx) => (
                    <li key={idx} className="flex items-center gap-3">
                      <span className="text-orange-400">→</span>
                      {partner}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Vision Statement */}
          <div className="glass-lg border border-cyan-500/30 p-8 rounded-lg text-center">
            <h2 className="text-2xl font-bold mb-4">Our Vision</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
              To revolutionize vehicle safety through innovative collision detection and autonomous response systems, making roads safer
              for everyone by leveraging advanced sensor technology, artificial intelligence, and vehicle-to-vehicle communication.
            </p>
            <div className="inline-block px-8 py-3 rounded-lg bg-gradient-to-r from-cyan-500 to-orange-500 text-background font-semibold">
              Shipping Better Safety Every Day
            </div>
          </div>

          {/* Development Metrics */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {[
              { label: 'Features Shipped', value: '12', icon: '✓' },
              { label: 'In Development', value: '8', icon: '⚙️' },
              { label: 'Planned', value: '15', icon: '📋' },
              { label: 'Research', value: '6', icon: '🔬' },
            ].map((metric, idx) => (
              <Card key={idx} className="text-center">
                <div className="text-3xl mb-2">{metric.icon}</div>
                <p className="text-sm text-muted-foreground mb-1">{metric.label}</p>
                <p className="text-2xl font-bold text-cyan-400">{metric.value}</p>
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
