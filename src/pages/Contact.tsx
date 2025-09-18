import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import hallitusImage from "@/assets/contacts/hallitus.jpg";
import lasseImage from "@/assets/contacts/lasse.jpg";
import hopoHenkkaImage from "@/assets/contacts/hopo-henkka.jpg";
import segeImage from "@/assets/contacts/sege.jpg";
import pyryImage from "@/assets/contacts/pyry.jpg";

const contacts = [
  {
    id: "lasse",
    name: "Lasse",
    role: "Puheenjohtaja ja mesu",
    email: "pj@nomadit.fi",
    image: lasseImage,
  },
  {
    id: "hopo-henkka",
    name: "Höpö-Henkka",
    role: "Supreme Commander of High Risk Operations",
    email: "supreme-commander.of.high-risk-operations@nomadit.fi",
    image: hopoHenkkaImage,
  },
  {
    id: "sege",
    name: "Sege",
    role: "pääpilotti",
    email: "most-trusted-pilot@nomadit.fi",
    image: segeImage,
  },
  {
    id: "pyry",
    name: "Pyry",
    role: "hätätilanne- ja vesilento-operaatioasiantuntija",
    email: "hatatilannevastaava@nomadit.fi",
    image: pyryImage,
  },
];

const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-darker-surface to-background">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl md:text-6xl font-bold text-neon-green animate-glitch mb-12 text-center">
            Yhteystiedot
          </h1>
          
          {/* Hallitus - Centered at top */}
          <div className="flex justify-center mb-12">
            <Card className="w-full max-w-lg bg-card/80 backdrop-blur-sm border-neon-green/30 hover:border-neon-green/60 transition-all duration-300">
              <CardHeader className="text-center pb-4">
                <Avatar className="w-40 h-40 mx-auto mb-6 border-4 border-neon-green/60 shadow-lg shadow-neon-green/20">
                  <AvatarImage src={hallitusImage} alt="Hallitus" className="object-cover" />
                  <AvatarFallback className="bg-darker-surface text-neon-green text-2xl">H</AvatarFallback>
                </Avatar>
                <h3 className="text-3xl font-bold text-foreground mb-2">Hallitus</h3>
                <p className="text-lg text-muted-foreground mb-3">yleiset yhteydenotot sekä säätäminen</p>
              </CardHeader>
              <CardContent className="text-center pt-0">
                <a 
                  href="mailto:saato++@nomadit.fi" 
                  className="text-neon-green hover:text-neon-green/80 transition-colors underline text-lg"
                >
                  saato++@nomadit.fi
                </a>
              </CardContent>
            </Card>
          </div>

          {/* Other contacts - Grid layout */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {contacts.map((contact) => (
              <Card 
                key={contact.id} 
                className="bg-card/80 backdrop-blur-sm border-neon-green/30 hover:border-neon-green/60 transition-all duration-300 hover:scale-105"
              >
                <CardHeader className="text-center pb-3">
                  <Avatar className="w-32 h-32 mx-auto mb-4 border-3 border-neon-green/60 shadow-lg shadow-neon-green/20">
                    <AvatarImage src={contact.image} alt={contact.name} className="object-cover" />
                    <AvatarFallback className="bg-darker-surface text-neon-green text-xl">
                      {contact.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <h3 className="text-xl font-bold text-foreground mb-1">{contact.name}</h3>
                  <p className="text-sm text-muted-foreground mb-3 leading-tight">{contact.role}</p>
                </CardHeader>
                <CardContent className="text-center pt-0">
                  <a 
                    href={`mailto:${contact.email}`} 
                    className="text-neon-green hover:text-neon-green/80 transition-colors underline text-sm break-all leading-tight"
                  >
                    {contact.email}
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;