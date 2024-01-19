import classes from './new-post.module.css';

export default function NewPost({ onBodyChange, onAuthorChange, onCancel }) {
  const changeBodyHandler = (event) => {
    setEnteredBody(event.target.value);
  };

  return (
    <form className={classes.form}>
      <p>
        <label htmlFor="body">Text</label>
        <textarea id="body" rows="3" required onChange={onBodyChange} />
      </p>
      <p>
        <label htmlFor="author">Name</label>
        <input id="author" required onChange={onAuthorChange} />
      </p>
      <div className={classes.actions}>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
        <button type="">Submit</button>
      </div>
    </form>
  );
}
