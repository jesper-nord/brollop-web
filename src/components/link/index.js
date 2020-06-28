import React from 'react'
import styles from './link.module.scss'
import externalLinkIcon from '../../images/external-link.png'

export const Link = ({ href, children, external = false }) => {
  return (
    <>
      <a href={href} className={styles.link} target={external ? '_blank' : '_self'} rel='noopener noreferrer'>
        {children}
      </a>
      {external && <img style={{ opacity: 0.7, width: 14, height: 14, margin: '0 0 -2px 3px' }} src={externalLinkIcon} alt='Extern' />}
    </>
  )
}