import React from 'react';
import styles from './divider.module.scss';
import divider from '../../images/divider.png';

const Divider = () => (
  <img src={divider} className={styles.divider} alt="" />
);

export { Divider };
