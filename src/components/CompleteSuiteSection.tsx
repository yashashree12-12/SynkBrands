import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { 
  Monitor, Palette, Link2, Image, Code,
  Paintbrush, FileText, Globe, Maximize2, RefreshCw, Edit3,
  Laugh, Smartphone, Camera, ShoppingBag, PartyPopper, MessageCircle,
  Calendar, BarChart3, Rocket, CheckCircle2,
  PenTool, Users, LinkIcon, Workflow,
  Video, Film, Send, Layers, Music, Play
} from 'lucide-react';

const mainTabs = [
  { id: 'display', label: 'Display Ads', icon: Monitor },
  { id: 'creatives', label: 'Creatives', icon: Palette },
  { id: 'integrations', label: 'Integrations', icon: Link2 },
  { id: 'branded', label: 'Branded Content', icon: Image },
  { id: 'api', label: 'API', icon: Code },
];

const tabContent = {
  display: {
    title: 'Create Scroll Stopping Display Ads',
    subtitle: 'Generate Ads that engage your audience and drive clicks',
    features: [
      { Icon: Paintbrush, title: 'Text-to-Ads with AI Ad Maker', desc: 'Turn Text into custom Ad Creatives' },
      { Icon: FileText, title: 'Ad Copies', desc: 'Make custom Ad headlines, captions, subheadings' },
      { Icon: Globe, title: 'Multi Language Ads', desc: 'Create Ads in 19+ Languages' },
      { Icon: Maximize2, title: 'Resize Ads', desc: 'Automatically Resize and Repurpose Ads' },
      { Icon: RefreshCw, title: 'A/B Tests', desc: 'Create multiple variations for A/B tests' },
      { Icon: Edit3, title: 'Ad Editor', desc: 'Intuitive and Easy to use creative editor' },
    ],
    PreviewIcon: Paintbrush,
  },
  creatives: {
    title: 'Creatives Generation',
    subtitle: 'Craft Stunning Social Media Content for Every Occasion',
    features: [
      { Icon: Laugh, title: 'AI Meme Maker', desc: 'Convert Your Ideas into Memes' },
      { Icon: Smartphone, title: 'Social Media Ad Maker', desc: 'Turn Ideas into stunning Social Media Ads' },
      { Icon: Camera, title: 'Social Media Posts', desc: 'Generate Ready-To-Post Creatives' },
      { Icon: ShoppingBag, title: 'E-comm Product Posts', desc: 'AI Makes Product Posts from Catalog' },
      { Icon: PartyPopper, title: 'Special Day Posts', desc: 'Create posts for holidays and festivals' },
      { Icon: MessageCircle, title: 'Quote to Posts', desc: 'Turn famous quotes into social media posts' },
    ],
    PreviewIcon: Palette,
  },
  integrations: {
    title: 'Seamless Integration With Platforms',
    subtitle: 'Connect effortlessly with all major social media platforms',
    features: [
      { Icon: Calendar, title: 'Content Scheduler', desc: 'Generate, Design, and Schedule in One Place' },
      { Icon: BarChart3, title: 'Competitor Insights', desc: 'Get Ahead with actionable insights' },
      { Icon: Rocket, title: 'Publish to multiple accounts', desc: 'Share across all your channels' },
      { Icon: CheckCircle2, title: 'Approval Flow', desc: 'Enable team collaboration and approvals' },
    ],
    PreviewIcon: Link2,
  },
  branded: {
    title: 'Branded Content',
    subtitle: 'Create Custom Designs that Align with Your Brand Identity',
    features: [
      { Icon: PenTool, title: 'Brand Guidelines', desc: 'AI makes content in your Brand Colors' },
      { Icon: Palette, title: 'Customizable Designs', desc: 'Customize templates or make your own' },
      { Icon: Users, title: 'Team Collaboration', desc: 'Work together with permissions' },
      { Icon: Workflow, title: 'Integrate with workflow', desc: 'Discover APIs and integrations' },
    ],
    PreviewIcon: Image,
  },
  api: {
    title: 'API',
    subtitle: 'Build Custom Solutions with Our Powerful API',
    features: [
      { Icon: Video, title: 'Videos with API', desc: 'API to make social media videos' },
      { Icon: Film, title: 'Reels with API', desc: 'Create Instagram reels through AI API' },
      { Icon: Send, title: 'Posts with API', desc: 'Generate posts through text-to-post API' },
      { Icon: Laugh, title: 'Memes with API', desc: 'Make memes with text input using API' },
      { Icon: Camera, title: 'Instagram Story with API', desc: 'Generate Instagram stories using AI' },
      { Icon: Layers, title: 'Carousels with API', desc: 'Make engaging carousels using API' },
      { Icon: Music, title: 'TikTok videos with API', desc: 'Create TikTok content with API' },
    ],
    PreviewIcon: Code,
  },
};

export const CompleteSuiteSection = () => {
  const [activeTab, setActiveTab] = useState('display');
  const content = tabContent[activeTab as keyof typeof tabContent];

  return (
    <section className="py-20 bg-background" id="api">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-center text-foreground mb-12">
          Complete Suite for your Social Media Needs
        </h2>

        {/* Main Tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          {mainTabs.map((tab) => (
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

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-12 items-start animate-fade-in" key={activeTab}>
          <div>
            <h3 className="font-display text-2xl lg:text-3xl font-bold text-foreground mb-2">
              {content.title}
            </h3>
            <p className="text-muted-foreground mb-8">{content.subtitle}</p>

            <div className="grid gap-4">
              {content.features.map((feature) => (
                <div
                  key={feature.title}
                  className="flex items-start gap-4 p-4 bg-secondary/50 rounded-xl hover:bg-secondary transition-colors cursor-pointer group"
                >
                  <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                    <feature.Icon className="w-5 h-5 text-primary" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-foreground">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="sticky top-24">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-purple via-pink to-coral flex items-center justify-center shadow-2xl">
              <div className="text-center text-primary-foreground">
                <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center mx-auto mb-4">
                  <content.PreviewIcon className="w-12 h-12 text-white" />
                </div>
                <p className="font-display font-bold text-2xl">{content.title}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
