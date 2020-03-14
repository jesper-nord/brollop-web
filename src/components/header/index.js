import React from 'react'
import styles from './header.module.scss'
import { useLazyLoad } from '../../hooks/useLazyLoad'
import banner from '../../images/hesselby-slott.jpg'

const Header = () => {
  const headerLoaded = useLazyLoad(banner)

  const backgroundStyle = { backgroundImage: headerLoaded && `url(${headerLoaded})` }

  return (
    <header className={[styles.header, headerLoaded && styles.loaded].join(' ')} style={backgroundStyle}>
      <div className={styles.headerTitleHolder}>
        <span className={styles.headerTitle}>Ulrika &amp; Jesper</span>
        <span className={styles.headerSubtitle}>27 juni 2020</span>
      </div>
    </header>
  )
}

export { Header }