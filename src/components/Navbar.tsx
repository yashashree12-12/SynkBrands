import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ChevronDown, Menu, X } from 'lucide-react';

const navItems = [
  {
    label: 'Features',
    hasDropdown: true,
    items: [
      { label: 'AI Image Generator', href: '/features/image-generator' },
      { label: 'AI Video Generator', href: '/features/video-generator' },
      { label: 'Social Media Posts', href: '/features/social-media' },
      { label: 'Product Photography', href: '/features/product-photography' },
    ],
  },
  {
    label: 'Solutions',
    hasDropdown: true,
    items: [
      { label: 'For Agencies', href: '/solutions/agencies' },
      { label: 'For E-commerce', href: '/solutions/ecommerce' },
      { label: 'For Enterprises', href: '/solutions/enterprise' },
    ],
  },
  { label: 'Pricing', href: '/#pricing' },
  { label: 'Blog', href: '/blog' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const Navbar = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  return (
    <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg gradient-bar flex items-center justify-center">
              <span className="text-primary-foreground font-bold text-lg">S</span>
            </div>
            <span className="font-display font-bold text-xl text-foreground">SynkBrands</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center gap-1">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => item.hasDropdown && setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                {item.hasDropdown ? (
                  <button className="flex items-center gap-1 px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
                    {item.label}
                    <ChevronDown className="w-4 h-4" />
                  </button>
                ) : (
                  <a
                    href={item.href}
                    className="px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  >
                    {item.label}
                  </a>
                )}

                {/* Dropdown */}
                {item.hasDropdown && activeDropdown === item.label && (
                  <div className="absolute top-full left-0 mt-1 w-56 bg-card rounded-xl shadow-xl border border-border p-2 animate-fade-in">
                    {item.items?.map((subItem) => (
                      <a
                        key={subItem.label}
                        href={subItem.href}
                        className="block px-4 py-2.5 text-sm text-muted-foreground hover:text-foreground hover:bg-secondary rounded-lg transition-colors"
                      >
                        {subItem.label}
                      </a>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop CTAs */}
          <div className="hidden lg:flex items-center gap-3">
            <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
              Login
            </Button>
            <Button variant="hero" size="default" className="rounded-full">
              Try for free
            </Button>
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
          <div className="lg:hidden py-4 border-t border-border animate-fade-in">
            {navItems.map((item) => (
              <div key={item.label} className="py-2">
                {item.hasDropdown ? (
                  <div>
                    <button className="w-full flex items-center justify-between px-4 py-2 text-base font-medium text-foreground">
                      {item.label}
                      <ChevronDown className="w-5 h-5" />
                    </button>
                    <div className="pl-6 mt-2 space-y-1">
                      {item.items?.map((subItem) => (
                        <a
                          key={subItem.label}
                          href={subItem.href}
                          className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground"
                        >
                          {subItem.label}
                        </a>
                      ))}
                    </div>
                  </div>
                ) : (
                  <a
                    href={item.href}
                    className="block px-4 py-2 text-base font-medium text-foreground"
                  >
                    {item.label}
                  </a>
                )}
              </div>
            ))}
            <div className="mt-4 px-4 space-y-2">
              <Button variant="outline" className="w-full">Login</Button>
              <Button variant="hero" className="w-full">Try for free</Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};
