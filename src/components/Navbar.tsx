import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { 
  ChevronDown, Menu, X, Megaphone, Video, Image, Calendar, 
  Users, ShoppingCart, Building2, Code, Sparkles, 
  Instagram, Youtube, Linkedin, Facebook, 
  LogOut, User, LayoutDashboard, FileVideo, Layers,
  PenTool, BarChart3, Wand2, MessageSquare, Clock, Mic
} from 'lucide-react';
import { useAuth } from '@/contexts/AuthContext';

const useCasesItems = [
  {
    title: 'AI Ads',
    icon: Megaphone,
    items: [
      { label: 'Facebook Ads', href: '/features/ad-generator' },
      { label: 'Instagram Ads', href: '/features/ad-generator' },
      { label: 'LinkedIn Ads', href: '/features/ad-generator' },
      { label: 'Pinterest Ads', href: '/features/ad-generator' },
      { label: 'TikTok Ads', href: '/features/ad-generator' },
      { label: 'YouTube Ads', href: '/features/ad-generator' },
    ],
  },
  {
    title: 'AI Videos',
    icon: Video,
    items: [
      { label: 'Instagram Reels Maker', href: '/features/video-generator' },
      { label: 'TikTok Video Maker', href: '/features/video-generator' },
      { label: 'YouTube Shorts Maker', href: '/features/video-generator' },
      { label: 'AI Text to Video', href: '/features/video-generator' },
      { label: 'Voiceover Videos', href: '/features/ugc-videos' },
      { label: 'UGC Videos', href: '/features/ugc-videos' },
    ],
  },
  {
    title: 'AI Creatives',
    icon: Image,
    items: [
      { label: 'Social Media Posts', href: '/features/social-media' },
      { label: 'Image Generator', href: '/features/image-generator' },
      { label: 'Instagram Carousel', href: '/features/carousel-ads' },
      { label: 'LinkedIn Carousel', href: '/features/carousel-ads' },
      { label: 'Meme Generator', href: '/features/meme-generator' },
      { label: 'Product Photography', href: '/features/product-photography' },
    ],
  },
  {
    title: 'Publish & Schedule',
    icon: Calendar,
    items: [
      { label: 'Content Scheduler', href: '/features/content-scheduler' },
      { label: 'Content Calendar', href: '/features/content-scheduler' },
      { label: 'Auto Post', href: '/features/content-scheduler' },
      { label: 'Competitor Analysis', href: '/features/competitor-analysis' },
    ],
  },
];

const solutionsItems = [
  {
    title: 'By Industry',
    items: [
      { label: 'For Marketing Agencies', href: '/solutions/agencies', icon: Building2, desc: 'Scale client content creation' },
      { label: 'For E-commerce', href: '/solutions/ecommerce', icon: ShoppingCart, desc: 'Product content that sells' },
      { label: 'For Creators & Coaches', href: '/solutions/creators', icon: Users, desc: 'Grow your audience faster' },
    ],
  },
  {
    title: 'E-commerce Tools',
    items: [
      { label: 'Product Video Ads', href: '/features/video-generator', icon: FileVideo, desc: 'Videos that convert' },
      { label: 'Product Photography', href: '/features/product-photography', icon: Image, desc: 'AI-enhanced photos' },
      { label: 'Social Media Manager', href: '/features/content-scheduler', icon: BarChart3, desc: 'All-in-one management' },
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
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div className="w-[800px] bg-card rounded-2xl shadow-2xl border border-border p-6 animate-fade-in">
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
                <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2">
                  <div className="w-[600px] bg-card rounded-2xl shadow-2xl border border-border p-6 animate-fade-in">
                    <div className="grid grid-cols-2 gap-6">
                      {solutionsItems.map((category) => (
                        <div key={category.title}>
                          <div className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-3">
                            {category.title}
                          </div>
                          <div className="space-y-1">
                            {category.items.map((item) => (
                              <Link
                                key={item.label}
                                to={item.href}
                                className="flex items-start gap-3 p-2 rounded-lg hover:bg-primary/5 transition-colors group"
                              >
                                <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                                  <item.icon className="w-4 h-4 text-primary" />
                                </div>
                                <div>
                                  <p className="text-sm font-medium text-foreground group-hover:text-primary transition-colors">
                                    {item.label}
                                  </p>
                                  <p className="text-xs text-muted-foreground">{item.desc}</p>
                                </div>
                              </Link>
                            ))}
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </div>

            <Link to="/features/image-generator" className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
              Features
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
                <Link to="/dashboard">
                  <Button variant="ghost" size="sm" className="gap-2">
                    <LayoutDashboard className="w-4 h-4" />
                    Dashboard
                  </Button>
                </Link>
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-full bg-secondary">
                  <User className="w-4 h-4 text-muted-foreground" />
                  <span className="text-sm font-medium text-foreground">{user?.name?.split(' ')[0]}</span>
                </div>
                <Button variant="ghost" size="sm" onClick={handleLogout}>
                  <LogOut className="w-4 h-4 mr-1" />
                  Logout
                </Button>
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
                <p className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">Solutions</p>
                <Link to="/solutions/agencies" className="block px-4 py-2 text-sm text-foreground" onClick={() => setMobileMenuOpen(false)}>
                  For Agencies
                </Link>
                <Link to="/solutions/ecommerce" className="block px-4 py-2 text-sm text-foreground" onClick={() => setMobileMenuOpen(false)}>
                  For E-commerce
                </Link>
                <Link to="/solutions/creators" className="block px-4 py-2 text-sm text-foreground" onClick={() => setMobileMenuOpen(false)}>
                  For Creators
                </Link>
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
                    <Link to="/dashboard" onClick={() => setMobileMenuOpen(false)}>
                      <Button variant="outline" className="w-full">
                        <LayoutDashboard className="w-4 h-4 mr-2" />
                        Dashboard
                      </Button>
                    </Link>
                    <Button variant="ghost" className="w-full" onClick={handleLogout}>
                      <LogOut className="w-4 h-4 mr-2" />
                      Logout
                    </Button>
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
