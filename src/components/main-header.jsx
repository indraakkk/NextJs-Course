import { MdPostAdd, MdMessage } from 'react-icons/md';
import { Link } from 'react-router-dom';

import classes from './main-header.module.css';

export default function MainHeader({ onCreatePost }) {
  return (
    <header className={classes.header}>
      <h1 className={classes.logo}>
        <MdMessage />
        React Poster
      </h1>
      <p>
        <Link to="/create-post" className={classes.button}>
          <MdPostAdd size={18} /> New Post
        </Link>
      </p>
    </header>
  );
}
