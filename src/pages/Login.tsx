import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const Login: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    // Simple navigation for demo
    navigate('/');
  };

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <div className="w-full max-w-md space-y-8">
        <div className="text-center">
          <div className="w-16 h-16 bg-brand-yellow rounded-2xl flex items-center justify-center mx-auto mb-4">
            <span className="text-2xl font-bold text-background">F</span>
          </div>
          <h2 className="text-3xl font-bold text-foreground">Welcome to FitTrack</h2>
          <p className="mt-2 text-muted-foreground">Your journey to a healthier you starts now</p>
        </div>

        <form onSubmit={handleLogin} className="space-y-6">
          <div>
            <Label htmlFor="email" className="sr-only">Email address</Label>
            <Input
              id="email"
              type="email"
              placeholder="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="bg-fitness-surface border-border text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>
          
          <div>
            <Label htmlFor="password" className="sr-only">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="bg-fitness-surface border-border text-foreground placeholder:text-muted-foreground"
              required
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-fitness-accent hover:bg-fitness-accent/90 text-accent-foreground font-medium"
          >
            Login
          </Button>
        </form>

        <div className="text-center">
          <p className="text-sm text-muted-foreground">
            Don't have an account?{' '}
            <button className="text-fitness-accent hover:underline font-medium">
              Sign up
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;