import { useState } from 'react';
import { Link, redirect, Form } from 'react-router-dom';
import Modal from '../components/modal';

import classes from './new-post.module.css';

export default function NewPost() {
  return (
    <Modal>
      <Form method="POST" className={classes.form}>
        <p>
          <label htmlFor="body">Text</label>
          <textarea id="body" name="body" rows="3" required />
        </p>
        <p>
          <label htmlFor="author">Name</label>
          <input id="author" name="author" required />
        </p>
        <div className={classes.actions}>
          <Link to="/" type="button">
            Cancel
          </Link>
          <button type="">Submit</button>
        </div>
      </Form>
    </Modal>
  );
}

export async function action({ request }) {
  const formData = await request.formData();
  const postData = Object.fromEntries(formData);

  await fetch('http://localhost:8080/posts', {
    method: 'POST',
    body: JSON.stringify(postData),
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return redirect('/');
}
