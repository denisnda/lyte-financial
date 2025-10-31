import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Building2, Check } from "lucide-react";
import { useLocation } from "wouter";
import { useToast } from "@/hooks/use-toast";

const lendingOptions = [
  "I need lending to buy a new business",
  "I need lending to buy an additional business",
  "I want to purchase an owner occupied commercial property for my business",
  "I need working capital or asset finance for new vehicles or equipment"
];

export default function Contact() {
  const [, setLocation] = useLocation();
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    lendingType: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.phone || !formData.email || !formData.lendingType) {
      toast({
        title: "Missing Information",
        description: "Please fill in all fields and select a lending option.",
        variant: "destructive"
      });
      return;
    }

    console.log('Form submitted:', formData);
    
    toast({
      title: "Thank You!",
      description: "We've received your inquiry and will be in touch soon.",
    });

    setTimeout(() => {
      setLocation('/');
    }, 2000);
  };

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-primary text-primary-foreground">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex items-center justify-between h-16">
            <button 
              onClick={() => setLocation('/')}
              className="flex items-center gap-3 hover-elevate active-elevate-2 px-3 py-2 rounded-md"
              data-testid="button-back-home"
            >
              <Building2 className="h-8 w-8" />
              <span className="font-serif text-xl font-semibold">LYTE FINANCIAL</span>
            </button>
          </div>
        </div>
      </header>

      <main className="py-16 md:py-24">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-12">
            <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4" data-testid="text-contact-title">
              Start Your Funding Journey
            </h1>
            <p className="text-muted-foreground text-lg">
              Tell us about your lending needs and we'll get in touch
            </p>
          </div>

          <Card className="p-8 md:p-10">
            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div>
                  <Label htmlFor="name" className="text-base font-medium mb-2 block">
                    Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="text-base"
                    data-testid="input-name"
                  />
                </div>

                <div>
                  <Label htmlFor="phone" className="text-base font-medium mb-2 block">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="text-base"
                    data-testid="input-phone"
                  />
                </div>

                <div>
                  <Label htmlFor="email" className="text-base font-medium mb-2 block">
                    Email *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="your.email@example.com"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="text-base"
                    data-testid="input-email"
                  />
                </div>
              </div>

              <div>
                <Label className="text-base font-medium mb-4 block">
                  What type of lending do you need? *
                </Label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {lendingOptions.map((option, index) => (
                    <button
                      key={index}
                      type="button"
                      onClick={() => setFormData({ ...formData, lendingType: option })}
                      className={`p-4 rounded-md border-2 text-left transition-all hover-elevate active-elevate-2 ${
                        formData.lendingType === option
                          ? 'border-primary bg-primary/5'
                          : 'border-border bg-card'
                      }`}
                      data-testid={`button-option-${index + 1}`}
                    >
                      <div className="flex items-start gap-3">
                        <div className={`flex-shrink-0 mt-0.5 h-5 w-5 rounded-sm border-2 flex items-center justify-center ${
                          formData.lendingType === option
                            ? 'border-primary bg-primary'
                            : 'border-muted-foreground/30'
                        }`}>
                          {formData.lendingType === option && (
                            <Check className="h-3 w-3 text-primary-foreground" />
                          )}
                        </div>
                        <span className="text-sm md:text-base font-medium leading-snug">
                          {option}
                        </span>
                      </div>
                    </button>
                  ))}
                </div>
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full text-base"
                data-testid="button-submit"
              >
                Submit
              </Button>
            </form>
          </Card>
        </div>
      </main>
    </div>
  );
}
