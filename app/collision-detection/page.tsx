'use client';

import { Header } from '@/components/header';
import { Card } from '@/components/card';
import { AlertBanner } from '@/components/alert-banner';
import { StatusIndicator } from '@/components/status-indicator';
import { useState, useRef, useEffect } from 'react';

interface SimulationState {
  vehicleX: number;
  vehicleY: number;
  speed: number;
  obstacleX: number;
  obstacleY: number;
  distance: number;
  isCollision: boolean;
  threatLevel: 'low' | 'medium' | 'high' | 'critical';
  isRunning: boolean;
}

function CollisionSimulator() {
  const [state, setState] = useState<SimulationState>({
    vehicleX: 100,
    vehicleY: 250,
    speed: 60,
    obstacleX: 300,
    obstacleY: 250,
    distance: 200,
    isCollision: false,
    threatLevel: 'low',
    isRunning: false,
  });

  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    if (!state.isRunning) return;

    const interval = setInterval(() => {
      setState((prev) => {
        let newVehicleX = prev.vehicleX;
        let newSpeed = prev.speed;
        let distance = Math.sqrt(
          Math.pow(prev.obstacleX - newVehicleX, 2) + Math.pow(prev.obstacleY - prev.vehicleY, 2)
        );

        // Simulate movement
        newVehicleX += newSpeed / 60; // Adjust for speed

        if (distance < 50) {
          return {
            ...prev,
            vehicleX: newVehicleX,
            distance: Math.max(0, distance),
            isCollision: true,
            threatLevel: 'critical',
          };
        }

        let threatLevel: 'low' | 'medium' | 'high' | 'critical' = 'low';
        if (distance < 50) threatLevel = 'critical';
        else if (distance < 100) threatLevel = 'high';
        else if (distance < 150) threatLevel = 'medium';

        return {
          ...prev,
          vehicleX: newVehicleX,
          distance: Math.max(0, distance),
          threatLevel,
          isCollision: distance < 30,
        };
      });
    }, 50);

    return () => clearInterval(interval);
  }, [state.isRunning]);

  // Draw canvas
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    // Clear canvas
    ctx.fillStyle = 'rgba(10, 14, 39, 0.5)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Draw road
    ctx.strokeStyle = '#00d9ff';
    ctx.setLineDash([10, 10]);
    ctx.lineWidth = 2;
    ctx.strokeRect(50, 50, canvas.width - 100, canvas.height - 100);
    ctx.setLineDash([]);

    // Draw vehicle (our car)
    ctx.fillStyle = '#00d9ff';
    ctx.fillRect(state.vehicleX, state.vehicleY - 15, 40, 30);

    // Draw wheels
    ctx.fillStyle = '#0a0e27';
    ctx.fillRect(state.vehicleX + 5, state.vehicleY - 18, 8, 6);
    ctx.fillRect(state.vehicleX + 27, state.vehicleY - 18, 8, 6);

    // Draw obstacle
    ctx.fillStyle = state.isCollision ? '#ef4444' : '#ff6b35';
    ctx.fillRect(state.obstacleX, state.obstacleY - 20, 50, 40);

    // Draw detection circle
    ctx.strokeStyle = `rgba(0, 217, 255, ${state.isCollision ? 0.1 : 0.2})`;
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.arc(state.vehicleX + 20, state.vehicleY, 100, 0, Math.PI * 2);
    ctx.stroke();

    // Draw distance line
    ctx.strokeStyle = '#ff6b35';
    ctx.lineWidth = 1;
    ctx.setLineDash([5, 5]);
    ctx.beginPath();
    ctx.moveTo(state.vehicleX + 40, state.vehicleY);
    ctx.lineTo(state.obstacleX, state.obstacleY);
    ctx.stroke();
    ctx.setLineDash([]);

    // Draw distance label
    const midX = (state.vehicleX + state.obstacleX) / 2;
    const midY = (state.vehicleY + state.obstacleY) / 2;
    ctx.fillStyle = '#ff6b35';
    ctx.font = '12px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText(`${Math.round(state.distance)}m`, midX, midY - 10);
  }, [state]);

  const handleStartSimulation = () => {
    setState((prev) => ({
      ...prev,
      vehicleX: 100,
      distance: 200,
      isCollision: false,
      threatLevel: 'low',
      isRunning: !prev.isRunning,
    }));
  };

  const handleReset = () => {
    setState({
      vehicleX: 100,
      vehicleY: 250,
      speed: 60,
      obstacleX: 300,
      obstacleY: 250,
      distance: 200,
      isCollision: false,
      threatLevel: 'low',
      isRunning: false,
    });
  };

  const handleSpeedChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setState((prev) => ({
      ...prev,
      speed: parseInt(e.target.value),
    }));
  };

  const triggerAlert = (threatLevel: SimulationState['threatLevel']) => {
    setState((prev) => ({
      ...prev,
      isRunning: false,
      threatLevel,
      distance: threatLevel === 'critical' ? 20 : threatLevel === 'high' ? 75 : 125,
    }));
  };

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold mb-2">Collision Detection Simulator</h1>
        <p className="text-muted-foreground">Test the detection system with interactive scenarios</p>
      </div>

      {/* Alert */}
      {state.threatLevel !== 'low' && (
        <AlertBanner
          type={state.threatLevel === 'critical' ? 'critical' : 'warning'}
          title={`${state.threatLevel.charAt(0).toUpperCase() + state.threatLevel.slice(1)} Threat Alert!`}
          message={`Object detected at ${Math.round(state.distance)}m distance. Taking evasive action.`}
          actionLabel="View Full Alert"
        />
      )}

      {/* Canvas */}
      <Card glow="cyan">
        <canvas
          ref={canvasRef}
          width={600}
          height={350}
          className="w-full border border-cyan-500/20 rounded-lg bg-black/30"
        />
      </Card>

      {/* Controls */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card className="border border-cyan-500/20">
          <h3 className="text-lg font-semibold mb-4">Simulation Controls</h3>
          <div className="space-y-4">
            <button
              onClick={handleStartSimulation}
              className={`w-full py-2 rounded-lg font-semibold transition-all ${
                state.isRunning
                  ? 'bg-red-500/20 border border-red-500/50 text-red-400 hover:bg-red-500/30'
                  : 'bg-cyan-500/20 border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/30'
              }`}
            >
              {state.isRunning ? 'Stop Simulation' : 'Start Simulation'}
            </button>

            <button
              onClick={handleReset}
              className="w-full py-2 rounded-lg border border-cyan-500/50 text-cyan-400 hover:bg-cyan-500/10 transition-all font-semibold"
            >
              Reset
            </button>

            <div>
              <label className="text-sm text-muted-foreground mb-2 block">Speed: {state.speed} km/h</label>
              <input
                type="range"
                min="20"
                max="150"
                value={state.speed}
                onChange={handleSpeedChange}
                className="w-full"
                disabled={state.isRunning}
              />
            </div>
          </div>
        </Card>

        <Card className="border border-orange-500/20">
          <h3 className="text-lg font-semibold mb-4">Quick Scenarios</h3>
          <div className="space-y-2">
            <button
              onClick={() => triggerAlert('medium')}
              className="w-full py-2 rounded-lg border border-yellow-500/50 text-yellow-400 hover:bg-yellow-500/10 transition-all text-sm"
            >
              Medium Threat (125m)
            </button>
            <button
              onClick={() => triggerAlert('high')}
              className="w-full py-2 rounded-lg border border-orange-500/50 text-orange-400 hover:bg-orange-500/10 transition-all text-sm"
            >
              High Threat (75m)
            </button>
            <button
              onClick={() => triggerAlert('critical')}
              className="w-full py-2 rounded-lg border border-red-500/50 text-red-400 hover:bg-red-500/10 transition-all text-sm"
            >
              Critical Threat (20m)
            </button>
          </div>
        </Card>
      </div>

      {/* Metrics */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="text-center">
          <p className="text-sm text-muted-foreground mb-2">Distance</p>
          <p className="text-2xl font-bold text-cyan-400">{Math.round(state.distance)}m</p>
        </Card>

        <Card className="text-center">
          <p className="text-sm text-muted-foreground mb-2">Speed</p>
          <p className="text-2xl font-bold text-orange-400">{state.speed} km/h</p>
        </Card>

        <Card className="text-center">
          <p className="text-sm text-muted-foreground mb-2">Status</p>
          <StatusIndicator status={state.isCollision ? 'critical' : state.threatLevel} label="" />
        </Card>

        <Card className="text-center">
          <p className="text-sm text-muted-foreground mb-2">Detection</p>
          <p className="text-2xl font-bold text-cyan-400">{state.isCollision ? 'COLLISION!' : 'Safe'}</p>
        </Card>
      </div>
    </div>
  );
}

export default function CollisionDetectionPage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background py-8">
        <div className="container mx-auto px-4">
          <CollisionSimulator />
        </div>
      </main>
    </>
  );
}
