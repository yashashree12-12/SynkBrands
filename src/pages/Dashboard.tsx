import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Link, Navigate } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { 
  Plus, Image, Video, Calendar, BarChart3, TrendingUp, 
  Clock, Eye, Heart, Share2, Download, Settings, 
  ChevronRight, Sparkles, FileText, Users, Zap,
  ArrowUpRight, ArrowDownRight, MoreHorizontal, Flame,
  Target, Instagram, Facebook, Twitter, Youtube, Linkedin,
  Grid, List, Search, Filter, Edit3, Trash2, Copy,
  Building2, Palette, Globe, ChevronDown, CheckCircle2,
  Play, ImageIcon, Type, Layout
} from 'lucide-react';

// Posting streak data
const postingStreak = [
  { day: 'Mon', posted: true },
  { day: 'Tue', posted: true },
  { day: 'Wed', posted: true },
  { day: 'Thu', posted: false },
  { day: 'Fri', posted: true },
  { day: 'Sat', posted: true },
  { day: 'Sun', posted: false },
];

// Content library items
const contentLibrary = [
  {
    id: 1,
    title: 'Summer Sale Campaign',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop',
    created: '2 hours ago',
    platform: 'Instagram',
    status: 'published'
  },
  {
    id: 2,
    title: 'Product Launch Video',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    created: '5 hours ago',
    platform: 'TikTok',
    status: 'scheduled'
  },
  {
    id: 3,
    title: 'Feature Carousel',
    type: 'carousel',
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    created: '1 day ago',
    platform: 'LinkedIn',
    status: 'draft'
  },
  {
    id: 4,
    title: 'Holiday Ad Creative',
    type: 'ad',
    thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
    created: '2 days ago',
    platform: 'Facebook',
    status: 'published'
  },
  {
    id: 5,
    title: 'Brand Story Video',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop',
    created: '3 days ago',
    platform: 'YouTube',
    status: 'published'
  },
  {
    id: 6,
    title: 'Product Photography',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    created: '4 days ago',
    platform: 'Instagram',
    status: 'draft'
  }
];

// Brand data
const brandData = {
  name: 'My Brand',
  logo: null,
  primaryColor: '#7C3AED',
  connectedAccounts: [
    { platform: 'Instagram', connected: true, followers: '12.5K' },
    { platform: 'Facebook', connected: true, followers: '8.2K' },
    { platform: 'TikTok', connected: false, followers: '0' },
    { platform: 'LinkedIn', connected: true, followers: '5.1K' },
    { platform: 'YouTube', connected: false, followers: '0' },
  ]
};

const quickActions = [
  { icon: ImageIcon, label: 'Create Image', href: '/create?type=image', color: 'from-pink-500 to-rose-500' },
  { icon: Play, label: 'Create Video', href: '/create?type=video', color: 'from-purple-500 to-violet-500' },
  { icon: Type, label: 'Social Post', href: '/create?type=social', color: 'from-blue-500 to-cyan-500' },
  { icon: Layout, label: 'Ad Creative', href: '/create?type=ad', color: 'from-orange-500 to-amber-500' }
];

const platformIcons: Record<string, React.ComponentType<any>> = {
  Instagram: Instagram,
  Facebook: Facebook,
  TikTok: Play,
  LinkedIn: Linkedin,
  YouTube: Youtube,
  Twitter: Twitter
};

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeTab, setActiveTab] = useState<'dashboard' | 'content' | 'brand'>('dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  const streakCount = postingStreak.filter(d => d.posted).length;

  return (
    <>
      <Helmet>
        <title>Dashboard - SynkBrands</title>
        <meta name="description" content="Manage your AI-generated content, view analytics, and schedule posts from your SynkBrands dashboard." />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background">
        {/* Tab Navigation */}
        <div className="border-b border-border bg-card/50 sticky top-16 z-40">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex gap-1">
              {[
                { id: 'dashboard', label: 'Dashboard', icon: BarChart3 },
                { id: 'content', label: 'Content Library', icon: Grid },
                { id: 'brand', label: 'Brand & Social Accounts', icon: Building2 }
              ].map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id as any)}
                  className={`flex items-center gap-2 px-4 py-4 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab.id
                      ? 'border-primary text-primary'
                      : 'border-transparent text-muted-foreground hover:text-foreground hover:border-border'
                  }`}
                >
                  <tab.icon className="w-4 h-4" />
                  {tab.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Dashboard Tab */}
          {activeTab === 'dashboard' && (
            <>
              {/* Header */}
              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-8">
                <div>
                  <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground">
                    Welcome back, {user?.name?.split(' ')[0]}
                  </h1>
                  <p className="text-muted-foreground mt-1">Here's what's happening with your content</p>
                </div>
                <Link to="/create">
                  <Button variant="hero" size="lg" className="mt-4 md:mt-0 rounded-full">
                    <Plus className="w-5 h-5 mr-2" />
                    Create New
                  </Button>
                </Link>
              </div>

              {/* Posting Streak */}
              <div className="bg-card rounded-2xl border border-border p-6 mb-8">
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                      <Flame className="w-6 h-6 text-white" />
                    </div>
                    <div>
                      <h2 className="font-display text-lg font-semibold text-foreground">Posting Streak</h2>
                      <p className="text-sm text-muted-foreground">{streakCount} days this week</p>
                    </div>
                  </div>
                  <div className="text-3xl font-bold text-foreground">{streakCount}/7</div>
                </div>
                <div className="flex gap-2">
                  {postingStreak.map((day, index) => (
                    <div key={index} className="flex-1 flex flex-col items-center gap-2">
                      <div className={`w-full h-12 rounded-lg flex items-center justify-center transition-all ${
                        day.posted 
                          ? 'bg-gradient-to-br from-green-500 to-emerald-500' 
                          : 'bg-secondary'
                      }`}>
                        {day.posted && <CheckCircle2 className="w-5 h-5 text-white" />}
                      </div>
                      <span className="text-xs text-muted-foreground">{day.day}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Stats Overview */}
              <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
                {[
                  { label: 'Total Views', value: '24,521', change: '+12.5%', up: true, icon: Eye },
                  { label: 'Engagement', value: '8.2%', change: '+2.1%', up: true, icon: Heart },
                  { label: 'Posts Created', value: '156', change: '+8', up: true, icon: FileText },
                  { label: 'Scheduled', value: '12', change: '3 today', up: null, icon: Calendar }
                ].map((stat, index) => (
                  <div key={index} className="bg-card rounded-2xl p-5 border border-border hover:border-primary/50 transition-all hover:shadow-lg group">
                    <div className="flex items-center justify-between mb-3">
                      <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
                        <stat.icon className="w-5 h-5 text-primary" />
                      </div>
                      {stat.up !== null && (
                        <span className={`flex items-center text-sm font-medium ${stat.up ? 'text-green-500' : 'text-red-500'}`}>
                          {stat.up ? <ArrowUpRight className="w-4 h-4" /> : <ArrowDownRight className="w-4 h-4" />}
                          {stat.change}
                        </span>
                      )}
                      {stat.up === null && (
                        <span className="text-sm text-muted-foreground">{stat.change}</span>
                      )}
                    </div>
                    <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                ))}
              </div>

              {/* Quick Actions */}
              <div className="mb-8">
                <h2 className="font-display text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {quickActions.map((action, index) => (
                    <Link 
                      key={index} 
                      to={action.href}
                      className="bg-card rounded-2xl p-5 border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${action.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                        <action.icon className="w-6 h-6 text-white" />
                      </div>
                      <p className="font-medium text-foreground">{action.label}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* Recent Content Preview */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-display text-lg font-semibold text-foreground">Recent Content</h2>
                  <button 
                    onClick={() => setActiveTab('content')}
                    className="text-sm text-primary hover:underline flex items-center gap-1"
                  >
                    View All <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {contentLibrary.slice(0, 4).map((content) => {
                    const PlatformIcon = platformIcons[content.platform] || Globe;
                    return (
                      <div key={content.id} className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg group">
                        <div className="relative aspect-square">
                          <img 
                            src={content.thumbnail} 
                            alt={content.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-2 right-2">
                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                              content.status === 'published' ? 'bg-green-500/90 text-white' :
                              content.status === 'scheduled' ? 'bg-blue-500/90 text-white' :
                              'bg-yellow-500/90 text-white'
                            }`}>
                              {content.status}
                            </div>
                          </div>
                          {content.type === 'video' && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                                <Play className="w-6 h-6 text-foreground ml-1" />
                              </div>
                            </div>
                          )}
                        </div>
                        <div className="p-3">
                          <p className="font-medium text-foreground text-sm truncate">{content.title}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <PlatformIcon className="w-3 h-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{content.platform}</span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground">{content.created}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </>
          )}

          {/* Content Library Tab */}
          {activeTab === 'content' && (
            <>
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
                <div>
                  <h1 className="font-display text-2xl font-bold text-foreground">Content Library</h1>
                  <p className="text-muted-foreground">All your created content for this brand</p>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search content..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none text-sm w-64"
                    />
                  </div>
                  <Button variant="outline" size="sm" className="gap-2">
                    <Filter className="w-4 h-4" />
                    Filter
                  </Button>
                  <div className="flex bg-secondary rounded-lg p-1">
                    <button
                      onClick={() => setViewMode('grid')}
                      className={`p-2 rounded-md transition-colors ${viewMode === 'grid' ? 'bg-background shadow-sm' : ''}`}
                    >
                      <Grid className="w-4 h-4" />
                    </button>
                    <button
                      onClick={() => setViewMode('list')}
                      className={`p-2 rounded-md transition-colors ${viewMode === 'list' ? 'bg-background shadow-sm' : ''}`}
                    >
                      <List className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </div>

              {viewMode === 'grid' ? (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                  {contentLibrary.map((content) => {
                    const PlatformIcon = platformIcons[content.platform] || Globe;
                    return (
                      <div key={content.id} className="bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg group">
                        <div className="relative aspect-square">
                          <img 
                            src={content.thumbnail} 
                            alt={content.title}
                            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                          />
                          <div className="absolute top-2 right-2">
                            <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                              content.status === 'published' ? 'bg-green-500/90 text-white' :
                              content.status === 'scheduled' ? 'bg-blue-500/90 text-white' :
                              'bg-yellow-500/90 text-white'
                            }`}>
                              {content.status}
                            </div>
                          </div>
                          {content.type === 'video' && (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-12 h-12 rounded-full bg-white/90 flex items-center justify-center">
                                <Play className="w-6 h-6 text-foreground ml-1" />
                              </div>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <Button size="sm" variant="secondary" className="rounded-full">
                              <Edit3 className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="secondary" className="rounded-full">
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="secondary" className="rounded-full">
                              <Copy className="w-4 h-4" />
                            </Button>
                            <Button size="sm" variant="destructive" className="rounded-full">
                              <Trash2 className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="p-3">
                          <p className="font-medium text-foreground text-sm truncate">{content.title}</p>
                          <div className="flex items-center gap-2 mt-1">
                            <PlatformIcon className="w-3 h-3 text-muted-foreground" />
                            <span className="text-xs text-muted-foreground">{content.platform}</span>
                            <span className="text-xs text-muted-foreground">•</span>
                            <span className="text-xs text-muted-foreground">{content.created}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              ) : (
                <div className="bg-card rounded-2xl border border-border overflow-hidden">
                  <div className="divide-y divide-border">
                    {contentLibrary.map((content) => {
                      const PlatformIcon = platformIcons[content.platform] || Globe;
                      return (
                        <div key={content.id} className="p-4 flex items-center gap-4 hover:bg-secondary/50 transition-colors">
                          <img 
                            src={content.thumbnail} 
                            alt={content.title}
                            className="w-16 h-16 rounded-xl object-cover"
                          />
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-foreground truncate">{content.title}</p>
                            <div className="flex items-center gap-3 mt-1">
                              <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <Clock className="w-3 h-3" />
                                {content.created}
                              </span>
                              <span className="text-xs text-muted-foreground flex items-center gap-1">
                                <PlatformIcon className="w-3 h-3" />
                                {content.platform}
                              </span>
                              <span className={`text-xs px-2 py-0.5 rounded-full ${
                                content.status === 'published' ? 'bg-green-500/10 text-green-500' :
                                content.status === 'scheduled' ? 'bg-blue-500/10 text-blue-500' :
                                'bg-yellow-500/10 text-yellow-500'
                              }`}>
                                {content.status}
                              </span>
                            </div>
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="sm">
                              <Edit3 className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="sm">
                              <MoreHorizontal className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              )}
            </>
          )}

          {/* Brand & Social Accounts Tab */}
          {activeTab === 'brand' && (
            <>
              <div className="mb-8">
                <h1 className="font-display text-2xl font-bold text-foreground">Brand & Social Accounts</h1>
                <p className="text-muted-foreground">Manage your brand details and connected social accounts</p>
              </div>

              <div className="grid lg:grid-cols-2 gap-8">
                {/* Brand Details */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <h2 className="font-display text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Building2 className="w-5 h-5 text-primary" />
                    Brand Details
                  </h2>
                  
                  <div className="space-y-6">
                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Brand Logo</label>
                      <div className="flex items-center gap-4">
                        <div className="w-20 h-20 rounded-xl bg-secondary flex items-center justify-center border-2 border-dashed border-border">
                          <ImageIcon className="w-8 h-8 text-muted-foreground" />
                        </div>
                        <Button variant="outline" size="sm">Upload Logo</Button>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Brand Name</label>
                      <input 
                        type="text" 
                        defaultValue={brandData.name}
                        className="w-full px-4 py-2 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none"
                      />
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Brand Colors</label>
                      <div className="flex items-center gap-3">
                        <div 
                          className="w-10 h-10 rounded-lg cursor-pointer border-2 border-border"
                          style={{ backgroundColor: brandData.primaryColor }}
                        />
                        <input 
                          type="text" 
                          defaultValue={brandData.primaryColor}
                          className="flex-1 px-4 py-2 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none"
                        />
                        <Button variant="outline" size="sm">
                          <Palette className="w-4 h-4 mr-2" />
                          Pick Color
                        </Button>
                      </div>
                    </div>

                    <div>
                      <label className="text-sm font-medium text-foreground mb-2 block">Brand Guidelines</label>
                      <textarea 
                        placeholder="Enter your brand guidelines, tone of voice, target audience..."
                        className="w-full px-4 py-3 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none min-h-[120px] resize-none"
                      />
                    </div>

                    <Button variant="hero" className="w-full">Save Brand Details</Button>
                  </div>
                </div>

                {/* Connected Social Accounts */}
                <div className="bg-card rounded-2xl border border-border p-6">
                  <h2 className="font-display text-lg font-semibold text-foreground mb-6 flex items-center gap-2">
                    <Globe className="w-5 h-5 text-primary" />
                    Connected Social Accounts
                  </h2>

                  <div className="space-y-4">
                    {brandData.connectedAccounts.map((account, index) => {
                      const PlatformIcon = platformIcons[account.platform] || Globe;
                      return (
                        <div key={index} className="flex items-center justify-between p-4 bg-secondary/50 rounded-xl border border-border">
                          <div className="flex items-center gap-3">
                            <div className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                              account.platform === 'Instagram' ? 'bg-gradient-to-br from-purple-500 to-pink-500' :
                              account.platform === 'Facebook' ? 'bg-blue-500' :
                              account.platform === 'TikTok' ? 'bg-black' :
                              account.platform === 'LinkedIn' ? 'bg-blue-600' :
                              'bg-red-500'
                            }`}>
                              <PlatformIcon className="w-5 h-5 text-white" />
                            </div>
                            <div>
                              <p className="font-medium text-foreground">{account.platform}</p>
                              {account.connected && (
                                <p className="text-xs text-muted-foreground">{account.followers} followers</p>
                              )}
                            </div>
                          </div>
                          {account.connected ? (
                            <div className="flex items-center gap-2">
                              <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-500 flex items-center gap-1">
                                <CheckCircle2 className="w-3 h-3" />
                                Connected
                              </span>
                              <Button variant="ghost" size="sm">
                                <Settings className="w-4 h-4" />
                              </Button>
                            </div>
                          ) : (
                            <Button variant="outline" size="sm">
                              Connect
                            </Button>
                          )}
                        </div>
                      );
                    })}
                  </div>

                  <div className="mt-6 p-4 bg-primary/5 rounded-xl border border-primary/20">
                    <div className="flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-primary mt-0.5" />
                      <div>
                        <p className="font-medium text-foreground text-sm">Connect more accounts</p>
                        <p className="text-xs text-muted-foreground mt-1">
                          Link additional social media accounts to publish content across multiple platforms with one click.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </main>
    </>
  );
};

export default Dashboard;
