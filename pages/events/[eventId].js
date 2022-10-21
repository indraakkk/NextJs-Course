import { useRouter } from "next/router";
import { Fragment } from "react";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorAlert from "../../components/events/error-alert";

function EventDetailPage(props) {
  const { event } = props;

  if (!event) {
    return (
      <ErrorAlert>
        <p>No event found!</p>
      </ErrorAlert>
    );
  }

  return (
    <Fragment>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={event.title}
      />
      <EventContent>
        <p>{event.description}</p>
      </EventContent>
    </Fragment>
  );
}

export default EventDetailPage;

async function getData(eventId) {
  const url = `${process.env.NEXT_PUBLIC_FIREBASE_URL}/events.json`;
  const filtered = await fetch(url)
    .then((r) => r.json())
    .then((data) => {
      if (data) {
        const transformEvents = {};
        for (const key in data) {
          if (key === eventId) {
            transformEvents.id = key;
            transformEvents.title = data[key].title;
            transformEvents.description = data[key].description;
            transformEvents.location = data[key].location;
            transformEvents.date = data[key].date;
            transformEvents.image = data[key].image;
            transformEvents.isFeatured = data[key].isFeatured;
          }
        }
        return transformEvents;
      }
    });

  return filtered;
}

export async function getServerSideProps(context) {
  const { params } = context;
  const eventId = params.eventId;
  const data = await getData(eventId);

  return {
    props: { event: data },
  };
}
