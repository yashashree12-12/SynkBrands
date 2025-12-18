import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Camera, Layers, Palette, Download, Zap, Image, Smartphone, Shirt, Coffee, Sparkle } from 'lucide-react';

const features = [
  { icon: Camera, title: 'Studio Quality', description: 'Generate professional product photos that look like they were shot in a studio.' },
  { icon: Layers, title: 'Background Removal', description: 'Automatically remove and replace backgrounds with AI precision.' },
  { icon: Palette, title: 'Lifestyle Scenes', description: 'Place your products in beautiful lifestyle contexts automatically.' },
  { icon: Download, title: 'Bulk Processing', description: 'Process hundreds of product images in minutes.' },
  { icon: Zap, title: 'Instant Results', description: 'Get professional results in seconds, not days.' },
  { icon: Image, title: 'Multiple Angles', description: 'Generate different angles and perspectives of your products.' },
];

const beforeAfter = [
  { BeforeIcon: Smartphone, AfterIcon: Smartphone, label: 'Electronics' },
  { BeforeIcon: Shirt, AfterIcon: Shirt, label: 'Fashion' },
  { BeforeIcon: Coffee, AfterIcon: Coffee, label: 'Beverages' },
  { BeforeIcon: Sparkle, AfterIcon: Sparkle, label: 'Cosmetics' },
];

const ProductPhotography = () => {
  return (
    <>
      <Helmet>
        <title>AI Product Photography - SynkBrands | Studio Quality Photos</title>
        <meta name="description" content="Transform your product photos with AI. Create studio-quality product photography, lifestyle shots, and e-commerce images automatically." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                  <Camera className="w-5 h-5 text-primary" />
                  <span className="text-sm font-medium text-primary">AI Product Photography</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Studio Quality Photos with <span className="text-gradient">AI Magic</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8">
                  Transform basic product photos into stunning e-commerce imagery. No photographer needed.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link to="/create/product">
                    <Button variant="hero" size="lg" className="hover-lift">
                      Try It Free
                      <Sparkles className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg">See Gallery</Button>
                </div>
                <div className="mt-8 flex flex-wrap items-center gap-6">
                  {['No photography skills needed', '100+ background options', 'Bulk processing available'].map((item) => (
                    <span key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Check className="w-4 h-4 text-primary" />
                      {item}
                    </span>
                  ))}
                </div>
              </div>
              <div className="relative animate-scale-in">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="aspect-square rounded-2xl bg-secondary flex items-center justify-center">
                      <Smartphone className="w-16 h-16 text-muted-foreground" />
                    </div>
                    <div className="p-3 rounded-xl bg-card border border-border text-center text-sm text-muted-foreground">
                      Before
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="aspect-square rounded-2xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/20 flex items-center justify-center relative overflow-hidden">
                      <Smartphone className="w-16 h-16 text-primary" />
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent rounded-2xl" />
                    </div>
                    <div className="p-3 rounded-xl bg-primary text-primary-foreground text-center text-sm font-medium flex items-center justify-center gap-2">
                      After <Sparkles className="w-4 h-4" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Before/After Section */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                See the Transformation
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                From basic product photos to stunning e-commerce imagery in seconds.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {beforeAfter.map((item) => (
                <div key={item.label} className="bg-card rounded-2xl border border-border overflow-hidden hover-lift">
                  <div className="grid grid-cols-2">
                    <div className="aspect-square bg-secondary flex items-center justify-center border-r border-border">
                      <item.BeforeIcon className="w-10 h-10 text-muted-foreground" />
                    </div>
                    <div className="aspect-square bg-gradient-to-br from-primary/10 to-accent/10 flex items-center justify-center">
                      <item.AfterIcon className="w-10 h-10 text-primary" />
                    </div>
                  </div>
                  <div className="p-4 text-center">
                    <span className="font-medium text-foreground">{item.label}</span>
                  </div>
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
                Powerful Features
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Everything you need to create stunning product imagery.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Transform Your Product Photos?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start creating professional product imagery today. No credit card required.
            </p>
            <Link to="/create/product">
              <Button variant="hero" size="lg" className="hover-lift">
                Try Product Photography Free
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

export default ProductPhotography;
