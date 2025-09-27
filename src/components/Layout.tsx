import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from './Sidebar';
import { Bell, Search } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

const Layout: React.FC = () => {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      
      <div className="md:pl-64 flex flex-col flex-1">
        {/* Top Navigation */}
        <div className="sticky top-0 z-40 flex h-16 flex-shrink-0 items-center gap-x-4 border-b border-border bg-card/50 backdrop-blur-sm px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-8">
          <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
            <div className="relative flex flex-1 items-center">
              <Search className="absolute left-3 h-4 w-4 text-muted-foreground" />
              <Input
                placeholder="Search workouts, exercises..."
                className="pl-10 bg-fitness-surface border-border"
              />
            </div>
            <div className="flex items-center gap-x-4 lg:gap-x-6">
              <Button variant="ghost" size="icon">
                <Bell className="h-5 w-5" />
              </Button>
              
              {/* Profile dropdown */}
              <div className="flex items-center space-x-3">
                <div className="w-8 h-8 bg-fitness-accent rounded-full flex items-center justify-center">
                  <span className="text-sm font-medium text-accent-foreground">SC</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Main content */}
        <main className="flex-1">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;