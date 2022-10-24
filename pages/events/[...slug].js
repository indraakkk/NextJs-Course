import { Fragment } from "react";
import ErrorAlert from "../../components/events/error-alert";
import EventList from "../../components/events/event-list";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/button";
import { getFilteredEvents } from "../../helpers/api-util";

function FilteredEventPage(props) {
  const { filteredEvents, hasError, dateFilter } = props;

  if (hasError) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter, Please Adjust Your values!</p>
        </ErrorAlert>
      </Fragment>
    );
  }

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

  const date = new Date(dateFilter.year, dateFilter.month - 1);

  return (
    <Fragment>
      <ResultsTitle date={date} />
      <EventList items={filteredEvents} />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  const { params } = context;
  const filterData = params.slug;
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
    return {
      props: {
        hasError: true,
      },
    };
  }

  const dateFilter = {
    year: numYear,
    month: numMonth,
  };

  const data = await getFilteredEvents(dateFilter);

  return {
    props: {
      filteredEvents: data,
      hasError: false,
      dateFilter: dateFilter,
    },
  };
}

export default FilteredEventPage;
