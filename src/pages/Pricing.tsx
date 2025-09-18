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

          <div className="max-w-4xl mx-auto space-y-8">
            {/* Maksuohjeet */}
            <section className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Maksuohjeet</h2>
              <div className="space-y-4 text-xl">
                <div className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="text-foreground font-bold">MobilePay</span>
                  <span className="text-muted-foreground font-semibold">040843513</span>
                </div>
                <div className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="text-foreground font-bold">Tilisiirto</span>
                  <span className="text-muted-foreground font-semibold">FI87 3939 0021 7910 66</span>
                </div>
                <div className="text-center text-muted-foreground italic mt-4 text-lg">
                  Viestiin pokan numero ja oma nimi
                </div>
              </div>
            </section>

            {/* Hyppyliput */}
            <section className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Hyppyliput</h2>
              <div className="space-y-4 text-xl">
                <div className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="text-foreground font-bold">800m</span>
                  <span className="text-muted-foreground font-semibold">18€</span>
                </div>
                <div className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="text-foreground font-bold">1000m</span>
                  <span className="text-muted-foreground font-semibold">20€</span>
                </div>
                <div className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="text-foreground font-bold">1500m</span>
                  <span className="text-muted-foreground font-semibold">25€</span>
                </div>
                <div className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="text-foreground font-bold">Siirtopoka</span>
                  <span className="text-muted-foreground font-semibold">25€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-bold">Dyaaminen toiminta</span>
                  <span className="text-muted-foreground font-semibold">3.9€ minuutissa</span>
                </div>
              </div>
            </section>

            {/* Oppilaat */}
            <section className="bg-card/50 backdrop-blur-sm rounded-lg p-8 border border-border">
              <h2 className="text-3xl font-bold text-primary mb-8 text-center">Oppilaat</h2>
              <div className="space-y-4 text-xl">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-border/50 pb-2">
                  <span className="text-foreground font-bold">Alkeiskurssi (sis. maakoulutuksen, treenit, ekan hypyn)</span>
                  <span className="text-muted-foreground font-semibold">390€</span>
                </div>
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center border-b border-border/50 pb-2">
                  <span className="text-foreground font-bold">Alkeiskurssi opiskilejoille ja res.</span>
                  <span className="text-muted-foreground font-semibold">320€</span>
                </div>
                <div className="flex justify-between items-center border-b border-border/50 pb-2">
                  <span className="text-foreground font-bold">Oppilashyppy</span>
                  <span className="text-muted-foreground font-semibold">50€</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-foreground font-bold">Pakkaus</span>
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