import { useState } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X } from "lucide-react";

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
        {images.map((image, index) => (
          <div
            key={image.id}
            className="holographic-projection"
            style={{
              animationDelay: `${index * 0.2}s`
            }}
            onClick={() => handleImageClick(image)}
          >
            <div className="hologram-frame">
              <div className="hologram-scanlines"></div>
              <div className="hologram-grid"></div>
              
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
            </div>
            
            {image.description && (
              <div className="hologram-description">
                <div className="glitch-text" data-text={image.description}>
                  {image.description}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      <Dialog open={!!selectedImage} onOpenChange={() => setSelectedImage(null)}>
        <DialogContent className="max-w-4xl bg-background/95 backdrop-blur-sm border-neon-green/30">
          <div className="relative">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute -top-10 right-0 text-muted-foreground hover:text-neon-green transition-colors z-10"
            >
              <X size={24} />
            </button>
            
            {selectedImage && (
              <div className="holographic-modal">
                <div className="modal-scanlines"></div>
                <img
                  src={getImageUrl(selectedImage.image_path)}
                  alt={selectedImage.description || "Holographic projection"}
                  className="w-full h-auto max-h-[70vh] object-contain"
                />
                
                {selectedImage.description && (
                  <div className="mt-4 text-center">
                    <div className="glitch-text text-lg" data-text={selectedImage.description}>
                      {selectedImage.description}
                    </div>
                  </div>
                )}
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>

    </>
  );
};

export default HolographicGallery;