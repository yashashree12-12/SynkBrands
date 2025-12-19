import { Link } from 'react-router-dom';
import { Smartphone, ShoppingBag, Video, Layers, Bot, Calendar, Zap, Camera, Globe, Clock, ArrowRight } from 'lucide-react';
import adTypesShowcase from '@/assets/ad-types-showcase.png';

const showcaseItems = [
  { title: 'Social Media Post', color: 'from-pink-500 to-rose-500', Icon: Smartphone, link: '/features/social-media' },
  { title: 'Product Ad', color: 'from-orange-500 to-amber-500', Icon: ShoppingBag, link: '/features/product-photography' },
  { title: 'Video Ads', color: 'from-purple-500 to-violet-500', Icon: Video, link: '/features/video-generator' },
  { title: 'Carousel Ads', color: 'from-blue-500 to-cyan-500', Icon: Layers, link: '/features/carousel-ads' },
  { title: 'AI Assistant', color: 'from-green-500 to-emerald-500', Icon: Bot, link: '/features/ad-generator' },
  { title: 'Auto Post', color: 'from-indigo-500 to-blue-500', Icon: Calendar, link: '/dashboard/auto-post' },
  { title: 'API Access', color: 'from-gray-600 to-gray-800', Icon: Zap, link: '/#api' },
  { title: 'Studio Photography', color: 'from-yellow-500 to-orange-500', Icon: Camera, link: '/features/product-photography' },
  { title: 'Multi-Language', color: 'from-teal-500 to-cyan-500', Icon: Globe, link: '/features/ad-generator' },
  { title: 'Schedule', color: 'from-red-500 to-pink-500', Icon: Clock, link: '/features/content-scheduler' },
];

export const ShowcaseCarousel = () => {
  return (
    <section className="py-16 overflow-hidden bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-foreground mb-4">
          Create AI Ads, UGC Ads, Video Ads in Minutes
        </h2>
        <p className="text-center text-muted-foreground max-w-2xl mx-auto">
          Transform your marketing with AI-powered creative tools designed for maximum engagement
        </p>
      </div>

      {/* Premium Showcase Image */}
      <div className="max-w-6xl mx-auto px-4 mb-12">
        <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 group">
          <img 
            src={adTypesShowcase} 
            alt="AI Ad Types Dashboard" 
            className="w-full h-auto group-hover:scale-[1.02] transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background/60 via-transparent to-transparent" />
        </div>
      </div>

      {/* Infinite scrolling carousel */}
      <div className="relative">
        <div className="flex gap-6 animate-marquee">
          {[...showcaseItems, ...showcaseItems].map((item, index) => (
            <Link
              to={item.link}
              key={index}
              className="flex-shrink-0 w-64 h-80 rounded-2xl overflow-hidden shadow-lg hover-lift group cursor-pointer"
            >
              <div className={`w-full h-full bg-gradient-to-br ${item.color} flex flex-col items-center justify-center p-6 relative`}>
                <div className="w-20 h-20 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <item.Icon className="w-10 h-10 text-white" />
                </div>
                <h3 className="text-primary-foreground font-display font-bold text-lg text-center">
                  {item.title}
                </h3>
                <button className="mt-4 px-6 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  Try Now
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};
