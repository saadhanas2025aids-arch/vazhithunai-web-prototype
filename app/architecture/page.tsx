import { Header } from '@/components/header';
import { Card } from '@/components/card';
import Link from 'next/link';

export default function ArchitecturePage() {
  const layers = [
    {
      name: 'Sensor Layer',
      description: 'Hardware interfaces',
      components: ['Accelerometer', 'Gyroscope', 'GPS', 'Camera', 'Magnetometer'],
      color: 'border-cyan-500/30',
    },
    {
      name: 'Processing Layer',
      description: 'Real-time data handling',
      components: ['Sensor Fusion', 'Data Aggregation', 'Noise Filtering', 'Time Synchronization'],
      color: 'border-orange-500/30',
    },
    {
      name: 'Detection Layer',
      description: 'ML-based collision detection',
      components: ['CNN Models', 'Trajectory Analysis', 'Threat Assessment', 'Pattern Recognition'],
      color: 'border-cyan-500/30',
    },
    {
      name: 'Alert Layer',
      description: 'Notification & response',
      components: ['Alert Generation', 'Emergency Notifications', 'Driver Interface', 'Data Logging'],
      color: 'border-orange-500/30',
    },
    {
      name: 'Cloud Layer',
      description: 'Analytics & storage',
      components: ['Data Sync', 'Analytics Engine', 'Historical Storage', 'API Gateway'],
      color: 'border-cyan-500/30',
    },
  ];

  const algorithms = [
    {
      title: 'Multi-Object Tracking',
      description: 'Tracks multiple vehicles and obstacles in real-time using Kalman filtering and Hungarian algorithm',
      accuracy: '97%',
    },
    {
      title: 'Collision Prediction',
      description: 'Predicts collision risk based on vehicle trajectories, speeds, and acceleration patterns',
      accuracy: '98.5%',
    },
    {
      title: 'Sensor Fusion',
      description: 'Combines multiple sensor inputs using advanced fusion techniques for robust detection',
      accuracy: '96%',
    },
    {
      title: 'Threat Level Classification',
      description: 'Classifies threat severity based on distance, relative speed, and environmental factors',
      accuracy: '99%',
    },
  ];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4 space-y-12">
          {/* Header */}
          <div>
            <h1 className="text-3xl font-bold mb-2">System Architecture</h1>
            <p className="text-muted-foreground">Technical overview of Vazhithunai vehicle safety system</p>
          </div>

          {/* Architecture Diagram */}
          <div className="glass-lg border border-cyan-500/30 p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-6">System Layers</h2>

            <div className="space-y-4">
              {layers.map((layer, idx) => (
                <div key={idx} className={`glass border ${layer.color} p-6 rounded-lg hover:border-opacity-50 transition-all`}>
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{layer.name}</h3>
                      <p className="text-sm text-muted-foreground">{layer.description}</p>
                    </div>
                    <span className="text-xs bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 px-3 py-1 rounded-full">
                      Layer {idx + 1}
                    </span>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {layer.components.map((component, cidx) => (
                      <span key={cidx} className="text-xs bg-white/5 border border-white/10 text-foreground px-3 py-1 rounded-full">
                        {component}
                      </span>
                    ))}
                  </div>

                  {idx < layers.length - 1 && (
                    <div className="mt-4 text-center text-cyan-400">
                      <div className="text-lg">↓</div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Algorithms */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Core Algorithms</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {algorithms.map((algo, idx) => (
                <Card key={idx} glow={idx % 2 === 0 ? 'cyan' : 'orange'} className="border border-cyan-500/20">
                  <div className="flex items-start justify-between mb-3">
                    <h3 className="text-lg font-semibold">{algo.title}</h3>
                    <span className="text-xs bg-cyan-500/20 border border-cyan-500/30 text-cyan-400 px-3 py-1 rounded-full">
                      {algo.accuracy}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground">{algo.description}</p>
                </Card>
              ))}
            </div>
          </div>

          {/* Data Flow */}
          <div className="glass-lg border border-orange-500/30 p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-6">Data Flow Pipeline</h2>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              {[
                { step: '1', title: 'Sensor Capture', desc: '100Hz sampling' },
                { step: '2', title: 'Preprocessing', desc: 'Noise filtering' },
                { step: '3', title: 'Analysis', desc: 'ML inference' },
                { step: '4', title: 'Decision', desc: 'Alert logic' },
                { step: '5', title: 'Response', desc: 'Action trigger' },
              ].map((item, idx) => (
                <div key={idx} className="text-center">
                  <div className="bg-gradient-to-br from-cyan-500 to-cyan-600 w-10 h-10 rounded-full flex items-center justify-center font-bold text-white mx-auto mb-2">
                    {item.step}
                  </div>
                  <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                  {idx < 4 && (
                    <div className="hidden md:block text-orange-400 mt-2">→</div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Performance Metrics */}
          <div>
            <h2 className="text-2xl font-bold mb-6">Performance Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { metric: 'Detection Speed', value: '<100ms', icon: '⚡' },
                { metric: 'Detection Range', value: '300m', icon: '📡' },
                { metric: 'Accuracy Rate', value: '98.5%', icon: '🎯' },
                { metric: 'CPU Usage', value: '<15%', icon: '💻' },
              ].map((perf, idx) => (
                <Card key={idx} glow={idx % 2 === 0 ? 'cyan' : 'orange'}>
                  <div className="text-center">
                    <div className="text-3xl mb-2">{perf.icon}</div>
                    <p className="text-sm text-muted-foreground mb-2">{perf.metric}</p>
                    <p className="text-2xl font-bold text-cyan-400">{perf.value}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Technology Stack */}
          <div className="glass-lg border border-cyan-500/30 p-8 rounded-lg">
            <h2 className="text-xl font-semibold mb-6">Technology Stack</h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="font-semibold text-cyan-400 mb-3">Frontend</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-orange-400">•</span>
                    React 19 with TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-400">•</span>
                    Next.js 16 (App Router)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-400">•</span>
                    Tailwind CSS v4
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-400">•</span>
                    Canvas API for visualization
                  </li>
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-cyan-400 mb-3">Backend & Processing</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-center gap-2">
                    <span className="text-orange-400">•</span>
                    TensorFlow.js (Client-side ML)
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-400">•</span>
                    WebGL for GPU acceleration
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-400">•</span>
                    Web Workers for threading
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="text-orange-400">•</span>
                    Cloud API integration
                  </li>
                </ul>
              </div>
            </div>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-4 justify-center pt-8 border-t border-cyan-500/20">
            <Link href="/dashboard" className="px-6 py-2 rounded-lg border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all text-sm">
              Dashboard
            </Link>
            <Link href="/collision-detection" className="px-6 py-2 rounded-lg border border-orange-500/50 text-orange-400 hover:bg-orange-500/10 transition-all text-sm">
              Try Simulator
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
