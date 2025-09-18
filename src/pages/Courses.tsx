import Navigation from "@/components/Navigation";

const Courses = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-darker-surface to-background">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-neon-green animate-glitch mb-8">
            Kurssit
          </h1>
          <p className="text-xl text-muted-foreground">
            Tulossa pian...
          </p>
        </div>
      </div>
    </div>
  );
};

export default Courses;