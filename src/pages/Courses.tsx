import Navigation from "@/components/Navigation";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlternativeButton } from "@/components/AlternativeButton";
import { Link } from "react-router-dom";
import { supabase } from "@/integrations/supabase/client";
import { useEffect, useState } from "react";
import { Skeleton } from "@/components/ui/skeleton";

interface Course {
  id: string;
  name: string;
  date: string;
  signup_url: string;
  order: number;
}

interface IntroCourse {
  id: string;
  date: string;
  signup_url: string;
}

const Courses = () => {
  const [courses, setCourses] = useState<Course[]>([]);
  const [introCourse, setIntroCourse] = useState<IntroCourse | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchCoursesData = async () => {
      try {
        // Fetch regular courses
        const { data: coursesData, error: coursesError } = await supabase
          .from('courses')
          .select('*')
          .order('order', { ascending: true });

        if (coursesError) throw coursesError;

        // Fetch intro course
        const { data: introCourseData, error: introCourseError } = await supabase
          .from('intro_course')
          .select('*')
          .limit(1)
          .single();

        if (introCourseError && introCourseError.code !== 'PGRST116') {
          throw introCourseError;
        }

        setCourses(coursesData || []);
        setIntroCourse(introCourseData);
      } catch (error) {
        console.error('Error fetching courses:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCoursesData();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-background via-darker-surface to-background">
        <Navigation />
        <div className="pt-24 pb-20">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h1 className="text-4xl md:text-6xl font-bold text-neon-green animate-glitch mb-8">
                Kurssit
              </h1>
              <p className="text-lg text-muted-foreground">
                Kaikki kurssiajankohdat voidaan sopia myös erikseen, <Link to="/contact" className="text-neon-green hover:text-neon-green/80 underline transition-colors">ota yhteyttä hallitukseen</Link>
              </p>
            </div>
            <div className="max-w-4xl mx-auto space-y-5">
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-foreground text-center">
                    Laskuvarjohyppäämisen alkeiskurssi
                  </CardTitle>
                </CardHeader>
                <CardContent className="text-center space-y-6">
                  <Skeleton className="h-6 w-64 mx-auto" />
                  <Skeleton className="h-12 w-32 mx-auto" />
                </CardContent>
              </Card>
              <Card className="bg-card/50 backdrop-blur-sm border-border/50">
                <CardHeader>
                  <CardTitle className="text-2xl md:text-3xl font-bold text-foreground text-center">
                    Kurssit kelppareille
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="space-y-4">
                    {[1, 2, 3, 4].map((i) => (
                      <div key={i} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 rounded-lg bg-background/30 border border-border/30">
                        <div className="flex-1">
                          <Skeleton className="h-5 w-48 mb-2" />
                          <Skeleton className="h-4 w-36" />
                        </div>
                        <Skeleton className="h-10 w-24" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-darker-surface to-background">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-neon-green animate-glitch mb-8">
              Kurssit
            </h1>
            <p className="text-lg text-muted-foreground">
              Kaikki kurssiajankohdat voidaan sopia myös erikseen, <Link to="/contact" className="text-neon-green hover:text-neon-green/80 underline transition-colors">ota yhteyttä hallitukseen</Link>
            </p>
          </div>

          <div className="max-w-4xl mx-auto space-y-5">
            {/* Alkeiskurssit Section */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-foreground text-center">
                  Laskuvarjohyppäämisen alkeiskurssi
                </CardTitle>
              </CardHeader>
              <CardContent className="text-center space-y-6">
                <p className="text-lg text-muted-foreground">
                  Seuraava alkeiskurssi: {introCourse?.date || '??.??.????'}
                </p>
                <AlternativeButton 
                  variant="hero" 
                  size="lg"
                  disabled={!introCourse?.signup_url || introCourse.signup_url === '#'}
                  onClick={() => {
                    if (introCourse?.signup_url && introCourse.signup_url !== '#') {
                      window.open(introCourse.signup_url, '_blank');
                    }
                  }}
                >
                  Ilmoittaudu
                </AlternativeButton>
              </CardContent>
            </Card>

            {/* Kurssit kelppareille Section */}
            <Card className="bg-card/50 backdrop-blur-sm border-border/50">
              <CardHeader>
                <CardTitle className="text-2xl md:text-3xl font-bold text-foreground text-center">
                  Kurssit kelppareille
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-4">
                  {courses.map((course) => (
                    <div key={course.id} className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 rounded-lg bg-background/30 border border-border/30">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground">{course.name}</h3>
                        <p className="text-muted-foreground">{course.date}</p>
                      </div>
                      <AlternativeButton 
                        variant="hero" 
                        size="default"
                        disabled={!course.signup_url || course.signup_url === '#'}
                        onClick={() => {
                          if (course.signup_url && course.signup_url !== '#') {
                            window.open(course.signup_url, '_blank');
                          }
                        }}
                      >
                        Ilmoittaudu
                      </AlternativeButton>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Courses;