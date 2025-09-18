import Navigation from "@/components/Navigation";

const Pricing = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-darker-surface to-background">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-neon-green animate-glitch mb-8">
              Hinnasto
            </h1>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {/* Maksuohjeet */}
            <div className="bg-card/50 border border-neon-green/20 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-neon-green mb-6">Maksuohjeet</h2>
              <div className="space-y-4 text-left">
                <div>
                  <p className="text-foreground font-medium">MobilePay</p>
                  <p className="text-muted-foreground">040843513</p>
                </div>
                <div>
                  <p className="text-foreground font-medium">Tilisiirrolla</p>
                  <p className="text-muted-foreground">FI87 3939 0021 7910 66</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground italic">
                    Viestiin pokan numero ja oma nimi
                  </p>
                </div>
              </div>
            </div>

            {/* Hyppyliput */}
            <div className="bg-card/50 border border-neon-green/20 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-neon-green mb-6">Hyppyliput</h2>
              <div className="space-y-3 text-left">
                <div className="flex justify-between">
                  <span className="text-foreground">800m</span>
                  <span className="text-neon-green font-medium">18€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">1000m</span>
                  <span className="text-neon-green font-medium">20€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">1500m</span>
                  <span className="text-neon-green font-medium">25€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Siirtopoka</span>
                  <span className="text-neon-green font-medium">25€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Dyaaminen toiminta</span>
                  <span className="text-neon-green font-medium">3.9€/min</span>
                </div>
              </div>
            </div>

            {/* Oppilaat */}
            <div className="bg-card/50 border border-neon-green/20 rounded-lg p-6 backdrop-blur-sm">
              <h2 className="text-2xl font-bold text-neon-green mb-6">Oppilaat</h2>
              <div className="space-y-3 text-left">
                <div>
                  <p className="text-foreground font-medium">Alkeiskurssi</p>
                  <p className="text-xs text-muted-foreground mb-1">
                    (sis. maakoulutuksen, treenit, ekan hypyn)
                  </p>
                  <p className="text-neon-green font-medium">390€</p>
                </div>
                <div>
                  <p className="text-foreground font-medium">Alkeiskurssi opiskelijoille ja res.</p>
                  <p className="text-neon-green font-medium">320€</p>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Oppilashyppy</span>
                  <span className="text-neon-green font-medium">50€</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-foreground">Pakkaus</span>
                  <span className="text-neon-green font-medium">10€</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pricing;