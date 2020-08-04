import React from 'react';
import { sv } from 'date-fns/esm/locale';
import { format } from '../../util/date';
import styles from './header.module.scss';
import { useLazyLoad } from '../../hooks/useLazyLoad';
import { useRouting } from '../../hooks/useRouting';
import banner from '../../images/hesselby-slott.jpg';
import { WEDDING_DATE } from '../../util/constants';

const Header = () => {
  const { navigate } = useRouting();
  const headerLoaded = useLazyLoad(banner);

  const goHome = () => navigate('home');

  return (
    <header
      className={[styles.header, headerLoaded && styles.loaded].join(' ')}
      style={{ backgroundImage: headerLoaded && `url(${headerLoaded})` }}
    >
      <div className={styles.headerTitleHolder}>
        <span role="heading" aria-level="1" onClick={goHome} className={styles.headerTitle}>Ulrika &amp; Jesper</span>
        <span className={styles.headerSubtitle}>{format(WEDDING_DATE, 'PPP', { locale: sv })}</span>
      </div>
    </header>
  );
};

export { Header };
