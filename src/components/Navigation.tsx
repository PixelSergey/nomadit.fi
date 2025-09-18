import { useState } from "react";
import { AlternativeButton } from "./AlternativeButton";

const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);
  const navItems = [
    { name: "Toimintakalenteri", path: "/calendar" },
    { name: "Hinnasto", path: "/money" }, 
    { name: "Yhteystiedot", path: "/contact" },
    { name: "Kurssit", path: "/courses" },
    { name: "Galleria", path: "/gallery" }
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <a 
            href="/" 
            className="text-xl font-bold text-neon-green animate-glitch hover:text-neon-red transition-colors duration-300 cursor-pointer"
          >
            FSN
          </a>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <a key={item.name} href={item.path}>
                <AlternativeButton 
                  variant="nav"
                  className={`hover:animate-glitch ${index % 2 === 0 ? 'hover:skew-x-3' : 'hover:-skew-x-3'}`}
                  style={{
                    animationDelay: `${index * 0.1}s`
                  }}
                >
                  {item.name}
                </AlternativeButton>
              </a>
            ))}
          </div>
          
          <AlternativeButton 
            variant="skull" 
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            ☰
          </AlternativeButton>
        </div>
        
        {/* Mobile dropdown menu */}
        {isOpen && (
          <div className="md:hidden absolute top-full left-0 right-0 bg-background/95 backdrop-blur-md border-b border-border z-50">
            <div className="container mx-auto px-4 py-4 space-y-3">
              {navItems.map((item, index) => (
                <a key={item.name} href={item.path}>
                  <AlternativeButton 
                    variant="nav"
                    className="w-full text-left justify-start hover:animate-glitch"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </AlternativeButton>
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;