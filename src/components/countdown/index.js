import React from 'react'
import styles from './countdown.module.scss'
import { useCountDown } from '../../hooks/useCountDown'

export const Countdown = ({ to }) => {
  const [ days, hours, minutes ] = useCountDown(to)

  const showDays = days > 0
  const showHours = showDays || hours > 0
  const showMinutes = showHours || minutes > 0

  return (
    <div className={styles.countdown}>
      {showDays && (
        <div className={styles.unit}>
          <p className={styles.header}>{days}</p>
          <p>{days === 1 ? 'dag' : 'dagar'}</p>
        </div>
      )}
      {showHours && (
        <div className={styles.unit}>
          <p className={styles.header}>{hours}</p>
          <p>{hours === 1 ? 'timme' : 'timmar'}</p>
        </div>
      )}
      {showMinutes && (
        <div className={styles.unit}>
          <p className={styles.header}>{minutes}</p>
          <p>{minutes === 1 ? 'minut' : 'minuter'}</p>
        </div>
      )}
    </div>
  )
}