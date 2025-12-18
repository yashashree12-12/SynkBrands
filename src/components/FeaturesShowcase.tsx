import { Button } from '@/components/ui/button';
import { Play, Sparkles, Users, Video, Camera, Mic } from 'lucide-react';
import { Link } from 'react-router-dom';
import heroDashboard from '@/assets/hero-dashboard.png';
import aiVideoFeature from '@/assets/ai-video-feature.png';
import aiImageFeature from '@/assets/ai-image-feature.png';

const features = [
  {
    title: 'Create video ads that deliver 1.5x ROAS',
    description: 'Enter your product URL and let SynkBrands generate high-performing product ad videos. Scale ad campaigns faster with ad videos that are tested to convert and reduce CPA.',
    icon: Play,
    color: 'from-purple-500 to-pink-500',
    image: aiVideoFeature,
    link: '/features/video-generator',
  },
  {
    title: 'AI-powered product ads, 10x cheaper',
    description: 'Turn simple product images into professional product ads without expensive cameras, props, or editing. Save 90% of time & cost on traditional photoshoots.',
    icon: Camera,
    color: 'from-orange-500 to-red-500',
    image: aiImageFeature,
    link: '/features/product-photography',
  },
  {
    title: 'Make UGC Video Ads without Actors',
    description: 'Create human-like UGC ads and videos without hiring actors or expensive video shoots. Customize avatars by age, gender, and ethnicity to match your audience.',
    icon: Mic,
    color: 'from-blue-500 to-cyan-500',
    image: heroDashboard,
    link: '/features/ugc-videos',
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
            <div className="flex-1 w-full animate-fade-in">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-border/50 group hover-lift">
                <img 
                  src={feature.image} 
                  alt={feature.title}
                  className="w-full h-auto group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background/20 to-transparent pointer-events-none" />
              </div>
            </div>

            {/* Content */}
            <div className="flex-1 space-y-6 animate-fade-in-up">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-xl bg-gradient-to-br ${feature.color} shadow-lg`}>
                <feature.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground leading-tight">
                {feature.title}
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                {feature.description}
              </p>
              <Link to={feature.link}>
                <Button variant="hero" size="lg" className="hover:scale-105 transition-transform">
                  Try it Now
                  <Sparkles className="w-5 h-5 ml-2" />
                </Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};
