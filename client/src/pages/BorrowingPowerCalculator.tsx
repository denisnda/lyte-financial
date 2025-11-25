import Header from "@/components/Header";
import { Calculator, MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import logoImage from "@assets/amended final logo_1763958071951.jpg";

export default function BorrowingPowerCalculator() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24 bg-primary">
        <div className="max-w-5xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center gap-3 mb-4">
              <Calculator className="h-12 w-12 text-primary-foreground" />
              <h1 
                className="font-serif text-4xl md:text-5xl font-bold text-primary-foreground"
                data-testid="text-calculator-title"
              >
                Loan Repayment Calculator
              </h1>
            </div>
            <p className="text-primary-foreground text-lg max-w-2xl mx-auto">
              Use our calculator to estimate your loan repayments and understand your borrowing capacity
            </p>
          </div>

          <div className="bg-card rounded-lg p-4 md:p-8 border border-border">
            <iframe 
              className="VisiCalcClass w-full"
              id="Loan_Repayment_Calculator" 
              src="https://www.visionabacus.net/Tools/B3/SuiteA/Z200/MFAA/Loan_Repayment_Calculator/BlueGrey" 
              frameBorder="0" 
              scrolling="no"
              style={{ minHeight: '800px', width: '100%' }}
              title="Loan Repayment Calculator"
              data-testid="iframe-loan-calculator"
            />
          </div>
        </div>
      </section>

      <footer className="bg-primary py-6">
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <div className="flex items-center gap-3">
              <img 
                src={logoImage} 
                alt="Lyte Financial" 
                className="h-12 w-auto"
                data-testid="img-footer-logo"
              />
            </div>
            
            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-8 text-primary-foreground text-sm">
              <div className="flex items-center gap-2">
                <MapPin className="h-4 w-4 flex-shrink-0" />
                <span>526/368 Sussex Street, Sydney, NSW, 2000</span>
              </div>
              
              <div className="flex flex-col items-center md:items-start gap-1">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>(02) 9099 3613</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>info@lytefinancial.com.au</span>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <div className="text-center md:text-left">
                  <p><span className="text-primary-foreground/80">Mon - Fri:</span> 8:00 AM - 6:00 PM</p>
                  <p><span className="text-primary-foreground/80">Sat:</span> 8:00 AM - 11:00 AM</p>
                  <p><span className="text-primary-foreground/80">Sun:</span> Closed</p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col items-center gap-2">
              <p className="font-semibold text-sm text-primary-foreground">Supporting Clients Australia Wide</p>
              <div className="flex gap-3">
                <a href="/contact">
                  <Button 
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    data-testid="button-enquire-now"
                  >
                    Enquire Now
                  </Button>
                </a>
                <a 
                  href="https://calendly.com/tony-lytefinancial/30min?month=2025-11" 
                  target="_blank" 
                  rel="noopener noreferrer"
                >
                  <Button 
                    className="bg-primary-foreground text-primary hover:bg-primary-foreground/90"
                    data-testid="button-book-meeting-footer"
                  >
                    Book A Meeting
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
