import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { 
  User, 
  Camera, 
  Bell, 
  Shield, 
  Smartphone,
  LogOut,
  ChevronRight
} from 'lucide-react';

const Settings: React.FC = () => {
  const profileSettings = [
    {
      title: 'Personal Information',
      description: 'Manage your personal details',
      icon: User,
      color: 'bg-blue-500'
    },
    {
      title: 'Profile Picture',
      description: 'Update your profile picture',
      icon: Camera,
      color: 'bg-fitness-accent'
    }
  ];

  const notificationSettings = [
    {
      title: 'Notification Preferences',
      description: 'Control how you receive notifications',
      icon: Bell,
      color: 'bg-yellow-500'
    }
  ];

  const privacySettings = [
    {
      title: 'Privacy Settings',
      description: 'Manage your privacy and data sharing',
      icon: Shield,
      color: 'bg-green-500'
    }
  ];

  const integrationSettings = [
    {
      title: 'App Integrations',
      description: 'Connect with other fitness apps',
      icon: Smartphone,
      color: 'bg-purple-500'
    }
  ];

  const SettingSection = ({ 
    title, 
    settings 
  }: { 
    title: string; 
    settings: typeof profileSettings;
  }) => (
    <Card className="p-6 bg-fitness-surface border-border">
      <h2 className="text-xl font-semibold text-foreground mb-4">{title}</h2>
      <div className="space-y-3">
        {settings.map((setting, index) => (
          <div
            key={index}
            className="flex items-center justify-between p-4 rounded-lg bg-background/50 hover:bg-fitness-surface-hover transition-colors cursor-pointer"
          >
            <div className="flex items-center space-x-4">
              <div className={`w-10 h-10 rounded-full ${setting.color} flex items-center justify-center text-white`}>
                <setting.icon className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-medium text-foreground">{setting.title}</h3>
                <p className="text-sm text-muted-foreground">{setting.description}</p>
              </div>
            </div>
            <ChevronRight className="w-5 h-5 text-muted-foreground" />
          </div>
        ))}
      </div>
    </Card>
  );

  return (
    <div className="px-4 sm:px-6 lg:px-8 py-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="flex items-center mb-8">
          <div className="w-12 h-12 bg-fitness-accent rounded-full flex items-center justify-center text-accent-foreground text-lg font-bold mr-4">
            SC
          </div>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Settings</h1>
            <p className="text-muted-foreground">Sophia Carter</p>
          </div>
        </div>

        <div className="space-y-8">
          {/* Profile Settings */}
          <SettingSection title="Profile" settings={profileSettings} />

          {/* Notifications */}
          <SettingSection title="Notifications" settings={notificationSettings} />

          {/* Privacy */}
          <SettingSection title="Privacy" settings={privacySettings} />

          {/* Integrations */}
          <SettingSection title="Integrations" settings={integrationSettings} />

          {/* Account Actions */}
          <Card className="p-6 bg-fitness-surface border-border">
            <h2 className="text-xl font-semibold text-foreground mb-4">Account</h2>
            
            <div className="space-y-3">
              <Button
                variant="outline"
                className="w-full justify-start border-border text-foreground hover:bg-fitness-surface-hover"
              >
                <User className="w-4 h-4 mr-3" />
                Account Information
              </Button>
              
              <Button
                variant="outline"
                className="w-full justify-start border-border text-foreground hover:bg-fitness-surface-hover"
              >
                <Shield className="w-4 h-4 mr-3" />
                Privacy Policy
              </Button>
              
              <Separator className="my-4" />
              
              <Button
                variant="outline"
                className="w-full justify-start border-destructive text-destructive hover:bg-destructive hover:text-destructive-foreground"
              >
                <LogOut className="w-4 h-4 mr-3" />
                Log Out
              </Button>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Settings;