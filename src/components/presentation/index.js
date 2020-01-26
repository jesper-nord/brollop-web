import React from 'react'
import './presentation.css'

const Presentation = ({ image, title, children}) => {
  return (
    <div className='presentation'>
      <div className='presentation-left'>
        <h2>{title}</h2>
        <img className='presentation-img image-border' src={image} alt={title} />
      </div>
      <div className='presentation-right'>
        {children}
      </div>
    </div>
  )
}

export { Presentation }