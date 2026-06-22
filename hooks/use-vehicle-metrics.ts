'use client';

import { useState, useEffect } from 'react';

export interface VehicleMetrics {
  speed: number;
  acceleration: number;
  threatLevel: 'low' | 'medium' | 'high' | 'critical';
  distanceToObject: number;
  vehiclesDetected: number;
  signalStrength: number;
  temperature: number;
  gpsAccuracy: number;
}

const initialMetrics: VehicleMetrics = {
  speed: 0,
  acceleration: 0,
  threatLevel: 'low',
  distanceToObject: 250,
  vehiclesDetected: 0,
  signalStrength: 95,
  temperature: 38,
  gpsAccuracy: 8,
};

export function useVehicleMetrics(simulate: boolean = true) {
  const [metrics, setMetrics] = useState<VehicleMetrics>(initialMetrics);

  useEffect(() => {
    if (!simulate) return;

    const interval = setInterval(() => {
      setMetrics((prev) => {
        const randomVariation = () => (Math.random() - 0.5) * 20;
        const newSpeed = Math.max(0, Math.min(150, prev.speed + randomVariation()));
        const newAcceleration = Math.max(-2, Math.min(2, prev.acceleration + (Math.random() - 0.5) * 0.3));
        const newDistance = Math.max(30, Math.min(300, prev.distanceToObject + randomVariation() * 2));
        
        let threatLevel: 'low' | 'medium' | 'high' | 'critical' = 'low';
        if (newDistance < 50) threatLevel = 'critical';
        else if (newDistance < 100) threatLevel = 'high';
        else if (newDistance < 150) threatLevel = 'medium';

        return {
          ...prev,
          speed: Math.round(newSpeed),
          acceleration: Math.round(newAcceleration * 10) / 10,
          threatLevel,
          distanceToObject: Math.round(newDistance),
          vehiclesDetected: Math.floor(Math.random() * 8),
          signalStrength: Math.max(60, Math.min(99, prev.signalStrength + (Math.random() - 0.5) * 5)),
          temperature: Math.round(prev.temperature + (Math.random() - 0.5) * 2),
          gpsAccuracy: Math.max(5, Math.min(15, prev.gpsAccuracy + (Math.random() - 0.5))),
        };
      });
    }, 1000);

    return () => clearInterval(interval);
  }, [simulate]);

  return metrics;
}
