import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Megaphone, Zap, Target, TrendingUp, Sparkles, CheckCircle2, Play, ArrowRight, BarChart3, Globe, Layers, RefreshCw } from 'lucide-react';

const features = [
  { icon: Zap, title: 'Instant Ad Generation', description: 'Create professional ads in seconds with AI-powered automation' },
  { icon: Target, title: 'Platform Optimized', description: 'Auto-optimized for Facebook, Instagram, LinkedIn, TikTok & more' },
  { icon: TrendingUp, title: '1.5x Higher ROAS', description: 'AI-crafted copy and visuals that drive better conversions' },
  { icon: Layers, title: 'Multiple Formats', description: 'Generate single images, carousels, stories, and video ads' },
  { icon: Globe, title: 'Multi-Language', description: 'Create ads in 30+ languages for global campaigns' },
  { icon: RefreshCw, title: 'A/B Variations', description: 'Generate multiple ad variations for testing' },
];

const platforms = ['Facebook', 'Instagram', 'LinkedIn', 'TikTok', 'Pinterest', 'YouTube', 'Twitter/X', 'Google'];

const AIAdGenerator = () => {
  return (
    <>
      <Helmet>
        <title>AI Ad Generator - Create High-Converting Ads in Seconds | SynkBrands</title>
        <meta name="description" content="Generate professional ad creatives with AI. Create Facebook, Instagram, LinkedIn, and TikTok ads that convert. 1.5x better ROAS guaranteed." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
                  <Megaphone className="w-4 h-4" />
                  AI Ad Generator
                </div>
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                  Create <span className="text-gradient">winning ads</span> that convert
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  Generate scroll-stopping ad creatives for all platforms. AI-powered copy, visuals, and CTAs optimized for maximum conversions.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Link to="/create/ad">
                    <Button variant="hero" size="lg" className="rounded-full">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Create Ad Free
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="rounded-full">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </div>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    No credit card required
                  </span>
                  <span className="flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" />
                    10 free ads/month
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 gradient-bar opacity-20 blur-3xl rounded-full"></div>
                <div className="relative bg-card rounded-2xl border border-border p-6 shadow-2xl">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl flex items-center justify-center mb-4">
                    <div className="text-center p-8">
                      <Megaphone className="w-16 h-16 text-primary mx-auto mb-4" />
                      <p className="text-lg font-medium text-foreground">AI-Generated Ad Preview</p>
                      <p className="text-sm text-muted-foreground mt-2">Your ad will appear here</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="aspect-square bg-secondary rounded-lg animate-pulse"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Platforms Section */}
        <section className="py-16 border-y border-border bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-muted-foreground mb-8">Create ads optimized for all major platforms</p>
            <div className="flex flex-wrap justify-center gap-6">
              {platforms.map((platform) => (
                <div key={platform} className="px-6 py-3 bg-background rounded-full border border-border text-foreground font-medium">
                  {platform}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Everything you need for ad creation
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From concept to conversion-ready ads in minutes, not hours
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl gradient-bar flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works */}
        <section className="py-20 lg:py-32 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Create ads in 3 simple steps
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Describe Your Product', description: 'Enter your product/service details or paste a URL. AI extracts key selling points.' },
                { step: '2', title: 'AI Generates Options', description: 'Get multiple ad variations with copy, visuals, and CTAs optimized for your platform.' },
                { step: '3', title: 'Export & Launch', description: 'Download in any format or publish directly to your ad accounts.' },
              ].map((item, index) => (
                <div key={index} className="relative">
                  <div className="text-8xl font-display font-bold text-primary/10 absolute -top-4 -left-2">{item.step}</div>
                  <div className="relative pt-12">
                    <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                    <p className="text-muted-foreground">{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Ready to create ads that convert?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join 500,000+ marketers using SynkBrands to generate high-performing ads
            </p>
            <Link to="/create/ad">
              <Button variant="hero" size="lg" className="rounded-full">
                Start Creating Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
};

export default AIAdGenerator;