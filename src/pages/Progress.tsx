import React from 'react';
import { Card } from '@/components/ui/card';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { TrendingDown, TrendingUp, Activity } from 'lucide-react';

const Progress: React.FC = () => {
  const recentActivities = [
    { date: '2024-09-25', activity: 'Morning Run', duration: '35 minutes', calories: 280 },
    { date: '2024-09-24', activity: 'Yoga Session', duration: '60 minutes', calories: 200 },
    { date: '2024-09-23', activity: 'Strength Training', duration: '45 minutes', calories: 350 },
    { date: '2024-09-22', activity: 'Swimming', duration: '50 minutes', calories: 400 },
    { date: '2024-09-21', activity: 'Cycling', duration: '45 minutes', calories: 320 }
  ];

  const workoutTypes = [
    { name: 'Running', percentage: 40, color: 'bg-blue-500' },
    { name: 'Yoga', percentage: 30, color: 'bg-purple-500' },
    { name: 'Strength Training', percentage: 25, color: 'bg-fitness-accent' },
    { name: 'Swimming', percentage: 15, color: 'bg-green-500' }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Progress</h1>
          <p className="text-muted-foreground">Track your fitness journey and celebrate your achievements</p>
        </div>

        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="bg-fitness-surface border border-border">
            <TabsTrigger value="overview" className="data-[state=active]:bg-fitness-accent data-[state=active]:text-accent-foreground">
              Overview
            </TabsTrigger>
            <TabsTrigger value="weight" className="data-[state=active]:bg-fitness-accent data-[state=active]:text-accent-foreground">
              Weight
            </TabsTrigger>
            <TabsTrigger value="workouts" className="data-[state=active]:bg-fitness-accent data-[state=active]:text-accent-foreground">
              Workouts
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Key Metrics */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card className="p-6 bg-fitness-surface border-border">
                <div className="flex items-center justify-between mb-2">
                  <TrendingDown className="w-5 h-5 text-fitness-success" />
                  <span className="text-sm text-muted-foreground">Last 30 Days</span>
                </div>
                <div className="text-3xl font-bold text-foreground">-2.5 lbs</div>
                <p className="text-sm text-muted-foreground">Weight Over Time</p>
              </Card>

              <Card className="p-6 bg-fitness-surface border-border">
                <div className="flex items-center justify-between mb-2">
                  <TrendingUp className="w-5 h-5 text-fitness-accent" />
                  <span className="text-sm text-muted-foreground">This Month</span>
                </div>
                <div className="text-3xl font-bold text-foreground">+10%</div>
                <p className="text-sm text-muted-foreground">Workout Frequency</p>
              </Card>

              <Card className="p-6 bg-fitness-surface border-border">
                <div className="flex items-center justify-between mb-2">
                  <Activity className="w-5 h-5 text-orange-400" />
                  <span className="text-sm text-muted-foreground">Variety</span>
                </div>
                <div className="text-3xl font-bold text-foreground">3 Types</div>
                <p className="text-sm text-muted-foreground">Workout Types</p>
              </Card>
            </div>

            {/* Weight Chart Placeholder */}
            <Card className="p-6 bg-fitness-surface border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">Weight Progress</h2>
              <div className="h-64 bg-background/50 rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <TrendingDown className="w-12 h-12 mx-auto mb-2" />
                  <p>Weight chart visualization would go here</p>
                </div>
              </div>
            </Card>

            {/* Workout Types */}
            <Card className="p-6 bg-fitness-surface border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">Workout Distribution</h2>
              <div className="space-y-4">
                {workoutTypes.map((type, index) => (
                  <div key={index} className="flex items-center justify-between">
                    <div className="flex items-center space-x-3">
                      <div className={`w-4 h-4 rounded-full ${type.color}`}></div>
                      <span className="text-foreground">{type.name}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <div className="w-24 h-2 bg-background rounded-full overflow-hidden">
                        <div 
                          className={`h-full ${type.color}`}
                          style={{ width: `${type.percentage}%` }}
                        ></div>
                      </div>
                      <span className="text-sm text-muted-foreground w-12 text-right">
                        {type.percentage}%
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="weight" className="space-y-6">
            <Card className="p-6 bg-fitness-surface border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">Weight Tracking</h2>
              <div className="h-96 bg-background/50 rounded-lg flex items-center justify-center">
                <div className="text-center text-muted-foreground">
                  <TrendingDown className="w-16 h-16 mx-auto mb-4" />
                  <p className="text-lg">Detailed weight chart would go here</p>
                  <p className="text-sm">Track your weight loss/gain progress over time</p>
                </div>
              </div>
            </Card>
          </TabsContent>

          <TabsContent value="workouts" className="space-y-6">
            <Card className="p-6 bg-fitness-surface border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">Recent Activities</h2>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="border-b border-border">
                      <th className="text-left py-3 text-muted-foreground font-medium">Date</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Activity</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Duration</th>
                      <th className="text-left py-3 text-muted-foreground font-medium">Calories</th>
                    </tr>
                  </thead>
                  <tbody>
                    {recentActivities.map((activity, index) => (
                      <tr key={index} className="border-b border-border/50">
                        <td className="py-3 text-foreground font-medium">{activity.date}</td>
                        <td className="py-3 text-foreground">{activity.activity}</td>
                        <td className="py-3 text-muted-foreground">{activity.duration}</td>
                        <td className="py-3 text-fitness-accent font-medium">{activity.calories}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
};

export default Progress;