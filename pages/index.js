import { useEffect, useState } from "react";
import EventList from "../components/events/event-list";

function HomePage() {
  const [featuredEvents, setFeaturedEvents] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const url = `${process.env.NEXT_PUBLIC_FIREBASE_URL}/events.json`;
  useEffect(() => {
    setIsLoading(true);
    fetch(url)
      .then((r) => r.json())
      .then((data) => {
        const transformFeaturedEvents = [];

        for (const key in data) {
          if (data[key].isFeatured) {
            transformFeaturedEvents.push({
              id: key,
              title: data[key].title,
              description: data[key].description,
              location: data[key].location,
              date: data[key].date,
              image: data[key].image,
              isFeatured: data[key].isFeatured,
            });
            setIsLoading(false);
            setFeaturedEvents(transformFeaturedEvents);
          }
        }
      });
  }, []);

  if (isLoading) {
    return <p>Now Loading...</p>;
  }

  if (!featuredEvents) {
    return <p>No data yet</p>;
  }

  return (
    <div>
      <EventList items={featuredEvents} />
    </div>
  );
}

export default HomePage;
