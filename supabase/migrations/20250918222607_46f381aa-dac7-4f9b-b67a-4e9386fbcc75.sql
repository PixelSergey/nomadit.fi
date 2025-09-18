-- Drop policies that depend on is_public column first
DROP POLICY IF EXISTS "Public events are viewable by everyone" ON public.events;
DROP POLICY IF EXISTS "Authenticated users can view all events" ON public.events;

-- Remove is_public column from events table
ALTER TABLE public.events DROP COLUMN is_public;

-- Create new simplified policy for public access to all events
CREATE POLICY "Events are viewable by everyone" 
ON public.events 
FOR SELECT 
USING (true);