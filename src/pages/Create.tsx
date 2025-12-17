import { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Navbar } from '@/components/Navbar';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { Input } from '@/components/ui/input';
import { useToast } from '@/hooks/use-toast';
import { 
  Image, Video, MessageSquare, Camera, Sparkles, Upload, 
  Download, RefreshCw, Palette, Layers, Type, Wand2,
  Instagram, Facebook, Linkedin, Twitter, ChevronDown, Play,
  Square, RectangleVertical, RectangleHorizontal, Smartphone,
  Monitor, Tablet, LayoutGrid, Check, Zap, Clock, Globe, Hash,
  Mic, Music, SlidersHorizontal, Eye, Share2, Copy, Star, Crown
} from 'lucide-react';

type ContentType = 'image' | 'video' | 'social' | 'product' | 'ad' | 'carousel';

const contentTypes = [
  { id: 'image' as ContentType, label: 'Image', icon: Image, color: 'from-pink-500 to-rose-500' },
  { id: 'video' as ContentType, label: 'Video', icon: Video, color: 'from-purple-500 to-violet-500' },
  { id: 'social' as ContentType, label: 'Social Post', icon: MessageSquare, color: 'from-blue-500 to-cyan-500' },
  { id: 'product' as ContentType, label: 'Product Photo', icon: Camera, color: 'from-orange-500 to-amber-500' },
  { id: 'ad' as ContentType, label: 'Ad Creative', icon: Zap, color: 'from-green-500 to-emerald-500' },
  { id: 'carousel' as ContentType, label: 'Carousel', icon: LayoutGrid, color: 'from-indigo-500 to-purple-500' },
];

const platforms = [
  { id: 'instagram', name: 'Instagram', icon: Instagram, color: 'bg-gradient-to-br from-purple-600 to-pink-500' },
  { id: 'facebook', name: 'Facebook', icon: Facebook, color: 'bg-blue-600' },
  { id: 'linkedin', name: 'LinkedIn', icon: Linkedin, color: 'bg-blue-700' },
  { id: 'twitter', name: 'X (Twitter)', icon: Twitter, color: 'bg-foreground' },
];

const aspectRatios = [
  { id: '1:1', label: 'Square', icon: Square, width: 1080, height: 1080 },
  { id: '4:5', label: 'Portrait', icon: RectangleVertical, width: 1080, height: 1350 },
  { id: '9:16', label: 'Story', icon: Smartphone, width: 1080, height: 1920 },
  { id: '16:9', label: 'Landscape', icon: RectangleHorizontal, width: 1920, height: 1080 },
];

const styles = [
  { id: 'modern', label: 'Modern', icon: Sparkles },
  { id: 'minimal', label: 'Minimal', icon: Square },
  { id: 'bold', label: 'Bold', icon: Zap },
  { id: 'elegant', label: 'Elegant', icon: Crown },
  { id: 'playful', label: 'Playful', icon: Star },
  { id: 'professional', label: 'Professional', icon: Monitor },
];

const templates = [
  { id: 1, name: 'Fashion Sale', category: 'E-commerce', preview: 'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop' },
  { id: 2, name: 'Product Launch', category: 'Marketing', preview: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop' },
  { id: 3, name: 'Fitness Promo', category: 'Health', preview: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=300&h=300&fit=crop' },
  { id: 4, name: 'Food & Restaurant', category: 'Food', preview: 'https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=300&h=300&fit=crop' },
  { id: 5, name: 'Tech Gadgets', category: 'Technology', preview: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop' },
  { id: 6, name: 'Travel & Adventure', category: 'Travel', preview: 'https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=300&h=300&fit=crop' },
];

const generatedPreviews = [
  'https://images.unsplash.com/photo-1441986300917-64674bd600d8?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1472851294608-062f824d29cc?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=400&fit=crop',
];

const Create = () => {
  const { toast } = useToast();
  const [contentType, setContentType] = useState<ContentType>('image');
  const [prompt, setPrompt] = useState('');
  const [brandName, setBrandName] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('instagram');
  const [selectedRatio, setSelectedRatio] = useState('1:1');
  const [selectedStyle, setSelectedStyle] = useState('modern');
  const [selectedTemplate, setSelectedTemplate] = useState<number | null>(null);
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string[]>([]);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [showTemplates, setShowTemplates] = useState(true);
  const [activeTab, setActiveTab] = useState<'prompt' | 'templates'>('prompt');

  const handleGenerate = async () => {
    if (!prompt.trim() && !selectedTemplate) {
      toast({
        title: "Please enter a prompt or select a template",
        description: "Describe what you want to create or choose a template.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2500));
    
    setGeneratedContent(generatedPreviews);
    setIsGenerating(false);
    
    toast({
      title: "Content generated successfully",
      description: `Your ${contentType} content is ready.`,
    });
  };

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUploadedImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <Helmet>
        <title>Create Content - SynkBrands | AI Content Generator</title>
        <meta name="description" content="Create stunning images, videos, social media posts, and product photos with SynkBrands AI-powered content generator." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          {/* Content Type Selector */}
          <div className="mb-8">
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-2">
              Create with AI
            </h1>
            <p className="text-muted-foreground mb-6">Select content type and customize your creation</p>
            <div className="grid grid-cols-3 md:grid-cols-6 gap-3">
              {contentTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setContentType(type.id)}
                  className={`p-4 rounded-2xl border-2 transition-all ${
                    contentType === type.id
                      ? 'border-primary bg-primary/5 shadow-lg'
                      : 'border-border bg-card hover:border-primary/50 hover:shadow-md'
                  }`}
                >
                  <div className={`w-10 h-10 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-2 mx-auto`}>
                    <type.icon className="w-5 h-5 text-white" />
                  </div>
                  <span className="font-medium text-sm text-foreground">{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-5 gap-8">
            {/* Left Panel - Input */}
            <div className="lg:col-span-2 space-y-6">
              {/* Tab Selector */}
              <div className="flex gap-2 p-1 bg-secondary rounded-xl">
                <button
                  onClick={() => setActiveTab('prompt')}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                    activeTab === 'prompt' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  <Type className="w-4 h-4 inline mr-2" />
                  Write Prompt
                </button>
                <button
                  onClick={() => setActiveTab('templates')}
                  className={`flex-1 py-2 px-4 rounded-lg text-sm font-medium transition-all ${
                    activeTab === 'templates' ? 'bg-background shadow-sm text-foreground' : 'text-muted-foreground'
                  }`}
                >
                  <LayoutGrid className="w-4 h-4 inline mr-2" />
                  Templates
                </button>
              </div>

              {activeTab === 'prompt' ? (
                <>
                  {/* Brand Name */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Brand Name
                    </label>
                    <Input
                      placeholder="Enter your brand name"
                      value={brandName}
                      onChange={(e) => setBrandName(e.target.value)}
                      className="h-11"
                    />
                  </div>

                  {/* Prompt Input */}
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Describe what you want to create
                    </label>
                    <Textarea
                      placeholder={`Describe your ${contentType}... e.g., "A modern social media ad for a coffee brand with warm colors and minimal design"`}
                      value={prompt}
                      onChange={(e) => setPrompt(e.target.value)}
                      rows={4}
                      className="resize-none"
                    />
                    <div className="flex items-center gap-2 mt-2">
                      <Button variant="ghost" size="sm" className="text-xs">
                        <Hash className="w-3 h-3 mr-1" />
                        Add Hashtags
                      </Button>
                      <Button variant="ghost" size="sm" className="text-xs">
                        <Globe className="w-3 h-3 mr-1" />
                        Translate
                      </Button>
                    </div>
                  </div>

                  {/* Image Upload */}
                  {(contentType === 'product' || contentType === 'image') && (
                    <div>
                      <label className="block text-sm font-medium text-foreground mb-2">
                        Upload Reference Image
                      </label>
                      <div className="border-2 border-dashed border-border rounded-xl p-4 text-center hover:border-primary/50 transition-colors cursor-pointer bg-secondary/30">
                        <input
                          type="file"
                          accept="image/*"
                          onChange={handleImageUpload}
                          className="hidden"
                          id="image-upload"
                        />
                        <label htmlFor="image-upload" className="cursor-pointer">
                          {uploadedImage ? (
                            <img src={uploadedImage} alt="Uploaded" className="max-h-32 mx-auto rounded-lg" />
                          ) : (
                            <>
                              <Upload className="w-8 h-8 text-muted-foreground mx-auto mb-2" />
                              <p className="text-sm text-muted-foreground">
                                Click to upload or drag and drop
                              </p>
                            </>
                          )}
                        </label>
                      </div>
                    </div>
                  )}
                </>
              ) : (
                /* Templates Grid */
                <div className="space-y-4">
                  <p className="text-sm text-muted-foreground">Choose a template to start with</p>
                  <div className="grid grid-cols-2 gap-3 max-h-[400px] overflow-y-auto pr-2">
                    {templates.map((template) => (
                      <button
                        key={template.id}
                        onClick={() => setSelectedTemplate(template.id)}
                        className={`relative rounded-xl overflow-hidden border-2 transition-all ${
                          selectedTemplate === template.id
                            ? 'border-primary ring-2 ring-primary/20'
                            : 'border-transparent hover:border-primary/50'
                        }`}
                      >
                        <img 
                          src={template.preview} 
                          alt={template.name}
                          className="w-full aspect-square object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 to-transparent" />
                        <div className="absolute bottom-0 left-0 right-0 p-3">
                          <p className="text-white text-sm font-medium">{template.name}</p>
                          <p className="text-white/70 text-xs">{template.category}</p>
                        </div>
                        {selectedTemplate === template.id && (
                          <div className="absolute top-2 right-2 w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                            <Check className="w-4 h-4 text-white" />
                          </div>
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Platform Selection */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Platform
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {platforms.map((platform) => (
                    <button
                      key={platform.id}
                      onClick={() => setSelectedPlatform(platform.id)}
                      className={`p-3 rounded-xl border transition-all ${
                        selectedPlatform === platform.id
                          ? 'border-primary bg-primary/10'
                          : 'border-border bg-card hover:border-primary/50'
                      }`}
                    >
                      <div className={`w-8 h-8 ${platform.color} rounded-lg flex items-center justify-center mx-auto`}>
                        <platform.icon className="w-4 h-4 text-white" />
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              {/* Aspect Ratio */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Aspect Ratio
                </label>
                <div className="grid grid-cols-4 gap-2">
                  {aspectRatios.map((ratio) => (
                    <button
                      key={ratio.id}
                      onClick={() => setSelectedRatio(ratio.id)}
                      className={`p-3 rounded-xl border text-sm transition-all ${
                        selectedRatio === ratio.id
                          ? 'border-primary bg-primary/10 text-primary'
                          : 'border-border bg-card text-muted-foreground hover:border-primary/50'
                      }`}
                    >
                      <ratio.icon className={`w-5 h-5 mx-auto mb-1 ${selectedRatio === ratio.id ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className="text-xs">{ratio.label}</span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Style Selection */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Style
                </label>
                <div className="grid grid-cols-3 gap-2">
                  {styles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`p-3 rounded-xl border transition-all flex items-center gap-2 ${
                        selectedStyle === style.id
                          ? 'border-primary bg-primary/10'
                          : 'border-border bg-card hover:border-primary/50'
                      }`}
                    >
                      <style.icon className={`w-4 h-4 ${selectedStyle === style.id ? 'text-primary' : 'text-muted-foreground'}`} />
                      <span className={`text-sm ${selectedStyle === style.id ? 'text-primary' : 'text-muted-foreground'}`}>
                        {style.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

              {/* Video-specific options */}
              {contentType === 'video' && (
                <div className="space-y-4 p-4 bg-secondary/50 rounded-xl">
                  <p className="text-sm font-medium text-foreground flex items-center gap-2">
                    <Video className="w-4 h-4" />
                    Video Options
                  </p>
                  <div className="grid grid-cols-2 gap-3">
                    <Button variant="outline" size="sm" className="justify-start">
                      <Mic className="w-4 h-4 mr-2" />
                      AI Voiceover
                    </Button>
                    <Button variant="outline" size="sm" className="justify-start">
                      <Music className="w-4 h-4 mr-2" />
                      Add Music
                    </Button>
                  </div>
                </div>
              )}

              {/* Generate Button */}
              <Button
                variant="hero"
                size="lg"
                className="w-full"
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <>
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Generating...
                  </>
                ) : (
                  <>
                    <Sparkles className="w-5 h-5 mr-2" />
                    Generate {contentType.charAt(0).toUpperCase() + contentType.slice(1)}
                  </>
                )}
              </Button>
            </div>

            {/* Right Panel - Preview */}
            <div className="lg:col-span-3 bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-lg font-bold text-foreground flex items-center gap-2">
                  <Eye className="w-5 h-5 text-primary" />
                  Live Preview
                </h2>
                {generatedContent.length > 0 && (
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Share2 className="w-4 h-4 mr-2" />
                      Share
                    </Button>
                    <Button variant="outline" size="sm">
                      <Download className="w-4 h-4 mr-2" />
                      Download All
                    </Button>
                  </div>
                )}
              </div>

              {generatedContent.length > 0 ? (
                <>
                  <div className="grid grid-cols-2 gap-4 mb-6">
                    {generatedContent.map((content, index) => (
                      <div
                        key={index}
                        className="relative rounded-xl overflow-hidden group cursor-pointer shadow-md hover:shadow-xl transition-shadow"
                      >
                        <img 
                          src={content} 
                          alt={`Generated ${index + 1}`}
                          className="w-full aspect-square object-cover"
                        />
                        {contentType === 'video' && (
                          <div className="absolute inset-0 flex items-center justify-center">
                            <div className="w-16 h-16 bg-white/90 rounded-full flex items-center justify-center shadow-lg">
                              <Play className="w-8 h-8 text-foreground ml-1" />
                            </div>
                          </div>
                        )}
                        <div className="absolute inset-0 bg-foreground/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                          <Button size="sm" variant="secondary">
                            <Download className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="secondary">
                            <Copy className="w-4 h-4" />
                          </Button>
                          <Button size="sm" variant="secondary">
                            <Wand2 className="w-4 h-4" />
                          </Button>
                        </div>
                        <div className="absolute bottom-2 left-2 px-2 py-1 bg-foreground/80 rounded-md">
                          <span className="text-xs text-white font-medium">Variation {index + 1}</span>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Quick Actions */}
                  <div className="pt-6 border-t border-border">
                    <h3 className="text-sm font-medium text-foreground mb-3 flex items-center gap-2">
                      <SlidersHorizontal className="w-4 h-4" />
                      Quick Editing Tools
                    </h3>
                    <div className="flex flex-wrap gap-2">
                      <Button variant="outline" size="sm">
                        <Palette className="w-4 h-4 mr-2" />
                        Change Colors
                      </Button>
                      <Button variant="outline" size="sm">
                        <Type className="w-4 h-4 mr-2" />
                        Edit Text
                      </Button>
                      <Button variant="outline" size="sm">
                        <Layers className="w-4 h-4 mr-2" />
                        Add Elements
                      </Button>
                      <Button variant="outline" size="sm">
                        <RefreshCw className="w-4 h-4 mr-2" />
                        Regenerate
                      </Button>
                      <Button variant="outline" size="sm">
                        <Image className="w-4 h-4 mr-2" />
                        Change Background
                      </Button>
                    </div>
                  </div>

                  {/* Caption & Hashtags */}
                  <div className="mt-6 p-4 bg-secondary/50 rounded-xl">
                    <h3 className="text-sm font-medium text-foreground mb-2">Generated Caption</h3>
                    <p className="text-sm text-muted-foreground mb-3">
                      Elevate your style with our latest collection. Discover timeless designs crafted for modern living.
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {['#fashion', '#style', '#newcollection', '#trending', '#shopnow'].map(tag => (
                        <span key={tag} className="text-xs text-primary bg-primary/10 px-2 py-1 rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </>
              ) : (
                <div className="aspect-video rounded-xl bg-gradient-to-br from-secondary via-secondary/50 to-secondary flex flex-col items-center justify-center text-center p-8 border-2 border-dashed border-border">
                  {contentType === 'video' ? (
                    <Video className="w-16 h-16 text-muted-foreground mb-4" />
                  ) : (
                    <Image className="w-16 h-16 text-muted-foreground mb-4" />
                  )}
                  <h3 className="font-medium text-foreground mb-2">Your preview will appear here</h3>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Enter a prompt or select a template, then click generate to create your {contentType} content.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default Create;
