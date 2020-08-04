import React from 'react';
import { sv } from 'date-fns/esm/locale';
import { format } from '../../util/date';
import styles from './footer.module.scss';
import { Countdown, Divider } from '../../components';
import { WEDDING_DATE } from '../../util/constants';

export const Footer = () => (
  <footer>
    <Divider />
    <p className={styles.location}>Hesselby Slott</p>
    <p className={styles.date}>{format(WEDDING_DATE, 'PPPP', { locale: sv })}</p>
    <Countdown to={WEDDING_DATE} />
  </footer>
);
