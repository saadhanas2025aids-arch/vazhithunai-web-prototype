import { MetricCard } from './card';

export interface Stat {
  label: string;
  value: string | number;
  unit?: string;
  trend?: 'up' | 'down' | 'stable';
  glow?: 'cyan' | 'orange';
}

interface StatsGridProps {
  stats: Stat[];
  columns?: number;
}

export function StatsGrid({ stats, columns = 4 }: StatsGridProps) {
  const gridClass = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
  }[columns] || 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4';

  return (
    <div className={`grid ${gridClass} gap-4`}>
      {stats.map((stat, idx) => (
        <MetricCard
          key={idx}
          label={stat.label}
          value={stat.value}
          unit={stat.unit}
          glow={stat.glow || (idx % 2 === 0 ? 'cyan' : 'orange')}
        />
      ))}
    </div>
  );
}
