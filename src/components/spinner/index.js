import React from 'react';
import styles from './spinner.module.scss';

export const Spinner = () => {
  return (
    <div className={styles.spinner}><div></div><div></div><div></div><div></div></div>
  );
}
