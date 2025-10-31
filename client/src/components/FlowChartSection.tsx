import { Card } from "@/components/ui/card";
import { Target, Lightbulb, TrendingUp } from "lucide-react";

const sections = [
  {
    icon: Target,
    title: "The Client's Goal",
    content: "Two business partners, who run a highly successful company, identified an ideal commercial property to purchase and operate their business from.\n\nTheir primary goal was not to use their personal or business cash flow for the purchase. Instead, they wanted to leverage their individual Self-Managed Super Funds (SMSFs) to acquire the asset. This presented a significant structural challenge: how can two separate SMSFs legally and effectively co-purchase a single property?"
  },
  {
    icon: Lightbulb,
    title: "Our Strategic Solution",
    content: "Our expertise was in guiding the clients on the right structure before the finance was even discussed. We collaborated closely with their accountant to develop a solution.\n\nThe answer was a Unit Trust. This is how we implemented it:\n\n• Establishment of a Unit Trust: A new Unit Trust was established specifically for the purpose of holding the asset.\n\n• SMSF Investment: The two business partners' individual SMSFs each invested in the trust, acquiring an equal share of the units.\n\n• The Purchase: This Unit Trust (now funded by the two SMSFs) became the legal purchasing entity that acquired the new commercial property.\n\nWith this compliant and clear structure in place, we were able to facilitate the lending required for the Unit Trust to complete the transaction."
  },
  {
    icon: TrendingUp,
    title: "The Tangible Outcome for Our Client",
    content: "This strategy successfully aligned the partners' business and personal wealth goals.\n\n• Super-Funded Acquisition: The partners successfully used their superannuation funds to purchase their business premises, a move that would have been blocked without the correct structure.\n\n• Long-Term Business Stability: Their operating business is now secure in its own premises, insulating it from rent increases and providing a stable platform for the future.\n\n• A Valuable Growth Asset: Both partners' SMSFs now hold a significant and valuable commercial property, diversifying their retirement savings and positioning them for long-term capital growth."
  }
];

export default function FlowChartSection() {
  return (
    <section id="flow-chart" className="py-16 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto px-6 md:px-12">
        <div className="space-y-8">
          {sections.map((section, index) => {
            const Icon = section.icon;
            return (
              <Card 
                key={index}
                className="p-8 md:p-10"
                data-testid={`card-section-${index + 1}`}
              >
                <div className="flex items-start gap-6">
                  <div className="flex-shrink-0">
                    <div className="h-12 w-12 rounded-md bg-primary/10 flex items-center justify-center">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 
                      className="font-serif text-2xl md:text-3xl font-bold text-foreground mb-4"
                      data-testid={`text-section-title-${index + 1}`}
                    >
                      {section.title}
                    </h2>
                    <div 
                      className="text-muted-foreground text-base md:text-lg leading-relaxed whitespace-pre-line"
                      data-testid={`text-section-content-${index + 1}`}
                    >
                      {section.content}
                    </div>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
}
