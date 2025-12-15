import { Button } from '@/components/ui/button';
import { Star } from 'lucide-react';

const platformLogos = [
  { name: 'G2', color: 'text-orange-500' },
  { name: 'Shopify', color: 'text-green-600' },
  { name: 'Play Store', color: 'text-blue-500' },
  { name: 'App Store', color: 'text-gray-600' },
];

export const HeroSection = () => {
  return (
    <section className="relative overflow-hidden py-20 lg:py-28">
      {/* Background decorations */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-20 left-10 w-72 h-72 bg-purple/10 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-pink/10 rounded-full blur-3xl" />
        <div className="absolute top-40 right-1/4 w-64 h-64 bg-coral/10 rounded-full blur-3xl" />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-extrabold tracking-tight mb-6">
          <span className="gradient-text">AI Ad Generator</span>
          <br />
          <span className="text-foreground">to create smart </span>
          <span className="gradient-text">Ads &</span>
          <br />
          <span className="gradient-text">Videos</span>
          <span className="text-foreground"> that work</span>
        </h1>

        {/* Subheadline */}
        <p className="max-w-3xl mx-auto text-lg sm:text-xl text-muted-foreground mb-10 leading-relaxed">
          Use our AI ad generator to create ads, UGC videos, ad videos, ad copies, AI videos, and product videos from simple text prompts. Accelerate CTR and achieve better ROAS with winning ads.
        </p>

        {/* Star rating */}
        <div className="flex flex-col items-center gap-4 mb-8">
          <div className="flex items-center gap-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <p className="text-sm text-muted-foreground font-medium">
            Rated 5/5 by 4K+ Users
          </p>
          <div className="flex items-center gap-4">
            {platformLogos.map((logo) => (
              <div
                key={logo.name}
                className={`w-8 h-8 rounded-full bg-secondary flex items-center justify-center text-xs font-bold ${logo.color}`}
              >
                {logo.name[0]}
              </div>
            ))}
          </div>
        </div>

        {/* CTA Button */}
        <Button variant="hero" size="xl" className="animate-pulse hover:animate-none">
          Get Started for Free
        </Button>
      </div>
    </section>
  );
};
