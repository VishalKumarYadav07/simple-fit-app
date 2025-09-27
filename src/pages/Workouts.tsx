import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Timer, Zap, Heart, Plus, Play, Pause, Square } from 'lucide-react';

const Workouts: React.FC = () => {
  const [isTracking, setIsTracking] = useState(false);
  const [timer, setTimer] = useState('00:28:14');
  const [calories, setCalories] = useState(182);
  const [heartRate, setHeartRate] = useState(124);

  const exercises = [
    { name: 'Push-ups', sets: 3, reps: 15, weight: null },
    { name: 'Squats', sets: 4, reps: 12, weight: null },
    { name: 'Bench Press', sets: 3, reps: 10, weight: '70kg' },
    { name: 'Deadlifts', sets: 3, reps: 8, weight: '80kg' }
  ];

  const handleStartWorkout = () => {
    setIsTracking(true);
  };

  const handlePauseWorkout = () => {
    setIsTracking(false);
  };

  const handleStopWorkout = () => {
    setIsTracking(false);
    // Reset workout data
  };

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-foreground mb-2">Track Workout</h1>
          <p className="text-muted-foreground">Start a new workout or continue a previous one</p>
        </div>

        {/* Workout Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
          <Card className="p-6 bg-fitness-surface border-border">
            <div className="flex items-center justify-between mb-2">
              <Timer className="w-5 h-5 text-fitness-accent" />
              <span className="text-sm text-muted-foreground">Time</span>
            </div>
            <div className="text-3xl font-bold text-foreground">{timer}</div>
          </Card>

          <Card className="p-6 bg-fitness-surface border-border">
            <div className="flex items-center justify-between mb-2">
              <Zap className="w-5 h-5 text-orange-400" />
              <span className="text-sm text-muted-foreground">Calories Burned</span>
            </div>
            <div className="text-3xl font-bold text-foreground">{calories}</div>
          </Card>

          <Card className="p-6 bg-fitness-surface border-border">
            <div className="flex items-center justify-between mb-2">
              <Heart className="w-5 h-5 text-red-400" />
              <span className="text-sm text-muted-foreground">Heart Rate</span>
            </div>
            <div className="text-3xl font-bold text-foreground">{heartRate} <span className="text-sm text-muted-foreground">bpm</span></div>
          </Card>
        </div>

        {/* Exercise Logger */}
        <Card className="p-6 bg-fitness-surface border-border mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Log Exercise</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-4">
            <Select>
              <SelectTrigger className="bg-background border-border">
                <SelectValue placeholder="Select Exercise" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="pushups">Push-ups</SelectItem>
                <SelectItem value="squats">Squats</SelectItem>
                <SelectItem value="bench">Bench Press</SelectItem>
                <SelectItem value="deadlift">Deadlifts</SelectItem>
              </SelectContent>
            </Select>
            
            <Input placeholder="Sets" className="bg-background border-border" />
            <Input placeholder="Reps" className="bg-background border-border" />
            <Input placeholder="Weight (kg)" className="bg-background border-border" />
          </div>
          
          <Button className="bg-fitness-accent hover:bg-fitness-accent/90 text-accent-foreground">
            <Plus className="w-4 h-4 mr-2" />
            Add Exercise
          </Button>
        </Card>

        {/* Current Exercises */}
        <Card className="p-6 bg-fitness-surface border-border mb-8">
          <h2 className="text-xl font-semibold text-foreground mb-4">Today's Exercises</h2>
          
          <div className="space-y-3">
            {exercises.map((exercise, index) => (
              <div key={index} className="flex items-center justify-between p-3 bg-background/50 rounded-lg">
                <div>
                  <h4 className="font-medium text-foreground">{exercise.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {exercise.sets} sets × {exercise.reps} reps
                    {exercise.weight && ` @ ${exercise.weight}`}
                  </p>
                </div>
                <Button variant="outline" size="sm" className="border-border text-muted-foreground">
                  Edit
                </Button>
              </div>
            ))}
          </div>
        </Card>

        {/* Workout Controls */}
        <Card className="p-6 bg-fitness-surface border-border">
          <h2 className="text-xl font-semibold text-foreground mb-4">Workout Controls</h2>
          
          <div className="flex gap-4">
            {!isTracking ? (
              <Button 
                onClick={handleStartWorkout}
                className="flex-1 bg-fitness-accent hover:bg-fitness-accent/90 text-accent-foreground"
              >
                <Play className="w-4 h-4 mr-2" />
                Start Workout
              </Button>
            ) : (
              <Button 
                onClick={handlePauseWorkout}
                className="flex-1 bg-fitness-accent hover:bg-fitness-accent/90 text-accent-foreground"
              >
                <Pause className="w-4 h-4 mr-2" />
                Pause Workout
              </Button>
            )}
            
            <Button 
              variant="outline" 
              className="flex-1 border-border text-foreground hover:bg-destructive hover:text-destructive-foreground"
              onClick={handleStopWorkout}
            >
              <Square className="w-4 h-4 mr-2" />
              Stop Workout
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Workouts;