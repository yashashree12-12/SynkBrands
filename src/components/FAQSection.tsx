import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What are credits?',
    answer: 'For every generation, credits are utilized. Ad creative / Social image post costs 20 credits per image. Standard Video costs 3 credits per 10 seconds. Video with UGC Avatar costs 10 credits per 10 seconds. Editing an ad creative costs 5 credits per image.',
  },
  {
    question: 'Can I make Instagram and Facebook ads?',
    answer: 'Yes, you can make Facebook ad creatives, Instagram ads, video ads, and ads for all popular social media platforms.',
  },
  {
    question: 'Can I edit the ad templates?',
    answer: 'Yes, you can edit the generated ads and videos. You can also import your ad designs in SynkBrands.',
  },
  {
    question: 'Can I make ads in multiple languages?',
    answer: 'Yes, you can make ads in more than 19 languages. You can select input and output language while creating content. You can also use the app in different languages.',
  },
  {
    question: 'Which is the best ad generator?',
    answer: 'There are many AI ad generators in the market. SynkBrands is a true AI based ad maker as it gives you complete control over all layers and elements of the ad creative. It allows you to create all ad formats, resize them automatically, and integrates with all leading social media platforms.',
  },
  {
    question: 'Can I use SynkBrands for ad serving on ad networks?',
    answer: 'You can export the ad, videos in full HD 1080p at 60 FPs and upload them in your ad campaigns.',
  },
  {
    question: 'Can I create ad copies using SynkBrands?',
    answer: 'Yes, you can generate ad copy with our AI. You can choose to generate ad copy only with our AI chat feature.',
  },
  {
    question: 'Can I use my own ad templates?',
    answer: 'Yes, you can import your designs and templates in SynkBrands. You can also import custom social media templates.',
  },
];

export const FAQSection = () => {
  return (
    <section className="py-20 bg-secondary/30">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="font-display text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
          Frequently Asked Questions
        </h2>

        <Accordion type="single" collapsible className="space-y-4">
          {faqs.map((faq, index) => (
            <AccordionItem
              key={index}
              value={`item-${index}`}
              className="bg-card rounded-2xl border border-border px-6 shadow-sm"
            >
              <AccordionTrigger className="text-left font-display font-semibold text-foreground hover:no-underline py-5">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-5 leading-relaxed">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};
