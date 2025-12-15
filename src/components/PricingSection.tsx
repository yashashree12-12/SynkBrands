import { Button } from '@/components/ui/button';
import { Check, Plus, Minus } from 'lucide-react';
import { useState } from 'react';

const plans = [
  {
    name: 'Core',
    price: 19,
    originalPrice: 32,
    period: '/month',
    billedYearly: 230,
    discount: '40% off',
    features: [
      '1,300 Credits per month',
      '1 Brand',
      'No Auto Posting',
      'Publish to 10 Channels',
      '60 Competitor Analysis/mo',
      'Standard Generation Speed',
    ],
    addons: [
      { name: '1 Social Channel', price: 5 },
      { name: 'Extra Credits', price: 29 },
    ],
    popular: false,
  },
  {
    name: 'Rise',
    price: 40,
    originalPrice: 79,
    period: '/month',
    billedYearly: 474,
    discount: '50% off',
    features: [
      '3,200 Credits per month',
      'Upto 4 Brands',
      '2 Auto Post/day',
      'Publish to 20 Channels',
      '130 Competitor Analysis/mo',
      'Fast Generation Speed',
    ],
    addons: [
      { name: '40 Social Channels', price: 25 },
      { name: 'Extra Credits', price: 29 },
    ],
    popular: true,
  },
  {
    name: 'Enterprise+',
    price: 212,
    originalPrice: 249,
    period: '/month',
    billedYearly: 2540,
    discount: '15% off',
    features: [
      '10,000 Credits per month',
      'Unlimited Brands',
      '3 Auto Post/day',
      'Publish to 60 channels',
      '600 Competitor Analysis/mo',
      'Faster Generation Speed',
    ],
    addons: [
      { name: '400 Social Channels', price: 99 },
      { name: 'Extra Credits', price: 29 },
    ],
    popular: false,
  },
];

export const PricingSection = () => {
  const [addonCounts, setAddonCounts] = useState<Record<string, number>>({});

  const handleAddonChange = (planName: string, addonIndex: number, delta: number) => {
    const key = `${planName}-${addonIndex}`;
    setAddonCounts(prev => ({
      ...prev,
      [key]: Math.max(0, (prev[key] || 0) + delta),
    }));
  };

  return (
    <section className="py-20 bg-background" id="pricing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-foreground mb-4">
            A Plan for Every Need 🚀
          </h2>
          <p className="text-muted-foreground text-lg">
            Start with a Free trial and upgrade later
          </p>
          <div className="inline-flex items-center gap-2 mt-4 px-4 py-2 bg-green-100 text-green-700 rounded-full text-sm font-medium">
            Upto 40% Off on yearly plans
          </div>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`relative bg-card rounded-3xl p-8 shadow-lg border-2 ${
                plan.popular ? 'border-primary' : 'border-border'
              } card-hover`}
            >
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <span className="bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-sm font-semibold">
                    Most Popular
                  </span>
                </div>
              )}

              <div className="text-center mb-8">
                <h3 className="font-display text-2xl font-bold text-foreground mb-4">
                  {plan.name}
                </h3>
                <div className="flex items-baseline justify-center gap-2">
                  <span className="text-5xl font-display font-extrabold text-foreground">
                    ${plan.price}
                  </span>
                  <span className="text-lg text-muted-foreground line-through">
                    ${plan.originalPrice}
                  </span>
                  <span className="text-muted-foreground">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">
                  ${plan.billedYearly} Billed Yearly
                </p>
                <span className="inline-block mt-2 px-3 py-1 bg-green-100 text-green-700 rounded-full text-xs font-semibold">
                  {plan.discount}
                </span>
              </div>

              <Button
                variant={plan.popular ? 'hero' : 'outline'}
                className="w-full mb-8"
                size="lg"
              >
                Start for free
              </Button>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Add-ons */}
              <div className="border-t border-border pt-6">
                <p className="text-sm font-semibold text-foreground mb-4">Add-ons</p>
                {plan.addons.map((addon, index) => {
                  const key = `${plan.name}-${index}`;
                  const count = addonCounts[key] || 0;
                  return (
                    <div key={addon.name} className="flex items-center justify-between py-2">
                      <div>
                        <p className="text-sm text-foreground">{addon.name}</p>
                        <p className="text-xs text-muted-foreground">(${addon.price}/month)</p>
                      </div>
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => handleAddonChange(plan.name, index, -1)}
                          className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                        >
                          <Minus className="w-4 h-4" />
                        </button>
                        <span className="w-8 text-center font-medium">{count}</span>
                        <button
                          onClick={() => handleAddonChange(plan.name, index, 1)}
                          className="w-7 h-7 rounded-full bg-secondary flex items-center justify-center hover:bg-secondary/80 transition-colors"
                        >
                          <Plus className="w-4 h-4" />
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
