import { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";

interface GalleryImage {
  id: string;
  image_path: string;
  description: string | null;
}

interface HolographicGalleryProps {
  images: GalleryImage[];
  getImageUrl: (imagePath: string) => string;
}

interface ImagePosition {
  x: number;
  y: number;
  width: number;
  height: number;
  rotation: number;
}

const HolographicGallery = ({ images, getImageUrl }: HolographicGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());
  const [imagePositions, setImagePositions] = useState<Map<string, ImagePosition>>(new Map());
  const [isDesktop, setIsDesktop] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const checkIsDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    checkIsDesktop();
    window.addEventListener('resize', checkIsDesktop);
    return () => window.removeEventListener('resize', checkIsDesktop);
  }, []);

  useEffect(() => {
    if (!isDesktop || !containerRef.current || images.length === 0) return;

    const generateRandomPositions = () => {
      const container = containerRef.current!;
      const containerWidth = container.offsetWidth;
      const containerHeight = Math.max(800, window.innerHeight - 200);
      const positions = new Map<string, ImagePosition>();
      const occupied: Array<{x: number, y: number, width: number, height: number}> = [];

      // Image size variants
      const sizeVariants = [
        { width: 280, height: 200 },
        { width: 320, height: 240 },
        { width: 250, height: 180 },
        { width: 300, height: 220 },
        { width: 350, height: 260 }
      ];

      const textHeight = 80; // Space for description text
      const margin = 20; // Minimum spacing between elements

      const checkCollision = (newRect: {x: number, y: number, width: number, height: number}) => {
        return occupied.some(rect => {
          return !(newRect.x + newRect.width + margin < rect.x ||
                  newRect.x > rect.x + rect.width + margin ||
                  newRect.y + newRect.height + margin < rect.y ||
                  newRect.y > rect.y + rect.height + margin);
        });
      };

      images.forEach((image, index) => {
        const sizeVariant = sizeVariants[index % sizeVariants.length];
        const totalHeight = sizeVariant.height + textHeight;
        let attempts = 0;
        let position: ImagePosition;

        do {
          const x = Math.random() * (containerWidth - sizeVariant.width - margin * 2) + margin;
          const y = Math.random() * (containerHeight - totalHeight - margin * 2) + margin;
          const rotation = (Math.random() - 0.5) * 10; // Random rotation between -5 and 5 degrees

          position = {
            x,
            y,
            width: sizeVariant.width,
            height: sizeVariant.height,
            rotation
          };

          attempts++;
        } while (checkCollision({
          x: position.x,
          y: position.y,
          width: position.width,
          height: totalHeight
        }) && attempts < 100);

        if (attempts < 100) {
          positions.set(image.id, position);
          occupied.push({
            x: position.x,
            y: position.y,
            width: position.width,
            height: totalHeight
          });
        } else {
          // Fallback position if can't find space
          const fallbackY = index * (sizeVariant.height + textHeight + margin);
          positions.set(image.id, {
            x: margin,
            y: fallbackY,
            width: sizeVariant.width,
            height: sizeVariant.height,
            rotation: 0
          });
        }
      });

      setImagePositions(positions);
    };

    // Small delay to ensure container is properly sized
    setTimeout(generateRandomPositions, 100);
  }, [images, isDesktop]);

  const handleImageError = (imageId: string) => {
    setImageErrors(prev => new Set(prev).add(imageId));
  };

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  if (!isDesktop) {
    // Mobile/tablet grid layout (original)
    return (
      <>
        <div className="holographic-grid">
          {images.map((image, index) => {
            const glitchDelay = Math.random() * 5;
            const scanlineDelay = Math.random() * 3;
            const distortionDelay = Math.random() * 4;
            const flickerDelay = Math.random() * 6;
            const floatDuration = 4 + Math.random() * 4;
            
            return (
              <div
                key={image.id}
                className="holographic-projection"
                style={{
                  animationDelay: `${index * 0.2}s`,
                  animationDuration: `${floatDuration}s`,
                  '--glitch-delay': `${glitchDelay}s`,
                  '--scanline-delay': `${scanlineDelay}s`,
                  '--distortion-delay': `${distortionDelay}s`,
                  '--flicker-delay': `${flickerDelay}s`
                } as React.CSSProperties & { [key: string]: string }}
                onClick={() => handleImageClick(image)}
              >
                <div className="hologram-frame">
                  <div className="hologram-scanlines"></div>
                  <div className="hologram-grid"></div>
                  <div className="hologram-static"></div>
                  <div className="hologram-distortion"></div>
                  
                  {imageErrors.has(image.id) ? (
                    <div className="hologram-error">
                      <div className="text-destructive animate-glitch">
                        SIGNAL LOST
                      </div>
                    </div>
                  ) : (
                    <img
                      src={getImageUrl(image.image_path)}
                      alt={image.description || "Holographic projection"}
                      className="hologram-image"
                      onError={() => handleImageError(image.id)}
                      loading="lazy"
                    />
                  )}
                  
                  <div className="hologram-glow"></div>
                  <div className="hologram-flicker"></div>
                </div>
                
                {image.description && (
                  <div className="hologram-description">
                    <div className="glitch-text" data-text={image.description}>
                      {image.description}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Lightbox Modal */}
        <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
          <DialogContent className="max-w-none w-fit h-fit bg-background/95 backdrop-blur-sm border-neon-green/30 p-0 [&>button]:hidden">
            {selectedImage && (
              <div className="flex flex-col">
                <div className="holographic-modal-image relative">
                  <button
                    onClick={() => setSelectedImage(null)}
                    className="absolute top-4 right-4 z-20 bg-background/80 border border-neon-green/50 rounded-md p-2 text-neon-green hover:bg-background hover:border-neon-green transition-all duration-200 backdrop-blur-sm"
                  >
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="m18 6-12 12"/>
                      <path d="m6 6 12 12"/>
                    </svg>
                  </button>
                  
                  <div className="modal-scanlines"></div>
                  <img
                    src={getImageUrl(selectedImage.image_path)}
                    alt={selectedImage.description || "Holographic projection"}
                    className="block max-h-[85vh] max-w-[95vw] h-auto w-auto rounded-lg"
                  />
                </div>
                
                {selectedImage.description && (
                  <div className="text-center p-6 w-full">
                    <div className="glitch-text text-lg" data-text={selectedImage.description}>
                      {selectedImage.description}
                    </div>
                  </div>
                )}
              </div>
            )}
          </DialogContent>
        </Dialog>
      </>
    );
  }

  // Desktop random positioning layout
  return (
    <>
      <div 
        ref={containerRef}
        className="holographic-scatter relative w-full min-h-[800px]"
        style={{ height: `${Math.max(800, window.innerHeight - 200)}px` }}
      >
        {images.map((image, index) => {
          const position = imagePositions.get(image.id);
          if (!position) return null;

          const glitchDelay = Math.random() * 5;
          const scanlineDelay = Math.random() * 3;
          const distortionDelay = Math.random() * 4;
          const flickerDelay = Math.random() * 6;
          const floatDuration = 4 + Math.random() * 4;
          
          return (
            <div
              key={image.id}
              className="holographic-projection-absolute"
              style={{
                position: 'absolute',
                left: `${position.x}px`,
                top: `${position.y}px`,
                width: `${position.width}px`,
                height: `${position.height}px`,
                transform: `rotate(${position.rotation}deg)`,
                animationDelay: `${index * 0.2}s`,
                animationDuration: `${floatDuration}s`,
                '--glitch-delay': `${glitchDelay}s`,
                '--scanline-delay': `${scanlineDelay}s`,
                '--distortion-delay': `${distortionDelay}s`,
                '--flicker-delay': `${flickerDelay}s`
              } as React.CSSProperties & { [key: string]: string }}
              onClick={() => handleImageClick(image)}
            >
              <div className="hologram-frame">
                <div className="hologram-scanlines"></div>
                <div className="hologram-grid"></div>
                <div className="hologram-static"></div>
                <div className="hologram-distortion"></div>
                
                {imageErrors.has(image.id) ? (
                  <div className="hologram-error">
                    <div className="text-destructive animate-glitch">
                      SIGNAL LOST
                    </div>
                  </div>
                ) : (
                  <img
                    src={getImageUrl(image.image_path)}
                    alt={image.description || "Holographic projection"}
                    className="hologram-image"
                    onError={() => handleImageError(image.id)}
                    loading="lazy"
                  />
                )}
                
                <div className="hologram-glow"></div>
                <div className="hologram-flicker"></div>
              </div>
              
              {image.description && (
                <div className="hologram-description-absolute">
                  <div className="glitch-text" data-text={image.description}>
                    {image.description}
                  </div>
                </div>
              )}
            </div>
          );
        })}
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-none w-fit h-fit bg-background/95 backdrop-blur-sm border-neon-green/30 p-0 [&>button]:hidden">
          {selectedImage && (
            <div className="flex flex-col">
              <div className="holographic-modal-image relative">
                <button
                  onClick={() => setSelectedImage(null)}
                  className="absolute top-4 right-4 z-20 bg-background/80 border border-neon-green/50 rounded-md p-2 text-neon-green hover:bg-background hover:border-neon-green transition-all duration-200 backdrop-blur-sm"
                >
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="m18 6-12 12"/>
                    <path d="m6 6 12 12"/>
                  </svg>
                </button>
                
                <div className="modal-scanlines"></div>
                <img
                  src={getImageUrl(selectedImage.image_path)}
                  alt={selectedImage.description || "Holographic projection"}
                  className="block max-h-[85vh] max-w-[95vw] h-auto w-auto rounded-lg"
                />
              </div>
              
              {selectedImage.description && (
                <div className="text-center p-6 w-full">
                  <div className="glitch-text text-lg" data-text={selectedImage.description}>
                    {selectedImage.description}
                  </div>
                </div>
              )}
            </div>
          )}
        </DialogContent>
      </Dialog>
    </>
  );
};

export default HolographicGallery;