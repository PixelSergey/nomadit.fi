import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlternativeButton } from "@/components/AlternativeButton";
import { Link } from "react-router-dom";

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-darker-surface to-background">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-neon-green animate-glitch mb-8">
              Kurssit
            </h1>
            <p className="text-lg text-muted-foreground">
              Kaikki kurssiajankohdat voidaan sopia myös erikseen, <Link to="/contact" className="text-neon-green hover:text-neon-green/80 underline transition-colors">ota yhteyttä hallitukseen</Link>
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-5">
            {/* Alkeiskurssit Section */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-foreground text-center">
                  Laskuvarjohyppäämisen alkeiskurssi
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-lg text-muted-foreground">
                  Seuraava alkeiskurssi: ??.??.????
                </p>
                <AlternativeButton variant="hero" size="lg">
                  Ilmoittaudu
                </AlternativeButton>
              </CardContent>
            </Card>

            {/* Kurssit kelppareille Section */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-foreground text-center">
                  Kurssit kelppareille
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {/* Yöhyppykurssi */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 rounded-lg bg-background/30 border border-border/30">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Yöhyppykurssi</h3>
                      <p className="text-muted-foreground">seuraava yökurssi ??.??.????</p>
                    </div>
                    <AlternativeButton variant="hero" size="default">
                      Ilmoittaudu
                    </AlternativeButton>
                  </div>

                  {/* Advanced Navigator Handling */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 rounded-lg bg-background/30 border border-border/30">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Advanced Navigator Handling -kurssi</h3>
                      <p className="text-muted-foreground">seuraava navikurssi ??.??.????</p>
                    </div>
                    <AlternativeButton variant="hero" size="default">
                      Ilmoittaudu
                    </AlternativeButton>
                  </div>

                  {/* Offarikurssi */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 rounded-lg bg-background/30 border border-border/30">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Offarikurssi</h3>
                      <p className="text-muted-foreground">seuraava offarikurssi ??.??.????</p>
                    </div>
                    <AlternativeButton variant="hero" size="default">
                      Ilmoittaudu
                    </AlternativeButton>
                  </div>

                  {/* Kovien ylätuulien kurssi */}
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 rounded-lg bg-background/30 border border-border/30">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground">Kovien ylätuulien kurssi</h3>
                      <p className="text-muted-foreground">Seuraava tuulikurssi ??.??.????</p>
                    </div>
                    <AlternativeButton variant="hero" size="default">
                      Ilmoittaudu
                    </AlternativeButton>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;