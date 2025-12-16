import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Video, Users, Mic, Sparkles, CheckCircle2, Play, ArrowRight, Clock, Palette, Languages, Star, Zap } from 'lucide-react';

const features = [
  { icon: Users, title: 'AI Avatars', description: 'Choose from diverse AI presenters or create custom avatars' },
  { icon: Mic, title: 'Natural Voiceovers', description: 'AI-generated voices in 50+ languages with emotion control' },
  { icon: Clock, title: '60-Second Clips', description: 'Perfect length for TikTok, Reels, and YouTube Shorts' },
  { icon: Palette, title: 'Brand Customization', description: 'Apply your colors, fonts, and logos automatically' },
  { icon: Languages, title: 'Multi-Language', description: 'Create UGC in any language for global reach' },
  { icon: Zap, title: 'Fast Rendering', description: 'Get your videos in minutes, not hours' },
];

const videoTypes = [
  { name: 'Product Reviews', description: 'Authentic-feeling product testimonials' },
  { name: 'Unboxing Videos', description: 'Exciting product reveal content' },
  { name: 'Tutorial Content', description: 'How-to and educational videos' },
  { name: 'Testimonials', description: 'Customer success story videos' },
  { name: 'Behind the Scenes', description: 'Brand authenticity content' },
  { name: 'Trend Videos', description: 'Viral format adaptations' },
];

const UGCVideos = () => {
  return (
    <>
      <Helmet>
        <title>AI UGC Video Generator - Create Authentic User-Generated Content | SynkBrands</title>
        <meta name="description" content="Generate authentic-looking UGC videos with AI avatars and voiceovers. Create TikTok, Reels, and YouTube Shorts content that converts." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent/5 via-transparent to-primary/5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-accent/10 text-accent text-sm font-medium mb-6">
                  <Video className="w-4 h-4" />
                  UGC Video Generator
                </div>
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                  Create <span className="text-gradient">authentic UGC</span> at scale
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  Generate realistic user-generated content videos with AI avatars, natural voiceovers, and trending formats. No actors or filming required.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Link to="/create/ugc">
                    <Button variant="hero" size="lg" className="rounded-full">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Create UGC Video
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="rounded-full">
                    <Play className="w-5 h-5 mr-2" />
                    See Examples
                  </Button>
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="w-8 h-8 rounded-full bg-gradient-to-br from-primary to-accent border-2 border-background"></div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <div className="flex items-center gap-1 text-yellow-500">
                      {[1, 2, 3, 4, 5].map((i) => <Star key={i} className="w-4 h-4 fill-current" />)}
                    </div>
                    <p className="text-muted-foreground">Loved by 50K+ creators</p>
                  </div>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 gradient-bar opacity-20 blur-3xl rounded-full"></div>
                <div className="relative">
                  <div className="aspect-[9/16] max-w-[300px] mx-auto bg-card rounded-3xl border border-border overflow-hidden shadow-2xl">
                    <div className="h-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                      <div className="text-center p-6">
                        <div className="w-20 h-20 rounded-full bg-white/20 backdrop-blur mx-auto mb-4 flex items-center justify-center">
                          <Play className="w-8 h-8 text-white" />
                        </div>
                        <p className="text-foreground font-medium">AI Avatar Preview</p>
                        <p className="text-sm text-muted-foreground mt-2">Your UGC video here</p>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-card rounded-2xl border border-border p-2 shadow-xl">
                    <div className="w-full h-full bg-secondary rounded-xl flex items-center justify-center">
                      <Mic className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Types */}
        <section className="py-16 border-y border-border bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">
                Create any type of UGC content
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {videoTypes.map((type, index) => (
                <div key={index} className="p-4 bg-background rounded-xl border border-border text-center hover:border-primary/50 transition-colors">
                  <h3 className="font-medium text-foreground mb-1">{type.name}</h3>
                  <p className="text-xs text-muted-foreground">{type.description}</p>
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
                Professional UGC without the hassle
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                No actors, no filming, no editing. Just describe what you want.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-accent/50 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-accent to-primary flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Demo Section */}
        <section className="py-20 lg:py-32 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                  See UGC magic in action
                </h2>
                <div className="space-y-4">
                  {[
                    'Choose from 100+ AI avatars or upload custom',
                    'Select voice style, language, and emotion',
                    'Add captions, music, and brand elements',
                    'Export in any aspect ratio for any platform',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/create/ugc" className="inline-block mt-8">
                  <Button variant="hero" size="lg" className="rounded-full">
                    Try UGC Generator
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="aspect-[9/16] bg-card rounded-2xl border border-border overflow-hidden">
                    <div className="h-full bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <Play className="w-8 h-8 text-primary" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Start creating UGC that converts
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of brands using AI to create authentic content at scale
            </p>
            <Link to="/create/ugc">
              <Button variant="hero" size="lg" className="rounded-full">
                Create Your First UGC Video
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

export default UGCVideos;