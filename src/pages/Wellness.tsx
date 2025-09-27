import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Play, Volume2, Headphones } from 'lucide-react';

const Wellness: React.FC = () => {
  const guidedMeditations = [
    {
      title: 'Morning Mindfulness',
      description: 'Start your day with clarity',
      duration: '10 min',
      image: '🌅',
      color: 'from-orange-500/20 to-yellow-500/20'
    },
    {
      title: 'Evening Relaxation',
      description: 'Unwind and prepare for rest',
      duration: '15 min',
      image: '🌄',
      color: 'from-purple-500/20 to-blue-500/20'
    },
    {
      title: 'Stress Relief',
      description: 'Find calm in moments of stress',
      duration: '8 min',
      image: '☁️',
      color: 'from-blue-500/20 to-teal-500/20'
    }
  ];

  const calmingSounds = [
    {
      title: 'Rainy Day',
      description: 'Gentle rain for relaxation',
      icon: '🌧️'
    },
    {
      title: 'Ocean Waves',
      description: 'Soothing waves to calm your mind',
      icon: '🌊'
    },
    {
      title: 'Forest Sounds',
      description: 'Nature for a peaceful atmosphere',
      icon: '🌲'
    }
  ];

  const mindfulnessExercises = [
    {
      title: 'Breathing Exercise',
      description: 'Practice deep breathing to become centered',
      icon: '💨'
    },
    {
      title: 'Body Scan',
      description: 'Scan your body for tension and release it',
      icon: '🧘'
    },
    {
      title: 'Gratitude Journal',
      description: 'Reflect on things you are grateful for',
      icon: '📝'
    }
  ];

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-foreground mb-4">Find Your Inner Peace</h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover a sanctuary of calm. Our guided meditations, soothing sounds, and mindfulness 
            exercises are designed to bring tranquility to your life.
          </p>
        </div>

        {/* Guided Meditations */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-fitness-accent rounded-full flex items-center justify-center">
                <span className="text-xs text-accent-foreground">🧘</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground">Guided Meditations</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {guidedMeditations.map((meditation, index) => (
              <Card key={index} className="overflow-hidden bg-fitness-surface border-border">
                <div className={`h-32 bg-gradient-to-br ${meditation.color} flex items-center justify-center text-4xl`}>
                  {meditation.image}
                </div>
                <div className="p-6">
                  <h3 className="text-lg font-semibold text-foreground mb-2">{meditation.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{meditation.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-xs text-muted-foreground">{meditation.duration}</span>
                    <Button size="sm" className="bg-fitness-accent hover:bg-fitness-accent/90 text-accent-foreground">
                      <Play className="w-3 h-3 mr-1" />
                      Play
                    </Button>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Calming Sounds */}
        <section className="mb-12">
          <div className="flex items-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-fitness-accent rounded-full flex items-center justify-center">
                <Volume2 className="w-3 h-3 text-accent-foreground" />
              </div>
              <h2 className="text-2xl font-bold text-foreground">Calming Sounds</h2>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {calmingSounds.map((sound, index) => (
              <Card key={index} className="p-6 bg-fitness-surface border-border text-center">
                <div className="text-6xl mb-4">{sound.icon}</div>
                <h3 className="text-lg font-semibold text-foreground mb-2">{sound.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">{sound.description}</p>
                <Button className="bg-fitness-accent hover:bg-fitness-accent/90 text-accent-foreground">
                  <Headphones className="w-4 h-4 mr-2" />
                  Listen
                </Button>
              </Card>
            ))}
          </div>
        </section>

        {/* Mindfulness Exercises */}
        <section>
          <div className="flex items-center mb-6">
            <div className="flex items-center space-x-2">
              <div className="w-6 h-6 bg-fitness-accent rounded-full flex items-center justify-center">
                <span className="text-xs text-accent-foreground">✨</span>
              </div>
              <h2 className="text-2xl font-bold text-foreground">Mindfulness Exercises</h2>
            </div>
          </div>
          
          <div className="space-y-4">
            {mindfulnessExercises.map((exercise, index) => (
              <Card key={index} className="p-6 bg-fitness-surface border-border">
                <div className="flex items-center justify-between">
                  <div className="flex items-center space-x-4">
                    <div className="text-2xl">{exercise.icon}</div>
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">{exercise.title}</h3>
                      <p className="text-muted-foreground text-sm">{exercise.description}</p>
                    </div>
                  </div>
                  <Button 
                    variant="outline" 
                    className="border-fitness-accent text-fitness-accent hover:bg-fitness-accent hover:text-accent-foreground"
                  >
                    Start
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default Wellness;