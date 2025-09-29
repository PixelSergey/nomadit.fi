import { useEffect, useState } from "react";
import Navigation from "@/components/Navigation";
import { supabase } from "@/integrations/supabase/client";
import { Skeleton } from "@/components/ui/skeleton";
import HolographicGallery from "@/components/HolographicGallery";

interface GalleryImage {
  id: string;
  image_path: string;
  description: string | null;
}

const Gallery = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const { data, error } = await supabase
          .from('gallery_images')
          .select('id, image_path, description')
          .eq('hidden', false)
          .order('created_at', { ascending: false });

        if (error) throw error;
        setImages(data || []);
      } catch (err) {
        console.error('Error fetching gallery images:', err);
        setError('Failed to load gallery images');
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  const getImageUrl = (imagePath: string) => {
    return `https://bcwsacbqmklugvelgegt.supabase.co/storage/v1/object/public/gallery-images/${imagePath}`;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-darker-surface to-background">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-neon-green animate-glitch mb-4">
              Galleria
            </h1>
          </div>

          {loading ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i} className="space-y-4">
                  <Skeleton className="h-64 w-full bg-muted/20" />
                  <Skeleton className="h-4 w-3/4 bg-muted/20" />
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="text-center py-20">
              <div className="text-destructive text-xl animate-glitch">
                ERROR: {error}
              </div>
            </div>
          ) : images.length === 0 ? (
            <div className="text-center py-20">
              <div className="text-muted-foreground text-xl">
                No holograms detected...
              </div>
            </div>
          ) : (
            <HolographicGallery images={images} getImageUrl={getImageUrl} />
          )}
        </div>
      </div>
    </div>
  );
};

export default Gallery;