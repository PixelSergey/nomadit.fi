-- Remove unnecessary audit fields from events table
ALTER TABLE public.events DROP COLUMN created_at;
ALTER TABLE public.events DROP COLUMN updated_at;
ALTER TABLE public.events DROP COLUMN created_by;

-- Update RLS policies to be more permissive since we removed created_by
DROP POLICY "Authenticated users can create events" ON public.events;
DROP POLICY "Users can delete their own events" ON public.events;
DROP POLICY "Users can update their own events" ON public.events;

-- Create new simpler policies
CREATE POLICY "Anyone can create events" 
ON public.events 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Anyone can update events" 
ON public.events 
FOR UPDATE 
USING (true);

CREATE POLICY "Anyone can delete events" 
ON public.events 
FOR DELETE 
USING (true);