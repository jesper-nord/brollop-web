import React from 'react'
import './home.css'
import '../content.css'
import us from '../../images/us@0.15.jpeg'

export const Home = () => {
  return (
    <div className='content'>
      <h1>Välkommen till Ulrika och Jespers bröllop!</h1>
      <p>Vi hoppas att ni vill fira och dela vår kärlek i juni, när Forsgren och Lehtinen blir Nord.</p>
      <p>På den här sidan hittar ni all information ni behöver inför bröllopet.</p>
      <img src={us} className='us image-border' alt='Jesper och Ulrika, 2/5 2019' />
      <p className='img-text'>New York 2/5 2019, dagen då vi förlovade oss.</p>
    </div>
  )
}
