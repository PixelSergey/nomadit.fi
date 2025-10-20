-- Add order column to courses table
ALTER TABLE public.courses 
ADD COLUMN "order" INTEGER NOT NULL DEFAULT 0;

-- Add index for better sorting performance
CREATE INDEX idx_courses_order ON public.courses("order");