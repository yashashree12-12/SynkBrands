import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Laugh, Sparkles, TrendingUp, Zap, Image, Type, Share2, ArrowRight, CheckCircle2 } from 'lucide-react';

const features = [
  { icon: TrendingUp, title: 'Trending Templates', description: 'Access the latest viral meme formats updated daily' },
  { icon: Zap, title: 'Instant Generation', description: 'Create memes in seconds with AI-powered suggestions' },
  { icon: Type, title: 'Smart Captions', description: 'AI generates witty, relevant captions for any topic' },
  { icon: Image, title: 'Custom Images', description: 'Use templates or upload your own images' },
  { icon: Share2, title: 'One-Click Share', description: 'Post directly to social media platforms' },
  { icon: Laugh, title: 'Brand-Safe Humor', description: 'Professional memes suitable for brand accounts' },
];

const popularMemes = [
  'Drake Hotline Bling', 'Distracted Boyfriend', 'Woman Yelling at Cat',
  'This is Fine', 'Expanding Brain', 'Change My Mind',
  'Success Kid', 'Two Buttons', 'Surprised Pikachu'
];

const MemeGenerator = () => {
  return (
    <>
      <Helmet>
        <title>AI Meme Generator - Create Viral Memes for Social Media | SynkBrands</title>
        <meta name="description" content="Generate funny, shareable memes with AI. Access trending templates, smart captions, and instant creation for your social media marketing." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-yellow-500/5 via-transparent to-orange-500/5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-yellow-500/10 text-yellow-600 text-sm font-medium mb-6">
                  <Laugh className="w-4 h-4" />
                  Meme Generator
                </div>
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                  Create <span className="text-gradient">viral memes</span> instantly
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  AI-powered meme creation with trending templates and smart captions. Perfect for brands that want to stay relevant and engaging.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Link to="/create/meme">
                    <Button variant="hero" size="lg" className="rounded-full">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Create Meme
                    </Button>
                  </Link>
                </div>
                <div className="flex flex-wrap gap-2">
                  {['No watermarks', 'Trending templates', 'Brand-safe'].map((item, i) => (
                    <span key={i} className="flex items-center gap-1 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  {[1, 2, 3, 4].map((i) => (
                    <div key={i} className="aspect-square bg-card rounded-xl border border-border overflow-hidden hover:scale-105 transition-transform cursor-pointer">
                      <div className="h-full bg-gradient-to-br from-yellow-500/20 to-orange-500/20 flex flex-col justify-between p-4">
                        <div className="h-2/3 bg-white/10 rounded-lg"></div>
                        <div className="space-y-1">
                          <div className="h-3 bg-white/20 rounded w-full"></div>
                          <div className="h-3 bg-white/20 rounded w-3/4"></div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Popular Templates */}
        <section className="py-16 border-y border-border bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-muted-foreground mb-6">Popular meme templates</p>
            <div className="flex flex-wrap justify-center gap-3">
              {popularMemes.map((meme, index) => (
                <span key={index} className="px-4 py-2 bg-background rounded-full border border-border text-sm text-foreground hover:border-primary transition-colors cursor-pointer">
                  {meme}
                </span>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Meme marketing made easy
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Professional meme creation tools for brands and marketers
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-yellow-500/50 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-yellow-500 to-orange-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-yellow-500/10 via-transparent to-orange-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Ready to make your brand go viral?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start creating shareable memes that your audience will love
            </p>
            <Link to="/create/meme">
              <Button variant="hero" size="lg" className="rounded-full">
                Start Creating Memes
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

export default MemeGenerator;