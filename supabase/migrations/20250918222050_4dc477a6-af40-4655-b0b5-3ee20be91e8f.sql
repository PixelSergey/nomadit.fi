-- Create events table for calendar
CREATE TABLE public.events (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT,
  event_date DATE NOT NULL,
  start_time TIME,
  end_time TIME,
  location TEXT,
  is_public BOOLEAN NOT NULL DEFAULT true,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  created_by UUID REFERENCES auth.users(id) ON DELETE SET NULL
);

-- Enable Row Level Security
ALTER TABLE public.events ENABLE ROW LEVEL SECURITY;

-- Public can view public events
CREATE POLICY "Public events are viewable by everyone" 
ON public.events 
FOR SELECT 
USING (is_public = true);

-- Authenticated users can view all events
CREATE POLICY "Authenticated users can view all events" 
ON public.events 
FOR SELECT 
TO authenticated
USING (true);

-- Only authenticated users can create events
CREATE POLICY "Authenticated users can create events" 
ON public.events 
FOR INSERT 
TO authenticated
WITH CHECK (auth.uid() = created_by);

-- Users can update their own events
CREATE POLICY "Users can update their own events" 
ON public.events 
FOR UPDATE 
TO authenticated
USING (auth.uid() = created_by);

-- Users can delete their own events
CREATE POLICY "Users can delete their own events" 
ON public.events 
FOR DELETE 
TO authenticated
USING (auth.uid() = created_by);

-- Create function to update timestamps
CREATE OR REPLACE FUNCTION public.update_updated_at_column()
RETURNS TRIGGER AS $$
BEGIN
  NEW.updated_at = now();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql SET search_path = public;

-- Create trigger for automatic timestamp updates
CREATE TRIGGER update_events_updated_at
BEFORE UPDATE ON public.events
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert some sample events
INSERT INTO public.events (title, description, event_date, start_time, end_time, location, is_public) VALUES
('Hyppytapahtuma', 'Viikonlopun hyppytapahtuma kaikille tasoille', '2024-03-15', '09:00', '17:00', 'Utti', true),
('Peruskurssi alkaa', 'Uusi peruskurssi aloittelijoille', '2024-03-22', '10:00', '16:00', 'Utti', true),
('AFF-kurssi', 'Accelerated Free Fall -kurssi', '2024-03-29', '09:00', '18:00', 'Utti', true),
('Kerhoilta', 'Kuukausittainen kerhoilta ja suunnittelu', '2024-03-08', '18:00', '20:00', 'Kouvola', true);