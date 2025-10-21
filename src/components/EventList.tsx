import { useState, useEffect } from "react";
import { supabase } from "@/integrations/supabase/client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { AlternativeButton } from "@/components/AlternativeButton";
import { Calendar, Clock, MapPin } from "lucide-react";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

interface Event {
  id: string;
  title: string;
  description: string | null;
  event_date: string;
  event_time: string | null;
  location: string | null;
  is_past: boolean;
  signup_url: string | null;
}

const EventList = () => {
  const [events, setEvents] = useState<Event[]>([]);
  const [loading, setLoading] = useState(true);
  const [isPastOpen, setIsPastOpen] = useState(false);

  useEffect(() => {
    fetchEvents();
  }, []);

  const fetchEvents = async () => {
    try {
      const { data, error } = await supabase
        .from('events')
        .select('*')
        .order('sort_datetime', { ascending: false });

      if (error) throw error;
      setEvents(data || []);
    } catch (error) {
      console.error('Error fetching events:', error);
    } finally {
      setLoading(false);
    }
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

  const upcomingEvents = events.filter(event => !event.is_past);
  const pastEvents = events.filter(event => event.is_past);

  const renderEvent = (event: Event) => (
    <Card key={event.id} className="bg-card/50 backdrop-blur-sm border-border/50 hover:bg-card/60 transition-colors">
      <CardHeader>
        <CardTitle className="text-2xl md:text-3xl font-bold text-foreground text-center">
          {event.title}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {event.description && (
          <p className="text-lg text-muted-foreground text-center break-words overflow-wrap-anywhere">
            {event.description}
          </p>
        )}
        
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 p-4 rounded-lg bg-background/30 border border-border/30">
          <div className="space-y-2">
            <div className="flex items-center gap-3 text-lg text-foreground">
              <Calendar className="h-5 w-5 text-neon-green" />
              <span className="font-semibold">{event.event_date}</span>
            </div>
            
            {event.event_time && (
              <div className="flex items-center gap-3 text-lg text-muted-foreground">
                <Clock className="h-5 w-5 text-neon-green" />
                <span>{event.event_time}</span>
              </div>
            )}
            
            {event.location && (
              <div className="flex items-center gap-3 text-lg text-muted-foreground">
                <MapPin className="h-5 w-5 text-neon-green" />
                <span>{event.location}</span>
              </div>
            )}
          </div>
          
          {!event.is_past && event.signup_url && event.signup_url !== '#' && (
            <AlternativeButton 
              variant="hero" 
              size="default"
              onClick={() => window.open(event.signup_url!, '_blank')}
            >
              Ilmoittaudu
            </AlternativeButton>
          )}
        </div>
      </CardContent>
    </Card>
  );

  return (
    <div className="space-y-8">
      {/* Upcoming Events Section */}
      <div className="space-y-5">
        {upcomingEvents.length === 0 ? (
          <Card className="bg-card/50 backdrop-blur-sm border-border/50">
            <CardContent className="pt-6 text-center">
              <p className="text-lg text-muted-foreground">Ei tulevia tapahtumia tällä hetkellä.</p>
            </CardContent>
          </Card>
        ) : (
          upcomingEvents.map(renderEvent)
        )}
      </div>

      {/* Past Events Collapsible Section */}
      {pastEvents.length > 0 && (
        <Collapsible open={isPastOpen} onOpenChange={setIsPastOpen}>
          <CollapsibleTrigger asChild>
            <AlternativeButton 
              variant="hero" 
              size="lg" 
              className="w-full text-lg"
            >
              Menneet tapahtumat {isPastOpen ? '▲' : '▼'}
            </AlternativeButton>
          </CollapsibleTrigger>
          <CollapsibleContent className="space-y-5 mt-5">
            {pastEvents.map(renderEvent)}
          </CollapsibleContent>
        </Collapsible>
      )}
    </div>
  );
};

export default EventList;