'use client';

import { Header } from '@/components/header';
import { Card } from '@/components/card';
import { StatsGrid } from '@/components/stats-grid';
import { StatusIndicator } from '@/components/status-indicator';
import { AlertBanner } from '@/components/alert-banner';
import { useVehicleMetrics } from '@/hooks/use-vehicle-metrics';
import Link from 'next/link';

function MapVisualization() {
  return (
    <div className="glass-lg p-6 h-80 border border-cyan-500/20 rounded-lg overflow-hidden relative">
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-500/5 to-orange-500/5"></div>

      <svg
        viewBox="0 0 400 300"
        className="w-full h-full relative z-10"
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Road */}
        <rect x="50" y="50" width="300" height="200" fill="none" stroke="#00d9ff" strokeWidth="2" strokeDasharray="10,10" opacity="0.3" />

        {/* Vehicle */}
        <g>
          <rect x="175" y="120" width="50" height="60" fill="#00d9ff" rx="5" />
          <circle cx="190" cy="150" r="3" fill="#0a0e27" />
          <circle cx="215" cy="150" r="3" fill="#0a0e27" />
        </g>

        {/* Detection radius */}
        <circle cx="200" cy="150" r="80" fill="none" stroke="#00d9ff" strokeWidth="1" opacity="0.3" strokeDasharray="5,5" />

        {/* Objects */}
        <g>
          <rect x="200" y="60" width="40" height="40" fill="#ff6b35" rx="3" opacity="0.7" />
          <text x="220" y="85" textAnchor="middle" fill="#ff6b35" fontSize="10" fontWeight="bold">
            Car
          </text>
        </g>

        <g>
          <rect x="80" y="180" width="50" height="30" fill="#ff6b35" rx="3" opacity="0.5" />
          <text x="105" y="200" textAnchor="middle" fill="#ff6b35" fontSize="10" fontWeight="bold">
            Truck
          </text>
        </g>

        {/* Legend */}
        <text x="10" y="290" fill="#a0aec0" fontSize="10">
          Live Detection Zone
        </text>
      </svg>
    </div>
  );
}

function VehicleList() {
  const vehicles = [
    { id: 1, type: 'Sedan', distance: 45, speed: 65, threat: 'high' as const },
    { id: 2, type: 'SUV', distance: 120, speed: 45, threat: 'low' as const },
    { id: 3, type: 'Truck', distance: 200, speed: 55, threat: 'low' as const },
  ];

  return (
    <div className="glass-lg p-6 border border-cyan-500/20 rounded-lg">
      <h3 className="text-lg font-semibold mb-4">Detected Vehicles</h3>
      <div className="space-y-3">
        {vehicles.map((vehicle) => (
          <div key={vehicle.id} className="flex items-center justify-between p-3 bg-white/5 rounded-lg border border-white/10">
            <div className="flex-1">
              <p className="text-sm font-semibold text-foreground">{vehicle.type}</p>
              <p className="text-xs text-muted-foreground">ID: VH-{String(vehicle.id).padStart(4, '0')}</p>
            </div>
            <div className="text-right">
              <p className="text-xs text-muted-foreground">{vehicle.distance}m away</p>
              <p className={`text-sm font-semibold ${vehicle.speed > 70 ? 'text-orange-400' : 'text-cyan-400'}`}>
                {vehicle.speed} km/h
              </p>
            </div>
            <StatusIndicator status={vehicle.threat} label="Threat" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function DashboardPage() {
  const metrics = useVehicleMetrics(true);

  const stats = [
    { label: 'Vehicle Speed', value: metrics.speed, unit: 'km/h', glow: 'cyan' as const },
    { label: 'Distance', value: metrics.distanceToObject, unit: 'm', glow: 'orange' as const },
    { label: 'Vehicles', value: metrics.vehiclesDetected, unit: 'detected', glow: 'cyan' as const },
    { label: 'Signal', value: Math.round(metrics.signalStrength), unit: '%', glow: 'orange' as const },
  ];

  const threatColor = {
    low: '#00d9ff',
    medium: '#fbbf24',
    high: '#ff6b35',
    critical: '#ef4444',
  }[metrics.threatLevel];

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4 space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">Live Dashboard</h1>
              <p className="text-muted-foreground">Real-time vehicle safety metrics</p>
            </div>
            <StatusIndicator status={metrics.threatLevel} label="Threat Level" animated={metrics.threatLevel !== 'low'} />
          </div>

          {/* Threat Alert */}
          {metrics.threatLevel !== 'low' && (
            <AlertBanner
              type={metrics.threatLevel === 'critical' ? 'critical' : 'warning'}
              title={`${metrics.threatLevel.charAt(0).toUpperCase() + metrics.threatLevel.slice(1)} Threat Detected`}
              message={`Object detected ${metrics.distanceToObject}m away. Current threat level: ${metrics.threatLevel}`}
              actionLabel="View Details"
            />
          )}

          {/* Stats Grid */}
          <StatsGrid stats={stats} columns={4} />

          {/* Main Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Map */}
            <div className="lg:col-span-2">
              <MapVisualization />
            </div>

            {/* Vehicle List */}
            <div>
              <VehicleList />
            </div>
          </div>

          {/* System Health */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <Card glow="cyan" className="border border-cyan-500/20">
              <h3 className="text-lg font-semibold mb-4">System Status</h3>
              <div className="space-y-3">
                <StatusIndicator status="online" label="System" />
                <StatusIndicator status="online" label="GPS" />
                <StatusIndicator status="online" label="Sensors" />
                <div className="text-xs text-muted-foreground mt-4 pt-4 border-t border-white/10">
                  All systems operational
                </div>
              </div>
            </Card>

            <Card glow="orange" className="border border-orange-500/20">
              <h3 className="text-lg font-semibold mb-4">Environmental Data</h3>
              <div className="space-y-2">
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Temperature</span>
                  <span className="text-sm font-semibold">{Math.round(metrics.temperature)}°C</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">Acceleration</span>
                  <span className="text-sm font-semibold">{metrics.acceleration.toFixed(1)} m/s²</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-sm text-muted-foreground">GPS Accuracy</span>
                  <span className="text-sm font-semibold">±{Math.round(metrics.gpsAccuracy)}m</span>
                </div>
              </div>
            </Card>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-wrap gap-4 justify-center pt-8 border-t border-cyan-500/20">
            <Link href="/collision-detection" className="px-6 py-2 rounded-lg border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all text-sm">
              Try Simulator
            </Link>
            <Link href="/alerts" className="px-6 py-2 rounded-lg border border-orange-500/50 text-orange-400 hover:bg-orange-500/10 transition-all text-sm">
              View Alerts
            </Link>
            <Link href="/architecture" className="px-6 py-2 rounded-lg border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all text-sm">
              System Architecture
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
