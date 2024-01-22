import { useEffect, useState } from 'react';

import Post from './post';
import NewPost from '../routes/new-post';
import Modal from './modal';
import classes from './post-lists.module.css';

export default function PostsList({ isPosting, onStopPosting }) {
  const [posts, setPosts] = useState([]);
  const [isFetching, setIsFetching] = useState(false);
  const [isErrorFetching, setIsErrorFetching] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      setIsFetching(true);
      const response = await fetch('http://localhost:8080/posts');
      const resData = await response.json();
      if (!response.ok) {
        setIsErrorFetching(true);
        setIsFetching(false);
      }
      setPosts(resData.posts);
      setIsFetching(false);
    };
    fetchPosts();
  }, []);

  return (
    <>
      {!isErrorFetching && !isFetching && posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((v, i) => (
            <Post key={i} author={v.author} body={v.body} />
          ))}
        </ul>
      )}

      {!isErrorFetching && !isFetching && posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are not posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}

      {!isErrorFetching && isFetching && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <p>Loading post...</p>
        </div>
      )}

      {isErrorFetching && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <p>Failed to get posts 🫠</p>
        </div>
      )}
    </>
  );
}
