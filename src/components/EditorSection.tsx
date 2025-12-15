import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Pencil, Copy, Crop, Mic } from 'lucide-react';

const tabs = [
  { id: 'editor', label: 'Editor', icon: Pencil },
  { id: 'ab-test', label: 'A/B test', icon: Copy },
  { id: 'copies', label: 'Optimized Copies', icon: Copy },
  { id: 'templates', label: 'Templates', icon: Crop },
];

const tabContent = {
  'editor': {
    title: 'Fine tune your ads with the simplest creative editor',
    description: 'Want to make changes in the AI-generated ad? Use our editor with a user-friendly interface. Align your ad creative with campaign goals. Use our simple drag-and-drop editor to modify fonts, texts, add shapes, design elements, color palettes, swap templates, use customizable templates or upload your own assets.',
    cta: 'Edit Ad Design Online',
    color: 'from-green-400 to-emerald-500',
    icon: '✏️',
  },
  'ab-test': {
    title: 'A/B Testing made easy',
    description: 'Generate multiple ad variations of the same ad creative with AI. Use our built-in editor to make easy tweaks and versions. The Idea Labs feature gives you varied messaging options with AI. Use AI to score your ad creatives and fine tune them for your strategic objectives.',
    cta: 'Try Free AI Ad Generator',
    color: 'from-orange-400 to-amber-500',
    icon: '🔬',
  },
  'copies': {
    title: 'Create Ad Copies that Actually Convert',
    description: 'By using a powerful AI ad copy generator system, our tool customizes each ad copy for high conversion and makes them in accordance with your brand guidelines. Be it an ad campaign on Facebook, Instagram, or LinkedIn, SynkBrands has got you covered.',
    cta: 'Try for Free',
    color: 'from-red-400 to-pink-500',
    icon: '📝',
  },
  'templates': {
    title: 'Browse Thousands of Ad Templates',
    description: 'Use our ad library of over thousands of templates to create ads for every occasion and style. From sleek and minimal to bold, creative, and vibrant, our templates suit every brand personality and campaign goal. Create ads that match your vision in just a few clicks.',
    cta: 'Try for Free',
    color: 'from-blue-400 to-cyan-500',
    icon: '📋',
  },
};

export const EditorSection = () => {
  const [activeTab, setActiveTab] = useState('editor');
  const content = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">
          Everything you need to Create & Test Converting Ad Creatives
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
