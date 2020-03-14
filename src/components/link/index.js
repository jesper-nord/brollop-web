import React from 'react'
import styles from './link.module.scss'

export const Link = ({ href, children, external = false }) => {
  return <a href={href} className={styles.link} target={external ? '_blank' : '_self'} rel='noopener noreferrer'>{children}</a>
}