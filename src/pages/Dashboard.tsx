import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { 
  Dumbbell, 
  UtensilsCrossed, 
  Heart, 
  TrendingUp,
  MapPin,
  Play,
  Quote
} from 'lucide-react';

const Dashboard: React.FC = () => {
  const features = [
    {
      title: 'Workout Tracker',
      description: 'Log your workouts, track your exercises and monitor progress',
      icon: Dumbbell,
      color: 'bg-blue-500/10 text-blue-400'
    },
    {
      title: 'Diet Planner',
      description: 'Plan meals, track calories, and maintain a balanced diet',
      icon: UtensilsCrossed,
      color: 'bg-green-500/10 text-green-400'
    },
    {
      title: 'Meditation & Wellness',
      description: 'Find inner peace with guided meditations and mindfulness',
      icon: Heart,
      color: 'bg-purple-500/10 text-purple-400'
    },
    {
      title: 'Progress Stats',
      description: 'Visualize your journey and celebrate your achievements',
      icon: TrendingUp,
      color: 'bg-orange-500/10 text-orange-400'
    }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-7xl mx-auto">
        {/* Welcome Section */}
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">
            Welcome to <span className="text-fitness-accent">FitTrack</span>
          </h1>
          <p className="text-muted-foreground">Your personal fitness journey starts here</p>
        </div>

        {/* Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {features.map((feature, index) => (
            <Card key={index} className="p-6 bg-fitness-surface border-border hover:bg-fitness-surface-hover transition-colors cursor-pointer">
              <div className={`w-12 h-12 rounded-lg ${feature.color} flex items-center justify-center mb-4`}>
                <feature.icon className="w-6 h-6" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">{feature.title}</h3>
              <p className="text-sm text-muted-foreground">{feature.description}</p>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Find Gyms Section */}
          <Card className="p-6 bg-fitness-surface border-border">
            <div className="flex items-center mb-4">
              <MapPin className="w-5 h-5 text-fitness-accent mr-2" />
              <h2 className="text-xl font-semibold text-foreground">Find Gyms Nearby</h2>
            </div>
            
            <div className="bg-muted rounded-lg h-48 mb-4 flex items-center justify-center">
              <div className="text-center">
                <MapPin className="w-12 h-12 text-muted-foreground mx-auto mb-2" />
                <p className="text-muted-foreground">Interactive map would go here</p>
              </div>
            </div>
            
            <Button className="w-full bg-fitness-accent hover:bg-fitness-accent/90 text-accent-foreground">
              Search Area
            </Button>
          </Card>

          {/* Motivation Section */}
          <Card className="p-6 bg-fitness-surface border-border">
            <h2 className="text-xl font-semibold text-foreground mb-4">Motivation</h2>
            
            <div className="bg-gradient-to-br from-fitness-accent/20 to-purple-500/20 rounded-lg p-6 text-center">
              <Quote className="w-8 h-8 text-fitness-accent mx-auto mb-4" />
              <blockquote className="text-lg font-medium text-foreground mb-2">
                "DO YOU NOT THINK YOU ARE TALKING, BUTTERCUP."
              </blockquote>
              <p className="text-sm text-muted-foreground">
                The only bad workout is the one that didn't happen. Keep pushing forward!
              </p>
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground mb-2">Jane Doe</p>
              <p className="text-xs text-muted-foreground">Premium User</p>
            </div>
          </Card>
        </div>

        {/* Quick Actions */}
        <div className="mt-8 flex flex-wrap gap-4 justify-center">
          <Button className="bg-fitness-accent hover:bg-fitness-accent/90 text-accent-foreground">
            <Play className="w-4 h-4 mr-2" />
            Start Workout
          </Button>
          <Button variant="outline" className="border-border text-foreground hover:bg-fitness-surface-hover">
            Log Meal
          </Button>
          <Button variant="outline" className="border-border text-foreground hover:bg-fitness-surface-hover">
            View Progress
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;