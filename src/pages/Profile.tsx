import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { User, Edit, Calendar, MapPin } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

const Profile: React.FC = () => {
  const recentActivities = [
    { id: 1, type: 'Morning Run', duration: '30 minutes', time: '5:30 AM', icon: '🏃', color: 'bg-blue-500' },
    { id: 2, type: 'Yoga Session', duration: '45 minutes', time: 'Yesterday', icon: '🧘', color: 'bg-purple-500' },
    { id: 3, type: 'Cycling', duration: '60 minutes', time: '2 days ago', icon: '🚴', color: 'bg-green-500' }
  ];

  const fitnessGoals = [
    { name: 'Weight Loss', current: 12, target: 15, unit: 'kg', progress: 80 },
    { name: 'Running Distance', current: 35, target: 50, unit: 'km', progress: 70 },
    { name: 'Daily Steps', current: 8500, target: 10000, unit: 'steps', progress: 85 }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Profile Header */}
        <Card className="p-6 bg-fitness-surface border-border mb-8">
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
            <div className="w-24 h-24 bg-fitness-accent rounded-full flex items-center justify-center text-accent-foreground text-2xl font-bold">
              SC
            </div>
            
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-foreground mb-2">Sophia Carter</h1>
              <div className="flex flex-wrap items-center gap-4 text-muted-foreground mb-4">
                <div className="flex items-center">
                  <Calendar className="w-4 h-4 mr-1" />
                  <span className="text-sm">Joined March 2022</span>
                </div>
                <div className="flex items-center">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">San Francisco, CA</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="secondary" className="bg-fitness-accent/20 text-fitness-accent">
                  Premium Member
                </Badge>
                <Badge variant="outline" className="border-fitness-accent text-fitness-accent">
                  Streak: 15 days
                </Badge>
              </div>
            </div>
            
            <Button className="bg-fitness-accent hover:bg-fitness-accent/90 text-accent-foreground">
              <Edit className="w-4 h-4 mr-2" />
              Edit Profile
            </Button>
          </div>
        </Card>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Recent Activities */}
          <Card className="p-6 bg-fitness-surface border-border">
            <h2 className="text-xl font-semibold text-foreground mb-6">Recent Activities</h2>
            
            <div className="space-y-4">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center space-x-4 p-3 rounded-lg bg-background/50 hover:bg-fitness-surface-hover transition-colors">
                  <div className={`w-10 h-10 rounded-full ${activity.color} flex items-center justify-center text-white text-sm`}>
                    {activity.icon}
                  </div>
                  <div className="flex-1">
                    <h4 className="font-medium text-foreground">{activity.type}</h4>
                    <p className="text-sm text-muted-foreground">{activity.duration}</p>
                  </div>
                  <div className="text-sm text-muted-foreground">{activity.time}</div>
                </div>
              ))}
            </div>
          </Card>

          {/* Fitness Goals */}
          <Card className="p-6 bg-fitness-surface border-border">
            <h2 className="text-xl font-semibold text-foreground mb-6">Fitness Goals</h2>
            
            <div className="space-y-6">
              {fitnessGoals.map((goal, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <h4 className="font-medium text-foreground">{goal.name}</h4>
                    <span className="text-sm text-muted-foreground">
                      Goal: {goal.target} {goal.unit}
                    </span>
                  </div>
                  <Progress value={goal.progress} className="h-2 mb-2" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>{goal.current} {goal.unit}</span>
                    <span>{goal.progress}%</span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
          <Card className="p-4 bg-fitness-surface border-border text-center">
            <div className="text-2xl font-bold text-fitness-accent mb-1">47</div>
            <div className="text-sm text-muted-foreground">Workouts</div>
          </Card>
          <Card className="p-4 bg-fitness-surface border-border text-center">
            <div className="text-2xl font-bold text-fitness-accent mb-1">235</div>
            <div className="text-sm text-muted-foreground">Hours</div>
          </Card>
          <Card className="p-4 bg-fitness-surface border-border text-center">
            <div className="text-2xl font-bold text-fitness-accent mb-1">12.5k</div>
            <div className="text-sm text-muted-foreground">Calories</div>
          </Card>
          <Card className="p-4 bg-fitness-surface border-border text-center">
            <div className="text-2xl font-bold text-fitness-accent mb-1">15</div>
            <div className="text-sm text-muted-foreground">Streak</div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;