-- Add is_past column to events table
ALTER TABLE public.events 
ADD COLUMN is_past boolean NOT NULL DEFAULT false;