'use client';

import { Header } from '@/components/header';
import { Card } from '@/components/card';
import { StatusIndicator } from '@/components/status-indicator';
import Link from 'next/link';

interface Alert {
  id: string;
  timestamp: string;
  severity: 'info' | 'warning' | 'critical';
  title: string;
  description: string;
  location?: string;
  resolved: boolean;
}

export default function AlertsPage() {
  const alerts: Alert[] = [
    {
      id: 'A001',
      timestamp: 'Today at 2:45 PM',
      severity: 'critical',
      title: 'Collision Detected',
      description: 'Vehicle collision detected with object 30m away. Evasive action initiated.',
      location: 'Highway 101, Mile 42',
      resolved: false,
    },
    {
      id: 'A002',
      timestamp: 'Today at 1:20 PM',
      severity: 'warning',
      title: 'High Risk Zone Entered',
      description: 'Vehicle detected in high-traffic intersection. Alert level raised to medium.',
      location: 'Downtown District',
      resolved: false,
    },
    {
      id: 'A003',
      timestamp: 'Today at 12:00 PM',
      severity: 'warning',
      title: 'Speed Anomaly',
      description: 'Unusual acceleration detected. System monitoring for safety compliance.',
      location: 'Main Street',
      resolved: true,
    },
    {
      id: 'A004',
      timestamp: 'Yesterday at 6:30 PM',
      severity: 'info',
      title: 'System Update',
      description: 'Vehicle safety system updated to latest firmware version.',
      resolved: true,
    },
    {
      id: 'A005',
      timestamp: 'Yesterday at 3:15 PM',
      severity: 'critical',
      title: 'Emergency Braking Required',
      description: 'Sudden obstacle detection at close range. Emergency braking protocols engaged.',
      location: 'Urban Area',
      resolved: true,
    },
  ];

  const severityConfig = {
    info: { color: 'border-cyan-500/30', textColor: 'text-cyan-400', bgColor: 'bg-cyan-500/10' },
    warning: { color: 'border-orange-500/30', textColor: 'text-orange-400', bgColor: 'bg-orange-500/10' },
    critical: { color: 'border-red-500/30', textColor: 'text-red-400', bgColor: 'bg-red-500/10' },
  };

  const activeAlerts = alerts.filter((a) => !a.resolved);
  const resolvedAlerts = alerts.filter((a) => a.resolved);

  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4 space-y-8">
          {/* Header */}
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl font-bold">System Alerts</h1>
              <p className="text-muted-foreground">Vehicle safety alerts and system notifications</p>
            </div>
            <Card className="text-center border border-cyan-500/20 md:w-40">
              <p className="text-sm text-muted-foreground">Active Alerts</p>
              <p className="text-3xl font-bold text-red-400">{activeAlerts.length}</p>
            </Card>
          </div>

          {/* Active Alerts */}
          {activeAlerts.length > 0 && (
            <div className="space-y-4">
              <h2 className="text-xl font-semibold flex items-center gap-2">
                <div className="w-3 h-3 bg-red-500 rounded-full animate-pulse"></div>
                Active Alerts
              </h2>
              <div className="space-y-4">
                {activeAlerts.map((alert) => {
                  const config = severityConfig[alert.severity];
                  return (
                    <div
                      key={alert.id}
                      className={`glass-lg border ${config.color} ${config.bgColor} p-6 rounded-lg hover:border-opacity-50 transition-all`}
                    >
                      <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                        <div className="flex-1">
                          <div className="flex items-center gap-3 mb-2">
                            <span className={`text-sm font-semibold ${config.textColor}`}>{alert.severity.toUpperCase()}</span>
                            <span className="text-xs text-muted-foreground">{alert.id}</span>
                          </div>
                          <h3 className="text-lg font-semibold mb-2">{alert.title}</h3>
                          <p className="text-sm text-muted-foreground mb-2">{alert.description}</p>
                          {alert.location && (
                            <p className="text-xs text-cyan-400 flex items-center gap-1">
                              <span>📍</span> {alert.location}
                            </p>
                          )}
                        </div>
                        <div className="flex flex-col gap-2">
                          <span className="text-xs text-muted-foreground text-right">{alert.timestamp}</span>
                          <button className="px-4 py-2 rounded-lg border border-red-500/50 text-red-400 hover:bg-red-500/10 transition-all text-sm whitespace-nowrap">
                            Take Action
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          )}

          {/* Resolved Alerts */}
          <div className="space-y-4">
            <h2 className="text-xl font-semibold text-muted-foreground">Resolved Alerts ({resolvedAlerts.length})</h2>
            <div className="space-y-3">
              {resolvedAlerts.map((alert) => {
                const config = severityConfig[alert.severity];
                return (
                  <div key={alert.id} className={`glass-lg border ${config.color} p-4 rounded-lg opacity-60`}>
                    <div className="flex items-start justify-between">
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <span className={`text-xs font-semibold ${config.textColor}`}>{alert.severity.toUpperCase()}</span>
                          <span className="text-xs text-muted-foreground">{alert.id}</span>
                          <span className="text-xs text-green-400">✓ Resolved</span>
                        </div>
                        <h3 className="text-sm font-semibold">{alert.title}</h3>
                      </div>
                      <span className="text-xs text-muted-foreground">{alert.timestamp}</span>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-8 border-t border-cyan-500/20">
            <Card glow="cyan" className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Total Alerts</p>
              <p className="text-4xl font-bold text-cyan-400">{alerts.length}</p>
            </Card>

            <Card glow="orange" className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Resolved Rate</p>
              <p className="text-4xl font-bold text-orange-400">{Math.round((resolvedAlerts.length / alerts.length) * 100)}%</p>
            </Card>

            <Card className="text-center">
              <p className="text-sm text-muted-foreground mb-2">Avg Response</p>
              <p className="text-4xl font-bold text-cyan-400">{"<2s"}</p>
            </Card>
          </div>

          {/* Navigation */}
          <div className="flex flex-wrap gap-4 justify-center pt-8 border-t border-cyan-500/20">
            <Link href="/dashboard" className="px-6 py-2 rounded-lg border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all text-sm">
              Back to Dashboard
            </Link>
            <Link href="/collision-detection" className="px-6 py-2 rounded-lg border border-orange-500/50 text-orange-400 hover:bg-orange-500/10 transition-all text-sm">
              Try Simulator
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
