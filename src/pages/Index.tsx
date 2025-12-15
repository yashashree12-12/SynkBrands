import { Helmet } from 'react-helmet-async';
import { AnnouncementBar } from '@/components/AnnouncementBar';
import { Navbar } from '@/components/Navbar';
import { HeroSection } from '@/components/HeroSection';
import { ShowcaseCarousel } from '@/components/ShowcaseCarousel';
import { StatsSection } from '@/components/StatsSection';
import { FeaturesShowcase } from '@/components/FeaturesShowcase';
import { TextToAdsSection } from '@/components/TextToAdsSection';
import { AIVisualsSection } from '@/components/AIVisualsSection';
import { InsightsSection } from '@/components/InsightsSection';
import { EditorSection } from '@/components/EditorSection';
import { PowerToolsSection } from '@/components/PowerToolsSection';
import { CompleteSuiteSection } from '@/components/CompleteSuiteSection';
import { TestimonialsSection } from '@/components/TestimonialsSection';
import { PricingSection } from '@/components/PricingSection';
import { FAQSection } from '@/components/FAQSection';
import { CTASection } from '@/components/CTASection';
import { Footer } from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Helmet>
        <title>SynkBrands - AI Ad Generator to Create Smart Ads & Videos That Work</title>
        <meta 
          name="description" 
          content="Use SynkBrands AI ad generator to create ads, UGC videos, ad copies, and product videos from text prompts. Accelerate CTR and achieve better ROAS with winning ads." 
        />
        <meta name="keywords" content="AI ad generator, video ads, UGC ads, social media marketing, ad creatives, AI marketing" />
        <link rel="canonical" href="https://synkbrands.com" />
        
        {/* Open Graph */}
        <meta property="og:title" content="SynkBrands - AI Ad Generator for Smart Ads & Videos" />
        <meta property="og:description" content="Create AI-powered ads, UGC videos, and product videos from simple text prompts. 500K+ users, 200M+ ads generated." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://synkbrands.com" />
        
        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="SynkBrands - AI Ad Generator" />
        <meta name="twitter:description" content="Create AI-powered ads and videos from text prompts. Achieve 1.5x ROAS with winning ads." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <AnnouncementBar />
        <Navbar />
        
        <main>
          <HeroSection />
          <ShowcaseCarousel />
          <StatsSection />
          <FeaturesShowcase />
          <TextToAdsSection />
          <AIVisualsSection />
          <InsightsSection />
          <EditorSection />
          <PowerToolsSection />
          <CompleteSuiteSection />
          <TestimonialsSection />
          <PricingSection />
          <FAQSection />
          <CTASection />
        </main>
        
        <Footer />
      </div>
    </>
  );
};

export default Index;
