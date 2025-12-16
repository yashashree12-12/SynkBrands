import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Sparkles, Clock, BarChart3, Users, Globe, Zap, ArrowRight, CheckCircle2, Instagram, Facebook, Linkedin, Twitter, Youtube } from 'lucide-react';

const features = [
  { icon: Calendar, title: 'Visual Calendar', description: 'Drag-and-drop scheduling with monthly, weekly, daily views' },
  { icon: Clock, title: 'Best Time to Post', description: 'AI analyzes your audience to suggest optimal posting times' },
  { icon: Users, title: 'Team Collaboration', description: 'Approval workflows and team member assignments' },
  { icon: BarChart3, title: 'Performance Tracking', description: 'Monitor post performance directly from your calendar' },
  { icon: Globe, title: 'Multi-Platform', description: 'Schedule to Instagram, Facebook, LinkedIn, Twitter, TikTok, YouTube' },
  { icon: Zap, title: 'Auto-Publishing', description: 'Set it and forget it - posts go live automatically' },
];

const platforms = [
  { name: 'Instagram', icon: Instagram },
  { name: 'Facebook', icon: Facebook },
  { name: 'LinkedIn', icon: Linkedin },
  { name: 'Twitter/X', icon: Twitter },
  { name: 'YouTube', icon: Youtube },
];

const ContentScheduler = () => {
  return (
    <>
      <Helmet>
        <title>Social Media Content Scheduler - Schedule Posts Across All Platforms | SynkBrands</title>
        <meta name="description" content="Schedule and automate your social media posts across Instagram, Facebook, LinkedIn, Twitter, and more. AI-powered best time suggestions included." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-blue-500/5 via-transparent to-purple-500/5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/10 text-blue-600 text-sm font-medium mb-6">
                  <Calendar className="w-4 h-4" />
                  Content Scheduler
                </div>
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                  Schedule content <span className="text-gradient">like a pro</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  Plan, schedule, and auto-publish your content across all social platforms from one dashboard. AI suggests the best times for maximum engagement.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Link to="/create">
                    <Button variant="hero" size="lg" className="rounded-full">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Start Scheduling
                    </Button>
                  </Link>
                </div>
                <div className="flex items-center gap-4">
                  {platforms.map((platform, i) => (
                    <div key={i} className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center" title={platform.name}>
                      <platform.icon className="w-5 h-5 text-muted-foreground" />
                    </div>
                  ))}
                </div>
              </div>

              <div className="relative">
                <div className="bg-card rounded-2xl border border-border p-6 shadow-2xl">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-semibold text-foreground">December 2024</h3>
                    <div className="flex gap-2">
                      <Button variant="ghost" size="sm">&lt;</Button>
                      <Button variant="ghost" size="sm">&gt;</Button>
                    </div>
                  </div>
                  <div className="grid grid-cols-7 gap-2 text-center text-sm">
                    {['S', 'M', 'T', 'W', 'T', 'F', 'S'].map((day, i) => (
                      <div key={i} className="text-muted-foreground py-2">{day}</div>
                    ))}
                    {Array.from({ length: 31 }, (_, i) => (
                      <div
                        key={i}
                        className={`py-2 rounded-lg cursor-pointer transition-colors ${
                          [5, 12, 18, 25].includes(i + 1) ? 'bg-primary text-primary-foreground' :
                          [8, 15, 22].includes(i + 1) ? 'bg-accent text-accent-foreground' :
                          'hover:bg-secondary'
                        }`}
                      >
                        {i + 1}
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 space-y-2">
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-3 h-3 rounded-full bg-primary"></div>
                      <span className="text-muted-foreground">Scheduled posts</span>
                    </div>
                    <div className="flex items-center gap-2 text-sm">
                      <div className="w-3 h-3 rounded-full bg-accent"></div>
                      <span className="text-muted-foreground">AI suggested</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features */}
        <section className="py-20 lg:py-32">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-4">
                Scheduling made simple
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to manage your social media calendar
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-blue-500/50 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-blue-500 to-purple-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 lg:py-32 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                  Save 10+ hours per week
                </h2>
                <div className="space-y-4">
                  {[
                    'Schedule a month of content in one session',
                    'AI auto-generates content calendar ideas',
                    'Bulk upload and schedule multiple posts',
                    'Automatic cross-posting to all platforms',
                    'Never miss a posting opportunity',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/create" className="inline-block mt-8">
                  <Button variant="hero" size="lg" className="rounded-full">
                    Try Content Scheduler
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-4">
                {[
                  { value: '10+', label: 'Hours saved weekly' },
                  { value: '6', label: 'Platforms supported' },
                  { value: '30%', label: 'More engagement' },
                  { value: '∞', label: 'Posts scheduled' },
                ].map((stat, i) => (
                  <div key={i} className="p-6 bg-background rounded-xl border border-border text-center">
                    <div className="text-3xl font-display font-bold text-gradient mb-1">{stat.value}</div>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
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
              Ready to streamline your content?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Join thousands of marketers who schedule smarter with SynkBrands
            </p>
            <Link to="/create">
              <Button variant="hero" size="lg" className="rounded-full">
                Start Scheduling Free
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

export default ContentScheduler;