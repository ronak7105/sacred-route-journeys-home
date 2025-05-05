
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Label } from '@/components/ui/label';
import { LogIn } from 'lucide-react';
import { useToast } from '@/components/ui/use-toast';
import useAuth from '@/hooks/useAuth';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const { toast } = useToast();
  const { login } = useAuth();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    
    // This is a mock authentication - in a real app, you'd connect to a backend
    setTimeout(() => {
      if (email && password) {
        // Use the login method from useAuth
        login(email);
        
        toast({
          title: "Login Successful",
          description: "Welcome back to Sacred Routes!",
        });
        
        navigate('/dashboard');
      } else {
        toast({
          title: "Login Failed",
          description: "Please check your email and password.",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 1500);
  };

  return (
    <Card className="w-full max-w-md shadow-lg">
      <CardHeader className="bg-sacred-primary text-white rounded-t-lg text-center py-8">
        <div className="flex justify-center mb-3">
          <img 
            src="/lovable-uploads/961c35cf-5aa7-44e4-9c4f-998098136bd9.png" 
            alt="Sacred Routes Logo" 
            className="h-14 w-14"
          />
        </div>
        <CardTitle className="text-3xl font-bold">Welcome Back</CardTitle>
        <CardDescription className="text-xl text-white/90 mt-2">
          Sign in to continue your journey
        </CardDescription>
      </CardHeader>
      
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="email" className="text-lg">Email Address</Label>
            <Input 
              id="email" 
              type="email" 
              placeholder="your.email@example.com" 
              className="text-lg p-6" 
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <Label htmlFor="password" className="text-lg">Password</Label>
              <a 
                href="/forgot-password" 
                className="text-sacred-primary hover:underline text-lg"
              >
                Forgot Password?
              </a>
            </div>
            <Input 
              id="password" 
              type="password" 
              placeholder="Enter your password" 
              className="text-lg p-6" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          
          <div className="flex items-center space-x-3">
            <input 
              type="checkbox" 
              id="remember" 
              className="h-6 w-6 rounded border-gray-300 focus:ring-sacred-primary"
              checked={rememberMe}
              onChange={() => setRememberMe(!rememberMe)}
            />
            <Label htmlFor="remember" className="text-lg">Remember me</Label>
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-sacred-primary hover:bg-sacred-primary/90 text-xl py-6"
            disabled={isLoading}
          >
            {isLoading ? (
              <span className="flex items-center">
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Signing In...
              </span>
            ) : (
              <span className="flex items-center justify-center">
                <LogIn className="mr-2 h-5 w-5" /> Sign In
              </span>
            )}
          </Button>
          
          <div className="text-center pt-4">
            <p className="text-lg">
              Don't have an account? <a href="/register" className="text-sacred-primary hover:underline font-medium">Register now</a>
            </p>
          </div>
          
          <div className="relative my-6">
            <div className="absolute inset-0 flex items-center">
              <span className="w-full border-t border-gray-300"></span>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="bg-background px-4 text-muted-foreground text-lg">Or continue with</span>
            </div>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <Button variant="outline" className="text-lg py-6">
              <svg className="h-6 w-6 mr-2" viewBox="0 0 24 24">
                <path
                  d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
                  fill="#4285F4"
                />
                <path
                  d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
                  fill="#34A853"
                />
                <path
                  d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
                  fill="#FBBC05"
                />
                <path
                  d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
                  fill="#EA4335"
                />
              </svg>
              Google
            </Button>
            <Button variant="outline" className="text-lg py-6">
              <svg className="h-6 w-6 mr-2" fill="currentColor" viewBox="0 0 24 24">
                <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" />
              </svg>
              Facebook
            </Button>
          </div>
          
          <div className="text-center text-sm text-muted-foreground pt-4">
            By signing in, you agree to our
            <a href="/terms" className="text-sacred-primary hover:underline ml-1">Terms of Service</a>
            <span className="mx-1">and</span>
            <a href="/privacy" className="text-sacred-primary hover:underline">Privacy Policy</a>
          </div>
        </form>
      </CardContent>
    </Card>
  );
};

export default LoginForm;
