import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Wand2, Image, MousePointerClick, Camera, Sparkles } from 'lucide-react';

const tabs = [
  { id: 'animations', label: 'Animations', icon: Wand2 },
  { id: 'stock', label: 'Stock Assets', icon: Image },
  { id: 'cta', label: 'Call to Action', icon: MousePointerClick },
  { id: 'photoshoot', label: 'AI Photoshoot', icon: Camera },
  { id: 'ai-images', label: 'AI Images', icon: Sparkles },
];

const tabContent = {
  'animations': {
    title: 'Design Ads with Animations',
    description: 'Make your ads stand out with smooth animations. Whether you\'re working on videos or static designs, our tool brings them to life instantly. Fine-tune the style, speed, and delay using our user friendly interface.',
    icon: '🎞️',
    color: 'from-green-400 to-emerald-500',
  },
  'stock': {
    title: 'Stock Images and Videos for Ads',
    description: 'Predis comes with a built-in integration with leading stock image asset providers like Pexels and Unsplash. No need to switch tabs or hunt for ad visuals elsewhere.',
    icon: '🖼️',
    color: 'from-orange-400 to-amber-500',
  },
  'cta': {
    title: 'Optimized Call to Actions',
    description: 'Generate ads that are designed for conversions. Use AI to get the best calls to action for your ads. Use proven ad copywriting techniques like PAS, AIDA, and more.',
    icon: '🎯',
    color: 'from-red-400 to-rose-500',
  },
  'photoshoot': {
    title: 'AI Product Photoshoot',
    description: 'Create professional product photoshoot style ad creatives with our AI product shoots and background removal tool. No need for expensive cameras or studio setups.',
    icon: '📷',
    color: 'from-blue-400 to-cyan-500',
  },
  'ai-images': {
    title: 'AI images for Ads',
    description: 'Generate an image from simple text prompts. Create images to use in your ads and video ads. Our state of the art model creates accurate images that look natural and realistic.',
    icon: '🎨',
    color: 'from-purple-400 to-violet-500',
  },
};

export const AIVisualsSection = () => {
  const [activeTab, setActiveTab] = useState('animations');
  const content = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">
          Bring your ads to life with AI visuals, motions, & the perfect CTA
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? 'bg-foreground text-background shadow-lg'
                  : 'bg-secondary text-muted-foreground hover:bg-secondary/80 hover:text-foreground'
              }`}
            >
              <tab.icon className="w-4 h-4" />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1 animate-fade-in" key={`${activeTab}-image`}>
            <div className={`aspect-square rounded-3xl bg-gradient-to-br ${content.color} flex items-center justify-center shadow-2xl`}>
              <span className="text-9xl">{content.icon}</span>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6 animate-fade-in" key={activeTab}>
            <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${content.color}`}>
              <span className="text-2xl">{content.icon}</span>
            </div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground">
              {content.title}
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              {content.description}
            </p>
            <Button variant="hero" size="lg">
              Try Now
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
