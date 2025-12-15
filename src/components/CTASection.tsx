import { Button } from '@/components/ui/button';

export const CTASection = () => {
  return (
    <section className="py-24 bg-background">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-6">
          <span className="text-foreground">Get started</span>
          <br />
          <span className="gradient-text">for free</span>
        </h2>
        <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Experience the power of AI to Create and Schedule ad creatives, social media content, videos. Ideate, Create and Schedule with SynkBrands
        </p>
        <Button variant="hero" size="xl" className="text-lg px-12">
          Generate your first post
        </Button>
      </div>
    </section>
  );
};
