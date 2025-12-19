import { Button } from '@/components/ui/button';
import { Star, Award, ShieldCheck, Zap, Play } from 'lucide-react';
import { Link } from 'react-router-dom';
import dashboardPreview from '@/assets/dashboard-preview.png';
const platformLogos = [
  { name: 'G2', icon: Award },
  { name: 'Shopify', icon: ShieldCheck },
  { name: 'Play Store', icon: Zap },
  { name: 'App Store', icon: Star },
];

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink/10 rounded-full blur-3xl animate-float-delayed" />
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-coral/10 rounded-full blur-3xl animate-pulse-slow" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left">
            {/* Headline */}
            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6 animate-fade-in">
              <span className="gradient-text">AI Ad Generator</span>
              <br />
              <span className="text-foreground">to create smart </span>
              <span className="gradient-text">Ads &</span>
              <br />
              <span className="gradient-text">Videos</span>
              <span className="text-foreground"> that work</span>
            </h1>

            {/* Subheadline */}
            <p className="max-w-xl text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed animate-fade-in-up">
              Use our AI ad generator to create ads, UGC videos, ad videos, ad copies, AI videos, and product videos from simple text prompts. Accelerate CTR and achieve better ROAS with winning ads.
            </p>

            {/* Star rating */}
            <div className="flex flex-col items-center lg:items-start gap-4 mb-8 animate-fade-in-up">
              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400 animate-pulse-slow" style={{ animationDelay: `${i * 0.1}s` }} />
                ))}
              </div>
              <p className="text-sm text-muted-foreground font-medium">
                Rated 5/5 by 4K+ Users
              </p>
              <div className="flex items-center gap-3">
                {platformLogos.map((logo, index) => (
                  <div
                    key={logo.name}
                    className="w-10 h-10 rounded-xl bg-secondary/80 backdrop-blur flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group"
                    style={{ animationDelay: `${index * 0.1}s` }}
                  >
                    <logo.icon className="w-5 h-5 text-primary group-hover:text-foreground transition-colors" />
                  </div>
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Link to="/create">
              <Button variant="hero" size="xl" className="hover:scale-105 transition-transform">
                Get Started for Free
              </Button>
            </Link>
          </div>

          {/* Hero Image */}
          <div className="relative animate-fade-in-up">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
              <img 
                src={dashboardPreview} 
                alt="SynkBrands AI Dashboard showing social media content creation and analytics" 
                className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
              
              {/* Play button overlay */}
              <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                <div className="w-16 h-16 rounded-full bg-white/90 flex items-center justify-center shadow-xl cursor-pointer hover:scale-110 transition-transform">
                  <Play className="w-7 h-7 text-purple ml-1" />
                </div>
              </div>
            </div>
            
            {/* Floating badges */}
            <div className="absolute -top-4 -right-4 bg-card border border-border rounded-xl p-3 shadow-lg animate-float">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
                  <Zap className="w-4 h-4 text-green-500" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Engagement</p>
                  <p className="text-sm font-bold text-foreground">+156%</p>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card border border-border rounded-xl p-3 shadow-lg animate-float-delayed">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 bg-purple/20 rounded-lg flex items-center justify-center">
                  <Star className="w-4 h-4 text-purple" />
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Content Created</p>
                  <p className="text-sm font-bold text-foreground">10M+</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
