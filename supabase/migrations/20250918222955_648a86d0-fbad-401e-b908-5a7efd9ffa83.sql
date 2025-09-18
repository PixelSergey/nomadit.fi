-- Remove end_time column and convert fields to text
ALTER TABLE public.events DROP COLUMN end_time;

-- Rename start_time to event_time and convert to text
ALTER TABLE public.events RENAME COLUMN start_time TO event_time;
ALTER TABLE public.events ALTER COLUMN event_time TYPE TEXT;

-- Convert event_date to text for flexible input
ALTER TABLE public.events ALTER COLUMN event_date TYPE TEXT;

-- Update sample data to use text format
UPDATE public.events SET 
  event_date = '15.03.2024',
  event_time = '09:00-17:00'
WHERE title = 'Hyppytapahtuma';

UPDATE public.events SET 
  event_date = '22.03.2024',
  event_time = '10:00-16:00'
WHERE title = 'Peruskurssi alkaa';

UPDATE public.events SET 
  event_date = '29.03.2024',
  event_time = '09:00-18:00'
WHERE title = 'AFF-kurssi';

UPDATE public.events SET 
  event_date = '08.03.2024',
  event_time = '18:00-20:00'
WHERE title = 'Kerhoilta';