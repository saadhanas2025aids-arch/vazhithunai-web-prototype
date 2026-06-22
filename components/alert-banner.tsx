interface AlertBannerProps {
  type: 'info' | 'warning' | 'critical';
  title: string;
  message: string;
  actionLabel?: string;
  onAction?: () => void;
}

const typeColors = {
  info: { bg: 'bg-cyan-500/20', border: 'border-cyan-500/50', icon: '💡' },
  warning: { bg: 'bg-orange-500/20', border: 'border-orange-500/50', icon: '⚠️' },
  critical: { bg: 'bg-red-500/20', border: 'border-red-500/50', icon: '🚨' },
};

export function AlertBanner({ type, title, message, actionLabel, onAction }: AlertBannerProps) {
  const { bg, border, icon } = typeColors[type];

  return (
    <div className={`glass-lg border ${border} ${bg} p-4 rounded-lg`}>
      <div className="flex items-start gap-4">
        <span className="text-xl">{icon}</span>
        <div className="flex-1">
          <h3 className="font-semibold text-foreground mb-1">{title}</h3>
          <p className="text-sm text-muted-foreground mb-3">{message}</p>
          {actionLabel && (
            <button
              onClick={onAction}
              className="text-xs font-semibold text-cyan-400 hover:text-cyan-300 transition-colors"
            >
              {actionLabel}
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
