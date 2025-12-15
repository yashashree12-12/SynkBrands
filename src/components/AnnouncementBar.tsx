import { Sparkles } from 'lucide-react';

export const AnnouncementBar = () => {
  return (
    <div className="gradient-bar py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-primary-foreground text-sm font-medium">
        <Sparkles className="w-4 h-4" />
        <span>Nano Banana Pro is live on SynkBrands.</span>
        <a href="#" className="underline hover:no-underline font-semibold">
          Start Creating
        </a>
      </div>
    </div>
  );
};
