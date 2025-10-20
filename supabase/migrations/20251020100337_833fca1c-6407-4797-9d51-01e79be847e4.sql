-- Add sort_datetime column to events table for sorting purposes
ALTER TABLE public.events 
ADD COLUMN sort_datetime timestamp with time zone NOT NULL DEFAULT now();