import React from 'react'
import './header.css'
import { useLazyLoad } from '../../hooks/useLazyLoad'
import banner from '../../images/hesselby-slott.jpg'

const Header = () => {
  const headerLoaded = useLazyLoad(banner)

  const backgroundStyle = { backgroundImage: headerLoaded ? `url(${headerLoaded})` : '' }

  return (
    <header className={['header', headerLoaded ? 'loaded' : ''].join(' ')} style={backgroundStyle}>
      <div className='header-title-holder'>
        <span className='header-title'>Ulrika &amp; Jesper</span>
        <span className='header-subtitle'>27 juni 2020</span>
      </div>
    </header>
  )
}

export { Header }