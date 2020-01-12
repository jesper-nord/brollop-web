import React from 'react'
import './shortinfo.css'
import { useCountDown } from '../../hooks/useCountDown'

const weddingDate = new Date('2020-06-27T15:00:00')

export const ShortInfo = () => {
  const [ days, hours ] = useCountDown(weddingDate)

  return (
    <section className='short-info'>
      <p className='location'>Hesselby Slott</p>
      <p className='date'>Lördag den 27 juni, 2020</p>

      <div className='timer'>
        <div className='timer-content'>
          <p className='timer-header'>{days}</p>
          <p>dagar</p>
        </div>
        <div className='timer-content'>
          <p className='timer-header'>{hours}</p>
          <p>timmar</p>
        </div>
      </div>
    </section>
  )
}