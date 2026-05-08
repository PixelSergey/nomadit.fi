
-- Lock down write access on public tables. SELECT remains public.
-- The site owner manages content via the Supabase dashboard (service_role bypasses RLS).

-- courses
DROP POLICY IF EXISTS "Authenticated users can create courses" ON public.courses;
DROP POLICY IF EXISTS "Authenticated users can update courses" ON public.courses;
DROP POLICY IF EXISTS "Authenticated users can delete courses" ON public.courses;

-- intro_course
DROP POLICY IF EXISTS "Authenticated users can create intro course" ON public.intro_course;
DROP POLICY IF EXISTS "Authenticated users can update intro course" ON public.intro_course;
DROP POLICY IF EXISTS "Authenticated users can delete intro course" ON public.intro_course;

-- gallery_images
DROP POLICY IF EXISTS "Authenticated users can create gallery images" ON public.gallery_images;
DROP POLICY IF EXISTS "Authenticated users can update gallery images" ON public.gallery_images;
DROP POLICY IF EXISTS "Authenticated users can delete gallery images" ON public.gallery_images;

-- events
DROP POLICY IF EXISTS "Authenticated users can create events" ON public.events;
DROP POLICY IF EXISTS "Authenticated users can update events" ON public.events;
DROP POLICY IF EXISTS "Authenticated users can delete events" ON public.events;

-- Storage bucket policies: drop any permissive write policies
DO $$
DECLARE r record;
BEGIN
  FOR r IN
    SELECT polname FROM pg_policy
    WHERE polrelid = 'storage.objects'::regclass
      AND polcmd IN ('a','w','d')
      AND (
        polname ILIKE '%gallery%' OR polname ILIKE '%skull%'
      )
  LOOP
    EXECUTE format('DROP POLICY IF EXISTS %I ON storage.objects', r.polname);
  END LOOP;
END $$;
