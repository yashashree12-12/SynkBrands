import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { DashboardSidebar } from '@/components/DashboardSidebar';
import { Button } from '@/components/ui/button';
import { 
  ChevronLeft, ChevronRight, Plus, Filter, Search, 
  Instagram, Facebook, Linkedin, Twitter, Youtube,
  MoreHorizontal, Clock, Eye, Edit2, Trash2, Copy
} from 'lucide-react';
import contentCalendarPreview from '@/assets/content-calendar-preview.png';

const daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

const scheduledPosts = [
  { id: 1, day: 3, platform: 'instagram', type: 'image', title: 'Product Launch', time: '10:00 AM', status: 'scheduled' },
  { id: 2, day: 5, platform: 'facebook', type: 'video', title: 'Behind the Scenes', time: '2:00 PM', status: 'scheduled' },
  { id: 3, day: 8, platform: 'linkedin', type: 'carousel', title: 'Industry Tips', time: '9:00 AM', status: 'draft' },
  { id: 4, day: 10, platform: 'twitter', type: 'text', title: 'Quick Update', time: '4:00 PM', status: 'scheduled' },
  { id: 5, day: 12, platform: 'instagram', type: 'reel', title: 'Tutorial Video', time: '6:00 PM', status: 'scheduled' },
  { id: 6, day: 15, platform: 'youtube', type: 'video', title: 'Weekly Vlog', time: '12:00 PM', status: 'published' },
  { id: 7, day: 18, platform: 'facebook', type: 'image', title: 'Flash Sale', time: '11:00 AM', status: 'scheduled' },
  { id: 8, day: 20, platform: 'instagram', type: 'story', title: 'Q&A Session', time: '3:00 PM', status: 'draft' },
  { id: 9, day: 22, platform: 'linkedin', type: 'article', title: 'Case Study', time: '10:00 AM', status: 'scheduled' },
  { id: 10, day: 25, platform: 'twitter', type: 'thread', title: 'Tips Thread', time: '1:00 PM', status: 'scheduled' },
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

const statusColors: Record<string, string> = {
  scheduled: 'bg-green-500/20 text-green-500',
  draft: 'bg-yellow-500/20 text-yellow-500',
  published: 'bg-blue-500/20 text-blue-500',
};

const ContentCalendar = () => {
  const [currentDate, setCurrentDate] = useState(new Date());
  const [view, setView] = useState<'month' | 'week'>('month');
  const [selectedPost, setSelectedPost] = useState<number | null>(null);
  const [filterPlatform, setFilterPlatform] = useState<string | null>(null);

  const year = currentDate.getFullYear();
  const month = currentDate.getMonth();
  const firstDayOfMonth = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  
  const monthNames = ['January', 'February', 'March', 'April', 'May', 'June', 
    'July', 'August', 'September', 'October', 'November', 'December'];

  const prevMonth = () => setCurrentDate(new Date(year, month - 1, 1));
  const nextMonth = () => setCurrentDate(new Date(year, month + 1, 1));

  const getPostsForDay = (day: number) => {
    return scheduledPosts.filter(post => 
      post.day === day && (!filterPlatform || post.platform === filterPlatform)
    );
  };

  const renderCalendarDays = () => {
    const days = [];
    
    // Empty cells before first day
    for (let i = 0; i < firstDayOfMonth; i++) {
      days.push(<div key={`empty-${i}`} className="h-32 bg-card/50 rounded-lg border border-border/30" />);
    }
    
    // Days of month
    for (let day = 1; day <= daysInMonth; day++) {
      const posts = getPostsForDay(day);
      const isToday = day === new Date().getDate() && month === new Date().getMonth() && year === new Date().getFullYear();
      
      days.push(
        <div 
          key={day} 
          className={`h-32 bg-card rounded-lg border transition-all hover:border-primary/50 overflow-hidden ${
            isToday ? 'border-primary ring-2 ring-primary/20' : 'border-border/50'
          }`}
        >
          <div className="p-2 h-full flex flex-col">
            <div className={`text-sm font-medium mb-1 ${isToday ? 'text-primary' : 'text-foreground'}`}>
              {day}
            </div>
            <div className="flex-1 overflow-y-auto space-y-1">
              {posts.slice(0, 3).map((post) => {
                const PlatformIcon = platformIcons[post.platform];
                return (
                  <div
                    key={post.id}
                    onClick={() => setSelectedPost(post.id)}
                    className={`p-1.5 rounded-md cursor-pointer transition-all hover:scale-105 ${platformColors[post.platform]} text-white text-xs truncate flex items-center gap-1`}
                  >
                    <PlatformIcon className="w-3 h-3 flex-shrink-0" />
                    <span className="truncate">{post.title}</span>
                  </div>
                );
              })}
              {posts.length > 3 && (
                <div className="text-xs text-muted-foreground text-center">+{posts.length - 3} more</div>
              )}
            </div>
          </div>
        </div>
      );
    }
    
    return days;
  };

  return (
    <>
      <Helmet>
        <title>Content Calendar - SynkBrands Dashboard</title>
        <meta name="description" content="Visual content calendar for scheduling and managing your social media posts across all platforms." />
      </Helmet>

      <div className="min-h-screen bg-background flex">
        <DashboardSidebar />
        
        <main className="flex-1 ml-16 lg:ml-64 p-6">
          {/* Header */}
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-8">
            <div>
              <h1 className="text-3xl font-display font-bold text-foreground">Content Calendar</h1>
              <p className="text-muted-foreground mt-1">Plan and visualize your content schedule</p>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="outline" size="sm" className="gap-2">
                <Filter className="w-4 h-4" />
                Filter
              </Button>
              <Button variant="hero" size="sm" className="gap-2">
                <Plus className="w-4 h-4" />
                Schedule Post
              </Button>
            </div>
          </div>

          {/* Calendar Navigation */}
          <div className="bg-card rounded-xl border border-border p-4 mb-6">
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-4">
                <button onClick={prevMonth} className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <h2 className="text-xl font-semibold text-foreground min-w-[200px] text-center">
                  {monthNames[month]} {year}
                </h2>
                <button onClick={nextMonth} className="p-2 hover:bg-secondary rounded-lg transition-colors">
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
              
              <div className="flex items-center gap-2">
                {/* Platform Filter */}
                <div className="flex items-center gap-1 bg-secondary/50 rounded-lg p-1">
                  <button 
                    onClick={() => setFilterPlatform(null)}
                    className={`p-2 rounded-md transition-colors ${!filterPlatform ? 'bg-background shadow-sm' : 'hover:bg-background/50'}`}
                  >
                    All
                  </button>
                  {Object.entries(platformIcons).map(([platform, Icon]) => (
                    <button
                      key={platform}
                      onClick={() => setFilterPlatform(filterPlatform === platform ? null : platform)}
                      className={`p-2 rounded-md transition-colors ${filterPlatform === platform ? 'bg-background shadow-sm' : 'hover:bg-background/50'}`}
                    >
                      <Icon className="w-4 h-4" />
                    </button>
                  ))}
                </div>
                
                {/* View Toggle */}
                <div className="flex items-center gap-1 bg-secondary/50 rounded-lg p-1">
                  <button 
                    onClick={() => setView('month')}
                    className={`px-3 py-1.5 rounded-md text-sm transition-colors ${view === 'month' ? 'bg-background shadow-sm' : 'hover:bg-background/50'}`}
                  >
                    Month
                  </button>
                  <button 
                    onClick={() => setView('week')}
                    className={`px-3 py-1.5 rounded-md text-sm transition-colors ${view === 'week' ? 'bg-background shadow-sm' : 'hover:bg-background/50'}`}
                  >
                    Week
                  </button>
                </div>
              </div>
            </div>

            {/* Day Headers */}
            <div className="grid grid-cols-7 gap-2 mb-2">
              {daysOfWeek.map((day) => (
                <div key={day} className="text-center text-sm font-medium text-muted-foreground py-2">
                  {day}
                </div>
              ))}
            </div>

            {/* Calendar Grid */}
            <div className="grid grid-cols-7 gap-2">
              {renderCalendarDays()}
            </div>
          </div>

          {/* Upcoming Posts */}
          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 bg-card rounded-xl border border-border p-6">
              <h3 className="text-lg font-semibold text-foreground mb-4">Upcoming Posts</h3>
              <div className="space-y-3">
                {scheduledPosts.filter(p => p.status === 'scheduled').slice(0, 5).map((post) => {
                  const PlatformIcon = platformIcons[post.platform];
                  return (
                    <div key={post.id} className="flex items-center gap-4 p-4 bg-secondary/30 rounded-xl hover:bg-secondary/50 transition-colors">
                      <div className={`w-10 h-10 rounded-lg ${platformColors[post.platform]} flex items-center justify-center`}>
                        <PlatformIcon className="w-5 h-5 text-white" />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h4 className="font-medium text-foreground truncate">{post.title}</h4>
                        <p className="text-sm text-muted-foreground">Day {post.day} at {post.time}</p>
                      </div>
                      <span className={`px-2 py-1 rounded-full text-xs font-medium ${statusColors[post.status]}`}>
                        {post.status}
                      </span>
                      <div className="flex items-center gap-1">
                        <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                          <Eye className="w-4 h-4 text-muted-foreground" />
                        </button>
                        <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                          <Edit2 className="w-4 h-4 text-muted-foreground" />
                        </button>
                        <button className="p-2 hover:bg-secondary rounded-lg transition-colors">
                          <MoreHorizontal className="w-4 h-4 text-muted-foreground" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Calendar Preview Image */}
            <div className="bg-card rounded-xl border border-border overflow-hidden">
              <img src={contentCalendarPreview} alt="Calendar Preview" className="w-full h-48 object-cover" />
              <div className="p-4">
                <h3 className="font-semibold text-foreground mb-2">Pro Tip</h3>
                <p className="text-sm text-muted-foreground">
                  Use the calendar view to visualize your content strategy and ensure consistent posting across all platforms.
                </p>
                <Button variant="outline" size="sm" className="mt-3 w-full">Learn Best Practices</Button>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default ContentCalendar;
