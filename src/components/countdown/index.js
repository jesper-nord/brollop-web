import React from 'react'
import styles from './countdown.module.scss'
import { useCountDown } from '../../hooks/useCountDown'

export const Countdown = ({ toDate }) => {
  const [ days, hours, minutes ] = useCountDown(toDate)

  return (
    <div className={styles.countdown}>
      <div className={styles.unit}>
        <p className={styles.header}>{days}</p>
        <p>{days === 1 ? 'dag' : 'dagar'}</p>
      </div>
      <div className={styles.unit}>
        <p className={styles.header}>{hours}</p>
        <p>{hours === 1 ? 'timme' : 'timmar'}</p>
      </div>
      <div className={styles.unit}>
        <p className={styles.header}>{minutes}</p>
        <p>{minutes === 1 ? 'minut' : 'minuter'}</p>
      </div>
    </div>
  )
}