import skullPropeller from "@/assets/skull-propeller.jpg";
import { AlternativeButton } from "./AlternativeButton";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-darker-surface to-background pt-20 pb-20">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-red/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-neon-blue/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="space-y-8">
          {/* Main title with glitch effect */}
          <h1 className="text-4xl md:text-6xl font-bold text-foreground relative">
            <span className="relative inline-block animate-glitch">
              Full Stack Nomads
            </span>
            <div className="absolute inset-0 text-neon-green opacity-70 animate-glitch" style={{ animationDelay: "0.1s" }}>
              Full Stack Nomads
            </div>
            <div className="absolute inset-0 text-neon-red opacity-40 animate-glitch" style={{ animationDelay: "0.2s" }}>
              Full Stack Nomads
            </div>
          </h1>
          
          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium tracking-wide">
            Se parempi hyppykerho
          </h2>
          
          {/* Skull image with effects */}
          <div className="my-8 relative">
            <div className="relative inline-block animate-float">
              <img 
                src={skullPropeller} 
                alt="Laughing skull with propeller falling from sky" 
                className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg border-2 border-neon-green shadow-2xl hover:animate-neon-pulse transition-all duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neon-green/20 to-transparent rounded-lg" />
            </div>
          </div>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <AlternativeButton variant="hero" size="lg" className="text-lg px-8 py-4">
              Liity mukaan
            </AlternativeButton>
            <AlternativeButton variant="skull" size="lg" className="text-lg px-8 py-4">
              Katso kurssit
            </AlternativeButton>
          </div>

          {/* Perustuslaki section */}
          <div className="mt-16 p-8 border border-neon-red/30 rounded-lg bg-darker-surface/50 backdrop-blur-sm w-full max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-neon-red mb-6 text-center animate-glitch">
              Perustuslaki
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground text-center leading-relaxed">
              Kaikki mikä edistää hyppäämistä vaarantamatta muiden turvallisuutta on hyvästä,<br />
              ja kaikki muu saatanasta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;