interface CardProps {
  children: React.ReactNode;
  className?: string;
  glow?: 'cyan' | 'orange' | 'none';
}

export function Card({ children, className = '', glow = 'none' }: CardProps) {
  const glowClass = glow === 'cyan' ? 'glow-cyan' : glow === 'orange' ? 'glow-orange' : '';
  return (
    <div className={`glass-lg p-6 ${glowClass} ${className}`}>
      {children}
    </div>
  );
}

export function MetricCard({ label, value, unit, glow }: { label: string; value: string | number; unit?: string; glow?: 'cyan' | 'orange' }) {
  return (
    <Card glow={glow} className="text-center">
      <p className="text-sm text-muted-foreground mb-2">{label}</p>
      <div className="flex items-baseline justify-center gap-1">
        <span className={`text-3xl font-bold ${glow === 'cyan' ? 'text-cyan-400' : glow === 'orange' ? 'text-orange-400' : 'text-cyan-400'}`}>
          {value}
        </span>
        {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
      </div>
    </Card>
  );
}
