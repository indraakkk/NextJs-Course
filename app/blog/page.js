import Link from 'next/link';

export default function BlogPage() {
  return (
    <main>
      <h1>Blog Page</h1>
      <Link href="/blog/new-blog">New Blog</Link>
      <Link href="/blog/news">News!</Link>
    </main>
  );
}
