import React from 'react';
import { Button } from '@/components/ui/button';
import fitrackLogo from '@/assets/fittrack-logo.png';

const Header: React.FC = () => {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <img src={fitrackLogo} alt="FitTrack" className="w-8 h-8 rounded-lg" />
            <h1 className="text-xl font-bold text-fitness-accent">FitTrack</h1>
          </div>
          
          <nav className="hidden md:flex items-center space-x-6">
            <a href="#dashboard" className="text-foreground hover:text-fitness-accent transition-colors">
              Dashboard
            </a>
            <a href="#workouts" className="text-muted-foreground hover:text-fitness-accent transition-colors">
              Workouts
            </a>
            <a href="#progress" className="text-muted-foreground hover:text-fitness-accent transition-colors">
              Progress
            </a>
          </nav>
          
          <div className="flex items-center space-x-3">
            <Button variant="ghost" size="sm" className="text-muted-foreground hover:text-fitness-accent">
              Profile
            </Button>
            <Button className="btn-primary">
              Start Workout
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;