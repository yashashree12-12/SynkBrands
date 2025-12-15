import { Link } from 'react-router-dom';
import { Twitter, Facebook, Linkedin, Instagram, Youtube } from 'lucide-react';

const footerLinks = {
  'Use Cases': [
    { label: 'AI Ad Generator', href: '#' },
    { label: 'Instagram Reels Generator', href: '#' },
    { label: 'Text to Social Media Posts', href: '#' },
    { label: 'Instagram Post Maker', href: '#' },
    { label: 'E-Commerce Product Videos', href: '#' },
    { label: 'Shopify Products to Posts', href: '#' },
    { label: 'UGC Video Ad Maker', href: '#' },
  ],
  'Scheduling': [
    { label: 'Scheduling and Publishing', href: '#' },
    { label: 'Social media Autopost', href: '#' },
  ],
  'Resources': [
    { label: 'Free Mini AI Tools', href: '#' },
    { label: 'Blog', href: '#' },
    { label: 'Privacy Policy', href: '#' },
    { label: 'Terms & Conditions', href: '#' },
    { label: 'API Documentation', href: '#' },
  ],
  'Company': [
    { label: 'About Us', href: '#' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'Contact Us', href: '#' },
    { label: 'Become an Affiliate', href: '#' },
    { label: 'Success Stories', href: '#' },
  ],
};

const socialLinks = [
  { icon: Twitter, href: '#', label: 'Twitter' },
  { icon: Facebook, href: '#', label: 'Facebook' },
  { icon: Linkedin, href: '#', label: 'LinkedIn' },
  { icon: Instagram, href: '#', label: 'Instagram' },
  { icon: Youtube, href: '#', label: 'YouTube' },
];

export const Footer = () => {
  return (
    <footer className="bg-foreground text-background py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-12">
          {/* Logo and description */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1 mb-8 lg:mb-0">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg gradient-bar flex items-center justify-center">
                <span className="text-primary-foreground font-bold text-lg">S</span>
              </div>
              <span className="font-display font-bold text-xl">SynkBrands</span>
            </Link>
            <p className="text-background/70 text-sm leading-relaxed mb-6">
              AI-powered social media content and ad creation platform.
            </p>
            
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="w-10 h-10 rounded-full bg-background/10 hover:bg-background/20 flex items-center justify-center transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Link columns */}
          {Object.entries(footerLinks).map(([title, links]) => (
            <div key={title}>
              <h4 className="font-display font-semibold text-sm mb-4">{title}</h4>
              <ul className="space-y-3">
                {links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      className="text-background/70 hover:text-background text-sm transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Bottom bar */}
        <div className="border-t border-background/20 pt-8">
          <p className="text-center text-background/60 text-sm">
            ©{new Date().getFullYear()} SynkBrands. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};
