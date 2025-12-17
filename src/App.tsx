import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "@/contexts/AuthContext";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Create from "./pages/Create";
import Auth from "./pages/Auth";
import Dashboard from "./pages/Dashboard";
import ImageGenerator from "./pages/features/ImageGenerator";
import VideoGenerator from "./pages/features/VideoGenerator";
import SocialMediaPosts from "./pages/features/SocialMediaPosts";
import ProductPhotography from "./pages/features/ProductPhotography";
import AIAdGenerator from "./pages/features/AIAdGenerator";
import UGCVideos from "./pages/features/UGCVideos";
import CarouselAds from "./pages/features/CarouselAds";
import MemeGenerator from "./pages/features/MemeGenerator";
import ContentScheduler from "./pages/features/ContentScheduler";
import CompetitorAnalysis from "./pages/features/CompetitorAnalysis";
import Agencies from "./pages/solutions/Agencies";
import Ecommerce from "./pages/solutions/Ecommerce";
import Creators from "./pages/solutions/Creators";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <AuthProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Index />} />
              <Route path="/auth" element={<Auth />} />
              <Route path="/dashboard" element={<Dashboard />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/create" element={<Create />} />
              <Route path="/create/:type" element={<Create />} />
              
              {/* Feature Pages */}
              <Route path="/features/image-generator" element={<ImageGenerator />} />
              <Route path="/features/video-generator" element={<VideoGenerator />} />
              <Route path="/features/social-media" element={<SocialMediaPosts />} />
              <Route path="/features/product-photography" element={<ProductPhotography />} />
              <Route path="/features/ad-generator" element={<AIAdGenerator />} />
              <Route path="/features/ugc-videos" element={<UGCVideos />} />
              <Route path="/features/carousel-ads" element={<CarouselAds />} />
              <Route path="/features/meme-generator" element={<MemeGenerator />} />
              <Route path="/features/content-scheduler" element={<ContentScheduler />} />
              <Route path="/features/competitor-analysis" element={<CompetitorAnalysis />} />
              
              {/* Solution Pages */}
              <Route path="/solutions/agencies" element={<Agencies />} />
              <Route path="/solutions/ecommerce" element={<Ecommerce />} />
              <Route path="/solutions/creators" element={<Creators />} />
              
              {/* Catch-all routes for features */}
              <Route path="/features/*" element={<ImageGenerator />} />
              <Route path="/api/*" element={<VideoGenerator />} />
              
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </AuthProvider>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
