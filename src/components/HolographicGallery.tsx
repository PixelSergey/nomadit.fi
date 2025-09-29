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
        <DialogContent className="max-w-4xl bg-background/95 backdrop-blur-sm border-neon-green/30 p-6">
          {selectedImage && (
            <div className="space-y-4">
              {/* Image with CRT effect constrained to image only */}
              <div className="holographic-modal-image">
                <div className="modal-scanlines"></div>
                <img
                  src={getImageUrl(selectedImage.image_path)}
                  alt={selectedImage.description || "Holographic projection"}
                  className="w-full h-auto max-h-[70vh] object-contain rounded-lg"
                />
              </div>
              
              {/* Description without CRT effect */}
              {selectedImage.description && (
                <div className="text-center">
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