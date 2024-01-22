import { Outlet } from 'react-router-dom';
import PostsList from '../components/post-lists';

export default function Posts() {
  return (
    <>
      <Outlet />
      <main>
        <PostsList />
      </main>
    </>
  );
}
