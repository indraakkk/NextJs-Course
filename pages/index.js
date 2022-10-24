import EventList from "../components/events/event-list";
import { getFeaturedEvents } from "../helpers/api-util";

function HomePage(props) {
  const { events } = props;

  return (
    <div>
      <EventList items={events} />
    </div>
  );
}

export async function getStaticProps() {
  const events = await getFeaturedEvents();
  return {
    props: {
      events: events,
    },
    revalidate: 1800,
  };
}

export default HomePage;
