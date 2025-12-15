import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Calendar, Clock, User, ArrowRight } from 'lucide-react';

const featuredPost = {
  id: 1,
  title: 'The Future of AI in Content Marketing: 2024 Trends',
  excerpt: 'Discover how artificial intelligence is revolutionizing content marketing and what brands need to know to stay ahead of the competition.',
  image: '🎯',
  category: 'AI & Marketing',
  author: 'Sarah Johnson',
  date: 'Dec 10, 2024',
  readTime: '8 min read',
};

const blogPosts = [
  {
    id: 2,
    title: 'How to Create Viral Social Media Content with AI',
    excerpt: 'Learn the secrets behind creating engaging social media content that captures attention and drives engagement.',
    image: '📱',
    category: 'Social Media',
    author: 'Michael Park',
    date: 'Dec 8, 2024',
    readTime: '5 min read',
  },
  {
    id: 3,
    title: '10 Best Practices for AI-Generated Product Photography',
    excerpt: 'Transform your e-commerce with stunning AI-generated product images that convert browsers into buyers.',
    image: '📸',
    category: 'E-commerce',
    author: 'Emily Davis',
    date: 'Dec 5, 2024',
    readTime: '6 min read',
  },
  {
    id: 4,
    title: 'Video Ads That Convert: A Complete Guide',
    excerpt: 'Master the art of creating video advertisements that capture attention and drive sales.',
    image: '🎬',
    category: 'Video Marketing',
    author: 'David Kim',
    date: 'Dec 3, 2024',
    readTime: '7 min read',
  },
  {
    id: 5,
    title: 'UGC vs Traditional Ads: Which Performs Better?',
    excerpt: 'An in-depth analysis of user-generated content versus traditional advertising and their impact on ROI.',
    image: '📊',
    category: 'Analytics',
    author: 'Lisa Wang',
    date: 'Nov 30, 2024',
    readTime: '5 min read',
  },
  {
    id: 6,
    title: 'Building a Consistent Brand Voice with AI',
    excerpt: 'How to maintain brand consistency across all your marketing channels using AI tools.',
    image: '🎨',
    category: 'Branding',
    author: 'Alex Chen',
    date: 'Nov 28, 2024',
    readTime: '6 min read',
  },
  {
    id: 7,
    title: 'The Psychology of Color in Digital Advertising',
    excerpt: 'Understanding how color choices impact consumer behavior and ad performance.',
    image: '🌈',
    category: 'Design',
    author: 'Emily Davis',
    date: 'Nov 25, 2024',
    readTime: '4 min read',
  },
];

const categories = ['All', 'AI & Marketing', 'Social Media', 'E-commerce', 'Video Marketing', 'Analytics', 'Branding', 'Design'];

const Blog = () => {
  return (
    <>
      <Helmet>
        <title>Blog - SynkBrands | AI Marketing Insights & Tips</title>
        <meta name="description" content="Explore the latest insights on AI-powered content creation, social media marketing, and digital advertising strategies from the SynkBrands team." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                SynkBrands <span className="text-gradient">Blog</span>
              </h1>
              <p className="text-xl text-muted-foreground">
                Insights, tips, and strategies for AI-powered content creation and digital marketing success.
              </p>
            </div>
          </div>
        </section>

        {/* Categories */}
        <section className="py-8 border-b border-border">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category) => (
                <button
                  key={category}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
                    category === 'All'
                      ? 'bg-primary text-primary-foreground'
                      : 'bg-secondary text-muted-foreground hover:text-foreground'
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Post */}
        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <Link to={`/blog/${featuredPost.id}`} className="block group">
              <div className="grid lg:grid-cols-2 gap-8 items-center bg-card rounded-3xl border border-border p-4 lg:p-8 hover:border-primary/50 transition-colors">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary via-accent to-primary/50 flex items-center justify-center">
                  <span className="text-9xl">{featuredPost.image}</span>
                </div>
                <div className="p-4">
                  <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
                    {featuredPost.category}
                  </span>
                  <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                    {featuredPost.title}
                  </h2>
                  <p className="text-muted-foreground mb-6">{featuredPost.excerpt}</p>
                  <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <User className="w-4 h-4" />
                      {featuredPost.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      {featuredPost.date}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      {featuredPost.readTime}
                    </span>
                  </div>
                </div>
              </div>
            </Link>
          </div>
        </section>

        {/* Blog Grid */}
        <section className="py-16 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post) => (
                <Link
                  key={post.id}
                  to={`/blog/${post.id}`}
                  className="group bg-card rounded-2xl border border-border overflow-hidden hover:border-primary/50 transition-colors"
                >
                  <div className="aspect-video bg-gradient-to-br from-secondary to-secondary/50 flex items-center justify-center">
                    <span className="text-6xl">{post.image}</span>
                  </div>
                  <div className="p-6">
                    <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full mb-3">
                      {post.category}
                    </span>
                    <h3 className="font-display text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{post.excerpt}</p>
                    <div className="flex items-center justify-between text-xs text-muted-foreground">
                      <span>{post.date}</span>
                      <span>{post.readTime}</span>
                    </div>
                  </div>
                </Link>
              ))}
            </div>

            <div className="text-center mt-12">
              <Button variant="outline" size="lg">
                Load More Articles
                <ArrowRight className="w-4 h-4 ml-2" />
              </Button>
            </div>
          </div>
        </section>

        {/* Newsletter Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Subscribe to Our Newsletter
            </h2>
            <p className="text-muted-foreground mb-8">
              Get the latest AI marketing insights delivered to your inbox every week.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl bg-secondary border border-border focus:border-primary focus:outline-none"
              />
              <Button variant="hero" size="lg">Subscribe</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default Blog;
