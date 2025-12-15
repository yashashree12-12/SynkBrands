import { Button } from '@/components/ui/button';
import { Lightbulb, Download } from 'lucide-react';

export const InsightsSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* AI Insights */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-24">
          <div className="order-2 lg:order-1">
            <div className="aspect-video rounded-3xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl">
              <div className="text-center text-primary-foreground">
                <Lightbulb className="w-20 h-20 mx-auto mb-4" />
                <p className="font-display font-bold text-xl">AI Insights Dashboard</p>
              </div>
            </div>
          </div>

          <div className="order-1 lg:order-2 space-y-6">
            <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
              No Guesswork. AI Insights for Higher CTR
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Stop wasting budget on ads that don't convert. Our AI analyzes top performing ads and generates ad videos, creatives scientifically designed to perform better. By using data-backed hooks and structures, you can launch campaigns with confidence, reduce creative fatigue, and maximize ROAS from day one.
            </p>
            <Button variant="hero" size="lg">
              Get Started
            </Button>
          </div>
        </div>

        {/* Export Ready */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <h3 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
              From Creation to Launch in Record Time
            </h3>
            <p className="text-lg text-muted-foreground leading-relaxed">
              Streamline your ad campaign workflow with export-ready assets for every platform. Whether you are running ads on Meta, Google, TikTok, or Pinterest, get high quality downloads with the right aspect ratios, safe zones, and ad specifications. Just download, upload, and launch your campaigns instantly.
            </p>
            <Button variant="hero" size="lg">
              Try Now
            </Button>
          </div>

          <div>
            <div className="aspect-video rounded-3xl bg-gradient-to-br from-green-500 to-teal-600 flex items-center justify-center shadow-2xl">
              <div className="text-center text-primary-foreground">
                <Download className="w-20 h-20 mx-auto mb-4" />
                <p className="font-display font-bold text-xl">Export Ready Assets</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
