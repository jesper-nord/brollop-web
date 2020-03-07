import React from 'react'
import './link.css'

export const Link = ({ href, children, external = false }) => {
  return <a href={href} className='link' target={external ? '_blank' : '_self'} rel='noopener noreferrer'>{children}</a>
}