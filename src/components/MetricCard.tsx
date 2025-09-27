import React from 'react';
import { Card } from '@/components/ui/card';

interface MetricCardProps {
  title: string;
  value: string;
  unit?: string;
  progress?: number;
  icon: React.ReactNode;
  trend?: 'up' | 'down' | 'neutral';
}

const MetricCard: React.FC<MetricCardProps> = ({ 
  title, 
  value, 
  unit, 
  progress, 
  icon, 
  trend = 'neutral' 
}) => {
  const getTrendColor = () => {
    switch (trend) {
      case 'up': return 'text-fitness-success';
      case 'down': return 'text-destructive';
      default: return 'text-muted-foreground';
    }
  };

  return (
    <Card className="metric-card">
      <div className="flex items-center justify-between mb-4">
        <div className="text-fitness-accent">{icon}</div>
        {trend !== 'neutral' && (
          <div className={`text-sm font-medium ${getTrendColor()}`}>
            {trend === 'up' ? '↗' : '↘'}
          </div>
        )}
      </div>
      
      <div className="space-y-2">
        <h3 className="text-sm font-medium text-muted-foreground">{title}</h3>
        <div className="flex items-baseline space-x-1">
          <span className="text-2xl font-bold">{value}</span>
          {unit && <span className="text-sm text-muted-foreground">{unit}</span>}
        </div>
        
        {progress !== undefined && (
          <div className="progress-bar mt-3">
            <div 
              className="progress-fill"
              style={{ width: `${Math.min(progress, 100)}%` }}
            />
          </div>
        )}
      </div>
    </Card>
  );
};

export default MetricCard;