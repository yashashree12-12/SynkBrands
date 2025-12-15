import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Image, Palette, FileText, Globe, LayoutGrid } from 'lucide-react';

const tabs = [
  { id: 'text-to-ads', label: 'Text-to-Ads', icon: FileText },
  { id: 'branded-ads', label: 'Branded Ads', icon: Palette },
  { id: 'ad-copies', label: 'Ad Copies', icon: FileText },
  { id: 'multilingual', label: 'Multilingual', icon: Globe },
  { id: 'multiformat', label: 'Multiformat', icon: LayoutGrid },
];

const tabContent = {
  'text-to-ads': {
    title: 'Text Input to Powerful Ad Output',
    description: 'No ad campaign deck, no constant brainstorming, and no more publishing panic for your marketing team! With just a few lines of text, SynkBrands AI ad generator churns out powerful and eye-catching ad content, in your brand guidelines.',
    cta: 'Generate Ads',
    color: 'from-orange-400 to-red-500',
    icon: '✨',
  },
  'branded-ads': {
    title: 'Effortlessly Integrate Your Brand Into Every Ad',
    description: 'Synchronize your brand language and brand tone with every ad. Once you add a few details on logo, tonality, colors, fonts, and themes to SynkBrands, your brand will come alive effortlessly in your ads.',
    cta: 'Make Ads',
    color: 'from-green-400 to-emerald-500',
    icon: '🎨',
  },
  'ad-copies': {
    title: 'Create Stunning Ad Copy on Autopilot',
    description: 'SynkBrands not only makes the creative, it generates the text that goes inside the ad creative. It also generates the ad caption, ad headlines, hashtags and ad copies for your ad creatives.',
    cta: 'Create Ads with AI',
    color: 'from-red-400 to-pink-500',
    icon: '📝',
  },
  'multilingual': {
    title: 'Supports 19+ Languages',
    description: 'Reach a whole new scale of audience and facilitate more authentic connections. Generate ad creatives in over 19 languages, SynkBrands removes all restrictions you could have had reaching your global target audience.',
    cta: 'Create Ads with AI',
    color: 'from-blue-400 to-cyan-500',
    icon: '🌍',
  },
  'multiformat': {
    title: 'Create Ads in Multiple Ad Formats',
    description: 'From video ads that grab attention, to static visuals that tell your story in a glance, to animated ads that add motion and energy. No matter your goal or platform, we make it easy to generate ad creatives.',
    cta: 'Create Ads',
    color: 'from-purple-400 to-violet-500',
    icon: '📐',
  },
};

export const TextToAdsSection = () => {
  const [activeTab, setActiveTab] = useState('text-to-ads');
  const content = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section className="py-20 bg-secondary/30" id="features">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">
          Go from Text to fully Branded Ads in seconds
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
          <div className="space-y-6 animate-fade-in" key={activeTab}>
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

          <div className="animate-fade-in" key={`${activeTab}-image`}>
            <div className={`aspect-square rounded-3xl bg-gradient-to-br ${content.color} flex items-center justify-center shadow-2xl`}>
              <span className="text-9xl">{content.icon}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
