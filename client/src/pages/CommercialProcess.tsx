import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import heroImage from "@assets/generated_images/Business_professionals_meeting_collaboration_1b42b8f6.png";

const stages = [
  {
    number: 1,
    title: "Commercial Assessment",
    description: "We evaluate your commercial property goals and review your business financials to determine the best financing strategy."
  },
  {
    number: 2,
    title: "Property Evaluation",
    description: "We analyze the commercial property's value, rental income potential, and overall investment viability."
  },
  {
    number: 3,
    title: "Structuring the Deal",
    description: "We design the optimal loan structure considering tax efficiency, cash flow, and long-term business objectives."
  },
  {
    number: 4,
    title: "Lender Presentation",
    description: "We prepare and present a comprehensive credit proposal to secure competitive commercial lending terms."
  },
  {
    number: 5,
    title: "Settlement and Beyond",
    description: "We manage the settlement process and provide ongoing support for your commercial property investment."
  }
];

export default function CommercialProcess() {
  const [, setLocation] = useLocation();

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative h-[60vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          data-testid="img-hero-background"
        />
        
        <div className="absolute inset-0 bg-primary/80" />
        
        <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
          <h1 
            className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-8 leading-tight"
            data-testid="text-hero-title"
          >
            Secure your commercial property investment with expert guidance
          </h1>
          <Button 
            size="lg"
            onClick={() => setLocation('/contact')}
            className="bg-primary-foreground text-primary hover-elevate active-elevate-2 font-medium text-base px-8"
            data-testid="button-start-journey"
          >
            Get Started
          </Button>
        </div>
      </section>

      <section className="py-16 md:py-24 bg-accent">
        <div className="max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h2 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4"
              data-testid="text-process-title"
            >
              Our Commercial Property Lending Process
            </h2>
            <p 
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
              data-testid="text-process-subtitle"
            >
              Expert guidance for commercial property financing
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {stages.map((stage) => (
              <Card 
                key={stage.number}
                className="p-8 bg-primary text-primary-foreground"
                data-testid={`card-stage-${stage.number}`}
              >
                <div className="mb-4">
                  <span className="text-sm font-medium opacity-80">Stage {stage.number}</span>
                </div>
                <h3 className="font-serif text-2xl font-bold mb-4">
                  {stage.title}
                </h3>
                <p className="text-sm leading-relaxed opacity-90">
                  {stage.description}
                </p>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
