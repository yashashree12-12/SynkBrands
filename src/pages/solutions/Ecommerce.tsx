import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  ShoppingCart, Package, Image, Video, TrendingUp, Zap,
  Store, Tag, BarChart3, Layers, ArrowRight, Play, CheckCircle2,
  Globe, CreditCard, Truck, Star, ShoppingBag, Percent
} from 'lucide-react';

const features = [
  {
    icon: Package,
    title: 'Product Photo AI',
    description: 'Transform basic product photos into stunning e-commerce visuals with AI background removal and enhancement.'
  },
  {
    icon: Video,
    title: 'Product Video Ads',
    description: 'Create engaging product videos for social media ads that convert browsers into buyers.'
  },
  {
    icon: Layers,
    title: 'Multi-Platform Export',
    description: 'Export content in perfect sizes for Amazon, Shopify, Instagram, Facebook, and more.'
  },
  {
    icon: Tag,
    title: 'Sale & Promo Creator',
    description: 'Generate eye-catching sale banners, discount graphics, and promotional content instantly.'
  },
  {
    icon: Store,
    title: 'Store Integrations',
    description: 'Connect directly to Shopify, WooCommerce, and other platforms to import products automatically.'
  },
  {
    icon: BarChart3,
    title: 'Performance Tracking',
    description: 'Track which creatives drive the most sales and optimize your content strategy.'
  }
];

const integrations = [
  { name: 'Shopify', icon: Store },
  { name: 'WooCommerce', icon: ShoppingCart },
  { name: 'Amazon', icon: Package },
  { name: 'Etsy', icon: ShoppingBag },
  { name: 'BigCommerce', icon: Store },
  { name: 'Wix', icon: Globe }
];

const useCases = [
  {
    title: 'Product Launches',
    description: 'Generate buzz for new products with coordinated social media campaigns',
    icon: Zap
  },
  {
    title: 'Flash Sales',
    description: 'Create urgency with countdown graphics and limited-time offers',
    icon: Percent
  },
  {
    title: 'Seasonal Campaigns',
    description: 'Holiday-themed content ready in minutes, not hours',
    icon: Star
  },
  {
    title: 'Customer Reviews',
    description: 'Turn testimonials into shareable social proof content',
    icon: CheckCircle2
  }
];

const Ecommerce = () => {
  return (
    <>
      <Helmet>
        <title>For E-commerce - SynkBrands | Sell More with AI Content</title>
        <meta name="description" content="Create stunning product photos, videos, and social media content for your e-commerce store with SynkBrands AI." />
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
                    <ShoppingCart className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary">For E-commerce</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Sell More with <span className="gradient-text">AI-Powered</span> Product Content
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  Transform your product catalog into scroll-stopping social media content. 
                  Create stunning product photos, videos, and ads that drive sales.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Link to="/auth?mode=signup">
                    <Button variant="hero" size="lg" className="rounded-full">
                      Start Free Trial
                      <ArrowRight className="w-5 h-5 ml-2" />
                    </Button>
                  </Link>
                  <Button variant="outline" size="lg" className="rounded-full">
                    <Play className="w-5 h-5 mr-2" />
                    See Examples
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-4">
                    <div className="bg-card rounded-2xl border border-border p-4 shadow-lg">
                      <img 
                        src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop" 
                        alt="Product"
                        className="w-full rounded-xl mb-3"
                      />
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground">Running Shoes</span>
                        <span className="text-sm text-primary font-bold">$129</span>
                      </div>
                    </div>
                    <div className="bg-primary/10 rounded-2xl p-4 border border-primary/20">
                      <div className="flex items-center gap-2 mb-2">
                        <TrendingUp className="w-5 h-5 text-primary" />
                        <span className="text-sm font-medium text-foreground">Sales Up 47%</span>
                      </div>
                      <p className="text-xs text-muted-foreground">After using AI-generated content</p>
                    </div>
                  </div>
                  <div className="space-y-4 mt-8">
                    <div className="bg-card rounded-2xl border border-border p-4 shadow-lg">
                      <div className="aspect-square rounded-xl bg-gradient-to-br from-yellow-400 to-orange-500 flex items-center justify-center mb-3">
                        <span className="text-white font-bold text-2xl">50% OFF</span>
                      </div>
                      <span className="text-sm font-medium text-foreground">Flash Sale Banner</span>
                    </div>
                    <div className="bg-card rounded-2xl border border-border p-4 shadow-lg">
                      <Video className="w-full h-20 text-muted-foreground" />
                      <span className="text-sm font-medium text-foreground mt-2 block">Product Video</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Store Integrations */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <p className="text-center text-muted-foreground mb-8">Integrates with your favorite platforms</p>
            <div className="flex flex-wrap justify-center gap-8">
              {integrations.map((integration, index) => (
                <div key={index} className="flex items-center gap-2 px-6 py-3 bg-background rounded-xl border border-border">
                  <integration.icon className="w-5 h-5 text-primary" />
                  <span className="font-medium text-foreground">{integration.name}</span>
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
                Everything You Need to Sell Online
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                From product photography to social media ads, create all your e-commerce content in one place.
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

        {/* Use Cases */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Perfect for Every Campaign
              </h2>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {useCases.map((useCase, index) => (
                <div key={index} className="bg-background rounded-2xl p-6 border border-border text-center">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <useCase.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{useCase.title}</h3>
                  <p className="text-sm text-muted-foreground">{useCase.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Product Photography Demo */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  AI Product Photography
                </h2>
                <p className="text-lg text-muted-foreground mb-8">
                  Upload your product photo and our AI will generate professional e-commerce images 
                  with perfect backgrounds, lighting, and styling. No photoshoot needed.
                </p>
                <ul className="space-y-4">
                  {[
                    'Remove and replace backgrounds instantly',
                    'Add lifestyle context and props',
                    'Generate multiple variations',
                    'Perfect sizing for every platform'
                  ].map((item, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <CheckCircle2 className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-card rounded-2xl border border-border p-8">
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <p className="text-sm text-muted-foreground mb-2 text-center">Original</p>
                    <div className="aspect-square bg-secondary rounded-xl flex items-center justify-center">
                      <Package className="w-16 h-16 text-muted-foreground" />
                    </div>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground mb-2 text-center">AI Enhanced</p>
                    <img 
                      src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop" 
                      alt="AI Enhanced"
                      className="aspect-square rounded-xl object-cover"
                    />
                  </div>
                </div>
                <div className="mt-4 pt-4 border-t border-border">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Processing time:</span>
                    <span className="text-primary font-medium">Under 10 seconds</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 bg-gradient-to-br from-primary/10 via-background to-accent/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Boost Your Sales?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join thousands of e-commerce stores already using SynkBrands to create content that converts.
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

export default Ecommerce;
