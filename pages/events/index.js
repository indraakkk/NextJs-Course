import { useRouter } from "next/router";
import { Fragment } from "react";
import EventList from "../../components/events/event-list";
import EventsSearch from "../../components/events/events-search";

function EventsPage(props) {
  const router = useRouter();

  function findEventHandler(year, month) {
    const fullPath = `/events/${year}/${month}`;
    router.push(fullPath);
  }

  return (
    <Fragment>
      <EventsSearch onSearch={findEventHandler} />
      <EventList items={props.events} />
    </Fragment>
  );
}

export default EventsPage;

async function getData() {
  const url = `${process.env.NEXT_PUBLIC_FIREBASE_URL}/events.json`;
  const filtered = await fetch(url)
    .then((r) => r.json())
    .then((data) => {
      if (data) {
        const transformEvents = [];
        for (const key in data) {
          transformEvents.push({
            id: key,
            title: data[key].title,
            description: data[key].description,
            location: data[key].location,
            date: data[key].date,
            image: data[key].image,
            isFeatured: data[key].isFeatured,
          });
        }
        return transformEvents;
      }
    });

  return filtered;
}

export async function getServerSideProps() {
  const data = await getData();

  return {
    props: {
      events: data,
    },
  };
}
