import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import { 
  Building2, Users, BarChart3, Calendar, Layers, Sparkles,
  Clock, Shield, Zap, Globe, Target, TrendingUp, CheckCircle2,
  ArrowRight, Play, FileText, PieChart, UserPlus, Settings
} from 'lucide-react';

const features = [
  {
    icon: Users,
    title: 'Multi-Client Management',
    description: 'Manage unlimited client accounts from a single dashboard with dedicated workspaces and brand kits.'
  },
  {
    icon: Calendar,
    title: 'Content Calendar',
    description: 'Plan, schedule, and publish content across all client accounts with our visual content calendar.'
  },
  {
    icon: BarChart3,
    title: 'White-Label Reports',
    description: 'Generate beautiful, branded analytics reports for your clients with one click.'
  },
  {
    icon: Shield,
    title: 'Approval Workflows',
    description: 'Set up custom approval processes so clients can review content before publishing.'
  },
  {
    icon: Layers,
    title: 'Template Library',
    description: 'Create and save custom templates for each client to maintain brand consistency.'
  },
  {
    icon: Clock,
    title: 'Time Savings',
    description: 'Reduce content creation time by 80% with AI-powered automation and batch processing.'
  }
];

const benefits = [
  { metric: '80%', label: 'Time Saved on Content Creation' },
  { metric: '10x', label: 'More Clients Managed Per Person' },
  { metric: '50%', label: 'Increase in Client Retention' },
  { metric: '24/7', label: 'Automated Publishing' }
];

const testimonials = [
  {
    quote: "SynkBrands has transformed how we handle social media for our clients. What used to take hours now takes minutes.",
    author: "Sarah Chen",
    role: "CEO, Digital Growth Agency",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&h=100&fit=crop"
  },
  {
    quote: "The white-label reports alone have helped us retain more clients. They love seeing professional analytics.",
    author: "Marcus Johnson",
    role: "Founder, Social First Media",
    avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop"
  }
];

const Agencies = () => {
  return (
    <>
      <Helmet>
        <title>For Marketing Agencies - SynkBrands | Scale Your Agency</title>
        <meta name="description" content="Manage multiple clients, automate content creation, and scale your marketing agency with SynkBrands AI-powered platform." />
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
                    <Building2 className="w-5 h-5 text-primary" />
                  </div>
                  <span className="text-sm font-medium text-primary">For Agencies</span>
                </div>
                <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                  Scale Your Agency with <span className="gradient-text">AI-Powered</span> Content
                </h1>
                <p className="text-lg text-muted-foreground mb-8 max-w-lg">
                  Manage multiple clients, automate content creation, and deliver exceptional results at scale. 
                  SynkBrands is built for agencies that want to grow without limits.
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
                    Watch Demo
                  </Button>
                </div>
              </div>
              <div className="relative">
                <div className="bg-card rounded-2xl border border-border p-6 shadow-xl">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center">
                      <Users className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="font-semibold text-foreground">Client Dashboard</p>
                      <p className="text-sm text-muted-foreground">12 Active Clients</p>
                    </div>
                  </div>
                  <div className="grid grid-cols-3 gap-4">
                    {[1, 2, 3, 4, 5, 6].map((i) => (
                      <div key={i} className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                        <Building2 className="w-6 h-6 text-primary/60" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <div key={index} className="text-center">
                  <p className="font-display text-4xl md:text-5xl font-bold gradient-text mb-2">
                    {benefit.metric}
                  </p>
                  <p className="text-sm text-muted-foreground">{benefit.label}</p>
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
                Everything Your Agency Needs
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Powerful tools designed specifically for marketing agencies to manage clients efficiently.
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

        {/* Workflow */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                How It Works for Agencies
              </h2>
            </div>
            <div className="grid md:grid-cols-4 gap-8">
              {[
                { step: '1', title: 'Add Clients', desc: 'Create workspaces for each client', icon: UserPlus },
                { step: '2', title: 'Set Brand Kit', desc: 'Upload logos, colors, and fonts', icon: Layers },
                { step: '3', title: 'Generate Content', desc: 'AI creates on-brand content', icon: Sparkles },
                { step: '4', title: 'Schedule & Report', desc: 'Publish and track performance', icon: PieChart }
              ].map((item, index) => (
                <div key={index} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="w-8 h-8 rounded-full bg-primary text-white font-bold flex items-center justify-center mx-auto mb-3 text-sm">
                    {item.step}
                  </div>
                  <h3 className="font-display font-semibold text-foreground mb-2">{item.title}</h3>
                  <p className="text-sm text-muted-foreground">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Testimonials */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
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
              Ready to Scale Your Agency?
            </h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of agencies already using SynkBrands to manage more clients with less effort.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link to="/auth?mode=signup">
                <Button variant="hero" size="lg" className="rounded-full">
                  Start Free Trial
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="lg" className="rounded-full">
                  Contact Sales
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

export default Agencies;
