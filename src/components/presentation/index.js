import React from 'react'
import styles from './presentation.module.scss'

const Presentation = ({ image, title, children}) => {
  return (
    <div className={styles.presentation}>
      <div className={styles.left}>
        <h2>{title}</h2>
        <img className={[styles.img, 'image-border'].join(' ')} src={image} alt={title} />
      </div>
      <div className={styles.right}>
        {children}
      </div>
    </div>
  )
}

export { Presentation }