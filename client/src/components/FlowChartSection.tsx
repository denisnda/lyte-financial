import { Card } from "@/components/ui/card";
import { Target, Lightbulb, TrendingUp } from "lucide-react";

const sections = [
  {
    icon: Target,
    title: "The Client's Goal",
    content: "We were approached by a highly successful, established business that was rapidly outgrowing its current setup. The company was operating across two separate leased premises, which was inefficient and costly.\n\nTheir goal was to consolidate operations into a single, new, owner-occupied commercial property. However, they were concerned around the size of the deposit would drain their working capital needed for expansion."
  },
  {
    icon: Lightbulb,
    title: "Our Strategic Solution",
    content: "The client identified their ideal property, valued at $8.2 million.\n\nRecognising the outstanding financial strength of the applicant, their strong personal income, and the company's consistent profitability, we devised a solution beyond the standard 70% or 80% loan.\n\nWe negotiated and structured a 100% finance facility for the entire $8.2 million purchase price.\n\nThis was secured not against residential property, but against the business itself, using General Security Agreements (GSAs) over the trading entity. This structure was acceptable to the lender because we demonstrated the clear financial strength and serviceability of the client's business."
  },
  {
    icon: TrendingUp,
    title: "The Tangible Outcome for Our Client",
    content: "By securing 100% of the purchase price, we delivered a powerful strategic advantage:\n\n• Zero Cash Deposit: The client preserved 100% of their cash reserves. They did not have to tie up millions of dollars in a deposit.\n\n• Capital for Growth: This preserved cash was immediately allocated to facilitating their business expansion, including purchasing new equipment and boosting operational cash flow.\n\n• A Platform for the Future: Instead of just \"buying a building,\" our solution enabled the client to take a major leap forward, securing their long-term premises and funding their growth, all in one move.\n\nThis is a prime example of how we partner with clients to find solutions that match their ambition."
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
