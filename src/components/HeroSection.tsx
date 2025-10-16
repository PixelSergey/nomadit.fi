import { AlternativeButton } from "./AlternativeButton";
import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";

const HeroSection = () => {
  const [randomSkull, setRandomSkull] = useState<string>("");

  useEffect(() => {
    const fetchRandomSkullImage = async () => {
      try {
        // List all files in the skull-images bucket
        const { data: files, error } = await supabase.storage
          .from('skull-images')
          .list('', {
            limit: 100,
            offset: 0,
          });

        if (error || !files || files.length === 0) {
          console.error('Error fetching skull images:', error);
          return;
        }

        // Filter out folders and get only image files
        const imageFiles = files.filter(file => 
          file.name.match(/\.(jpg|jpeg|png|webp)$/i)
        );

        if (imageFiles.length === 0) {
          console.error('No skull images found in bucket');
          return;
        }

        // Pick a random image
        const randomIndex = Math.floor(Math.random() * imageFiles.length);
        const selectedFile = imageFiles[randomIndex];

        // Get the public URL
        const { data } = supabase.storage
          .from('skull-images')
          .getPublicUrl(selectedFile.name);

        if (data?.publicUrl) {
          setRandomSkull(data.publicUrl);
        }
      } catch (error) {
        console.error('Error fetching random skull image:', error);
      }
    };

    fetchRandomSkullImage();
  }, []);

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
          <h2 className="text-xl md:text-2xl text-muted-foreground font-medium tracking-wide">
            Se erilainen hyppykerho
          </h2>
          
          {/* Skull image with effects */}
          <div className="my-8 relative">
            <div className="relative inline-block animate-float">
              {randomSkull ? (
                <>
                  <img 
                    src={randomSkull} 
                    alt=""
                    className="w-48 h-48 md:w-64 md:h-64 object-cover rounded-lg border-2 border-neon-green shadow-2xl hover:animate-neon-pulse transition-all duration-300 hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-neon-green/20 to-transparent rounded-lg" />
                </>
              ) : (
                <div className="w-48 h-48 md:w-64 md:h-64 rounded-lg border-2 border-neon-green/30 bg-darker-surface/50 flex items-center justify-center animate-pulse">
                  <div className="w-8 h-8 border-2 border-neon-green border-t-transparent rounded-full animate-spin" />
                </div>
              )}
            </div>
          </div>
          
          {/* Call to action buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <a href="/courses">
              <AlternativeButton variant="hero" size="lg" className="text-lg px-8 py-4">
                Laskuvarjohyppykurssit
              </AlternativeButton>
            </a>
            <a href="https://forms.gle/BH8dFZUiEfZG5cvbA">
              <AlternativeButton variant="skull" size="lg" className="text-lg px-8 py-4">
                Join the dark side
              </AlternativeButton>
            </a>
          </div>

          {/* Perustuslaki section */}
          <div className="mt-16 p-8 border border-neon-red/30 rounded-lg bg-darker-surface/50 backdrop-blur-sm w-full max-w-4xl mx-auto">
            <h3 className="text-3xl md:text-4xl font-bold text-neon-red mb-6 text-center animate-glitch">
              Perustuslaki
            </h3>
            <p className="text-lg md:text-xl text-muted-foreground text-center leading-relaxed">
              Kaikki mikä edistää hyppäämistä vaarantamatta muiden turvallisuutta on hyvästä,<br />
              ja muunlainen saatanasta
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;