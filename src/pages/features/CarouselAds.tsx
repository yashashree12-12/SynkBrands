import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Layers, Sparkles, CheckCircle2, Play, ArrowRight, Instagram, Linkedin, Facebook, Palette, Type, Image, Wand2, MousePointerClick, BookOpen, ShoppingBag, FileText, Star, Zap } from 'lucide-react';
import carouselPreview from '@/assets/carousel-preview.png';

const features = [
  { icon: Layers, title: 'Multi-Slide Generation', description: 'AI creates cohesive carousel with perfect visual flow' },
  { icon: Type, title: 'Smart Copy', description: 'Engaging text for each slide that tells a story' },
  { icon: Palette, title: 'Brand Consistency', description: 'Automatic brand colors, fonts, and style application' },
  { icon: MousePointerClick, title: 'Swipe Optimization', description: 'Designed to maximize swipe-through rate' },
  { icon: Image, title: 'Visual Variety', description: 'Mix of images, graphics, and text layouts' },
  { icon: Wand2, title: 'One-Click Resize', description: 'Instantly adapt for Instagram, LinkedIn, Facebook' },
];

const carouselTypes = [
  { name: 'Educational', icon: BookOpen, description: 'Tips, tutorials, how-tos' },
  { name: 'Product Showcase', icon: ShoppingBag, description: 'Features and benefits' },
  { name: 'Story Format', icon: FileText, description: 'Narrative brand content' },
  { name: 'Listicles', icon: Layers, description: 'Top 10, best of lists' },
  { name: 'Before/After', icon: Sparkles, description: 'Transformation stories' },
  { name: 'Testimonials', icon: Star, description: 'Customer reviews' },
];

const CarouselAds = () => {
  return (
    <>
      <Helmet>
        <title>AI Carousel Ad Generator - Create Instagram & LinkedIn Carousels | SynkBrands</title>
        <meta name="description" content="Generate engaging carousel posts for Instagram and LinkedIn with AI. Create multi-slide content that increases engagement and drives conversions." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero Section */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-pink-500/5 via-transparent to-blue-500/5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 text-pink-600 text-sm font-medium mb-6">
                  <Layers className="w-4 h-4" />
                  Carousel Generator
                </div>
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                  Create <span className="text-gradient">scroll-stopping</span> carousels
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  AI generates complete carousel posts with cohesive design, engaging copy, and optimized layouts for maximum engagement.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Link to="/create/carousel">
                    <Button variant="hero" size="lg" className="rounded-full">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Create Carousel
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="rounded-full">
                    <Play className="w-5 h-5 mr-2" />
                    View Examples
                  </Button>
                </div>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full">
                    <Instagram className="w-4 h-4" />
                    Instagram
                  </span>
                  <span className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full">
                    <Linkedin className="w-4 h-4" />
                    LinkedIn
                  </span>
                  <span className="flex items-center gap-2 px-3 py-1.5 bg-secondary rounded-full">
                    <Facebook className="w-4 h-4" />
                    Facebook
                  </span>
                </div>
              </div>

              <div className="relative">
                <div className="absolute inset-0 gradient-bar opacity-20 blur-3xl rounded-full"></div>
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
                  <img 
                    src={carouselPreview} 
                    alt="Carousel Creator Interface" 
                    className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent" />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Carousel Types */}
        <section className="py-16 border-y border-border bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl lg:text-3xl font-display font-bold text-foreground mb-4">
                Create any type of carousel
              </h2>
            </div>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {carouselTypes.map((type, index) => (
                <div key={index} className="p-4 bg-background rounded-xl border border-border text-center hover:border-primary/50 hover:shadow-lg transition-all cursor-pointer group">
                  <div className="w-12 h-12 mx-auto mb-3 rounded-xl bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center group-hover:scale-110 transition-transform">
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">{type.name}</h3>
                  <p className="text-xs text-muted-foreground">{type.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Everything for perfect carousels
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                From idea to published carousel in minutes
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-pink-500/50 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
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
              <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-4">
                Create carousels in 3 steps
              </h2>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                { step: '1', title: 'Enter Your Topic', description: 'Describe your carousel topic, or let AI suggest ideas based on your niche.' },
                { step: '2', title: 'AI Creates Slides', description: 'Get a complete carousel with optimized copy, layouts, and visuals for each slide.' },
                { step: '3', title: 'Customize & Publish', description: 'Fine-tune if needed, then export or publish directly to your accounts.' },
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full gradient-bar text-white text-2xl font-bold flex items-center justify-center mx-auto mb-4">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              {[
                { value: '3x', label: 'More engagement than single posts' },
                { value: '10+', label: 'Slides per carousel' },
                { value: '50+', label: 'Template styles' },
                { value: '1M+', label: 'Carousels created' },
              ].map((stat, index) => (
                <div key={index}>
                  <div className="text-4xl lg:text-5xl font-display font-bold text-gradient mb-2">{stat.value}</div>
                  <p className="text-muted-foreground">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32 bg-gradient-to-br from-pink-500/10 via-transparent to-blue-500/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Ready to create viral carousels?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start generating engaging carousel content in seconds
            </p>
            <Link to="/create/carousel">
              <Button variant="hero" size="lg" className="rounded-full">
                Create Your First Carousel
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

export default CarouselAds;