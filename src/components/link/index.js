import React from 'react'
import './link.css'

export const Link = ({ href, onClick, children, external = false }) => {
  if (typeof onClick === 'function') {
    return <button role='link' className='link' onClick={onClick}>{children}</button>
  } else {
    return <a href={href} className='link' target={external ? '_blank' : '_self'} rel='noopener noreferrer'>{children}</a>
  }
}