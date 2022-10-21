import { useRouter } from "next/router";
import { Fragment, useEffect } from "react";
import ErrorAlert from "../../components/events/error-alert";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";

function FilteredEventPage(props) {
  const router = useRouter();

  const filterData = router.query.slug;

  if (!filterData) {
    return <p className="center">Loading</p>;
  }

  const filteredYear = filterData[0];
  const filteredMonth = filterData[1];
  const numYear = +filteredYear;
  const numMonth = +filteredMonth;

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear > 2030 ||
    numMonth < 1 ||
    filterData.length != 2
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter, Please Adjust Your values!</p>
        </ErrorAlert>
      </Fragment>
    );
  }

  const { filteredEvents } = props;

  if (!filteredEvents || filteredEvents.length === 0) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>No events found for the chosen filter</p>
        </ErrorAlert>
        <div className="center">
          <Button link="/events">Show All Events</Button>
        </div>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export default FilteredEventPage;

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

export async function getServerSideProps(context) {
  const { params } = context;
  const year = +params.slug[0];
  const month = +params.slug[1];
  const data = await getData();

  const filteredEvents = data.filter((event) => {
    const eventDate = new Date(event.date);
    return (
      eventDate.getFullYear() === year && eventDate.getMonth() === month - 1
    );
  });

  if (!filteredEvents) {
    return { notFound: true };
  }

  return {
    props: {
      filteredEvents: filteredEvents,
    },
  };
}
