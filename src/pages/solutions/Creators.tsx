import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Users, Video, Image, Mic, Calendar, TrendingUp, Sparkles,
  Heart, Share2, MessageCircle, Play, ArrowRight, CheckCircle2,
  Instagram, Youtube, Twitter, Music, Zap, Star, Crown, Award
} from 'lucide-react';

const features = [
  {
    icon: Video,
    title: 'AI Video Creator',
    description: 'Create engaging Reels, TikToks, and YouTube Shorts with AI-generated scripts, voiceovers, and effects.'
  },
  {
    icon: Image,
    title: 'Thumbnail Generator',
    description: 'Design click-worthy thumbnails that boost your video views and engagement rates.'
  },
  {
    icon: Calendar,
    title: 'Content Calendar',
    description: 'Plan your content strategy weeks in advance with our AI-powered scheduling suggestions.'
  },
  {
    icon: Mic,
    title: 'AI Voiceovers',
    description: 'Generate professional voiceovers in multiple languages and styles for your videos.'
  },
  {
    icon: TrendingUp,
    title: 'Trend Analysis',
    description: 'Stay ahead with AI insights on trending topics, hashtags, and content formats.'
  },
  {
    icon: Music,
    title: 'Royalty-Free Music',
    description: 'Access thousands of trending sounds and music tracks for your content.'
  }
];

const platforms = [
  { name: 'Instagram', icon: Instagram, followers: '1M+' },
  { name: 'YouTube', icon: Youtube, followers: '500K+' },
  { name: 'TikTok', icon: Video, followers: '2M+' },
  { name: 'Twitter', icon: Twitter, followers: '300K+' }
];

const creatorTypes = [
  {
    title: 'Influencers',
    description: 'Build your personal brand with consistent, on-brand content across all platforms',
    icon: Star
  },
  {
    title: 'Coaches & Educators',
    description: 'Create educational content, course promos, and engagement posts effortlessly',
    icon: Award
  },
  {
    title: 'Content Creators',
    description: 'Scale your content production without sacrificing quality or burning out',
    icon: Zap
  },
  {
    title: 'Podcasters',
    description: 'Turn episodes into clips, quotes, and promotional content automatically',
    icon: Mic
  }
];

const testimonials = [
  {
    quote: "I went from posting twice a week to daily content without spending more time. Game changer!",
    author: "Maya Rodriguez",
    role: "Lifestyle Creator, 850K followers",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&h=100&fit=crop"
  },
  {
    quote: "The AI understands my brand voice perfectly. My engagement has never been higher.",
    author: "Jake Thompson",
    role: "Fitness Coach, 1.2M followers",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop"
  }
];

const Creators = () => {
  return (
    <>
      <Helmet>
        <title>For Creators & Coaches - SynkBrands | Grow Your Audience</title>
        <meta name="description" content="Create engaging content for Instagram, TikTok, YouTube, and more with SynkBrands AI. Perfect for influencers, coaches, and content creators." />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-background to-accent/5" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="flex items-center gap-2 mb-6">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                    <Users className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary">For Creators</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Create Content That <span className="gradient-text">Goes Viral</span>
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  Stop spending hours creating content. Let AI help you produce scroll-stopping 
                  videos, posts, and graphics that grow your audience.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/auth?mode=signup">
                    <Button variant="hero" size="lg" className="rounded-full">
                      Start Creating Free
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="rounded-full">
                    <Play className="w-5 h-5 mr-2" />
                    Watch Demo
                  </Button>
                </div>
              </div>
              <div className="relative">
                {/* Mockup of social content */}
                <div className="relative max-w-sm mx-auto">
                  <div className="bg-card rounded-3xl border border-border p-4 shadow-xl">
                    <div className="aspect-[9/16] rounded-2xl bg-gradient-to-br from-pink-500 via-purple-500 to-blue-500 flex items-center justify-center relative overflow-hidden">
                      <div className="absolute inset-0 flex items-center justify-center">
                        <Play className="w-16 h-16 text-white/80" />
                      </div>
                      <div className="absolute bottom-4 left-4 right-4">
                        <p className="text-white text-sm font-medium mb-2">Your next viral video</p>
                        <div className="flex items-center gap-4 text-white/80 text-xs">
                          <span className="flex items-center gap-1"><Heart className="w-4 h-4" /> 24.5K</span>
                          <span className="flex items-center gap-1"><MessageCircle className="w-4 h-4" /> 1.2K</span>
                          <span className="flex items-center gap-1"><Share2 className="w-4 h-4" /> 892</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* Floating stats */}
                  <div className="absolute -top-4 -right-4 bg-background rounded-xl p-3 shadow-lg border border-border">
                    <div className="flex items-center gap-2">
                      <TrendingUp className="w-5 h-5 text-green-500" />
                      <span className="text-sm font-bold text-foreground">+340% views</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Creator Types */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4">
                Built for Every Type of Creator
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {creatorTypes.map((type, index) => (
                <div key={index} className="bg-background rounded-2xl p-6 border border-border text-center hover:border-primary/50 transition-all">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <type.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Everything You Need to Grow
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From idea to published post in minutes. All the tools creators need in one place.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="bg-card rounded-2xl p-6 border border-border hover:border-primary/50 transition-all hover:shadow-lg">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Video Creation Demo */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Create Videos in Minutes, Not Hours
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Just describe your video idea and watch our AI create scripts, select clips, 
                  add music, and generate voiceovers. Perfect for Reels, TikToks, and Shorts.
                </p>
                <ul className="space-y-4">
                  {[
                    'AI generates engaging scripts from your ideas',
                    'Automatic clip selection and b-roll',
                    'Professional voiceovers in 20+ languages',
                    'Trending music and sound effects',
                    'Auto-captions and text overlays'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/create" className="mt-8 inline-block">
                  <Button variant="hero" size="lg" className="rounded-full">
                    Try Video Creator
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="bg-card rounded-2xl border border-border p-6 shadow-xl">
                <div className="space-y-4">
                  <div className="p-4 bg-secondary rounded-xl">
                    <p className="text-sm text-muted-foreground mb-2">Your Prompt</p>
                    <p className="text-foreground">"Create a motivational morning routine video for fitness enthusiasts"</p>
                  </div>
                  <div className="flex items-center justify-center py-8">
                    <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center animate-pulse">
                      <Sparkles className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-2">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="aspect-video rounded-lg bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Play className="w-6 h-6 text-primary" />
                      </div>
                    ))}
                  </div>
                  <p className="text-center text-sm text-muted-foreground">3 variations generated in 45 seconds</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Loved by Creators Worldwide
              </h2>
            </div>
            <div className="grid md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-card rounded-2xl p-8 border border-border">
                  <p className="text-lg text-foreground mb-6 italic">"{testimonial.quote}"</p>
                  <div className="flex items-center gap-4">
                    <img 
                      src={testimonial.avatar} 
                      alt={testimonial.author}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div>
                      <p className="font-semibold text-foreground">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Create Like a Pro?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of creators already using SynkBrands to grow their audience and engagement.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/auth?mode=signup">
                <Button variant="hero" size="lg" className="rounded-full">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/create">
                <Button variant="outline" size="lg" className="rounded-full">
                  Try Demo
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
};

export default Creators;
