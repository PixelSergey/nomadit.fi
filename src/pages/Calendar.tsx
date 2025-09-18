import Navigation from "@/components/Navigation";
import EventList from "@/components/EventList";

const Calendar = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-darker-surface to-background">
      <Navigation />
      <div className="pt-24 pb-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold text-neon-green animate-glitch mb-4">
              Toimintakalenteri
            </h1>
            <p className="text-xl text-muted-foreground">
              Tulevat tapahtumat ja kurssit
            </p>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <EventList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Calendar;