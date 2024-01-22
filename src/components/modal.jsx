import { useNavigate } from 'react-router-dom';

import classes from './modal.module.css';

export default function Modal({ children }) {
  const navigate = useNavigate();

  const closeHandler = () => {
    navigate('..');
  };

  return (
    <>
      <div className={classes.backdrop} onClick={closeHandler}></div>
      <dialog open className={classes.modal}>
        {children}
      </dialog>
    </>
  );
}
