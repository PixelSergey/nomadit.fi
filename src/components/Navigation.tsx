import { AlternativeButton } from "./AlternativeButton";

const Navigation = () => {
  const navItems = [
    "Toimintakalenteri",
    "Hinnasto", 
    "Yhteystiedot",
    "Kurssit",
    "Galleria"
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="text-xl font-bold text-neon-green animate-glitch">
            FSN
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item, index) => (
              <AlternativeButton 
                key={item} 
                variant="nav"
                className={`hover:animate-glitch ${index % 2 === 0 ? 'hover:skew-x-3' : 'hover:-skew-x-3'}`}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                {item}
              </AlternativeButton>
            ))}
          </div>
          
          <AlternativeButton variant="skull" className="md:hidden">
            ☰
          </AlternativeButton>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;