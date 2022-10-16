import { useRouter } from 'next/router';
import Link from 'next/link';

function ClientsPage() {
  const router = useRouter();
  const pwd = router.pathname;
  const clients = [
    { id: 'in', name: 'indra' },
    { id: 'put', name: 'putra' },
  ];
  return (
    <div>
      <h1>The Clients Page</h1>
      <ul>
        {clients.map((client) => (
          <li key={client.id}>
            <Link
              href={{
                pathname: `${pwd}/[id]`,
                query: { id: client.id },
              }}
            >
              {client.name}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ClientsPage;
