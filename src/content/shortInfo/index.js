import React from 'react'
import styles from './shortinfo.module.scss'
import { useCountDown } from '../../hooks/useCountDown'
import { Divider } from '../../components'

const weddingDate = new Date('2020-06-27T15:00:00')

export const ShortInfo = () => {
  const [ days, hours, minutes ] = useCountDown(weddingDate, 20000)

  return (
    <section className={styles.shortInfo}>
      <Divider />
      <p className={styles.location}>Hesselby Slott</p>
      <p className={styles.date}>Lördag den 27 juni, 2020</p>

      <div className={styles.timer}>
        <div className={styles.timerContent}>
          <p className={styles.timerHeader}>{days}</p>
          <p>{days === 1 ? 'dag' : 'dagar'}</p>
        </div>
        <div className={styles.timerContent}>
          <p className={styles.timerHeader}>{hours}</p>
          <p>{hours === 1 ? 'timme' : 'timmar'}</p>
        </div>
        <div className={styles.timerContent}>
          <p className={styles.timerHeader}>{minutes}</p>
          <p>{minutes === 1 ? 'minut' : 'minuter'}</p>
        </div>
      </div>
    </section>
  )
}