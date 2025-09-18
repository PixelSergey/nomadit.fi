-- Remove is_public column from events table
ALTER TABLE public.events DROP COLUMN is_public;

-- Update RLS policies to not use is_public
DROP POLICY IF EXISTS "Public events are viewable by everyone" ON public.events;

-- Create new policy for public access to all events
CREATE POLICY "Events are viewable by everyone" 
ON public.events 
FOR SELECT 
USING (true);