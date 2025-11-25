import Header from "@/components/Header";
import teamPhoto from "@assets/team photos_1763878226393.jpg";
import jarredPhoto from "@assets/Jarred Photo_1764034795125.png";
import mathewPhoto from "@assets/Matts pic_1764035197577.png";

export default function Team() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="py-16 md:py-24" style={{ backgroundColor: '#f5f0e8' }}>
        <div className="max-w-7xl mx-auto px-6 md:px-12">
          <div className="text-center mb-16">
            <h1 
              className="font-serif text-4xl md:text-5xl lg:text-6xl font-bold text-primary mb-6"
              data-testid="text-team-title"
            >
              Meet Our Team
            </h1>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            <div className="bg-card rounded-lg overflow-hidden border border-border" data-testid="card-team-tony">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={teamPhoto}
                  alt="Tony Ly - Director"
                  className="w-full h-full object-cover object-left-top"
                  data-testid="img-tony-photo"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="font-serif text-2xl font-bold text-primary mb-2">Tony Ly</h2>
                <p className="text-muted-foreground">Director</p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border border-border" data-testid="card-team-jarred">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={jarredPhoto}
                  alt="Jarred Aranza - Finance Specialist"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-jarred-photo"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="font-serif text-2xl font-bold text-primary mb-2">Jarred Aranza</h2>
                <p className="text-muted-foreground">Finance Specialist</p>
              </div>
            </div>

            <div className="bg-card rounded-lg overflow-hidden border border-border" data-testid="card-team-mathew">
              <div className="aspect-[3/4] overflow-hidden">
                <img 
                  src={mathewPhoto}
                  alt="Mathew Hall - Advisory Chairman"
                  className="w-full h-full object-cover object-top"
                  data-testid="img-mathew-photo"
                />
              </div>
              <div className="p-6 text-center">
                <h2 className="font-serif text-2xl font-bold text-primary mb-2">Mathew Hall</h2>
                <p className="text-muted-foreground">Advisory Chairman</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
