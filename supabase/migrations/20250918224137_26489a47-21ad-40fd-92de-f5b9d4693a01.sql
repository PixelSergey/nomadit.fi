-- Fix security vulnerability: Require authentication for event modifications
-- Drop the overly permissive policies
DROP POLICY "Anyone can create events" ON public.events;
DROP POLICY "Anyone can update events" ON public.events;
DROP POLICY "Anyone can delete events" ON public.events;

-- Create secure policies that require authentication for modifications
CREATE POLICY "Authenticated users can create events" 
ON public.events 
FOR INSERT 
TO authenticated
WITH CHECK (true);

CREATE POLICY "Authenticated users can update events" 
ON public.events 
FOR UPDATE 
TO authenticated
USING (true);

CREATE POLICY "Authenticated users can delete events" 
ON public.events 
FOR DELETE 
TO authenticated
USING (true);

-- Keep events publicly viewable (this policy already exists)
-- "Events are viewable by everyone" policy remains unchanged