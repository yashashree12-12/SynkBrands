import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { Button } from '@/components/ui/button';
import { 
  Zap, Clock, Plus, Settings, CheckCircle2, AlertCircle,
  Instagram, Facebook, Linkedin, Twitter, Youtube, TrendingUp,
  Calendar, BarChart3, RefreshCw, Play, Pause, Trash2,
  Globe, Target, Users, Sparkles
} from 'lucide-react';

const automations = [
  { 
    id: 1, 
    name: 'Daily Product Posts', 
    platform: 'instagram',
    frequency: 'Daily at 10:00 AM',
    status: 'active',
    lastRun: '2 hours ago',
    postsCreated: 156,
    engagement: '+24%'
  },
  { 
    id: 2, 
    name: 'Weekly Blog Shares', 
    platform: 'linkedin',
    frequency: 'Every Monday at 9:00 AM',
    status: 'active',
    lastRun: '3 days ago',
    postsCreated: 52,
    engagement: '+18%'
  },
  { 
    id: 3, 
    name: 'Trending Topic Posts', 
    platform: 'twitter',
    frequency: 'When trending topics match',
    status: 'paused',
    lastRun: '1 week ago',
    postsCreated: 89,
    engagement: '+45%'
  },
  { 
    id: 4, 
    name: 'YouTube Shorts Scheduler', 
    platform: 'youtube',
    frequency: '3x per week',
    status: 'active',
    lastRun: '1 day ago',
    postsCreated: 34,
    engagement: '+67%'
  },
];

const platformIcons: Record<string, typeof Instagram> = {
  instagram: Instagram,
  facebook: Facebook,
  linkedin: Linkedin,
  twitter: Twitter,
  youtube: Youtube,
};

const platformColors: Record<string, string> = {
  instagram: 'bg-gradient-to-br from-purple-500 to-pink-500',
  facebook: 'bg-blue-600',
  linkedin: 'bg-blue-700',
  twitter: 'bg-sky-500',
  youtube: 'bg-red-600',
};

const automationTemplates = [
  { icon: Calendar, title: 'Schedule Posts', description: 'Auto-post at optimal times' },
  { icon: RefreshCw, title: 'Evergreen Content', description: 'Recycle top performing posts' },
  { icon: Globe, title: 'RSS Feed Posts', description: 'Auto-share blog updates' },
  { icon: Target, title: 'Competitor Mirror', description: 'Track and respond to competitors' },
  { icon: Users, title: 'UGC Curation', description: 'Auto-share user content' },
  { icon: Sparkles, title: 'AI Content Gen', description: 'AI creates and posts content' },
];

const AutoPost = () => {
  const [automationsList, setAutomationsList] = useState(automations);

  const toggleAutomation = (id: number) => {
    setAutomationsList(prev => prev.map(auto => 
      auto.id === id ? { ...auto, status: auto.status === 'active' ? 'paused' : 'active' } : auto
    ));
  };

  return (
    <>
      <Helmet>
        <title>Auto Post - SynkBrands Dashboard</title>
        <meta name="description" content="Automate your social media posting with AI-powered scheduling and content generation." />
      </Helmet>

      <div className="min-h-screen bg-background flex">
        <DashboardSidebar />
        
        <main className="flex-1 ml-16 lg:ml-64 p-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold text-foreground flex items-center gap-3">
                <Zap className="w-8 h-8 text-yellow-500" />
                Auto Post
              </h1>
              <p className="text-muted-foreground mt-1">Automate your content publishing workflow</p>
            </div>
            <Button variant="hero" size="sm" className="gap-2">
              <Plus className="w-4 h-4" />
              Create Automation
            </Button>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
            {[
              { label: 'Active Automations', value: '3', icon: Zap, color: 'text-yellow-500' },
              { label: 'Posts This Month', value: '127', icon: TrendingUp, color: 'text-green-500' },
              { label: 'Time Saved', value: '48hrs', icon: Clock, color: 'text-blue-500' },
              { label: 'Avg Engagement', value: '+38%', icon: BarChart3, color: 'text-purple-500' },
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

          {/* Active Automations */}
          <div className="bg-card rounded-xl border border-border p-6 mb-8">
            <h2 className="text-xl font-semibold text-foreground mb-6">Your Automations</h2>
            <div className="space-y-4">
              {automationsList.map((auto) => {
                const PlatformIcon = platformIcons[auto.platform];
                return (
                  <div key={auto.id} className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors">
                    <div className={`w-12 h-12 rounded-xl ${platformColors[auto.platform]} flex items-center justify-center`}>
                      <PlatformIcon className="w-6 h-6 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="font-semibold text-foreground">{auto.name}</h3>
                        <span className={`px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1 ${
                          auto.status === 'active' ? 'bg-green-500/20 text-green-500' : 'bg-yellow-500/20 text-yellow-500'
                        }`}>
                          {auto.status === 'active' ? <CheckCircle2 className="w-3 h-3" /> : <AlertCircle className="w-3 h-3" />}
                          {auto.status}
                        </span>
                      </div>
                      <p className="text-sm text-muted-foreground">{auto.frequency}</p>
                    </div>
                    <div className="hidden lg:flex items-center gap-6 text-sm">
                      <div className="text-center">
                        <div className="font-semibold text-foreground">{auto.postsCreated}</div>
                        <div className="text-muted-foreground">Posts</div>
                      </div>
                      <div className="text-center">
                        <div className="font-semibold text-green-500">{auto.engagement}</div>
                        <div className="text-muted-foreground">Engagement</div>
                      </div>
                      <div className="text-center">
                        <div className="text-muted-foreground">{auto.lastRun}</div>
                        <div className="text-muted-foreground">Last run</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2">
                      <Button 
                        variant="ghost" 
                        size="sm"
                        onClick={() => toggleAutomation(auto.id)}
                        className="gap-1"
                      >
                        {auto.status === 'active' ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                      </Button>
                      <Button variant="ghost" size="sm">
                        <Settings className="w-4 h-4" />
                      </Button>
                      <Button variant="ghost" size="sm" className="text-red-500 hover:text-red-600 hover:bg-red-500/10">
                        <Trash2 className="w-4 h-4" />
                      </Button>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Automation Templates */}
          <div className="bg-card rounded-xl border border-border p-6">
            <h2 className="text-xl font-semibold text-foreground mb-6">Quick Start Templates</h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {automationTemplates.map((template, index) => (
                <div 
                  key={index} 
                  className="p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-all cursor-pointer group border border-transparent hover:border-primary/30"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3 group-hover:bg-primary/20 transition-colors">
                    <template.icon className="w-5 h-5 text-primary" />
                  </div>
                  <h3 className="font-medium text-foreground mb-1">{template.title}</h3>
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                </div>
              ))}
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default AutoPost;
