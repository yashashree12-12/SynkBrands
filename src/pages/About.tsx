import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Navbar } from '@/components/Navbar';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Users, Target, Zap, Globe, Award, Heart, Rocket, UserCircle, Code, Palette, Megaphone, DollarSign } from 'lucide-react';

const teamMembers = [
  { name: 'Alex Chen', role: 'CEO & Founder', Icon: UserCircle },
  { name: 'Sarah Johnson', role: 'CTO', Icon: Code },
  { name: 'Michael Park', role: 'Head of AI', Icon: Zap },
  { name: 'Emily Davis', role: 'Head of Design', Icon: Palette },
  { name: 'David Kim', role: 'Head of Marketing', Icon: Megaphone },
  { name: 'Lisa Wang', role: 'Head of Sales', Icon: DollarSign },
];

const values = [
  { icon: Zap, title: 'Innovation', description: 'We push the boundaries of AI to create tools that transform how brands create content.' },
  { icon: Users, title: 'Customer First', description: 'Every feature we build is designed with our users needs at the center.' },
  { icon: Target, title: 'Excellence', description: 'We strive for excellence in everything we do, from code to customer support.' },
  { icon: Globe, title: 'Global Impact', description: 'We help brands worldwide reach their audiences with compelling content.' },
  { icon: Award, title: 'Quality', description: 'We never compromise on the quality of our AI-generated content.' },
  { icon: Heart, title: 'Passion', description: 'We are passionate about helping brands succeed in the digital age.' },
];

const About = () => {
  return (
    <>
      <Helmet>
        <title>About Us - SynkBrands | AI-Powered Content Creation</title>
        <meta name="description" content="Learn about SynkBrands, the AI-powered platform revolutionizing how brands create social media content, ads, and videos." />
      </Helmet>
      
      <Navbar />
      
      <main className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="relative py-24 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent" />
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="text-center max-w-4xl mx-auto animate-fade-in">
              <h1 className="font-display text-4xl md:text-6xl font-bold text-foreground mb-6">
                Empowering Brands with <span className="text-gradient">AI Innovation</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                We're on a mission to democratize content creation, making professional-grade marketing accessible to businesses of all sizes through the power of artificial intelligence.
              </p>
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="animate-fade-in">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                  Our Story
                </h2>
                <p className="text-muted-foreground mb-4">
                  SynkBrands was founded in 2023 with a simple yet powerful vision: to make professional content creation accessible to everyone. We saw businesses struggling to keep up with the demands of social media marketing while maintaining quality and consistency.
                </p>
                <p className="text-muted-foreground mb-4">
                  Our team of AI researchers, designers, and marketing experts came together to build a platform that combines cutting-edge artificial intelligence with intuitive design. The result is a tool that can generate stunning ads, videos, and social media content in minutes.
                </p>
                <p className="text-muted-foreground">
                  Today, we serve over 500,000 brands worldwide, from small businesses to Fortune 500 companies, helping them create millions of pieces of content every month.
                </p>
              </div>
              <div className="relative animate-scale-in">
                <div className="aspect-video rounded-2xl bg-gradient-to-br from-primary via-accent to-primary/50 flex items-center justify-center shadow-2xl">
                  <div className="w-24 h-24 rounded-2xl bg-white/20 backdrop-blur-sm flex items-center justify-center">
                    <Rocket className="w-12 h-12 text-white" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do at SynkBrands.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {values.map((value) => (
                <div key={value.title} className="p-6 rounded-2xl bg-card border border-border hover:border-primary/50 transition-all hover-lift group">
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground mb-2">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-secondary/30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">
                Meet Our Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The passionate people behind SynkBrands.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {teamMembers.map((member) => (
                <div key={member.name} className="text-center p-6 rounded-2xl bg-card border border-border hover-lift">
                  <div className="w-24 h-24 rounded-full bg-gradient-to-br from-primary to-accent mx-auto mb-4 flex items-center justify-center">
                    <member.Icon className="w-12 h-12 text-white" />
                  </div>
                  <h3 className="font-display text-xl font-bold text-foreground">{member.name}</h3>
                  <p className="text-muted-foreground">{member.role}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
              Join Our Journey
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Be part of the AI content creation revolution.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link to="/create">
                <Button variant="hero" size="lg" className="hover-lift">Get Started Free</Button>
              </Link>
              <Button variant="outline" size="lg">View Careers</Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
};

export default About;
