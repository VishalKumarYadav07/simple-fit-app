import React from 'react';
import { Card } from '@/components/ui/card';

interface Activity {
  id: string;
  type: 'workout' | 'run' | 'yoga' | 'cycling';
  title: string;
  duration: string;
  calories?: number;
  time: string;
}

const activities: Activity[] = [
  {
    id: '1',
    type: 'workout',
    title: 'Morning Strength',
    duration: '45 min',
    calories: 280,
    time: '2h ago'
  },
  {
    id: '2',
    type: 'run',
    title: 'Evening Run',
    duration: '30 min',
    calories: 210,
    time: 'Yesterday'
  },
  {
    id: '3',
    type: 'yoga',
    title: 'Yoga Session',
    duration: '25 min',
    calories: 95,
    time: '2 days ago'
  }
];

const getActivityIcon = (type: Activity['type']) => {
  const icons = {
    workout: '💪',
    run: '🏃',
    yoga: '🧘',
    cycling: '🚴'
  };
  return icons[type];
};

const ActivityFeed: React.FC = () => {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Recent Activities</h3>
      <div className="space-y-4">
        {activities.map((activity) => (
          <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg bg-fitness-surface hover:bg-fitness-surface-hover transition-colors">
            <div className="text-2xl">{getActivityIcon(activity.type)}</div>
            <div className="flex-1">
              <h4 className="font-medium">{activity.title}</h4>
              <p className="text-sm text-muted-foreground">
                {activity.duration} • {activity.calories} cal
              </p>
            </div>
            <div className="text-sm text-muted-foreground">{activity.time}</div>
          </div>
        ))}
      </div>
    </Card>
  );
};

export default ActivityFeed;