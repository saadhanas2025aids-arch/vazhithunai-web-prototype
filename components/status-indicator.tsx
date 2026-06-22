interface StatusIndicatorProps {
  status: 'low' | 'medium' | 'high' | 'critical' | 'online' | 'offline';
  label: string;
  animated?: boolean;
}

const statusColors = {
  low: 'bg-green-500',
  medium: 'bg-yellow-500',
  high: 'bg-orange-500',
  critical: 'bg-red-500',
  online: 'bg-cyan-500',
  offline: 'bg-gray-500',
};

const statusLabels = {
  low: 'Low',
  medium: 'Medium',
  high: 'High',
  critical: 'Critical',
  online: 'Online',
  offline: 'Offline',
};

export function StatusIndicator({ status, label, animated = false }: StatusIndicatorProps) {
  const color = statusColors[status];
  const statusText = statusLabels[status];

  return (
    <div className="flex items-center gap-2">
      <div className={`w-3 h-3 rounded-full ${color} ${animated ? 'animate-pulse' : ''}`}></div>
      <div>
        <p className="text-xs text-muted-foreground">{label}</p>
        <p className="text-sm font-semibold text-foreground">{statusText}</p>
      </div>
    </div>
  );
}
