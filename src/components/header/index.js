import React from 'react';
import { sv } from 'date-fns/esm/locale';
import { format } from '../../util/date';
import styles from './header.module.scss';
import { useLazyLoad } from '../../hooks/useLazyLoad';
import banner from '../../images/hesselby-slott.jpg';
import { WEDDING_DATE } from '../../constants';

const Header = () => {
  const headerLoaded = useLazyLoad(banner);
  const backgroundStyle = { backgroundImage: headerLoaded && `url(${headerLoaded})` };

  return (
    <header className={[styles.header, headerLoaded && styles.loaded].join(' ')} style={backgroundStyle}>
      <div className={styles.headerTitleHolder}>
        <span className={styles.headerTitle}>Ulrika &amp; Jesper</span>
        <span className={styles.headerSubtitle}>{format(WEDDING_DATE, 'PPP', { locale: sv })}</span>
      </div>
    </header>
  );
};

export { Header };
