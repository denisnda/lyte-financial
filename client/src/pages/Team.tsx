import Header from "@/components/Header";
import { MapPin, Phone, Mail, Clock, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import tonyPhoto from "@assets/image_1764038248473.png";
import jarredPhoto from "@assets/Jacob Isla_1764038297206.jpg";
import mathewPhoto from "@assets/Matts pic_1764038338581.png";
import logoImage from "@assets/amended final logo_1763958071951.jpg";

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative py-16 md:py-24 overflow-hidden" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h1 
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
              data-testid="text-team-title"
            >
              Meet Our Team
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Experienced professionals dedicated to helping you achieve your financial goals
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card rounded-lg overflow-hidden border border-border shadow-lg" data-testid="card-team-tony">
              <div className="h-80 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
                <img 
                  src={tonyPhoto}
                  alt="Tony Ly - Founder / Director"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 15%' }}
                  data-testid="img-tony-photo"
                />
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-1">Tony Ly</h2>
                  <p className="text-primary/80 font-medium">Founder / Director</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Tony founded Lyte Financial with a vision to deliver tailored lending solutions that go beyond standard banking. With extensive expertise across business acquisitions, commercial property, residential lending, and SMSF structures, Tony brings a strategic approach to every client engagement. His ability to navigate complex transactions and structure multi-layered finance solutions has helped countless clients achieve their business and property ownership goals.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border border-border shadow-lg" data-testid="card-team-jarred">
              <div className="h-80 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
                <img 
                  src={jarredPhoto}
                  alt="Jarred Aranza - Operations Manager"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 15%' }}
                  data-testid="img-jarred-photo"
                />
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-1">Jarred Aranza</h2>
                  <p className="text-primary/80 font-medium">Operations Manager</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Jarred is the operational backbone of Lyte Financial, ensuring every client application moves smoothly from initial consultation through to settlement. With a keen eye for detail and exceptional organisational skills, he manages the critical documentation, lender communications, and compliance requirements that underpin successful lending outcomes. Jarred's commitment to client service excellence ensures a seamless experience at every stage.
                </p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border border-border shadow-lg" data-testid="card-team-mathew">
              <div className="h-80 overflow-hidden bg-gradient-to-b from-gray-100 to-gray-200">
                <img 
                  src={mathewPhoto}
                  alt="Mathew Hall - Advisory Chairman"
                  className="w-full h-full object-cover"
                  style={{ objectPosition: 'center 10%' }}
                  data-testid="img-mathew-photo"
                />
              </div>
              <div className="p-6">
                <div className="text-center mb-4">
                  <h2 className="font-serif text-2xl font-bold text-primary mb-1">Mathew Hall</h2>
                  <p className="text-primary/80 font-medium">Advisory Chairman</p>
                </div>
                <p className="text-muted-foreground text-sm leading-relaxed">
                  Mathew brings over 25 years of senior leadership experience in banking and finance to his role as Advisory Chairman. Having held executive positions at major financial institutions, he provides invaluable strategic guidance and industry insight to Lyte Financial. Mathew's deep understanding of lending markets, regulatory frameworks, and institutional relationships strengthens the firm's capability to deliver sophisticated finance solutions for complex scenarios.
                </p>
              </div>
            </div>
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
                <span>3/26/848 Sussex St, Sydney, NSW 2000</span>
              </div>
              
              <div className="flex flex-col items-center md:items-start gap-1">
                <div className="flex items-center gap-2">
                  <Phone className="h-4 w-4 flex-shrink-0" />
                  <span>0290 993 613</span>
                </div>
                <div className="flex items-center gap-2">
                  <Mail className="h-4 w-4 flex-shrink-0" />
                  <span>admin@lytefinancial.com.au</span>
                </div>
              </div>
              
              <div className="flex items-start gap-2">
                <Clock className="h-4 w-4 flex-shrink-0 mt-0.5" />
                <div className="text-center md:text-left">
                  <p><span className="text-primary-foreground/80">Mon - Fri:</span> 8:00 AM - 5:00 PM</p>
                  <p><span className="text-primary-foreground/80">Sat:</span> 8:00 AM - 8:00 PM</p>
                  <p><span className="text-primary-foreground/80">Sun:</span> Closed</p>
                </div>
              </div>
            </div>
            
            <Button 
              variant="outline"
              onClick={() => window.open('https://calendly.com/tony-lytefinancial/30min?month=2025-11', '_blank')}
              className="border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-primary"
              data-testid="button-schedule-meeting"
            >
              Schedule a Meeting
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
}
