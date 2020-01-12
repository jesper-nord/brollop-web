import React from 'react'
import './link.css'

export const Link = ({ href, onClick, children }) => {
  if (typeof onClick === 'function') {
    return <button role='link' className='link' onClick={onClick}>{children}</button>
  } else {
    return <a href={href} className='link'>{children}</a>
  }
}