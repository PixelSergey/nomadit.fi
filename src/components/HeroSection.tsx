import skullPropeller from "@/assets/skull-propeller.jpg";
import { AlternativeButton } from "./AlternativeButton";

const HeroSection = () => {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-background via-darker-surface to-background">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-neon-green/10 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-neon-red/10 rounded-full blur-3xl animate-float" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 w-32 h-32 bg-neon-blue/10 rounded-full blur-2xl animate-float" style={{ animationDelay: "2s" }} />
      </div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="space-y-8">
          {/* Main title with glitch effect */}
          <h1 className="text-6xl md:text-8xl font-bold text-foreground relative">
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
          <h2 className="text-2xl md:text-3xl text-muted-foreground font-medium tracking-wide">
            Se parempi hyppykerho
          </h2>
          
          {/* Skull image with effects */}
          <div className="my-12 relative">
            <div className="relative inline-block animate-float">
              <img 
                src={skullPropeller} 
                alt="Laughing skull with propeller falling from sky" 
                className="w-64 h-64 md:w-80 md:h-80 object-cover rounded-lg border-2 border-neon-green shadow-2xl hover:animate-neon-pulse transition-all duration-300 hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-neon-green/20 to-transparent rounded-lg" />
            </div>
          </div>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <AlternativeButton variant="hero" size="lg" className="text-lg px-8 py-4">
              Liity mukaan
            </AlternativeButton>
            <AlternativeButton variant="skull" size="lg" className="text-lg px-8 py-4">
              Katso kurssit
            </AlternativeButton>
          </div>
        </div>
      </div>
      
      {/* Additional decorative elements */}
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 text-muted-foreground animate-float">
        <div className="text-4xl">↓</div>
        <div className="text-sm mt-2">Scroll for more</div>
      </div>
    </section>
  );
};

export default HeroSection;