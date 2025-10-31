import { Button } from "@/components/ui/button";
import { Building2, Calendar } from "lucide-react";
import { useLocation } from "wouter";

interface CTASectionProps {
  onBookConsultation?: () => void;
}

export default function CTASection({ onBookConsultation }: CTASectionProps) {
  const [, setLocation] = useLocation();

  const handleBooking = () => {
    setLocation('/contact');
    onBookConsultation?.();
  };

  return (
    <section className="py-20 md:py-28 bg-accent">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <div className="flex justify-center mb-8">
          <div className="bg-primary/10 p-6 rounded-full">
            <Building2 className="h-12 w-12 text-primary" />
          </div>
        </div>
        
        <h2 
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6"
          data-testid="text-cta-title"
        >
          Could This Be Your Story?
        </h2>
        
        <p 
          className="text-muted-foreground text-lg md:text-xl mb-10 max-w-2xl mx-auto"
          data-testid="text-cta-description"
        >
          Let's discuss how we can craft a bespoke financing solution that fuels your business growth.
        </p>
        
        <Button 
          size="lg"
          onClick={handleBooking}
          className="font-medium text-base px-8"
          data-testid="button-book-consultation"
        >
          <Calendar className="mr-2 h-5 w-5" />
          Get in Touch
        </Button>
      </div>
    </section>
  );
}
