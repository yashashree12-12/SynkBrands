const showcaseItems = [
  { title: 'Social Media Post', color: 'from-pink-500 to-rose-500', icon: '📱' },
  { title: 'Product Ad', color: 'from-orange-500 to-amber-500', icon: '🛍️' },
  { title: 'Video Ads', color: 'from-purple-500 to-violet-500', icon: '🎬' },
  { title: 'Carousel Ads', color: 'from-blue-500 to-cyan-500', icon: '🎠' },
  { title: 'AI Assistant', color: 'from-green-500 to-emerald-500', icon: '🤖' },
  { title: 'Auto Post', color: 'from-indigo-500 to-blue-500', icon: '📅' },
  { title: 'API Access', color: 'from-gray-600 to-gray-800', icon: '⚡' },
  { title: 'Studio Photography', color: 'from-yellow-500 to-orange-500', icon: '📸' },
  { title: 'Multi-Language', color: 'from-teal-500 to-cyan-500', icon: '🌍' },
  { title: 'Schedule', color: 'from-red-500 to-pink-500', icon: '⏰' },
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
              className="flex-shrink-0 w-64 h-80 rounded-2xl overflow-hidden shadow-lg card-hover group cursor-pointer"
            >
              <div className={`w-full h-full bg-gradient-to-br ${item.color} flex flex-col items-center justify-center p-6 relative`}>
                <span className="text-6xl mb-4">{item.icon}</span>
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
