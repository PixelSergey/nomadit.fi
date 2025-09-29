-- Create table for regular courses
CREATE TABLE public.courses (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  name TEXT NOT NULL,
  date TEXT NOT NULL,
  signup_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create table for intro course (alkeiskurssi)
CREATE TABLE public.intro_course (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  date TEXT NOT NULL,
  signup_url TEXT NOT NULL,
  created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
  updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable Row Level Security
ALTER TABLE public.courses ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.intro_course ENABLE ROW LEVEL SECURITY;

-- Create policies for public viewing
CREATE POLICY "Courses are viewable by everyone" 
ON public.courses 
FOR SELECT 
USING (true);

CREATE POLICY "Intro course is viewable by everyone" 
ON public.intro_course 
FOR SELECT 
USING (true);

-- Create policies for authenticated users to manage data
CREATE POLICY "Authenticated users can create courses" 
ON public.courses 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Authenticated users can update courses" 
ON public.courses 
FOR UPDATE 
USING (true);

CREATE POLICY "Authenticated users can delete courses" 
ON public.courses 
FOR DELETE 
USING (true);

CREATE POLICY "Authenticated users can create intro course" 
ON public.intro_course 
FOR INSERT 
WITH CHECK (true);

CREATE POLICY "Authenticated users can update intro course" 
ON public.intro_course 
FOR UPDATE 
USING (true);

CREATE POLICY "Authenticated users can delete intro course" 
ON public.intro_course 
FOR DELETE 
USING (true);

-- Create triggers for automatic timestamp updates
CREATE TRIGGER update_courses_updated_at
BEFORE UPDATE ON public.courses
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

CREATE TRIGGER update_intro_course_updated_at
BEFORE UPDATE ON public.intro_course
FOR EACH ROW
EXECUTE FUNCTION public.update_updated_at_column();

-- Insert sample data
INSERT INTO public.courses (name, date, signup_url) VALUES 
('Yöhyppykurssi', 'seuraava yökurssi ??.??.????', '#'),
('Advanced Navigator Handling -kurssi', 'seuraava navikurssi ??.??.????', '#'),
('Offarikurssi', 'seuraava offarikurssi ??.??.????', '#'),
('Kovien ylätuulien kurssi', 'Seuraava tuulikurssi ??.??.????', '#');

INSERT INTO public.intro_course (date, signup_url) VALUES 
('??.??.????', '#');