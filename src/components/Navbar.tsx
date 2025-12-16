import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X, Megaphone, Video, Image, Calendar, Users, ShoppingCart, Building2, Code, Sparkles, FileVideo, Instagram, Youtube, Linkedin, Facebook, Twitter, PenTool, Layers, MessageSquare, BarChart3, Palette, Wand2, LogOut, User } from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const useCasesItems = [
  {
    title: 'AI Ads',
    icon: Megaphone,
    items: [
      { label: 'Facebook Ads', href: '/features/facebook-ads' },
      { label: 'Instagram Ads', href: '/features/instagram-ads' },
      { label: 'LinkedIn Ads', href: '/features/linkedin-ads' },
      { label: 'Pinterest Ads', href: '/features/pinterest-ads' },
      { label: 'TikTok Ads', href: '/features/tiktok-ads' },
      { label: 'YouTube Ads', href: '/features/youtube-ads' },
    ],
  },
  {
    title: 'AI Videos',
    icon: Video,
    items: [
      { label: 'Instagram Reels Maker', href: '/features/instagram-reels' },
      { label: 'TikTok Video Maker', href: '/features/tiktok-video' },
      { label: 'Instagram Story Maker', href: '/features/instagram-story' },
      { label: 'Facebook Video Maker', href: '/features/facebook-video' },
      { label: 'YouTube Shorts Maker', href: '/features/youtube-shorts' },
      { label: 'LinkedIn Video Maker', href: '/features/linkedin-video' },
      { label: 'AI Text to Video Maker', href: '/features/video-generator' },
      { label: 'Voiceover Video Maker', href: '/features/voiceover-video' },
    ],
  },
  {
    title: 'AI Creatives',
    icon: Image,
    items: [
      { label: 'Social Media Post Generator', href: '/features/social-media' },
      { label: 'Instagram Post Maker', href: '/features/instagram-post' },
      { label: 'Facebook Posts', href: '/features/facebook-post' },
      { label: 'Instagram Carousel', href: '/features/carousel-ads' },
      { label: 'LinkedIn Carousel', href: '/features/linkedin-carousel' },
      { label: 'Poster Maker', href: '/features/poster-maker' },
      { label: 'AI Meme Generator', href: '/features/meme-generator' },
    ],
  },
  {
    title: 'Publish & Schedule',
    icon: Calendar,
    items: [
      { label: 'Content Scheduler', href: '/features/content-scheduler' },
      { label: 'Content Approval Flow', href: '/features/approval-flow' },
      { label: 'Auto Post', href: '/features/auto-post' },
    ],
  },
];

const solutionsItems = [
  {
    title: 'Creators & Coaches',
    icon: Users,
    items: [
      { label: 'Social media for business & creators', href: '/solutions/creators' },
    ],
  },
  {
    title: 'E-commerce Stores',
    icon: ShoppingCart,
    items: [
      { label: 'Social Media for E-commerce', href: '/solutions/ecommerce' },
      { label: 'E-Commerce Product Video Ads', href: '/features/product-video-ads' },
      { label: 'E-commerce Ad Creatives', href: '/features/ecommerce-ads' },
      { label: 'E-commerce Post Maker', href: '/features/ecommerce-posts' },
      { label: 'Shopify Video Ad Maker', href: '/features/shopify-video' },
    ],
  },
  {
    title: 'Agencies',
    icon: Building2,
    items: [
      { label: 'Content Automation for Agencies', href: '/solutions/agencies' },
      { label: 'AI Social Media Manager', href: '/features/social-media-manager' },
      { label: 'Social Media Competitor Analysis', href: '/features/competitor-analysis' },
    ],
  },
  {
    title: 'API',
    icon: Code,
    items: [
      { label: 'Text to Video API', href: '/api/text-to-video' },
      { label: 'Social Media Posts with API', href: '/api/social-posts' },
    ],
  },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { user, isAuthenticated, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bar flex items-center justify-center">
              <Sparkles className="w-4 h-4 text-white" />
            </div>
            <span className="font-display font-bold text-xl text-foreground">SynkBrands</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {/* Use Cases Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('usecases')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Use Cases
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'usecases' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[800px] bg-card rounded-2xl shadow-2xl border border-border p-6 animate-fade-in">
                  <div className="grid grid-cols-4 gap-6">
                    {useCasesItems.map((category) => (
                      <div key={category.title}>
                        <div className="flex items-center gap-2 mb-3 text-foreground font-semibold">
                          <category.icon className="w-4 h-4 text-primary" />
                          {category.title}
                        </div>
                        <div className="space-y-1">
                          {category.items.map((item) => (
                            <Link
                              key={item.label}
                              to={item.href}
                              className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Solutions Dropdown */}
            <div
              className="relative"
              onMouseEnter={() => setActiveDropdown('solutions')}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                Solutions
                <ChevronDown className="w-4 h-4" />
              </button>

              {activeDropdown === 'solutions' && (
                <div className="absolute top-full left-1/2 -translate-x-1/2 mt-1 w-[700px] bg-card rounded-2xl shadow-2xl border border-border p-6 animate-fade-in">
                  <div className="grid grid-cols-2 gap-8">
                    {solutionsItems.map((category) => (
                      <div key={category.title}>
                        <div className="flex items-center gap-2 mb-3 text-foreground font-semibold">
                          <category.icon className="w-4 h-4 text-primary" />
                          {category.title}
                        </div>
                        <div className="space-y-1">
                          {category.items.map((item) => (
                            <Link
                              key={item.label}
                              to={item.href}
                              className="block px-2 py-1.5 text-sm text-muted-foreground hover:text-primary hover:bg-primary/5 rounded-lg transition-colors"
                            >
                              {item.label}
                            </Link>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <Link to="/features/image-generator" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link to="/api/text-to-video" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              API
            </Link>
            <Link to="/#pricing" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link to="/create" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Demo
            </Link>
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            {isAuthenticated ? (
              <>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">{user?.name?.split(' ')[0]}</span>
                </div>
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-1" />
                  Logout
                </Button>
                <Link to="/create">
                  <Button variant="hero" size="default" className="rounded-full">
                    Create Content
                  </Button>
                </Link>
              </>
            ) : (
              <>
                <Link to="/auth">
                  <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                    Login
                  </Button>
                </Link>
                <Link to="/auth?mode=signup">
                  <Button variant="hero" size="default" className="rounded-full">
                    Try for free
                  </Button>
                </Link>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <button
            className="lg:hidden p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border animate-fade-in max-h-[80vh] overflow-y-auto">
            <div className="space-y-4">
              <div>
                <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Use Cases</p>
                {useCasesItems.map((category) => (
                  <div key={category.title} className="px-4 py-2">
                    <p className="text-sm font-medium text-foreground mb-2 flex items-center gap-2">
                      <category.icon className="w-4 h-4 text-primary" />
                      {category.title}
                    </p>
                    <div className="pl-6 space-y-1">
                      {category.items.slice(0, 3).map((item) => (
                        <Link
                          key={item.label}
                          to={item.href}
                          className="block py-1 text-sm text-muted-foreground"
                          onClick={() => setMobileMenuOpen(false)}
                        >
                          {item.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                ))}
              </div>

              <div className="border-t border-border pt-4">
                <Link to="/features/image-generator" className="block px-4 py-2 text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>
                  Features
                </Link>
                <Link to="/#pricing" className="block px-4 py-2 text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>
                  Pricing
                </Link>
                <Link to="/create" className="block px-4 py-2 text-base font-medium text-foreground" onClick={() => setMobileMenuOpen(false)}>
                  Demo
                </Link>
              </div>

              <div className="px-4 pt-4 space-y-2 border-t border-border">
                {isAuthenticated ? (
                  <>
                    <p className="text-sm text-muted-foreground">Signed in as {user?.email}</p>
                    <Button variant="outline" className="w-full" onClick={handleLogout}>Logout</Button>
                    <Link to="/create" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="hero" className="w-full">Create Content</Button>
                    </Link>
                  </>
                ) : (
                  <>
                    <Link to="/auth" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full">Login</Button>
                    </Link>
                    <Link to="/auth?mode=signup" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="hero" className="w-full">Try for free</Button>
                    </Link>
                  </>
                )}
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};