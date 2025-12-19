import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { Button } from '@/components/ui/button';
import { 
  Search, Plus, TrendingUp, TrendingDown, Eye, Users,
  Heart, MessageCircle, Share2, BarChart3, Filter,
  Instagram, Facebook, Linkedin, Twitter, ExternalLink,
  ArrowUp, ArrowDown, Minus
} from 'lucide-react';
import insightsPreview from '@/assets/insights-preview.png';

const competitors = [
  {
    id: 1,
    name: 'Brand Alpha',
    handle: '@brandalpha',
    avatar: 'BA',
    followers: '125K',
    posts: 342,
    engagement: '4.2%',
    trend: 'up',
    platforms: ['instagram', 'facebook', 'twitter'],
  },
  {
    id: 2,
    name: 'Creative Studio',
    handle: '@creativestudio',
    avatar: 'CS',
    followers: '89K',
    posts: 256,
    engagement: '5.8%',
    trend: 'up',
    platforms: ['instagram', 'linkedin'],
  },
  {
    id: 3,
    name: 'Digital Pro',
    handle: '@digitalpro',
    avatar: 'DP',
    followers: '67K',
    posts: 189,
    engagement: '3.1%',
    trend: 'down',
    platforms: ['instagram', 'twitter', 'linkedin'],
  },
  {
    id: 4,
    name: 'Marketing Hub',
    handle: '@marketinghub',
    avatar: 'MH',
    followers: '234K',
    posts: 567,
    engagement: '2.9%',
    trend: 'stable',
    platforms: ['instagram', 'facebook', 'linkedin', 'twitter'],
  },
];

const topPosts = [
  { id: 1, competitor: 'Brand Alpha', type: 'Carousel', likes: '12.5K', comments: '456', shares: '234', date: '2 days ago' },
  { id: 2, competitor: 'Creative Studio', type: 'Reel', likes: '45.2K', comments: '1.2K', shares: '892', date: '3 days ago' },
  { id: 3, competitor: 'Digital Pro', type: 'Image', likes: '8.7K', comments: '234', shares: '156', date: '1 day ago' },
  { id: 4, competitor: 'Marketing Hub', type: 'Video', likes: '23.1K', comments: '789', shares: '445', date: '4 days ago' },
];

const platformIcons: Record<string, typeof Instagram> = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  twitter: Twitter,
};

const CompetitorAnalysisDashboard = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <>
      <Helmet>
        <title>Competitor Analysis - SynkBrands Dashboard</title>
        <meta name="description" content="Analyze your competitors' social media strategy and stay ahead with actionable insights." />
      </Helmet>

      <div className="min-h-screen bg-background flex">
        <DashboardSidebar />
        
        <main className="flex-1 ml-16 lg:ml-64 p-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold text-foreground">Competitor Analysis</h1>
              <p className="text-muted-foreground mt-1">Track and analyze your competitors' performance</p>
            </div>
            <Button variant="hero" size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              Add Competitor
            </Button>
          </div>

          {/* Search */}
          <div className="bg-card rounded-xl border border-border p-4 mb-6">
            <div className="flex gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search competitors by name or handle..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-10 pr-4 py-2.5 bg-secondary/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50"
                />
              </div>
              <Button variant="outline" className="gap-2">
                <Filter className="w-4 h-4" />
                Filters
              </Button>
            </div>
          </div>

          {/* Overview Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Competitors Tracked', value: '4', icon: Eye, color: 'text-blue-500' },
              { label: 'Total Followers', value: '515K', icon: Users, color: 'text-purple-500' },
              { label: 'Avg Engagement', value: '4.0%', icon: Heart, color: 'text-pink-500' },
              { label: 'Posts Analyzed', value: '1,354', icon: BarChart3, color: 'text-green-500' },
            ].map((stat, index) => (
              <div key={index} className="bg-card rounded-xl border border-border p-4">
                <div className="flex items-center justify-between mb-2">
                  <stat.icon className={`w-5 h-5 ${stat.color}`} />
                </div>
                <div className="text-2xl font-bold text-foreground">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          <div className="grid lg:grid-cols-3 gap-6 mb-8">
            {/* Competitors List */}
            <div className="lg:col-span-2 bg-card rounded-xl border border-border p-6">
              <h2 className="text-xl font-semibold text-foreground mb-6">Tracked Competitors</h2>
              <div className="space-y-4">
                {competitors.map((competitor) => (
                  <div key={competitor.id} className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors">
                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-accent flex items-center justify-center text-white font-bold">
                      {competitor.avatar}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2">
                        <h3 className="font-semibold text-foreground">{competitor.name}</h3>
                        <span className="text-sm text-muted-foreground">{competitor.handle}</span>
                      </div>
                      <div className="flex items-center gap-2 mt-1">
                        {competitor.platforms.map((platform) => {
                          const Icon = platformIcons[platform];
                          return <Icon key={platform} className="w-4 h-4 text-muted-foreground" />;
                        })}
                      </div>
                    </div>
                    <div className="hidden lg:flex items-center gap-6 text-sm">
                      <div className="text-center">
                        <div className="font-semibold text-foreground">{competitor.followers}</div>
                        <div className="text-muted-foreground">Followers</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-foreground">{competitor.posts}</div>
                        <div className="text-muted-foreground">Posts</div>
                      </div>
                      <div className="text-center">
                        <div className="flex items-center justify-center gap-1">
                          <span className="font-semibold text-foreground">{competitor.engagement}</span>
                          {competitor.trend === 'up' && <ArrowUp className="w-4 h-4 text-green-500" />}
                          {competitor.trend === 'down' && <ArrowDown className="w-4 h-4 text-red-500" />}
                          {competitor.trend === 'stable' && <Minus className="w-4 h-4 text-yellow-500" />}
                        </div>
                        <div className="text-muted-foreground">Engagement</div>
                      </div>
                    </div>
                    <Button variant="ghost" size="sm">
                      <ExternalLink className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
            </div>

            {/* Insights Preview */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <img src={insightsPreview} alt="Insights Preview" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">AI Insights</h3>
                <p className="text-sm text-muted-foreground mb-3">
                  Get AI-powered recommendations based on competitor analysis to improve your content strategy.
                </p>
                <Button variant="hero" size="sm" className="w-full">View Full Report</Button>
              </div>
            </div>
          </div>

          {/* Top Performing Posts */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">Top Performing Competitor Posts</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
              {topPosts.map((post) => (
                <div key={post.id} className="p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors">
                  <div className="aspect-square bg-gradient-to-br from-primary/20 to-accent/20 rounded-lg mb-3 flex items-center justify-center">
                    <span className="text-muted-foreground">{post.type}</span>
                  </div>
                  <h4 className="font-medium text-foreground text-sm mb-1">{post.competitor}</h4>
                  <p className="text-xs text-muted-foreground mb-3">{post.date}</p>
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <span className="flex items-center gap-1"><Heart className="w-3 h-3" />{post.likes}</span>
                    <span className="flex items-center gap-1"><MessageCircle className="w-3 h-3" />{post.comments}</span>
                    <span className="flex items-center gap-1"><Share2 className="w-3 h-3" />{post.shares}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default CompetitorAnalysisDashboard;
