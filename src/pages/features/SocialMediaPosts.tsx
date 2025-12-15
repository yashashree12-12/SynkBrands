import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, Sparkles, Instagram, Facebook, Linkedin, Twitter, Calendar, BarChart3 } from 'lucide-react';

const platforms = [
  { icon: Instagram, name: 'Instagram', color: 'from-pink-500 to-purple-500' },
  { icon: Facebook, name: 'Facebook', color: 'from-blue-600 to-blue-400' },
  { icon: Linkedin, name: 'LinkedIn', color: 'from-blue-700 to-blue-500' },
  { icon: Twitter, name: 'X (Twitter)', color: 'from-gray-800 to-gray-600' },
];

const features = [
  { title: 'AI Caption Writer', description: 'Generate engaging captions that drive engagement and conversions.', icon: '✍️' },
  { title: 'Hashtag Generator', description: 'Get trending and relevant hashtags for maximum reach.', icon: '#️⃣' },
  { title: 'Content Calendar', description: 'Plan and schedule your posts across all platforms.', icon: '📅' },
  { title: 'Analytics Dashboard', description: 'Track performance and optimize your content strategy.', icon: '📊' },
  { title: 'A/B Testing', description: 'Test different versions to find what works best.', icon: '🔬' },
  { title: 'Team Collaboration', description: 'Work together with your team on content creation.', icon: '👥' },
];

const SocialMediaPosts = () => {
  return (
    <>
      <Helmet>
        <title>AI Social Media Post Generator - SynkBrands | Create Engaging Content</title>
        <meta name="description" content="Generate engaging social media posts for Instagram, Facebook, LinkedIn, and Twitter with AI. Create captions, hashtags, and visuals automatically." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 rounded-full mb-6">
                <Calendar className="w-5 h-5 text-primary" />
                <span className="text-sm font-medium text-primary">Social Media Posts</span>
              </div>
              <h1 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-6">
                Create <span className="text-gradient">Viral</span> Social Media Posts
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Generate scroll-stopping content for all major platforms. AI-powered captions, hashtags, and visuals.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link to="/create/social">
                  <Button variant="hero" size="lg">
                    Create Your First Post
                    <Sparkles className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" size="lg">See Templates</Button>
              </div>
            </div>

            {/* Platform Icons */}
            <div className="mt-16 flex justify-center gap-6">
              {platforms.map((platform) => (
                <div
                  key={platform.name}
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${platform.color} flex items-center justify-center shadow-lg`}
                >
                  <platform.icon className="w-8 h-8 text-white" />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Everything You Need for Social Success
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Complete toolkit for creating, scheduling, and analyzing your social media content.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature) => (
                <div key={feature.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-colors">
                  <div className="text-4xl mb-4">{feature.icon}</div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Platform-Specific Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Optimized for Every Platform
                </h2>
                <p className="text-muted-foreground mb-8">
                  Each platform has unique requirements and audience expectations. Our AI automatically optimizes your content for each platform's best practices.
                </p>
                <div className="space-y-4">
                  {[
                    'Auto-resize images for each platform',
                    'Platform-specific caption lengths',
                    'Trending hashtags by platform',
                    'Optimal posting times suggestions',
                    'Cross-platform scheduling',
                  ].map((item) => (
                    <div key={item} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {platforms.map((platform) => (
                  <div
                    key={platform.name}
                    className={`aspect-square rounded-2xl bg-gradient-to-br ${platform.color} p-6 flex flex-col items-center justify-center text-white`}
                  >
                    <platform.icon className="w-12 h-12 mb-3" />
                    <span className="font-medium">{platform.name}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-gradient-to-r from-primary/10 via-accent/10 to-primary/10">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Ready to Dominate Social Media?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Start creating viral content today. No design or copywriting skills required.
            </p>
            <Link to="/create/social">
              <Button variant="hero" size="lg">
                Start Creating Free
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

export default SocialMediaPosts;
