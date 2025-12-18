import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Zap, Film, Download, Music, Video, Wand2, ShoppingBag, Smartphone, BookOpen, Clapperboard, Play } from 'lucide-react';
import aiVideoFeature from '@/assets/ai-video-feature.png';

const features = [
  { icon: Film, title: 'AI Video Creation', description: 'Generate professional videos from text descriptions or product images.' },
  { icon: Music, title: 'Auto Soundtrack', description: 'AI selects and syncs royalty-free music to your video content.' },
  { icon: Wand2, title: 'Smart Transitions', description: 'Professional transitions and effects applied automatically.' },
  { icon: Download, title: 'Multiple Formats', description: 'Export in MP4, MOV, or GIF optimized for each platform.' },
  { icon: Zap, title: 'Quick Render', description: 'Get your video ready in minutes, not hours.' },
  { icon: Video, title: 'UGC Style Videos', description: 'Create authentic-looking user-generated content style videos.' },
];

const videoTypes = [
  { title: 'Product Videos', description: 'Showcase your products in action', Icon: ShoppingBag, duration: '15-60s' },
  { title: 'Social Ads', description: 'Scroll-stopping video ads', Icon: Smartphone, duration: '6-15s' },
  { title: 'Story Videos', description: 'Vertical format for stories', Icon: BookOpen, duration: '15s' },
  { title: 'UGC Videos', description: 'Authentic creator-style content', Icon: Clapperboard, duration: '30-90s' },
];

const VideoGenerator = () => {
  return (
    <>
      <Helmet>
        <title>AI Video Generator - SynkBrands | Create Professional Videos</title>
        <meta name="description" content="Generate professional marketing videos with AI. Create product videos, social ads, and UGC-style content in minutes with SynkBrands Video Generator." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-accent/5 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-accent/10 rounded-full mb-6">
                  <Video className="w-5 h-5 text-accent" />
                  <span className="text-sm font-medium text-accent">AI Video Generator</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Create <span className="text-gradient">Pro Videos</span> in Minutes
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Transform text and images into engaging video content. Perfect for social media, ads, and product showcases.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/create/video">
                    <Button variant="hero" size="lg" className="hover-lift">
                      Start Creating
                      <Sparkles className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg">See Examples</Button>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  {['No video editing skills needed', 'Royalty-free music included', '50+ video templates'].map((item) => (
                    <span key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-accent" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative animate-scale-in">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
                  <img 
                    src={aiVideoFeature} 
                    alt="AI Video Generator Interface showing professional video editing timeline" 
                    className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/30 to-transparent pointer-events-none" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-lg">
                      <Play className="w-8 h-8 text-foreground ml-1" />
                    </div>
                  </div>
                </div>
                
                {/* Floating badge */}
                <div className="absolute -bottom-4 -right-4 bg-card border border-border rounded-xl p-3 shadow-lg animate-float">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-accent/20 rounded-lg flex items-center justify-center">
                      <Zap className="w-4 h-4 text-accent" />
                    </div>
                    <div>
                      <p className="text-xs text-muted-foreground">Render Time</p>
                      <p className="text-sm font-bold text-foreground">~2 min</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Types Section */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Video Types
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Create any type of video content for your marketing needs.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {videoTypes.map((type) => (
                <div key={type.title} className="group p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all hover-lift">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <type.Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{type.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{type.description}</p>
                  <span className="inline-block px-3 py-1 bg-accent/10 text-accent text-xs font-medium rounded-full">
                    {type.duration}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Powerful Video Features
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to create professional video content at scale.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="p-6 rounded-2xl bg-card border border-border hover:border-accent/50 transition-all hover-lift group">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-4 group-hover:bg-accent/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-accent" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                How It Works
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Create professional videos in three simple steps.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '01', title: 'Describe Your Video', description: 'Enter a text description or upload product images for your video.' },
                { step: '02', title: 'AI Generates Video', description: 'Our AI creates your video with scenes, transitions, and music.' },
                { step: '03', title: 'Export & Share', description: 'Download your video or share directly to social media.' },
              ].map((item) => (
                <div key={item.step} className="text-center group">
                  <div className="w-16 h-16 rounded-full bg-gradient-to-br from-accent to-primary text-primary-foreground font-display text-xl font-bold flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform">
                    {item.step}
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-accent/10 via-primary/10 to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Create Amazing Videos?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start generating professional marketing videos for free. No credit card required.
            </p>
            <Link to="/create/video">
              <Button variant="hero" size="lg" className="hover-lift">
                Try Video Generator Free
                <Sparkles className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default VideoGenerator;
