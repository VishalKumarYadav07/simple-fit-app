import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Progress } from '@/components/ui/progress';
import { Plus, Utensils } from 'lucide-react';

const Diet: React.FC = () => {
  const todaysIntake = [
    { meal: 'Breakfast: Oatmeal with Berries', calories: 300, time: '8:00 AM' },
    { meal: 'Lunch: Grilled Chicken Salad', calories: 450, time: '12:30 PM' },
    { meal: 'Dinner: Salmon with Roasted Vegetables', calories: 550, time: '7:00 PM' },
    { meal: 'Snacks: Apple slices with Almond Butter', calories: 200, time: '3:00 PM' }
  ];

  const macros = [
    { name: 'Calories', current: 1500, target: 1800, unit: 'kcal', color: 'bg-fitness-accent' },
    { name: 'Protein', current: 100, target: 120, unit: 'g', color: 'bg-red-500' },
    { name: 'Carbs', current: 200, target: 250, unit: 'g', color: 'bg-yellow-500' },
    { name: 'Fat', current: 75, target: 100, unit: 'g', color: 'bg-purple-500' }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Diet Planner</h1>
          <p className="text-muted-foreground">Track your nutrition and maintain a balanced diet</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Log Your Food */}
          <div className="lg:col-span-2">
            <Card className="p-6 bg-fitness-surface border-border mb-6">
              <div className="flex items-center justify-between mb-4">
                <h2 className="text-xl font-semibold text-foreground">Log Your Food</h2>
                <Button className="bg-fitness-accent hover:bg-fitness-accent/90 text-accent-foreground">
                  <Plus className="w-4 h-4 mr-2" />
                  Add Food
                </Button>
              </div>
              
              <div className="text-center py-8 text-muted-foreground">
                <Utensils className="w-12 h-12 mx-auto mb-4 opacity-50" />
                <p>Start logging your meals to track your nutrition</p>
              </div>
            </Card>

            {/* Today's Intake */}
            <Card className="p-6 bg-fitness-surface border-border">
              <h2 className="text-xl font-semibold text-foreground mb-4">Today's Intake</h2>
              
              <div className="space-y-4">
                {todaysIntake.map((item, index) => (
                  <div key={index} className="flex items-center justify-between p-4 bg-background/50 rounded-lg">
                    <div>
                      <h4 className="font-medium text-foreground">{item.meal}</h4>
                      <p className="text-sm text-muted-foreground">{item.time}</p>
                    </div>
                    <div className="text-right">
                      <div className="font-semibold text-foreground">{item.calories} kcal</div>
                    </div>
                  </div>
                ))}
              </div>
            </Card>
          </div>

          {/* Daily Summary */}
          <div>
            <Card className="p-6 bg-fitness-surface border-border">
              <h2 className="text-xl font-semibold text-foreground mb-6">Daily Summary</h2>
              
              <div className="space-y-6">
                {macros.map((macro, index) => (
                  <div key={index}>
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-medium text-foreground">{macro.name}</span>
                      <span className="text-sm text-muted-foreground">
                        {macro.current}/{macro.target} {macro.unit}
                      </span>
                    </div>
                    <Progress 
                      value={(macro.current / macro.target) * 100} 
                      className="h-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>{Math.round((macro.current / macro.target) * 100)}%</span>
                      <span>{macro.target - macro.current} {macro.unit} remaining</span>
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-8 p-4 bg-fitness-accent/10 rounded-lg border border-fitness-accent/20">
                <h3 className="font-semibold text-fitness-accent mb-2">Today's Goal</h3>
                <p className="text-sm text-muted-foreground">
                  You're on track! Keep up the great work with your nutrition goals.
                </p>
              </div>
            </Card>
          </div>
        </div>

        {/* Quick Add Section */}
        <Card className="p-6 bg-fitness-surface border-border mt-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Quick Add</h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Breakfast', 'Lunch', 'Dinner', 'Snacks'].map((meal) => (
              <Button 
                key={meal} 
                variant="outline" 
                className="h-16 border-border text-foreground hover:bg-fitness-surface-hover"
              >
                <div className="text-center">
                  <div className="text-lg mb-1">+</div>
                  <div className="text-sm">{meal}</div>
                </div>
              </Button>
            ))}
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Diet;