import React from 'react'
import { format } from 'date-fns'
import { sv } from 'date-fns/esm/locale'
import styles from './footer.module.scss'
import { Countdown, Divider } from '../../components'
import { WEDDING_DATE } from '../../constants'

export const Footer = () => {
  return (
    <footer>
      <Divider />
      <p className={styles.location}>Hesselby Slott</p>
      <p className={styles.date}>{format(WEDDING_DATE, 'PPPP', { locale: sv })}</p>
      <Countdown to={WEDDING_DATE} />
    </footer>
  )
}