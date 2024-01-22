import { useEffect, useState } from 'react';

import Post from './post';
import classes from './post-lists.module.css';
import { useLoaderData } from 'react-router-dom';

export default function PostsList({ isPosting, onStopPosting }) {
  const posts = useLoaderData();

  return (
    <>
      {posts.length > 0 && (
        <ul className={classes.posts}>
          {posts.map((v, i) => (
            <Post key={i} id={v.id} author={v.author} body={v.body} />
          ))}
        </ul>
      )}

      {posts.length === 0 && (
        <div style={{ textAlign: 'center', color: 'white' }}>
          <h2>There are not posts yet.</h2>
          <p>Start adding some!</p>
        </div>
      )}
    </>
  );
}
