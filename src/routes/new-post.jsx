import { useState } from 'react';
import { Link, redirect } from 'react-router-dom';
import Modal from '../components/modal';

import classes from './new-post.module.css';

export default function NewPost({ addPost }) {
  const [enteredBody, setEnteredBody] = useState('');
  const [enteredAuthor, setEnteredAuthor] = useState('');

  const bodyChangeHandler = (e) => {
    setEnteredBody(e.target.value);
  };

  const authorChangeHandler = (e) => {
    setEnteredAuthor(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const postData = {
      author: enteredAuthor,
      body: enteredBody,
    };
    console.log(postData);
    // addPost(postData);
    // addPostHandler(postData);
    redirect('..');
  };

  const addPostHandler = (postData) => {
    fetch('http://localhost:8080/posts', {
      method: 'POST',
      body: JSON.stringify(postData),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    setPosts((existingPosts) => [postData, ...existingPosts]);
  };

  return (
    <Modal>
      <form className={classes.form} onSubmit={submitHandler}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" rows="3" required onChange={bodyChangeHandler} />
        </p>
        <p>
          <label htmlFor="author">Name</label>
          <input id="author" required onChange={authorChangeHandler} />
        </p>
        <div className={classes.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          <button type="">Submit</button>
        </div>
      </form>
    </Modal>
  );
}
