import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuth } from '@/contexts/AuthContext';
import {
  LayoutDashboard,
  Plus,
  FolderOpen,
  Calendar,
  BarChart3,
  Settings,
  Building2,
  HelpCircle,
  LogOut,
  ChevronLeft,
  ChevronRight,
  Video,
  Image,
  FileText,
  Sparkles,
  Users,
  Target,
  Palette
} from 'lucide-react';
import { cn } from '@/lib/utils';

interface SidebarItem {
  icon: React.ComponentType<any>;
  label: string;
  href: string;
  badge?: string;
}

const mainNavItems: SidebarItem[] = [
  { icon: LayoutDashboard, label: 'Dashboard', href: '/dashboard' },
  { icon: Plus, label: 'Create New', href: '/create' },
  { icon: FolderOpen, label: 'My Content', href: '/dashboard?tab=content' },
  { icon: Calendar, label: 'Schedule', href: '/dashboard?tab=schedule' },
  { icon: BarChart3, label: 'Analytics', href: '/dashboard?tab=analytics' },
];

const createItems: SidebarItem[] = [
  { icon: Video, label: 'Video Ads', href: '/features/video-generator' },
  { icon: Image, label: 'Image Ads', href: '/features/image-generator' },
  { icon: FileText, label: 'Social Posts', href: '/features/social-media-posts' },
  { icon: Users, label: 'UGC Videos', href: '/features/ugc-videos' },
  { icon: Palette, label: 'Product Photos', href: '/features/product-photography' },
];

const bottomNavItems: SidebarItem[] = [
  { icon: Building2, label: 'Brand Settings', href: '/dashboard?tab=brand' },
  { icon: Settings, label: 'Settings', href: '/settings' },
  { icon: HelpCircle, label: 'Help & Support', href: '/contact' },
];

export const DashboardSidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const location = useLocation();
  const { user, logout } = useAuth();

  const isActive = (href: string) => {
    if (href.includes('?')) {
      return location.pathname + location.search === href;
    }
    return location.pathname === href;
  };

  return (
    <aside
      className={cn(
        "fixed left-0 top-0 z-50 h-screen bg-card border-r border-border transition-all duration-300 flex flex-col",
        isCollapsed ? "w-16" : "w-64"
      )}
    >
      {/* Logo */}
      <div className="h-16 flex items-center justify-between px-4 border-b border-border">
        {!isCollapsed && (
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-purple to-pink flex items-center justify-center">
              <Sparkles className="w-5 h-5 text-white" />
            </div>
            <span className="font-display text-lg font-bold gradient-text">SynkBrands</span>
          </Link>
        )}
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="p-1.5 rounded-lg hover:bg-secondary transition-colors"
        >
          {isCollapsed ? (
            <ChevronRight className="w-4 h-4 text-muted-foreground" />
          ) : (
            <ChevronLeft className="w-4 h-4 text-muted-foreground" />
          )}
        </button>
      </div>

      {/* User Profile */}
      <div className={cn(
        "p-4 border-b border-border",
        isCollapsed && "flex justify-center"
      )}>
        <div className={cn("flex items-center gap-3", isCollapsed && "flex-col")}>
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple to-pink flex items-center justify-center text-white font-semibold">
            {user?.name?.charAt(0) || 'U'}
          </div>
          {!isCollapsed && (
            <div className="flex-1 min-w-0">
              <p className="text-sm font-medium text-foreground truncate">{user?.name || 'User'}</p>
              <p className="text-xs text-muted-foreground truncate">{user?.email || 'user@email.com'}</p>
            </div>
          )}
        </div>
      </div>

      {/* Main Navigation */}
      <nav className="flex-1 overflow-y-auto py-4">
        <div className="px-3 mb-2">
          {!isCollapsed && (
            <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Main
            </p>
          )}
          <ul className="space-y-1">
            {mainNavItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all group",
                    isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                    isCollapsed && "justify-center"
                  )}
                >
                  <item.icon className={cn(
                    "w-5 h-5 transition-transform group-hover:scale-110",
                    isActive(item.href) && "text-primary"
                  )} />
                  {!isCollapsed && (
                    <span className="text-sm font-medium">{item.label}</span>
                  )}
                  {!isCollapsed && item.badge && (
                    <span className="ml-auto px-2 py-0.5 text-xs font-medium bg-primary/20 text-primary rounded-full">
                      {item.badge}
                    </span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Create Section */}
        <div className="px-3 mb-2 mt-6">
          {!isCollapsed && (
            <p className="px-3 text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-2">
              Create
            </p>
          )}
          <ul className="space-y-1">
            {createItems.map((item) => (
              <li key={item.href}>
                <Link
                  to={item.href}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2 rounded-lg transition-all group",
                    isActive(item.href)
                      ? "bg-primary/10 text-primary"
                      : "text-muted-foreground hover:text-foreground hover:bg-secondary",
                    isCollapsed && "justify-center"
                  )}
                >
                  <item.icon className="w-4 h-4 transition-transform group-hover:scale-110" />
                  {!isCollapsed && (
                    <span className="text-sm">{item.label}</span>
                  )}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </nav>

      {/* Bottom Navigation */}
      <div className="border-t border-border p-3">
        <ul className="space-y-1">
          {bottomNavItems.map((item) => (
            <li key={item.href}>
              <Link
                to={item.href}
                className={cn(
                  "flex items-center gap-3 px-3 py-2 rounded-lg transition-all group text-muted-foreground hover:text-foreground hover:bg-secondary",
                  isCollapsed && "justify-center"
                )}
              >
                <item.icon className="w-4 h-4" />
                {!isCollapsed && (
                  <span className="text-sm">{item.label}</span>
                )}
              </Link>
            </li>
          ))}
          <li>
            <button
              onClick={logout}
              className={cn(
                "w-full flex items-center gap-3 px-3 py-2 rounded-lg transition-all group text-muted-foreground hover:text-red-500 hover:bg-red-500/10",
                isCollapsed && "justify-center"
              )}
            >
              <LogOut className="w-4 h-4" />
              {!isCollapsed && (
                <span className="text-sm">Logout</span>
              )}
            </button>
          </li>
        </ul>
      </div>
    </aside>
  );
};
