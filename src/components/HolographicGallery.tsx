import { useState } from "react";
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

const HolographicGallery = ({ images, getImageUrl }: HolographicGalleryProps) => {
  const [selectedImage, setSelectedImage] = useState<GalleryImage | null>(null);
  const [imageErrors, setImageErrors] = useState<Set<string>>(new Set());

  const handleImageError = (imageId: string) => {
    setImageErrors(prev => new Set(prev).add(imageId));
  };

  const handleImageClick = (image: GalleryImage) => {
    setSelectedImage(image);
  };

  return (
    <>
      <div className="holographic-grid">
        {images.map((image, index) => {
          // Generate random animation delays for each image
          const glitchDelay = Math.random() * 5;
          const scanlineDelay = Math.random() * 3;
          const distortionDelay = Math.random() * 4;
          const flickerDelay = Math.random() * 6;
          
          return (
            <div
              key={image.id}
              className="holographic-projection"
              style={{
                animationDelay: `${index * 0.2}s`,
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
              {/* Image with CRT effect constrained to image only */}
              <div className="holographic-modal-image relative">
                {/* Close button positioned over image */}
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
              
              {/* Description without CRT effect */}
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