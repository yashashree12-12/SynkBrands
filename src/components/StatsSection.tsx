import { TrendingUp, Clock, Globe, FileText } from 'lucide-react';

const stats = [
  { icon: TrendingUp, value: '1.5x', label: 'Increase in ROAS', color: 'text-green-500' },
  { icon: Clock, value: '75%', label: 'Reduction in Hours Spent', color: 'text-blue-500' },
  { icon: Globe, value: '500K+', label: 'Users Across Countries', color: 'text-purple-500' },
  { icon: FileText, value: '200M+', label: 'Ads Generated', color: 'text-orange-500' },
];

const trustedBrands = [
  'SEMrush', 'ICICI Bank', 'Hyatt', 'Indegene', 'Dentsu'
];

export const StatsSection = () => {
  return (
    <section className="py-16 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Stats Grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center group">
              <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-secondary mb-4 ${stat.color} group-hover:scale-110 transition-transform`}>
                <stat.icon className="w-7 h-7" />
              </div>
              <h3 className="font-display text-4xl lg:text-5xl font-extrabold text-foreground mb-2">
                {stat.value}
              </h3>
              <p className="text-muted-foreground font-medium">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Trusted by */}
        <div className="border-t border-border pt-12">
          <p className="text-center text-sm text-muted-foreground mb-8 font-medium">
            TRUSTED BY LEADING BRANDS
          </p>
          <div className="flex flex-wrap items-center justify-center gap-8 lg:gap-16">
            {trustedBrands.map((brand) => (
              <div
                key={brand}
                className="text-xl font-display font-bold text-muted-foreground/60 hover:text-foreground transition-colors"
              >
                {brand}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
