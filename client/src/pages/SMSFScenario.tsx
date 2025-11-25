import { useState } from "react";
import Header from "@/components/Header";
import { Target, Lightbulb, TrendingUp, MapPin, Phone, Mail, Clock, ArrowRight, AlertTriangle } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroImage from "@assets/image_1764037219843.png";
import constructionImage from '@assets/stock_images/construction_site_wo_d72f9b16.jpg';
import logoImage from "@assets/amended final logo_1763958071951.jpg";

export default function SMSFScenario() {
  const [activeCase, setActiveCase] = useState<"partners" | "personal">("partners");

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${heroImage})` }}
          data-testid="img-hero-background"
        />
        
        <div className="absolute inset-0 bg-primary/70" />
        
        <div className="relative z-10 w-full px-6 md:px-12 text-center">
          <div className="max-w-4xl mx-auto">
            <h1 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold mb-6 leading-tight text-white"
              data-testid="text-hero-title"
            >
              SMSF Lending Case Studies
            </h1>
            <p 
              className="text-lg md:text-xl font-medium leading-relaxed max-w-3xl mx-auto text-white"
              data-testid="text-hero-description"
            >
              Using your super to invest in property is a powerful wealth-building strategy, but it requires expert guidance. Explore our case studies to see how we've helped clients navigate complex SMSF lending scenarios.
            </p>
          </div>
        </div>
      </section>

      <section className="py-8 md:py-12 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-6 md:px-12">
          <div className="text-center mb-6">
            <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary mb-2">
              Select a Case Study
            </h2>
            <p className="text-muted-foreground">
              Choose a scenario to learn more about our SMSF lending solutions
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              onClick={() => setActiveCase("partners")}
              className={`text-base md:text-lg px-6 py-6 h-auto transition-all ${
                activeCase === "partners"
                  ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
                  : "bg-card text-primary border-2 border-primary hover:bg-primary/10"
              }`}
              data-testid="button-case-partners"
            >
              SMSF Business Premises Purchase
            </Button>
            <Button
              onClick={() => setActiveCase("personal")}
              className={`text-base md:text-lg px-6 py-6 h-auto transition-all ${
                activeCase === "personal"
                  ? "bg-primary text-primary-foreground ring-2 ring-primary ring-offset-2"
                  : "bg-card text-primary border-2 border-primary hover:bg-primary/10"
              }`}
              data-testid="button-case-personal"
            >
              Personal Funds to SMSF Loan
            </Button>
          </div>
        </div>
      </section>

      {activeCase === "partners" && (
        <>
          <section className="py-12 md:py-16 bg-accent">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
              <div className="text-center mb-8">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Case Study 1
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">
                  SMSF Business Premises Purchase
                </h2>
              </div>
              
              <div className="bg-card p-8 md:p-12 rounded-lg border border-border">
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 
                      className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6"
                      data-testid="text-goal-title-1"
                    >
                      The Client's Goal & Challenge
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-6 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <div>
                    <p className="mb-4" data-testid="text-goal-description-1">
                      Two business partners identified a prime commercial property ideal for their business operations. Their goal was to:
                    </p>
                    <ul className="pl-6 space-y-2 mb-4">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Purchase the property through their SMSFs — not personally</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Avoid using personal cash or business cash flow</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Secure long-term business stability by occupying a premises they indirectly own</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Generate rental income back into their super funds</span>
                      </li>
                    </ul>
                    <p>
                      However, each partner held their own SMSF, and SMSFs cannot simply "co-own" property directly unless structured correctly.
                    </p>
                  </div>

                  <div>
                    <p className="font-semibold text-primary mb-3">The Challenge:</p>
                    <p className="pl-6 mb-3">Two separate SMSFs face strict rules around:</p>
                    <ul className="pl-12 space-y-2 mb-4">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Joint property ownership</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Related-party leases</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Arm's-length transactions</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>SMSF borrowing structures (LRBAs)</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Asset segregation</span>
                      </li>
                    </ul>
                    <p className="pl-6 mb-3">
                      <strong className="text-primary">The primary challenge:</strong> How can two separate SMSFs legally and efficiently co-purchase one commercial property that their business will lease?
                    </p>
                    <p className="pl-6 mb-3">
                      A direct co-ownership structure was not compliant or lender-friendly. A structure needed to:
                    </p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Allow equal ownership</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Enable SMSF borrowing</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Support a commercial lease to their own trading business</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Remain fully compliant with SIS legislation</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Be acceptable to lenders for LRBA lending</span>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="relative py-16 md:py-24 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${constructionImage})` }}
            />
            <div className="absolute inset-0 bg-background/90" />
            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
              <div className="bg-card/95 p-8 md:p-12 rounded-lg border border-border backdrop-blur-sm">
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 
                      className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6"
                      data-testid="text-solution-title-1"
                    >
                      Our Strategic Solution
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-8 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <div data-testid="text-solution-1-step-1">
                    <p className="font-semibold text-primary mb-3">1. Establishing a Unit Trust</p>
                    <p className="pl-6">
                      We worked with their accountant to establish a special-purpose Unit Trust designed solely to hold the commercial property. This trust became the legal purchasing entity, simplifying ownership and lending.
                    </p>
                  </div>
                  
                  <div data-testid="text-solution-1-step-2">
                    <p className="font-semibold text-primary mb-3">2. Each SMSF Invests Into the Unit Trust</p>
                    <p className="pl-6 mb-3">
                      Each partner's SMSF purchased 50% of the units in the trust. This ensured:
                    </p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Equal ownership</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Clear reporting</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>A compliant investment</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>A structure lenders could work with</span>
                      </li>
                    </ul>
                  </div>
                  
                  <div data-testid="text-solution-1-step-3">
                    <p className="font-semibold text-primary mb-3">3. The Unit Trust Purchases the Property</p>
                    <p className="pl-6">
                      With funds from both SMSFs and LRBA lending support, the Unit Trust acquired the commercial property. Title was held by the trust, not the individuals or their business.
                    </p>
                  </div>

                  <div data-testid="text-solution-1-step-4">
                    <p className="font-semibold text-primary mb-3">4. Commercial Leaseback to the Trading Business</p>
                    <p className="pl-6 mb-3">
                      Once settled, the client's trading business moved into the property as the tenant. We ensured the lease was structured:
                    </p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>At market rent</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>On arm's-length terms</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>With SMSF compliance in mind</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Suitable for audit and long-term planning</span>
                      </li>
                    </ul>
                    <p className="pl-6 mt-3">
                      This ensured the SMSFs received regular rental income while the business secured a stable premises.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-accent">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
              <div className="bg-card p-8 md:p-12 rounded-lg border border-border">
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 
                      className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6"
                      data-testid="text-outcome-title-1"
                    >
                      The Positive Outcome
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <ul className="space-y-4 pl-6">
                    <li data-testid="text-outcome-1-1">
                      <span className="font-semibold text-primary">Two SMSFs Successfully Co-Purchased:</span> A commercial property using a compliant and lender-approved Unit Trust structure.
                    </li>
                    <li data-testid="text-outcome-1-2">
                      <span className="font-semibold text-primary">No Personal Contributions Required:</span> No personal contributions or business cash were required to fund the property.
                    </li>
                    <li data-testid="text-outcome-1-3">
                      <span className="font-semibold text-primary">Business Secured Long-Term Premises:</span> Business secured a high-quality premises with long-term stability.
                    </li>
                    <li data-testid="text-outcome-1-4">
                      <span className="font-semibold text-primary">Rental Income to SMSFs:</span> Market-rate rent now flows into both SMSFs, improving retirement wealth.
                    </li>
                    <li data-testid="text-outcome-1-5">
                      <span className="font-semibold text-primary">Scalable, Future-Proof Structure:</span> A scalable, future-proof structure for future SMSF investments.
                    </li>
                    <li data-testid="text-outcome-1-6">
                      <span className="font-semibold text-primary">Full Compliance:</span> Full compliance with SIS Act, ATO audit requirements, and LRBA lending rules.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      {activeCase === "personal" && (
        <>
          <section className="py-12 md:py-16 bg-accent">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
              <div className="text-center mb-8">
                <span className="inline-block bg-primary/10 text-primary px-4 py-2 rounded-full text-sm font-semibold mb-4">
                  Case Study 2
                </span>
                <h2 className="font-serif text-2xl md:text-3xl font-bold text-primary">
                  Structuring an SMSF Loan from Personal Funds
                </h2>
              </div>
              
              <div className="bg-card p-8 md:p-12 rounded-lg border border-border mb-8">
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                    <Target className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 
                      className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6"
                      data-testid="text-goal-title-2"
                    >
                      The Client's Goal
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4 text-primary text-base md:text-lg leading-relaxed">
                  <p data-testid="text-goal-description-2-1">
                    The Client wanted to purchase an investment property through their Self-Managed Super Fund (SMSF) as part of a long-term wealth-building strategy.
                  </p>
                  
                  <p data-testid="text-goal-description-2-2">
                    A pre-approval for an SMSF loan had already been secured under their PAYG income, and the Client was ready to proceed with the purchase.
                  </p>
                </div>
              </div>

              <div className="bg-card p-8 md:p-12 rounded-lg border border-border">
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-destructive/10 p-4 rounded-full flex-shrink-0">
                    <AlertTriangle className="h-8 w-8 text-destructive" />
                  </div>
                  <div>
                    <h3 
                      className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6"
                      data-testid="text-challenge-title"
                    >
                      The Challenge
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4 text-primary text-base md:text-lg leading-relaxed">
                  <p data-testid="text-challenge-1">
                    During the transaction, the Client transitioned from PAYG employment to self-employment.
                  </p>
                  
                  <p className="font-semibold" data-testid="text-challenge-2">
                    This created an immediate problem:
                  </p>
                  
                  <ul className="space-y-3 pl-6">
                    <li className="flex gap-3">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span>Lenders generally require two years of financials for self-employed borrowers, even for SMSF loans.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span>As a result, the lender cancelled the pre-approval, midway through the purchasing process.</span>
                    </li>
                    <li className="flex gap-3">
                      <span className="text-primary font-bold flex-shrink-0">•</span>
                      <span>Although the SMSF held some cash, it did not have enough to complete the full purchase price on its own.</span>
                    </li>
                  </ul>
                  
                  <p className="font-semibold text-destructive" data-testid="text-challenge-3">
                    Without a solution, the Client risked losing the investment opportunity.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="relative py-16 md:py-24 overflow-hidden">
            <div 
              className="absolute inset-0 bg-cover bg-center"
              style={{ backgroundImage: `url(${constructionImage})` }}
            />
            <div className="absolute inset-0 bg-background/90" />
            <div className="relative z-10 max-w-5xl mx-auto px-6 md:px-12">
              <div className="bg-card/95 p-8 md:p-12 rounded-lg border border-border backdrop-blur-sm">
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                    <Lightbulb className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 
                      className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6"
                      data-testid="text-solution-title-2"
                    >
                      Our Strategic Solution
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-6 text-primary text-base md:text-lg leading-relaxed">
                  <div data-testid="text-solution-2-step-1">
                    <p className="font-semibold text-primary mb-3">1. Personal Loan to the SMSF to Complete the Purchase</p>
                    <p className="pl-6">
                      We structured a compliant related-party loan, allowing the Client to lend money from their personal funds to the SMSF so it could complete the purchase in cash.
                    </p>
                    <p className="pl-6 mt-2">
                      This preserved the transaction and met all SMSF regulatory obligations.
                    </p>
                  </div>
                  
                  <div data-testid="text-solution-2-step-2">
                    <p className="font-semibold text-primary mb-3">2. Refinancing the SMSF Property After 12 Months</p>
                    <p className="pl-6 mb-2">
                      Once the Client had sufficient trading history as a self-employed individual, we:
                    </p>
                    <ul className="pl-12 space-y-2">
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Re-engaged SMSF lenders</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Secured a standard SMSF property loan</span>
                      </li>
                      <li className="flex gap-3">
                        <span className="text-primary font-bold flex-shrink-0">•</span>
                        <span>Rolled the related-party loan into the new SMSF loan</span>
                      </li>
                    </ul>
                    <p className="pl-6 mt-3">
                      This returned the Client's personal funds while keeping the structure fully compliant.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-16 md:py-24 bg-accent">
            <div className="max-w-5xl mx-auto px-6 md:px-12">
              <div className="bg-card p-8 md:p-12 rounded-lg border border-border">
                <div className="flex items-start gap-6 mb-6">
                  <div className="bg-primary/10 p-4 rounded-full flex-shrink-0">
                    <TrendingUp className="h-8 w-8 text-primary" />
                  </div>
                  <div>
                    <h3 
                      className="font-serif text-2xl md:text-3xl font-bold text-primary mb-6"
                      data-testid="text-outcome-title-2"
                    >
                      The Positive Outcome
                    </h3>
                  </div>
                </div>
                
                <div className="space-y-4 text-muted-foreground text-base md:text-lg leading-relaxed">
                  <p className="font-medium text-primary" data-testid="text-outcome-intro-2">
                    A well-structured SMSF acquisition with full compliance and long-term benefits:
                  </p>
                  
                  <ul className="space-y-4 pl-6">
                    <li data-testid="text-outcome-2-1">
                      <span className="font-semibold text-primary">Successful Property Acquisition:</span> The SMSF completed the purchase on time, despite the cancelled pre-approval.
                    </li>
                    <li data-testid="text-outcome-2-2">
                      <span className="font-semibold text-primary">Personal Funds Returned:</span> The refinance allowed the Client to recover the full amount initially lent to the SMSF.
                    </li>
                    <li data-testid="text-outcome-2-3">
                      <span className="font-semibold text-primary">Compliance Assurance:</span> The related-party loan, SMSF transaction, and subsequent refinance were all fully compliant, properly documented, and audit-approved, ensuring the integrity of the SMSF and meeting all regulatory requirements.
                    </li>
                    <li data-testid="text-outcome-2-4">
                      <span className="font-semibold text-primary">Long-Term SMSF Benefits:</span> The property is now held under the SMSF with a bank loan, providing tax efficiency and long-term asset growth.
                    </li>
                    <li data-testid="text-outcome-2-5">
                      <span className="font-semibold text-primary">Strategic Flexibility Maintained:</span> The Client continued their transition into self-employment without sacrificing investment momentum.
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </section>
        </>
      )}

      <section className="relative py-16 md:py-24 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${constructionImage})` }}
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="relative z-10 max-w-6xl mx-auto px-6 md:px-12">
          <div className="text-center mb-12">
            <h2 
              className="font-serif text-3xl md:text-4xl lg:text-5xl font-bold text-primary mb-4"
              data-testid="text-process-title"
            >
              Five-Stage Process Map
            </h2>
            <p className="text-muted-foreground text-lg md:text-xl max-w-3xl mx-auto">
              Our structured approach to SMSF property lending
            </p>
          </div>

          <div className="space-y-6">
            <div className="bg-card p-6 md:p-8 rounded-lg border border-border" data-testid="card-step-1">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold flex-shrink-0">
                  1
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2">
                    Assessment & Initial Documentation
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Determine the SMSF's borrowing capacity based on current assets, contributions, and anticipated rental income. Gather essential documents including the SMSF Trust Deed, financial statements, member statements, and trustee identification.
                  </p>
                </div>
              </div>
              <div className="flex justify-center my-2">
                <ArrowRight className="h-6 w-6 text-primary rotate-90" />
              </div>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-lg border border-border" data-testid="card-step-2">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold flex-shrink-0">
                  2
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2">
                    Strategy & Structuring
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Review available deposits and explore alternative equity options. Assess strategic on-lending opportunities from member funds. Engage accountants and solicitors to establish the correct Bare Trust structure and ensure SMSF Trust Deed permits borrowing.
                  </p>
                </div>
              </div>
              <div className="flex justify-center my-2">
                <ArrowRight className="h-6 w-6 text-primary rotate-90" />
              </div>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-lg border border-border" data-testid="card-step-3">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold flex-shrink-0">
                  3
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2">
                    Application Submission
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Select the optimal lender based on property type, loan-to-value ratio, and interest rate requirements. Compile the comprehensive loan application package including all financial, trust, and property documentation for formal submission.
                  </p>
                </div>
              </div>
              <div className="flex justify-center my-2">
                <ArrowRight className="h-6 w-6 text-primary rotate-90" />
              </div>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-lg border border-border" data-testid="card-step-4">
              <div className="flex items-start gap-4 mb-4">
                <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold flex-shrink-0">
                  4
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2">
                    Execution & Settlement
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Manage the application through to settlement, responding promptly to lender queries. Ensure all Bare Trust Deed and loan agreements comply with SIS legislation. Coordinate with client, solicitor, and lender for smooth settlement and loan drawdown.
                  </p>
                </div>
              </div>
              <div className="flex justify-center my-2">
                <ArrowRight className="h-6 w-6 text-primary rotate-90" />
              </div>
            </div>

            <div className="bg-card p-6 md:p-8 rounded-lg border border-border" data-testid="card-step-5">
              <div className="flex items-start gap-4">
                <div className="bg-primary text-primary-foreground rounded-full h-10 w-10 flex items-center justify-center font-bold flex-shrink-0">
                  5
                </div>
                <div className="flex-1">
                  <h3 className="font-serif text-xl md:text-2xl font-bold text-primary mb-2">
                    Post-Settlement & Growth Strategy
                  </h3>
                  <p className="text-muted-foreground text-base md:text-lg leading-relaxed">
                    Conduct post-settlement review to confirm all compliance requirements are met. Provide ongoing strategies for SMSF growth including loan structure reviews, contribution optimization, and property performance assessment.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="relative py-16 md:py-20 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url(${constructionImage})` }}
        />
        <div className="absolute inset-0 bg-background/90" />
        <div className="relative z-10 max-w-4xl mx-auto px-6 md:px-12 text-center">
          <Button 
            onClick={() => window.open('https://calendly.com/tony-lytefinancial/30min?month=2025-11', '_blank')}
            className="bg-primary hover:bg-primary/90 text-primary-foreground text-lg md:text-xl px-8 py-6 h-auto"
            data-testid="button-book-meeting"
          >
            Book Your Solutions Meeting Here
          </Button>
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
