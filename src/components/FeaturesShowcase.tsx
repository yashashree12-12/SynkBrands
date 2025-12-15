import { Button } from '@/components/ui/button';
import { Play, Sparkles, Users } from 'lucide-react';

const features = [
  {
    title: 'Create video ads that deliver 1.5x ROAS',
    description: 'Enter your product URL and let SynkBrands generate high-performing product ad videos. Scale ad campaigns faster with ad videos that are tested to convert and reduce CPA.',
    icon: Play,
    color: 'from-purple-500 to-pink-500',
    image: '🎬',
  },
  {
    title: 'AI-powered product ads, 10x cheaper',
    description: 'Turn simple product images into professional product ads without expensive cameras, props, or editing. Save 90% of time & cost on traditional photoshoots.',
    icon: Sparkles,
    color: 'from-orange-500 to-red-500',
    image: '📸',
  },
  {
    title: 'Make UGC Video Ads without Actors',
    description: 'Create human-like UGC ads and videos without hiring actors or expensive video shoots. Customize avatars by age, gender, and ethnicity to match your audience.',
    icon: Users,
    color: 'from-blue-500 to-cyan-500',
    image: '🎭',
  },
];

export const FeaturesShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {features.map((feature, index) => (
          <div
            key={feature.title}
            className={`flex flex-col lg:flex-row items-center gap-12 mb-24 last:mb-0 ${
              index % 2 === 1 ? 'lg:flex-row-reverse' : ''
            }`}
          >
            {/* Image/Preview */}
            <div className="flex-1 w-full">
              <div className={`aspect-video rounded-3xl bg-gradient-to-br ${feature.color} flex items-center justify-center shadow-2xl card-hover`}>
                <span className="text-8xl">{feature.image}</span>
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6">
              <div className={`inline-flex items-center justify-center w-12 h-12 rounded-xl bg-gradient-to-br ${feature.color}`}>
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                {feature.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              <Button variant="hero" size="lg">
                Try it Now
              </Button>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
