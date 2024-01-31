import React from 'react';

import { ToastContext } from '../ToastProvider';
import Toast from '../Toast';
import styles from './ToastShelf.module.css';

function ToastShelf() {
  const { toasts } = React.useContext(ToastContext);
  return (
    <ol className={styles.wrapper}>
      {toasts.map(({ variant, message }, index) => (
        <li key={index} className={styles.toastWrapper}>
          <Toast toastId={index} variant={variant} message={message} />
        </li>
      ))}
    </ol>
  );
}

export default ToastShelf;
