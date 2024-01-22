import Link from 'next/link';

export default function MealsPage() {
  return (
    <main>
      <h1>Blog Page</h1>

      <p>
        <Link href="/meals/burger">New Blog</Link>
      </p>
      <p>
        <Link href="/meals/not-burger">News!</Link>
      </p>
    </main>
  );
}
