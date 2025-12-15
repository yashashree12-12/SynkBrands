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
  Instagram, Facebook, Linkedin, Twitter, ChevronDown
} from 'lucide-react';

type ContentType = 'image' | 'video' | 'social' | 'product';

const contentTypes = [
  { id: 'image' as ContentType, label: 'Image', icon: Image, color: 'from-pink-500 to-rose-500' },
  { id: 'video' as ContentType, label: 'Video', icon: Video, color: 'from-purple-500 to-violet-500' },
  { id: 'social' as ContentType, label: 'Social Post', icon: MessageSquare, color: 'from-blue-500 to-cyan-500' },
  { id: 'product' as ContentType, label: 'Product Photo', icon: Camera, color: 'from-orange-500 to-amber-500' },
];

const platforms = [
  { id: 'instagram', name: 'Instagram', icon: Instagram },
  { id: 'facebook', name: 'Facebook', icon: Facebook },
  { id: 'linkedin', name: 'LinkedIn', icon: Linkedin },
  { id: 'twitter', name: 'X (Twitter)', icon: Twitter },
];

const aspectRatios = [
  { id: '1:1', label: 'Square (1:1)', width: 1080, height: 1080 },
  { id: '4:5', label: 'Portrait (4:5)', width: 1080, height: 1350 },
  { id: '9:16', label: 'Story (9:16)', width: 1080, height: 1920 },
  { id: '16:9', label: 'Landscape (16:9)', width: 1920, height: 1080 },
];

const styles = [
  { id: 'modern', label: 'Modern', emoji: '✨' },
  { id: 'minimal', label: 'Minimal', emoji: '⚪' },
  { id: 'bold', label: 'Bold', emoji: '💪' },
  { id: 'elegant', label: 'Elegant', emoji: '👑' },
  { id: 'playful', label: 'Playful', emoji: '🎨' },
  { id: 'professional', label: 'Professional', emoji: '💼' },
];

const Create = () => {
  const { toast } = useToast();
  const [contentType, setContentType] = useState<ContentType>('image');
  const [prompt, setPrompt] = useState('');
  const [brandName, setBrandName] = useState('');
  const [selectedPlatform, setSelectedPlatform] = useState('instagram');
  const [selectedRatio, setSelectedRatio] = useState('1:1');
  const [selectedStyle, setSelectedStyle] = useState('modern');
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState<string[]>([]);
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);

  const handleGenerate = async () => {
    if (!prompt.trim()) {
      toast({
        title: "Please enter a prompt",
        description: "Describe what you want to create.",
        variant: "destructive",
      });
      return;
    }

    setIsGenerating(true);
    
    // Simulate AI generation
    await new Promise(resolve => setTimeout(resolve, 2000));
    
    // Mock generated content
    const mockResults = [
      `Generated ${contentType} 1`,
      `Generated ${contentType} 2`,
      `Generated ${contentType} 3`,
      `Generated ${contentType} 4`,
    ];
    
    setGeneratedContent(mockResults);
    setIsGenerating(false);
    
    toast({
      title: "Content generated!",
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
            <h1 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-6">
              Create with AI
            </h1>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
              {contentTypes.map((type) => (
                <button
                  key={type.id}
                  onClick={() => setContentType(type.id)}
                  className={`p-4 rounded-2xl border-2 transition-all ${
                    contentType === type.id
                      ? 'border-primary bg-primary/5'
                      : 'border-border bg-card hover:border-primary/50'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${type.color} flex items-center justify-center mb-3 mx-auto`}>
                    <type.icon className="w-6 h-6 text-white" />
                  </div>
                  <span className="font-medium text-foreground">{type.label}</span>
                </button>
              ))}
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {/* Left Panel - Input */}
            <div className="space-y-6">
              {/* Brand Name */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Brand Name (Optional)
                </label>
                <Input
                  placeholder="Enter your brand name"
                  value={brandName}
                  onChange={(e) => setBrandName(e.target.value)}
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
              </div>

              {/* Image Upload */}
              {(contentType === 'product' || contentType === 'image') && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Upload Reference Image (Optional)
                  </label>
                  <div className="border-2 border-dashed border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors cursor-pointer">
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="hidden"
                      id="image-upload"
                    />
                    <label htmlFor="image-upload" className="cursor-pointer">
                      {uploadedImage ? (
                        <img src={uploadedImage} alt="Uploaded" className="max-h-40 mx-auto rounded-lg" />
                      ) : (
                        <>
                          <Upload className="w-10 h-10 text-muted-foreground mx-auto mb-3" />
                          <p className="text-sm text-muted-foreground">
                            Click to upload or drag and drop
                          </p>
                          <p className="text-xs text-muted-foreground mt-1">
                            PNG, JPG, WEBP up to 10MB
                          </p>
                        </>
                      )}
                    </label>
                  </div>
                </div>
              )}

              {/* Platform Selection */}
              {contentType === 'social' && (
                <div>
                  <label className="block text-sm font-medium text-foreground mb-2">
                    Platform
                  </label>
                  <div className="grid grid-cols-4 gap-3">
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
                        <platform.icon className={`w-6 h-6 mx-auto ${selectedPlatform === platform.id ? 'text-primary' : 'text-muted-foreground'}`} />
                      </button>
                    ))}
                  </div>
                </div>
              )}

              {/* Aspect Ratio */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Aspect Ratio
                </label>
                <div className="grid grid-cols-4 gap-3">
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
                      {ratio.id}
                    </button>
                  ))}
                </div>
              </div>

              {/* Style Selection */}
              <div>
                <label className="block text-sm font-medium text-foreground mb-2">
                  Style
                </label>
                <div className="grid grid-cols-3 gap-3">
                  {styles.map((style) => (
                    <button
                      key={style.id}
                      onClick={() => setSelectedStyle(style.id)}
                      className={`p-3 rounded-xl border transition-all ${
                        selectedStyle === style.id
                          ? 'border-primary bg-primary/10'
                          : 'border-border bg-card hover:border-primary/50'
                      }`}
                    >
                      <span className="text-xl mr-2">{style.emoji}</span>
                      <span className={selectedStyle === style.id ? 'text-primary' : 'text-muted-foreground'}>
                        {style.label}
                      </span>
                    </button>
                  ))}
                </div>
              </div>

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
            <div className="bg-card rounded-2xl border border-border p-6">
              <div className="flex items-center justify-between mb-6">
                <h2 className="font-display text-lg font-bold text-foreground">Preview</h2>
                {generatedContent.length > 0 && (
                  <Button variant="outline" size="sm">
                    <Download className="w-4 h-4 mr-2" />
                    Download All
                  </Button>
                )}
              </div>

              {generatedContent.length > 0 ? (
                <div className="grid grid-cols-2 gap-4">
                  {generatedContent.map((content, index) => (
                    <div
                      key={index}
                      className="aspect-square rounded-xl bg-gradient-to-br from-primary/20 via-accent/20 to-primary/10 flex items-center justify-center relative group cursor-pointer overflow-hidden"
                    >
                      <div className="text-center p-4">
                        {contentType === 'video' ? (
                          <Video className="w-12 h-12 text-primary mx-auto mb-2" />
                        ) : (
                          <Image className="w-12 h-12 text-primary mx-auto mb-2" />
                        )}
                        <p className="text-sm text-muted-foreground">{content}</p>
                      </div>
                      <div className="absolute inset-0 bg-background/80 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2">
                        <Button size="sm" variant="outline">
                          <Download className="w-4 h-4" />
                        </Button>
                        <Button size="sm" variant="outline">
                          <Wand2 className="w-4 h-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
              ) : (
                <div className="aspect-video rounded-xl bg-secondary/50 flex flex-col items-center justify-center text-center p-8">
                  {contentType === 'video' ? (
                    <Video className="w-16 h-16 text-muted-foreground mb-4" />
                  ) : (
                    <Image className="w-16 h-16 text-muted-foreground mb-4" />
                  )}
                  <h3 className="font-medium text-foreground mb-2">No content yet</h3>
                  <p className="text-sm text-muted-foreground max-w-xs">
                    Enter a prompt and click generate to create your {contentType} content.
                  </p>
                </div>
              )}

              {/* Quick Actions */}
              {generatedContent.length > 0 && (
                <div className="mt-6 pt-6 border-t border-border">
                  <h3 className="text-sm font-medium text-foreground mb-3">Quick Actions</h3>
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
                  </div>
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
