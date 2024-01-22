import { Link } from 'react-router-dom';
import classes from './post.module.css';

export default function Post(props) {
  const { id, author, body } = props;

  return (
    <li className={classes.post}>
      <Link to={id}>
        <p className={classes.author}>{author}</p>
        <p className={classes.text}>{body}</p>
      </Link>
    </li>
  );
}
