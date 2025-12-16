import { useState, useEffect } from 'react';
import { useNavigate, useSearchParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useAuth } from '@/contexts/AuthContext';
import { useToast } from '@/hooks/use-toast';
import { Eye, EyeOff, Mail, Lock, User, Sparkles, ArrowRight, Chrome } from 'lucide-react';
import { Link } from 'react-router-dom';

const Auth = () => {
  const [searchParams] = useSearchParams();
  const [isLogin, setIsLogin] = useState(searchParams.get('mode') !== 'signup');
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  
  const { login, signup, isAuthenticated } = useAuth();
  const { toast } = useToast();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/create');
    }
  }, [isAuthenticated, navigate]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      if (isLogin) {
        const result = await login(formData.email, formData.password);
        if (result.success) {
          toast({ title: 'Welcome back!', description: 'Successfully logged in.' });
          navigate('/create');
        } else {
          toast({ title: 'Login failed', description: result.error, variant: 'destructive' });
        }
      } else {
        if (!formData.name.trim()) {
          toast({ title: 'Name required', description: 'Please enter your name.', variant: 'destructive' });
          setIsSubmitting(false);
          return;
        }
        const result = await signup(formData.name, formData.email, formData.password);
        if (result.success) {
          toast({ title: 'Account created!', description: 'Welcome to SynkBrands!' });
          navigate('/create');
        } else {
          toast({ title: 'Signup failed', description: result.error, variant: 'destructive' });
        }
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>{isLogin ? 'Login' : 'Sign Up'} - SynkBrands</title>
        <meta name="description" content={isLogin ? 'Log in to your SynkBrands account' : 'Create your free SynkBrands account'} />
      </Helmet>

      <div className="min-h-screen bg-gradient-to-br from-background via-background to-primary/5 flex">
        {/* Left Side - Branding */}
        <div className="hidden lg:flex lg:w-1/2 gradient-bar relative overflow-hidden">
          <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIj48cGF0aCBkPSJNMzYgMzRjMC0yLjIwOSAxLjc5MS00IDQtNHM0IDEuNzkxIDQgNC0xLjc5MSA0LTQgNC00LTEuNzkxLTQtNHptMC0xNmMwLTIuMjA5IDEuNzkxLTQgNC00czQgMS43OTEgNCA0LTEuNzkxIDQtNCA0LTQtMS43OTEtNC00em0wIDE2YzAtMi4yMDkgMS43OTEtNCA0LTRzNCAxLjc5MSA0IDQtMS43OTEgNC00IDQtNC0xLjc5MS00LTR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-20"></div>
          <div className="relative z-10 flex flex-col justify-center px-12 xl:px-20">
            <Link to="/" className="flex items-center gap-3 mb-12">
              <div className="w-12 h-12 rounded-xl bg-white/20 backdrop-blur flex items-center justify-center">
                <Sparkles className="w-6 h-6 text-white" />
              </div>
              <span className="font-display font-bold text-3xl text-white">SynkBrands</span>
            </Link>
            
            <h1 className="text-4xl xl:text-5xl font-display font-bold text-white mb-6 leading-tight">
              Create stunning content with AI
            </h1>
            <p className="text-xl text-white/80 mb-8 max-w-md">
              Join 500,000+ marketers using AI to generate ads, videos, and social media content that converts.
            </p>
            
            <div className="space-y-4">
              {['Generate ads in seconds', 'AI-powered video creation', 'Schedule across all platforms'].map((feature, i) => (
                <div key={i} className="flex items-center gap-3 text-white/90">
                  <div className="w-6 h-6 rounded-full bg-white/20 flex items-center justify-center">
                    <ArrowRight className="w-4 h-4" />
                  </div>
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Right Side - Form */}
        <div className="flex-1 flex items-center justify-center p-8">
          <div className="w-full max-w-md">
            <div className="lg:hidden mb-8">
              <Link to="/" className="flex items-center gap-2 justify-center">
                <div className="w-10 h-10 rounded-lg gradient-bar flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-white" />
                </div>
                <span className="font-display font-bold text-2xl text-foreground">SynkBrands</span>
              </Link>
            </div>

            <div className="text-center mb-8">
              <h2 className="text-3xl font-display font-bold text-foreground mb-2">
                {isLogin ? 'Welcome back' : 'Create your account'}
              </h2>
              <p className="text-muted-foreground">
                {isLogin ? "Sign in to continue creating amazing content" : "Start creating AI-powered content for free"}
              </p>
            </div>

            {/* Social Login */}
            <Button variant="outline" className="w-full mb-6 h-12 text-base" disabled>
              <Chrome className="w-5 h-5 mr-2" />
              Continue with Google
            </Button>

            <div className="relative mb-6">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-border"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-4 bg-background text-muted-foreground">or continue with email</span>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="space-y-5">
              {!isLogin && (
                <div className="space-y-2">
                  <Label htmlFor="name" className="text-foreground">Full Name</Label>
                  <div className="relative">
                    <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                    <Input
                      id="name"
                      type="text"
                      placeholder="John Doe"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="pl-10 h-12"
                    />
                  </div>
                </div>
              )}

              <div className="space-y-2">
                <Label htmlFor="email" className="text-foreground">Email</Label>
                <div className="relative">
                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="email"
                    type="email"
                    placeholder="you@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="pl-10 h-12"
                    required
                  />
                </div>
              </div>

              <div className="space-y-2">
                <Label htmlFor="password" className="text-foreground">Password</Label>
                <div className="relative">
                  <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                  <Input
                    id="password"
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={formData.password}
                    onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                    className="pl-10 pr-10 h-12"
                    required
                    minLength={6}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground"
                  >
                    {showPassword ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
                  </button>
                </div>
              </div>

              {isLogin && (
                <div className="flex justify-end">
                  <a href="#" className="text-sm text-primary hover:underline">Forgot password?</a>
                </div>
              )}

              <Button type="submit" variant="hero" className="w-full h-12 text-base" disabled={isSubmitting}>
                {isSubmitting ? 'Please wait...' : isLogin ? 'Sign In' : 'Create Account'}
              </Button>
            </form>

            <p className="text-center mt-6 text-muted-foreground">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}{' '}
              <button
                onClick={() => setIsLogin(!isLogin)}
                className="text-primary font-medium hover:underline"
              >
                {isLogin ? 'Sign up free' : 'Sign in'}
              </button>
            </p>

            {!isLogin && (
              <p className="text-center mt-4 text-xs text-muted-foreground">
                By signing up, you agree to our{' '}
                <a href="#" className="underline">Terms of Service</a> and{' '}
                <a href="#" className="underline">Privacy Policy</a>
              </p>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Auth;