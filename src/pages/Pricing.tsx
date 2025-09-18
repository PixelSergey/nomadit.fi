import Navigation from "@/components/Navigation";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-darker-surface to-background">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-neon-green animate-glitch mb-8">
              Hinnasto
            </h1>
          </div>

          <div className="max-w-4xl mx-auto space-y-16">
            {/* Maksuohjeet */}
            <section className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Maksuohjeet</h2>
              <div className="space-y-4 text-lg">
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-semibold text-foreground min-w-[120px]">MobilePay:</span>
                  <span className="text-muted-foreground">040843513</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:items-center gap-2">
                  <span className="font-semibold text-foreground min-w-[120px]">Tilisiirto:</span>
                  <span className="text-muted-foreground">FI87 3939 0021 7910 66</span>
                </div>
                <div className="text-muted-foreground italic mt-4">
                  Viestiin pokan numero ja oma nimi
                </div>
              </div>
            </section>

            {/* Hyppyliput */}
            <section className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Hyppyliput</h2>
              <div className="space-y-4 text-lg">
                <div className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="text-foreground">800m</span>
                  <span className="text-muted-foreground font-semibold">18€</span>
                </div>
                <div className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="text-foreground">1000m</span>
                  <span className="text-muted-foreground font-semibold">20€</span>
                </div>
                <div className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="text-foreground">1500m</span>
                  <span className="text-muted-foreground font-semibold">25€</span>
                </div>
                <div className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="text-foreground">Siirtopoka</span>
                  <span className="text-muted-foreground font-semibold">25€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Dyaaminen toiminta</span>
                  <span className="text-muted-foreground font-semibold">3.9€ minuutissa</span>
                </div>
              </div>
            </section>

            {/* Oppilaat */}
            <section className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Oppilaat</h2>
              <div className="space-y-4 text-lg">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-border/50 pb-2">
                  <span className="text-foreground">Alkeiskurssi (sis. maakoulutuksen, treenit, ekan hypyn)</span>
                  <span className="text-muted-foreground font-semibold">390€</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-border/50 pb-2">
                  <span className="text-foreground">Alkeiskurssi opiskelejoille ja res.</span>
                  <span className="text-muted-foreground font-semibold">320€</span>
                </div>
                <div className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="text-foreground">Oppilashyppy</span>
                  <span className="text-muted-foreground font-semibold">50€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground">Pakkaus</span>
                  <span className="text-muted-foreground font-semibold">10€</span>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;