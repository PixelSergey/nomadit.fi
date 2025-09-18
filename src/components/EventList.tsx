import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlternativeButton } from "@/components/AlternativeButton";
import { Calendar, Clock, MapPin } from "lucide-react";
import { format } from "date-fns";

interface Event {
  id: string;
  title: string;
  description: string | null;
  event_date: string;
  start_time: string | null;
  end_time: string | null;
  location: string | null;
}

const EventList = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('event_date', { ascending: true });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
  };

  const formatDate = (dateString: string) => {
    return format(new Date(dateString), 'dd.MM.yyyy');
  };

  const formatTime = (timeString: string | null) => {
    if (!timeString) return null;
    return timeString.slice(0, 5); // Format HH:MM
  };

  if (loading) {
    return (
      <div className="space-y-5">
        {[1, 2, 3].map((i) => (
          <Card key={i} className="bg-card/50 backdrop-blur-sm border-border/50 animate-pulse">
            <CardHeader>
              <div className="h-6 bg-muted rounded w-3/4 mx-auto"></div>
            </CardHeader>
            <CardContent>
              <div className="h-4 bg-muted rounded w-full mb-4"></div>
              <div className="h-10 bg-muted rounded w-32 mx-auto"></div>
            </CardContent>
          </Card>
        ))}
      </div>
    );
  }

  if (events.length === 0) {
    return (
      <Card className="bg-card/50 backdrop-blur-sm border-border/50">
        <CardContent className="pt-6 text-center">
          <p className="text-lg text-muted-foreground">Ei tulevia tapahtumia.</p>
        </CardContent>
      </Card>
    );
  }

  return (
    <div className="space-y-5">
      {events.map((event) => (
        <Card key={event.id} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/60 transition-colors">
          <CardHeader>
            <CardTitle className="text-2xl md:text-3xl font-bold text-foreground text-center">
              {event.title}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {event.description && (
              <p className="text-lg text-muted-foreground text-center">
                {event.description}
              </p>
            )}
            
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 rounded-lg bg-background/30 border border-border/30">
              <div className="space-y-2">
                <div className="flex items-center gap-3 text-lg text-foreground">
                  <Calendar className="h-5 w-5 text-neon-green" />
                  <span className="font-semibold">{formatDate(event.event_date)}</span>
                </div>
                
                {event.start_time && (
                  <div className="flex items-center gap-3 text-lg text-muted-foreground">
                    <Clock className="h-5 w-5 text-neon-green" />
                    <span>
                      {formatTime(event.start_time)}
                      {event.end_time && ` - ${formatTime(event.end_time)}`}
                    </span>
                  </div>
                )}
                
                {event.location && (
                  <div className="flex items-center gap-3 text-lg text-muted-foreground">
                    <MapPin className="h-5 w-5 text-neon-green" />
                    <span>{event.location}</span>
                  </div>
                )}
              </div>
              
              <AlternativeButton variant="hero" size="default">
                Ilmoittaudu
              </AlternativeButton>
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default EventList;