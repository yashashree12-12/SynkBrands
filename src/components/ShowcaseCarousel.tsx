import { Smartphone, ShoppingBag, Video, Layers, Bot, Calendar, Zap, Camera, Globe, Clock } from 'lucide-react';

const showcaseItems = [
  { title: 'Social Media Post', color: 'from-pink-500 to-rose-500', Icon: Smartphone },
  { title: 'Product Ad', color: 'from-orange-500 to-amber-500', Icon: ShoppingBag },
  { title: 'Video Ads', color: 'from-purple-500 to-violet-500', Icon: Video },
  { title: 'Carousel Ads', color: 'from-blue-500 to-cyan-500', Icon: Layers },
  { title: 'AI Assistant', color: 'from-green-500 to-emerald-500', Icon: Bot },
  { title: 'Auto Post', color: 'from-indigo-500 to-blue-500', Icon: Calendar },
  { title: 'API Access', color: 'from-gray-600 to-gray-800', Icon: Zap },
  { title: 'Studio Photography', color: 'from-yellow-500 to-orange-500', Icon: Camera },
  { title: 'Multi-Language', color: 'from-teal-500 to-cyan-500', Icon: Globe },
  { title: 'Schedule', color: 'from-red-500 to-pink-500', Icon: Clock },
];

export const ShowcaseCarousel = () => {
  return (
    <section className="py-16 overflow-hidden bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-foreground">
          Create AI Ads, UGC Ads, Video Ads in Minutes
        </h2>
      </div>

      {/* Infinite scrolling carousel */}
      <div className="relative">
        <div className="flex gap-6 animate-marquee">
          {[...showcaseItems, ...showcaseItems].map((item, index) => (
            <div
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
                <button className="mt-4 px-6 py-2 bg-primary-foreground/20 backdrop-blur-sm rounded-full text-primary-foreground text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
                  Try Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
