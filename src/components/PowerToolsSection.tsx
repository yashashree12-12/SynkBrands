import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Scale, FileText, Crop, Mic } from 'lucide-react';

const tabs = [
  { id: 'scale', label: 'Scale', icon: Scale },
  { id: 'copywriting', label: 'Copywriting', icon: FileText },
  { id: 'resize', label: 'Resize', icon: Crop },
  { id: 'voiceovers', label: 'Voiceovers', icon: Mic },
];

const tabContent = {
  'scale': {
    title: 'Generate Ads at Scale',
    description: 'Maximize your ad production with our ad maker. Create ads at scale without the usual hassle. With our ad generator, you can produce more creatives in less time and without burning through your resources. Create and resize multiple ads at the same time.',
    cta: 'Try our AI Ad Generator',
    color: 'from-blue-400 to-indigo-500',
    icon: '📈',
  },
  'copywriting': {
    title: 'Get Envied by the Best Copywriters',
    description: 'All you need to do is to give a simple text input to SynkBrands. Sit back and relax while it generates world-class Text, Image, and Video Ad Copies for your business in a matter of seconds. The AI generates the most creative copies that are customized for your brand.',
    cta: 'Create Ad Copy with AI',
    color: 'from-orange-400 to-red-500',
    icon: '✍️',
  },
  'resize': {
    title: 'Seamlessly Resize to Perfection',
    description: 'Gone are the days of manually editing and resizing your ads for multiple sizes and platforms. With a single click of our ad creative AI, you can resize your ads without losing the branding, and without cropping out valuable content.',
    cta: 'Create Ads',
    color: 'from-purple-400 to-pink-500',
    icon: '🔲',
  },
  'voiceovers': {
    title: 'Voiceover and Audio Tools',
    description: 'Add natural sounding AI voiceovers and make your video ads stand out from the competition. Choose from multiple languages, accents and tones. Need music? Add trending background tracks directly from our editor to your video ads.',
    cta: 'Try for Free',
    color: 'from-green-400 to-teal-500',
    icon: '🎙️',
  },
};

export const PowerToolsSection = () => {
  const [activeTab, setActiveTab] = useState('scale');
  const content = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">
          Power up your ads with AI Tools you always wished for
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
                  : 'bg-background text-muted-foreground hover:bg-secondary hover:text-foreground'
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
              {content.cta}
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};
