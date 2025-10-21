-- Add signup_url column to events table
ALTER TABLE public.events 
ADD COLUMN signup_url TEXT;