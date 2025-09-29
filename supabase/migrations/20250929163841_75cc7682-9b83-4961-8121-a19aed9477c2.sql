-- Create storage bucket for skull images
INSERT INTO storage.buckets (id, name, public) VALUES ('skull-images', 'skull-images', true);

-- Create policies for skull images bucket
CREATE POLICY "Skull images are publicly accessible" 
ON storage.objects 
FOR SELECT 
USING (bucket_id = 'skull-images');

CREATE POLICY "Authenticated users can upload skull images" 
ON storage.objects 
FOR INSERT 
WITH CHECK (bucket_id = 'skull-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can update skull images" 
ON storage.objects 
FOR UPDATE 
USING (bucket_id = 'skull-images' AND auth.role() = 'authenticated');

CREATE POLICY "Authenticated users can delete skull images" 
ON storage.objects 
FOR DELETE 
USING (bucket_id = 'skull-images' AND auth.role() = 'authenticated');