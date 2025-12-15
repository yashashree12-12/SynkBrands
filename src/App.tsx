import { HelmetProvider } from "react-helmet-async";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Blog from "./pages/Blog";
import Create from "./pages/Create";
import ImageGenerator from "./pages/features/ImageGenerator";
import VideoGenerator from "./pages/features/VideoGenerator";
import SocialMediaPosts from "./pages/features/SocialMediaPosts";
import ProductPhotography from "./pages/features/ProductPhotography";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/create" element={<Create />} />
            <Route path="/create/:type" element={<Create />} />
            <Route path="/features/image-generator" element={<ImageGenerator />} />
            <Route path="/features/video-generator" element={<VideoGenerator />} />
            <Route path="/features/social-media" element={<SocialMediaPosts />} />
            <Route path="/features/product-photography" element={<ProductPhotography />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
