import { useEffect, useState } from "react";
import useSWR from "swr";

function LastSalesPage(props) {
  const [sales, setSales] = useState(props.sales);

  const url = `${process.env.NEXT_PUBLIC_FIREBASE_URL}/sales.json`;

  const fetcher = (api_endpoint) => fetch(api_endpoint).then((r) => r.json());
  const { data, error } = useSWR(url, fetcher);

  useEffect(() => {
    if (data) {
      const transformedSales = [];
      for (const key in data) {
        transformedSales.push({
          id: key,
          username: data[key].username,
          volume: data[key].volume,
        });
      }
      setSales(transformedSales);
    }
  }, [data]);

  if (error) {
    return <p>No data yet</p>;
  }

  if (!data && !sales) {
    return <p>Loading...</p>;
  }

  return (
    <ul>
      {sales.map((sale) => (
        <li key={sale.id}>
          {sale.username} - ${sale.volume}
        </li>
      ))}
    </ul>
  );
}

export async function getStaticProps() {
  const url = `${process.env.NEXT_PUBLIC_FIREBASE_URL}/sales.json`;
  const response = await fetch(url);
  const data = await response.json();

  const transformedSales = [];

  for (const key in data) {
    transformedSales.push({
      id: key,
      username: data[key].username,
      volume: data[key].volume,
    });
  }
  console.log(transformedSales);
  return {
    props: {
      sales: transformedSales,
    },
    // revalidate: 10,
  };
}

export default LastSalesPage;
