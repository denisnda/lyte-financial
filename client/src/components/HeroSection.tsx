import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";
import heroImage from "@assets/generated_images/Engineering_workshop_manufacturing_facility_c59a6e79.png";

interface HeroSectionProps {
  onCtaClick?: () => void;
}

export default function HeroSection({ onCtaClick }: HeroSectionProps) {
  const [, setLocation] = useLocation();

  const handleStartJourney = () => {
    setLocation('/contact');
    onCtaClick?.();
  };

  return (
    <section className="relative h-[70vh] min-h-[500px] flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        data-testid="img-hero-background"
      />
      
      <div className="absolute inset-0 bg-gradient-to-b from-primary/90 via-primary/70 to-primary/50" />
      
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-white">
        <h1 
          className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight"
          data-testid="text-hero-title"
        >
          Case Study: Fuelling Growth with a 100% Financed $8.2M Premises
        </h1>
        <p 
          className="text-lg md:text-xl leading-relaxed max-w-4xl"
          data-testid="text-hero-subtitle"
        >
          We believe smart financing is about more than just securing a loan; it's about creating a platform for your business to grow. This case study demonstrates how we helped a client preserve vital capital while securing their ideal commercial property.
        </p>
      </div>
    </section>
  );
}
