import Link from 'next/link';
import { useRouter } from 'next/router';

function EventsPage() {
  const router = useRouter();
  const pwd = router.pathname;
  return (
    <div>
      <h1>The All Events Page</h1>
      <ul>
        <li>
          <Link
            href={{
              pathname: `${pwd}/[id]`,
              query: { id: 'event1' },
            }}
          >
            Event Detail
          </Link>
        </li>
        <li>
          <Link href={`${pwd}/2020/01/next-js-event`}>Filtered Events</Link>
        </li>
      </ul>
    </div>
  );
}

export default EventsPage;
