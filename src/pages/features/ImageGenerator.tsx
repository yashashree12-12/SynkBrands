import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Zap, Layers, Download, Palette, Image, Wand2 } from 'lucide-react';

const features = [
  { icon: Sparkles, title: 'AI-Powered Generation', description: 'Create stunning visuals with advanced AI that understands your brand.' },
  { icon: Palette, title: 'Brand Consistency', description: 'Maintain your brand colors, fonts, and style across all generated images.' },
  { icon: Layers, title: 'Multiple Formats', description: 'Generate images optimized for Instagram, Facebook, LinkedIn, and more.' },
  { icon: Download, title: 'Easy Export', description: 'Download in multiple formats including PNG, JPG, and WebP.' },
  { icon: Zap, title: 'Lightning Fast', description: 'Generate professional images in seconds, not hours.' },
  { icon: Wand2, title: 'Smart Editing', description: 'AI-powered tools to enhance and modify your generated images.' },
];

import { Smartphone, ShoppingBag, BookOpen, LayoutTemplate } from 'lucide-react';

const useCases = [
  { title: 'Social Media Posts', description: 'Eye-catching posts for all platforms', Icon: Smartphone },
  { title: 'Product Ads', description: 'Convert browsers into buyers', Icon: ShoppingBag },
  { title: 'Story Graphics', description: 'Engaging Instagram & Facebook stories', Icon: BookOpen },
  { title: 'Banner Ads', description: 'Professional display advertisements', Icon: LayoutTemplate },
];

const ImageGenerator = () => {
  return (
    <>
      <Helmet>
        <title>AI Image Generator - SynkBrands | Create Stunning Visuals</title>
        <meta name="description" content="Generate professional marketing images in seconds with SynkBrands AI Image Generator. Create social media posts, ads, and product photography with AI." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <Image className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">AI Image Generator</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Create Stunning Images with <span className="text-gradient">AI Power</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Transform your ideas into professional marketing images in seconds. No design skills required.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/create/image">
                    <Button variant="hero" size="lg">
                      Start Creating
                      <Sparkles className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg">Watch Demo</Button>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  {['No credit card required', 'Free trial available', '10,000+ templates'].map((item) => (
                    <span key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary via-accent to-primary/50 p-8 flex items-center justify-center">
                  <div className="bg-card/90 backdrop-blur rounded-2xl p-6 w-full max-w-sm">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Image className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h3 className="font-medium text-foreground">Image Generator</h3>
                        <p className="text-xs text-muted-foreground">Ready to create</p>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="h-3 bg-secondary rounded-full w-full" />
                      <div className="h-3 bg-secondary rounded-full w-3/4" />
                      <div className="h-3 bg-secondary rounded-full w-1/2" />
                    </div>
                    <div className="mt-4 grid grid-cols-2 gap-2">
                      <div className="aspect-square bg-gradient-to-br from-pink-500 to-orange-500 rounded-xl" />
                      <div className="aspect-square bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Powerful Features
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to create professional marketing images at scale.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <feature.icon className="w-12 h-12 text-primary mb-4" />
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Use Cases Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Use Cases
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Create any type of marketing visual with our AI image generator.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase) => (
                <div key={useCase.title} className="group p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift">
                  <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary to-accent flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <useCase.Icon className="w-7 h-7 text-white" />
                  </div>
                  <h3 className="font-display text-lg font-bold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Create Amazing Images?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start generating professional marketing images for free. No credit card required.
            </p>
            <Link to="/create/image">
              <Button variant="hero" size="lg">
                Try Image Generator Free
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

export default ImageGenerator;
