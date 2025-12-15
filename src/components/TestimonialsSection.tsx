import { Star } from 'lucide-react';

const testimonials = [
  {
    name: 'Daniel Reed',
    role: 'Ad Agency Owner',
    image: '👨‍💼',
    content: 'For anyone in advertising, this is a game changer. It saves me so much time. The Ads come out clean and has increased our speed. Fantastic for agencies looking to scale their creative output!',
  },
  {
    name: 'Tom Jenkins',
    role: 'eCommerce Store Owner',
    image: '👨‍💻',
    content: 'This is a hidden gem for any online shop! Links directly with my Shopify and I no longer worry about creating posts from scratch. Scheduling everything right from the app is a huge plus.',
  },
  {
    name: 'Carlos Rivera',
    role: 'Agency Owner',
    image: '👔',
    content: 'This has become a core part of our team. We can quickly generate multiple ads, A/B test them and get the best ROAS for our clients. Highly recommended.',
  },
  {
    name: 'Jason Lee',
    role: 'eCommerce Entrepreneur',
    image: '🧑‍💼',
    content: 'Making ads and posts for my small business used to be overwhelming, but this tool makes it so simple. The ads it generates using my product look great!',
  },
  {
    name: 'Olivia Martinez',
    role: 'Social Media Agency',
    image: '👩‍💼',
    content: 'As an Agency Owner, I needed a tool that could handle all my clients\' needs, and this one does it all. From ads to videos, everything looks amazing.',
  },
  {
    name: 'Isabella Collins',
    role: 'Digital Marketing Consultant',
    image: '👩‍💻',
    content: 'I\'ve tried a lot of tools, but this one is by far the most efficient. I can generate everything from carousel posts to full video ads. The voiceover feature is fantastic.',
  },
];

export const TestimonialsSection = () => {
  return (
    <section className="py-20 bg-secondary/30 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
            ))}
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            4.9/5 from 3000+ Reviews
          </h2>
          <p className="text-muted-foreground mt-2">Check our user success stories!</p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div
              key={testimonial.name}
              className="bg-card rounded-2xl p-6 shadow-lg border border-border card-hover"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center gap-4 mb-4">
                <div className="w-14 h-14 rounded-full bg-gradient-to-br from-purple to-pink flex items-center justify-center text-2xl">
                  {testimonial.image}
                </div>
                <div>
                  <h4 className="font-display font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                "{testimonial.content}"
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
