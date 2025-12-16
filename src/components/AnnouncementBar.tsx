import { Sparkles, Zap } from 'lucide-react';

export const AnnouncementBar = () => {
  return (
    <div className="gradient-bar py-2.5 px-4">
      <div className="max-w-7xl mx-auto flex items-center justify-center gap-2 text-primary-foreground text-sm font-medium">
        <Zap className="w-4 h-4" />
        <span>New! AI Video Generator with voiceovers is now available.</span>
        <a href="/create/video" className="underline hover:no-underline font-semibold">
          Try it Free
        </a>
      </div>
    </div>
  );
};