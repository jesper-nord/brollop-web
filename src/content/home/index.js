import React from 'react'
import './home.css'
import us from '../../images/us.jpg'

export const Home = () => {
  return (
    <div className='content'>
      <p>Vi gifter oss! Välkomna att fira och dela vår kärlek.</p>
      <p>På den här sidan hittar ni all praktisk information ni behöver. Vi hoppas att träffa er i juni.</p>
      <img src={us} className='us' alt='Jesper och Ulrika' />
    </div>
  )
}
