import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Search, Sparkles, TrendingUp, BarChart3, Target, Eye, Lightbulb, ArrowRight, CheckCircle2 } from 'lucide-react';

const features = [
  { icon: Search, title: 'Competitor Tracking', description: 'Monitor unlimited competitors across all platforms' },
  { icon: TrendingUp, title: 'Performance Benchmarks', description: 'See how your content stacks up against competitors' },
  { icon: BarChart3, title: 'Content Analysis', description: 'Understand what content performs best in your niche' },
  { icon: Target, title: 'Strategy Insights', description: 'AI-powered recommendations based on competitor data' },
  { icon: Eye, title: 'Real-Time Monitoring', description: 'Get alerts when competitors post viral content' },
  { icon: Lightbulb, title: 'Content Ideas', description: 'Generate ideas based on competitor gaps and trends' },
];

const metrics = [
  { label: 'Engagement Rate', value: '4.2%', change: '+0.8%', positive: true },
  { label: 'Post Frequency', value: '12/week', change: '-2', positive: false },
  { label: 'Avg. Comments', value: '234', change: '+45', positive: true },
  { label: 'Growth Rate', value: '+15%', change: '+3%', positive: true },
];

const CompetitorAnalysis = () => {
  return (
    <>
      <Helmet>
        <title>Social Media Competitor Analysis - Track & Outperform Competitors | SynkBrands</title>
        <meta name="description" content="Analyze competitor social media strategies with AI. Track performance, discover content gaps, and get actionable insights to outperform your competition." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Navbar />

        {/* Hero */}
        <section className="relative py-20 lg:py-32 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 via-transparent to-blue-500/5"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-green-500/10 text-green-600 text-sm font-medium mb-6">
                  <Search className="w-4 h-4" />
                  Competitor Analysis
                </div>
                <h1 className="text-4xl lg:text-6xl font-display font-bold text-foreground mb-6 leading-tight">
                  Know your <span className="text-gradient">competition</span>
                </h1>
                <p className="text-xl text-muted-foreground mb-8 max-w-lg">
                  AI-powered competitor analysis reveals what's working in your industry. Track strategies, benchmark performance, and discover opportunities to win.
                </p>
                <div className="flex flex-wrap gap-4 mb-8">
                  <Link to="/create">
                    <Button variant="hero" size="lg" className="rounded-full">
                      <Sparkles className="w-5 h-5 mr-2" />
                      Analyze Competitors
                    </Button>
                  </Link>
                </div>
              </div>

              <div className="relative">
                <div className="bg-card rounded-2xl border border-border p-6 shadow-2xl">
                  <h3 className="font-semibold text-foreground mb-4">Competitor Dashboard</h3>
                  <div className="space-y-4">
                    {metrics.map((metric, i) => (
                      <div key={i} className="flex items-center justify-between p-3 bg-secondary/50 rounded-lg">
                        <span className="text-muted-foreground">{metric.label}</span>
                        <div className="flex items-center gap-2">
                          <span className="font-semibold text-foreground">{metric.value}</span>
                          <span className={`text-sm ${metric.positive ? 'text-green-500' : 'text-red-500'}`}>
                            {metric.change}
                          </span>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="mt-6 p-4 bg-primary/5 rounded-lg border border-primary/20">
                    <p className="text-sm text-foreground font-medium">💡 AI Insight</p>
                    <p className="text-sm text-muted-foreground mt-1">
                      Competitors posting video content see 2.5x more engagement. Consider increasing video frequency.
                    </p>
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
                Intelligence that drives results
              </h2>
              <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
                Everything you need to stay ahead of the competition
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <div key={index} className="p-6 rounded-2xl bg-card border border-border hover:border-green-500/50 hover:shadow-lg transition-all group">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-green-500 to-blue-500 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <feature.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What You'll Learn */}
        <section className="py-20 lg:py-32 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-4xl font-display font-bold text-foreground mb-6">
                  Discover what's working
                </h2>
                <div className="space-y-4">
                  {[
                    'Best performing content types in your niche',
                    'Optimal posting times for maximum reach',
                    'Hashtag strategies that drive engagement',
                    'Content gaps you can exploit',
                    'Emerging trends before they go mainstream',
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5" />
                      <span className="text-foreground">{item}</span>
                    </div>
                  ))}
                </div>
                <Link to="/create" className="inline-block mt-8">
                  <Button variant="hero" size="lg" className="rounded-full">
                    Start Analyzing
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
              </div>
              <div className="bg-card rounded-2xl border border-border p-6">
                <h3 className="font-semibold text-foreground mb-4">Top Performing Content Types</h3>
                <div className="space-y-3">
                  {[
                    { type: 'Video Reels', percentage: 85 },
                    { type: 'Carousel Posts', percentage: 72 },
                    { type: 'User Stories', percentage: 65 },
                    { type: 'Static Images', percentage: 45 },
                  ].map((item, i) => (
                    <div key={i}>
                      <div className="flex justify-between text-sm mb-1">
                        <span className="text-foreground">{item.type}</span>
                        <span className="text-muted-foreground">{item.percentage}%</span>
                      </div>
                      <div className="h-2 bg-secondary rounded-full overflow-hidden">
                        <div
                          className="h-full gradient-bar rounded-full transition-all"
                          style={{ width: `${item.percentage}%` }}
                        ></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-32">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl lg:text-5xl font-display font-bold text-foreground mb-6">
              Ready to outperform your competitors?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Get AI-powered insights that give you the competitive edge
            </p>
            <Link to="/create">
              <Button variant="hero" size="lg" className="rounded-full">
                Start Free Analysis
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

export default CompetitorAnalysis;