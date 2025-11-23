import Header from "@/components/Header";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { useLocation } from "wouter";
import heroImage from "@assets/generated_images/Business_professionals_meeting_collaboration_1b42b8f6.png";

const stages = [
  {
    number: 1,
    title: "Initial Consultation",
    description: "We discuss your property goals, assess your financial position, and determine the best loan structure for your needs."
  },
  {
    number: 2,
    title: "Property Assessment",
    description: "We review the property details and evaluate the lending options available for your specific scenario."
  },
  {
    number: 3,
    title: "Loan Application Preparation",
    description: "We prepare a comprehensive loan application with all necessary documentation to present to lenders."
  },
  {
    number: 4,
    title: "Lender Negotiation",
    description: "We negotiate with lenders to secure the most competitive rates and favorable terms for your loan."
  },
  {
    number: 5,
    title: "Settlement Support",
    description: "We guide you through the settlement process and ensure a smooth transition to property ownership."
  }
];

export default function ResidentialProcess() {
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
            Your journey to residential property ownership starts here
          </h1>
          <Button 
            size="lg"
            onClick={() => setLocation('/contact')}
            className="bg-primary-foreground text-primary hover-elevate active-elevate-2 font-medium text-base px-8"
            data-testid="button-start-journey"
          >
            Start Your Journey
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
              Our Residential Lending Process
            </h2>
            <p 
              className="text-muted-foreground text-lg max-w-2xl mx-auto"
              data-testid="text-process-subtitle"
            >
              A streamlined approach to securing your home loan
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
