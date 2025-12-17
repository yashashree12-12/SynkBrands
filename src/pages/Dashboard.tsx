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
  ArrowUpRight, ArrowDownRight, MoreHorizontal
} from 'lucide-react';

const recentContent = [
  {
    id: 1,
    title: 'Summer Sale Banner',
    type: 'image',
    thumbnail: 'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=200&h=200&fit=crop',
    created: '2 hours ago',
    views: 1234,
    engagement: '+12%'
  },
  {
    id: 2,
    title: 'Product Launch Video',
    type: 'video',
    thumbnail: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=200&h=200&fit=crop',
    created: '5 hours ago',
    views: 856,
    engagement: '+8%'
  },
  {
    id: 3,
    title: 'Instagram Carousel',
    type: 'carousel',
    thumbnail: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200&h=200&fit=crop',
    created: '1 day ago',
    views: 2341,
    engagement: '+24%'
  },
  {
    id: 4,
    title: 'Facebook Ad Creative',
    type: 'ad',
    thumbnail: 'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=200&h=200&fit=crop',
    created: '2 days ago',
    views: 5672,
    engagement: '+31%'
  }
];

const scheduledPosts = [
  { id: 1, title: 'Monday Motivation', platform: 'Instagram', time: 'Mon 9:00 AM', status: 'scheduled' },
  { id: 2, title: 'Product Feature', platform: 'Facebook', time: 'Tue 2:00 PM', status: 'scheduled' },
  { id: 3, title: 'Behind the Scenes', platform: 'TikTok', time: 'Wed 6:00 PM', status: 'draft' }
];

const quickActions = [
  { icon: Image, label: 'Create Image', href: '/create?type=image', color: 'from-pink-500 to-rose-500' },
  { icon: Video, label: 'Create Video', href: '/create?type=video', color: 'from-purple-500 to-violet-500' },
  { icon: FileText, label: 'Social Post', href: '/create?type=social', color: 'from-blue-500 to-cyan-500' },
  { icon: Zap, label: 'Ad Creative', href: '/create?type=ad', color: 'from-orange-500 to-amber-500' }
];

const Dashboard = () => {
  const { user, isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    return <Navigate to="/auth" replace />;
  }

  return (
    <>
      <Helmet>
        <title>Dashboard - SynkBrands</title>
        <meta name="description" content="Manage your AI-generated content, view analytics, and schedule posts from your SynkBrands dashboard." />
      </Helmet>

      <Navbar />

      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
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

          {/* Stats Overview */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Total Views', value: '24,521', change: '+12.5%', up: true, icon: Eye },
              { label: 'Engagement', value: '8.2%', change: '+2.1%', up: true, icon: Heart },
              { label: 'Posts Created', value: '156', change: '+8', up: true, icon: FileText },
              { label: 'Scheduled', value: '12', change: '3 today', up: null, icon: Calendar }
            ].map((stat, index) => (
              <div key={index} className="bg-card rounded-2xl p-5 border border-border">
                <div className="flex items-center justify-between mb-3">
                  <div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
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

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Recent Content */}
            <div className="lg:col-span-2">
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-lg font-semibold text-foreground">Recent Content</h2>
                <Link to="/content" className="text-sm text-primary hover:underline flex items-center gap-1">
                  View All <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-card rounded-2xl border border-border overflow-hidden">
                <div className="divide-y divide-border">
                  {recentContent.map((content) => (
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
                            <Eye className="w-3 h-3" />
                            {content.views.toLocaleString()}
                          </span>
                          <span className="text-xs text-green-500 font-medium">{content.engagement}</span>
                        </div>
                      </div>
                      <div className="flex items-center gap-2">
                        <Button variant="ghost" size="sm">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Scheduled Posts */}
            <div>
              <div className="flex items-center justify-between mb-4">
                <h2 className="font-display text-lg font-semibold text-foreground">Upcoming Posts</h2>
                <Link to="/schedule" className="text-sm text-primary hover:underline flex items-center gap-1">
                  View Calendar <ChevronRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-card rounded-2xl border border-border p-4 space-y-4">
                {scheduledPosts.map((post) => (
                  <div key={post.id} className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-secondary flex items-center justify-center">
                      <Calendar className="w-5 h-5 text-muted-foreground" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm font-medium text-foreground truncate">{post.title}</p>
                      <p className="text-xs text-muted-foreground">{post.platform} - {post.time}</p>
                    </div>
                    <span className={`text-xs px-2 py-1 rounded-full ${
                      post.status === 'scheduled' 
                        ? 'bg-green-500/10 text-green-500' 
                        : 'bg-yellow-500/10 text-yellow-500'
                    }`}>
                      {post.status}
                    </span>
                  </div>
                ))}
                <Link to="/features/content-scheduler">
                  <Button variant="outline" className="w-full mt-2">
                    <Plus className="w-4 h-4 mr-2" />
                    Schedule New Post
                  </Button>
                </Link>
              </div>

              {/* Usage Stats */}
              <div className="bg-card rounded-2xl border border-border p-4 mt-4">
                <h3 className="font-medium text-foreground mb-4">Monthly Usage</h3>
                <div className="space-y-3">
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-muted-foreground">AI Credits</span>
                      <span className="text-foreground font-medium">75/100</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-primary rounded-full" style={{ width: '75%' }} />
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center justify-between text-sm mb-1">
                      <span className="text-muted-foreground">Storage</span>
                      <span className="text-foreground font-medium">2.4GB/5GB</span>
                    </div>
                    <div className="h-2 bg-secondary rounded-full overflow-hidden">
                      <div className="h-full bg-accent rounded-full" style={{ width: '48%' }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Dashboard;
