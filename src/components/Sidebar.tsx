import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  LayoutDashboard, 
  Dumbbell, 
  UtensilsCrossed, 
  TrendingUp, 
  Brain, 
  Settings,
  User
} from 'lucide-react';

const navigation = [
  { name: 'Dashboard', href: '/', icon: LayoutDashboard },
  { name: 'Workouts', href: '/workouts', icon: Dumbbell },
  { name: 'Diet', href: '/diet', icon: UtensilsCrossed },
  { name: 'Progress', href: '/progress', icon: TrendingUp },
  { name: 'Wellness', href: '/wellness', icon: Brain },
  { name: 'Profile', href: '/profile', icon: User },
  { name: 'Settings', href: '/settings', icon: Settings },
];

const Sidebar: React.FC = () => {
  return (
    <div className="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <div className="flex min-h-0 flex-1 flex-col bg-fitness-surface border-r border-border">
        <div className="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <div className="flex flex-shrink-0 items-center px-4">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 bg-brand-yellow rounded-lg flex items-center justify-center">
                <span className="text-background font-bold">F</span>
              </div>
              <span className="text-xl font-bold text-fitness-accent">FitTrack</span>
            </div>
          </div>
          <nav className="mt-8 flex-1 space-y-1 px-2">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.href}
                className={({ isActive }) =>
                  `group flex items-center px-2 py-2 text-sm font-medium rounded-md transition-colors ${
                    isActive
                      ? 'bg-fitness-accent text-accent-foreground'
                      : 'text-muted-foreground hover:bg-fitness-surface-hover hover:text-foreground'
                  }`
                }
              >
                <item.icon className="mr-3 h-5 w-5 flex-shrink-0" />
                {item.name}
              </NavLink>
            ))}
          </nav>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;