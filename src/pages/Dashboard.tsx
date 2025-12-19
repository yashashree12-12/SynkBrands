import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Button } from '@/components/ui/button';
import { Link, useSearchParams } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import dashboardPreview from '@/assets/dashboard-preview.png';
import contentShowcase from '@/assets/content-showcase.png';
import schedulerPreview from '@/assets/scheduler-preview.png';
import { 
  Plus, Image, Video, Calendar, BarChart3, TrendingUp, 
  Clock, Eye, Heart, Share2, Download, Settings, 
  ChevronRight, Sparkles, FileText, Users, Zap,
  ArrowUpRight, ArrowDownRight, MoreHorizontal, Flame,
  Target, Instagram, Facebook, Twitter, Youtube, Linkedin,
  Grid, List, Search, Filter, Edit3, Trash2, Copy,
  Building2, Palette, Globe, ChevronDown, CheckCircle2,
  Play, ImageIcon, Type, Layout, CalendarDays, Send,
  TrendingDown, MoreVertical, ExternalLink
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
    status: 'published',
    views: 1234,
    engagement: '8.2%'
  },
  {
    id: 2,
    title: 'Product Launch Video',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=400&fit=crop',
    created: '5 hours ago',
    platform: 'TikTok',
    status: 'scheduled',
    views: 0,
    engagement: '-'
  },
  {
    id: 3,
    title: 'Feature Carousel',
    type: 'carousel',
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=400&fit=crop',
    created: '1 day ago',
    platform: 'LinkedIn',
    status: 'draft',
    views: 0,
    engagement: '-'
  },
  {
    id: 4,
    title: 'Holiday Ad Creative',
    type: 'ad',
    thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
    created: '2 days ago',
    platform: 'Facebook',
    status: 'published',
    views: 5678,
    engagement: '12.1%'
  },
  {
    id: 5,
    title: 'Brand Story Video',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1611162617474-5b21e879e113?w=400&h=400&fit=crop',
    created: '3 days ago',
    platform: 'YouTube',
    status: 'published',
    views: 9821,
    engagement: '15.3%'
  },
  {
    id: 6,
    title: 'Product Photography',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=400&h=400&fit=crop',
    created: '4 days ago',
    platform: 'Instagram',
    status: 'draft',
    views: 0,
    engagement: '-'
  }
];

// Scheduled posts
const scheduledPosts = [
  { id: 1, title: 'Morning Motivation', platform: 'Instagram', time: 'Today, 9:00 AM', status: 'pending' },
  { id: 2, title: 'Product Feature', platform: 'TikTok', time: 'Today, 2:00 PM', status: 'pending' },
  { id: 3, title: 'Customer Story', platform: 'LinkedIn', time: 'Tomorrow, 10:00 AM', status: 'scheduled' },
  { id: 4, title: 'Weekend Sale', platform: 'Facebook', time: 'Sat, 8:00 AM', status: 'scheduled' },
];

// Brand data
const brandData = {
  name: 'My Brand',
  logo: null,
  primaryColor: '#7C3AED',
  connectedAccounts: [
    { platform: 'Instagram', connected: true, followers: '12.5K', icon: Instagram },
    { platform: 'Facebook', connected: true, followers: '8.2K', icon: Facebook },
    { platform: 'TikTok', connected: false, followers: '0', icon: Play },
    { platform: 'LinkedIn', connected: true, followers: '5.1K', icon: Linkedin },
    { platform: 'YouTube', connected: false, followers: '0', icon: Youtube },
    { platform: 'Twitter', connected: true, followers: '3.8K', icon: Twitter },
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
  const [searchParams] = useSearchParams();
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const [activeTab, setActiveTab] = useState(searchParams.get('tab') || 'dashboard');
  const [searchQuery, setSearchQuery] = useState('');

  // Demo mode - allow viewing without auth
  const displayName = user?.name || 'Demo User';
  const streakCount = postingStreak.filter(d => d.posted).length;

  return (
    <>
      <Helmet>
        <title>Dashboard - SynkBrands</title>
        <meta name="description" content="Manage your AI-generated content, view analytics, and schedule posts from your SynkBrands dashboard." />
      </Helmet>

      <div className="flex min-h-screen bg-background">
        {/* Sidebar */}
        <DashboardSidebar />

        {/* Main Content */}
        <main className="flex-1 ml-16 lg:ml-64 transition-all duration-300">
          {/* Top Header */}
          <header className="h-16 border-b border-border bg-card/50 backdrop-blur-sm sticky top-0 z-40 flex items-center justify-between px-6">
            <div className="flex items-center gap-4">
              <h1 className="font-display text-xl font-bold text-foreground">
                {activeTab === 'dashboard' && 'Dashboard'}
                {activeTab === 'content' && 'Content Library'}
                {activeTab === 'schedule' && 'Schedule'}
                {activeTab === 'analytics' && 'Analytics'}
                {activeTab === 'brand' && 'Brand Settings'}
              </h1>
            </div>
            <div className="flex items-center gap-3">
              <Link to="/create">
                <Button variant="hero" size="sm" className="rounded-full">
                  <Plus className="w-4 h-4 mr-2" />
                  Create New
                </Button>
              </Link>
            </div>
          </header>

          <div className="p-6">
            {/* Dashboard Tab */}
            {activeTab === 'dashboard' && (
              <div className="space-y-6">
                {/* Welcome Banner */}
                <div className="relative bg-gradient-to-r from-purple/20 via-pink/20 to-coral/20 rounded-2xl p-6 overflow-hidden border border-border">
                  <div className="relative z-10">
                    <h2 className="font-display text-2xl font-bold text-foreground mb-2">
                      Welcome back, {displayName.split(' ')[0]}!
                    </h2>
                    <p className="text-muted-foreground mb-4">
                      Your content is performing great. Here's what's happening today.
                    </p>
                    <Link to="/create">
                      <Button variant="hero" size="sm" className="rounded-full">
                        <Sparkles className="w-4 h-4 mr-2" />
                        Create New Content
                      </Button>
                    </Link>
                  </div>
                  <div className="absolute right-0 top-0 w-1/3 h-full opacity-30">
                    <img src={dashboardPreview} alt="" className="w-full h-full object-cover" />
                  </div>
                </div>

                {/* Stats Grid */}
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: 'Total Views', value: '24,521', change: '+12.5%', up: true, icon: Eye },
                    { label: 'Engagement', value: '8.2%', change: '+2.1%', up: true, icon: Heart },
                    { label: 'Posts Created', value: '156', change: '+8', up: true, icon: FileText },
                    { label: 'Scheduled', value: '12', change: '3 today', up: null, icon: Calendar }
                  ].map((stat, index) => (
                    <div key={index} className="bg-card rounded-xl p-5 border border-border hover:border-primary/50 transition-all hover:shadow-lg group">
                      <div className="flex items-center justify-between mb-3">
                        <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center group-hover:scale-110 transition-transform">
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

                {/* Posting Streak */}
                <div className="bg-card rounded-xl border border-border p-5">
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center">
                        <Flame className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h3 className="font-display font-semibold text-foreground">Posting Streak</h3>
                        <p className="text-sm text-muted-foreground">{streakCount} days this week</p>
                      </div>
                    </div>
                    <div className="text-2xl font-bold text-foreground">{streakCount}/7</div>
                  </div>
                  <div className="flex gap-2">
                    {postingStreak.map((day, index) => (
                      <div key={index} className="flex-1 flex flex-col items-center gap-2">
                        <div className={`w-full h-10 rounded-lg flex items-center justify-center transition-all ${
                          day.posted 
                            ? 'bg-gradient-to-br from-green-500 to-emerald-500' 
                            : 'bg-secondary'
                        }`}>
                          {day.posted && <CheckCircle2 className="w-4 h-4 text-white" />}
                        </div>
                        <span className="text-xs text-muted-foreground">{day.day}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="grid lg:grid-cols-3 gap-6">
                  {/* Quick Actions */}
                  <div className="lg:col-span-2">
                    <h3 className="font-display font-semibold text-foreground mb-4">Quick Actions</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {quickActions.map((action, index) => (
                        <Link 
                          key={index} 
                          to={action.href}
                          className="bg-card rounded-xl p-4 border border-border hover:border-primary/50 transition-all hover:shadow-lg group"
                        >
                          <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${action.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                            <action.icon className="w-5 h-5 text-white" />
                          </div>
                          <p className="text-sm font-medium text-foreground">{action.label}</p>
                        </Link>
                      ))}
                    </div>
                  </div>

                  {/* Upcoming Posts */}
                  <div>
                    <div className="flex items-center justify-between mb-4">
                      <h3 className="font-display font-semibold text-foreground">Upcoming Posts</h3>
                      <button 
                        onClick={() => setActiveTab('schedule')}
                        className="text-sm text-primary hover:underline flex items-center gap-1"
                      >
                        View All <ChevronRight className="w-4 h-4" />
                      </button>
                    </div>
                    <div className="bg-card rounded-xl border border-border divide-y divide-border">
                      {scheduledPosts.slice(0, 3).map((post) => {
                        const PlatformIcon = platformIcons[post.platform] || Globe;
                        return (
                          <div key={post.id} className="p-3 flex items-center gap-3 hover:bg-secondary/50 transition-colors">
                            <div className="w-8 h-8 rounded-lg bg-secondary flex items-center justify-center">
                              <PlatformIcon className="w-4 h-4 text-muted-foreground" />
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className="text-sm font-medium text-foreground truncate">{post.title}</p>
                              <p className="text-xs text-muted-foreground">{post.time}</p>
                            </div>
                            <Send className="w-4 h-4 text-muted-foreground" />
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Recent Content */}
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <h3 className="font-display font-semibold text-foreground">Recent Content</h3>
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
                        <div key={content.id} className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg group">
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
                                <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                                  <Play className="w-5 h-5 text-foreground ml-0.5" />
                                </div>
                              </div>
                            )}
                          </div>
                          <div className="p-3">
                            <p className="font-medium text-foreground text-sm truncate">{content.title}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <PlatformIcon className="w-3 h-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{content.platform}</span>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Content Library Tab */}
            {activeTab === 'content' && (
              <div className="space-y-6">
                {/* Hero Banner */}
                <div className="relative bg-gradient-to-r from-purple/10 to-pink/10 rounded-2xl p-6 overflow-hidden border border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-display text-xl font-bold text-foreground mb-2">Your Content Library</h2>
                      <p className="text-muted-foreground">{contentLibrary.length} items created</p>
                    </div>
                    <img src={contentShowcase} alt="" className="w-32 h-32 object-cover rounded-xl opacity-80" />
                  </div>
                </div>

                {/* Filters */}
                <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                  <div className="relative">
                    <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                    <input
                      type="text"
                      placeholder="Search content..."
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                      className="pl-10 pr-4 py-2 bg-secondary rounded-lg border border-border focus:border-primary focus:outline-none text-sm w-full md:w-64"
                    />
                  </div>
                  <div className="flex items-center gap-3">
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

                {/* Content Grid */}
                <div className={viewMode === 'grid' 
                  ? "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4"
                  : "space-y-3"
                }>
                  {contentLibrary.map((content) => {
                    const PlatformIcon = platformIcons[content.platform] || Globe;
                    
                    if (viewMode === 'list') {
                      return (
                        <div key={content.id} className="bg-card rounded-xl border border-border p-4 flex items-center gap-4 hover:border-primary/50 transition-all">
                          <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0">
                            <img src={content.thumbnail} alt={content.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="font-medium text-foreground truncate">{content.title}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <PlatformIcon className="w-3 h-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{content.platform}</span>
                              <span className="text-xs text-muted-foreground">•</span>
                              <span className="text-xs text-muted-foreground">{content.created}</span>
                            </div>
                          </div>
                          <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                            content.status === 'published' ? 'bg-green-500/20 text-green-500' :
                            content.status === 'scheduled' ? 'bg-blue-500/20 text-blue-500' :
                            'bg-yellow-500/20 text-yellow-600'
                          }`}>
                            {content.status}
                          </div>
                          <div className="flex items-center gap-2">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Edit3 className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <MoreVertical className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                      );
                    }

                    return (
                      <div key={content.id} className="bg-card rounded-xl border border-border overflow-hidden hover:border-primary/50 transition-all hover:shadow-lg group">
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
                              <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center">
                                <Play className="w-5 h-5 text-foreground ml-0.5" />
                              </div>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                            <Button variant="secondary" size="icon" className="h-8 w-8">
                              <Edit3 className="w-4 h-4" />
                            </Button>
                            <Button variant="secondary" size="icon" className="h-8 w-8">
                              <Download className="w-4 h-4" />
                            </Button>
                            <Button variant="secondary" size="icon" className="h-8 w-8">
                              <ExternalLink className="w-4 h-4" />
                            </Button>
                          </div>
                        </div>
                        <div className="p-3">
                          <p className="font-medium text-foreground text-sm truncate">{content.title}</p>
                          <div className="flex items-center justify-between mt-2">
                            <div className="flex items-center gap-2">
                              <PlatformIcon className="w-3 h-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{content.platform}</span>
                            </div>
                            <span className="text-xs text-muted-foreground">{content.created}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Schedule Tab */}
            {activeTab === 'schedule' && (
              <div className="space-y-6">
                <div className="relative bg-gradient-to-r from-blue/10 to-cyan/10 rounded-2xl p-6 overflow-hidden border border-border">
                  <div className="flex items-center justify-between">
                    <div>
                      <h2 className="font-display text-xl font-bold text-foreground mb-2">Content Schedule</h2>
                      <p className="text-muted-foreground">Plan and schedule your content across platforms</p>
                    </div>
                    <img src={schedulerPreview} alt="" className="w-48 h-32 object-cover rounded-xl opacity-80" />
                  </div>
                </div>

                <div className="bg-card rounded-xl border border-border p-6">
                  <div className="flex items-center justify-between mb-6">
                    <h3 className="font-display font-semibold text-foreground">Scheduled Posts</h3>
                    <Link to="/create">
                      <Button variant="outline" size="sm">
                        <Plus className="w-4 h-4 mr-2" />
                        Schedule Post
                      </Button>
                    </Link>
                  </div>
                  <div className="space-y-3">
                    {scheduledPosts.map((post) => {
                      const PlatformIcon = platformIcons[post.platform] || Globe;
                      return (
                        <div key={post.id} className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg hover:bg-secondary transition-colors">
                          <div className="w-10 h-10 rounded-lg bg-background flex items-center justify-center">
                            <PlatformIcon className="w-5 h-5 text-primary" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-foreground">{post.title}</p>
                            <div className="flex items-center gap-2 mt-1">
                              <Clock className="w-3 h-3 text-muted-foreground" />
                              <span className="text-sm text-muted-foreground">{post.time}</span>
                            </div>
                          </div>
                          <div className={`px-3 py-1 rounded-full text-xs font-medium ${
                            post.status === 'pending' ? 'bg-orange-500/20 text-orange-500' : 'bg-blue-500/20 text-blue-500'
                          }`}>
                            {post.status}
                          </div>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <MoreVertical className="w-4 h-4" />
                          </Button>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Analytics Tab */}
            {activeTab === 'analytics' && (
              <div className="space-y-6">
                <div className="relative bg-gradient-to-r from-green/10 to-emerald/10 rounded-2xl p-6 overflow-hidden border border-border">
                  <h2 className="font-display text-xl font-bold text-foreground mb-2">Analytics Overview</h2>
                  <p className="text-muted-foreground">Track your content performance across all platforms</p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
                  {[
                    { label: 'Total Reach', value: '156.2K', change: '+24.5%', up: true },
                    { label: 'Impressions', value: '892.1K', change: '+18.2%', up: true },
                    { label: 'Engagement Rate', value: '8.4%', change: '+3.1%', up: true },
                    { label: 'Click Rate', value: '2.8%', change: '-0.5%', up: false },
                  ].map((stat, index) => (
                    <div key={index} className="bg-card rounded-xl p-5 border border-border">
                      <p className="text-sm text-muted-foreground mb-2">{stat.label}</p>
                      <p className="font-display text-2xl font-bold text-foreground">{stat.value}</p>
                      <span className={`flex items-center text-sm font-medium mt-1 ${stat.up ? 'text-green-500' : 'text-red-500'}`}>
                        {stat.up ? <TrendingUp className="w-4 h-4 mr-1" /> : <TrendingDown className="w-4 h-4 mr-1" />}
                        {stat.change}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-display font-semibold text-foreground mb-4">Top Performing Content</h3>
                  <div className="space-y-4">
                    {contentLibrary.filter(c => c.status === 'published').slice(0, 4).map((content, index) => {
                      const PlatformIcon = platformIcons[content.platform] || Globe;
                      return (
                        <div key={content.id} className="flex items-center gap-4">
                          <span className="text-lg font-bold text-muted-foreground w-6">{index + 1}</span>
                          <div className="w-12 h-12 rounded-lg overflow-hidden">
                            <img src={content.thumbnail} alt={content.title} className="w-full h-full object-cover" />
                          </div>
                          <div className="flex-1">
                            <p className="font-medium text-foreground">{content.title}</p>
                            <div className="flex items-center gap-2">
                              <PlatformIcon className="w-3 h-3 text-muted-foreground" />
                              <span className="text-xs text-muted-foreground">{content.platform}</span>
                            </div>
                          </div>
                          <div className="text-right">
                            <p className="font-medium text-foreground">{content.views?.toLocaleString()} views</p>
                            <p className="text-sm text-green-500">{content.engagement} engagement</p>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            )}

            {/* Brand Settings Tab */}
            {activeTab === 'brand' && (
              <div className="space-y-6">
                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-display font-semibold text-foreground mb-4">Brand Profile</h3>
                  <div className="flex items-start gap-6">
                    <div className="w-20 h-20 rounded-xl bg-gradient-to-br from-purple to-pink flex items-center justify-center text-white text-2xl font-bold">
                      {brandData.name.charAt(0)}
                    </div>
                    <div className="flex-1">
                      <input
                        type="text"
                        defaultValue={brandData.name}
                        className="text-xl font-bold bg-transparent border-b border-transparent hover:border-border focus:border-primary outline-none text-foreground mb-2 w-full"
                      />
                      <div className="flex items-center gap-4">
                        <div className="flex items-center gap-2">
                          <Palette className="w-4 h-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">Brand Color:</span>
                          <div 
                            className="w-6 h-6 rounded-full border border-border cursor-pointer"
                            style={{ backgroundColor: brandData.primaryColor }}
                          />
                        </div>
                      </div>
                    </div>
                    <Button variant="outline" size="sm">
                      <Settings className="w-4 h-4 mr-2" />
                      Edit Brand
                    </Button>
                  </div>
                </div>

                <div className="bg-card rounded-xl border border-border p-6">
                  <h3 className="font-display font-semibold text-foreground mb-4">Connected Accounts</h3>
                  <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {brandData.connectedAccounts.map((account) => (
                      <div key={account.platform} className="flex items-center gap-4 p-4 bg-secondary/50 rounded-lg">
                        <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${account.connected ? 'bg-primary/10' : 'bg-secondary'}`}>
                          <account.icon className={`w-5 h-5 ${account.connected ? 'text-primary' : 'text-muted-foreground'}`} />
                        </div>
                        <div className="flex-1">
                          <p className="font-medium text-foreground">{account.platform}</p>
                          {account.connected ? (
                            <p className="text-sm text-green-500">{account.followers} followers</p>
                          ) : (
                            <p className="text-sm text-muted-foreground">Not connected</p>
                          )}
                        </div>
                        <Button variant={account.connected ? "outline" : "default"} size="sm">
                          {account.connected ? 'Disconnect' : 'Connect'}
                        </Button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}
          </div>
        </main>
      </div>
    </>
  );
};

export default Dashboard;
