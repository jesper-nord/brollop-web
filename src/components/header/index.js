import React from 'react'
import './header.css'

const Header = () => {
  return (
    <header className='header'>
      <div className='header-title-holder'>
        <span className='header-title'>Ulrika &amp; Jesper</span>
        <span className='header-subtitle'>27 juni 2020</span>
      </div>
    </header>
  )
}

export { Header }