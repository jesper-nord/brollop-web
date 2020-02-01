import React from 'react'
import './shortinfo.css'
import { useCountDown } from '../../hooks/useCountDown'
import { Divider } from '../../components'

const weddingDate = new Date('2020-06-27T15:00:00')

export const ShortInfo = () => {
  const [ days, hours, minutes ] = useCountDown(weddingDate, 20000)

  return (
    <section className='short-info'>
      <Divider />
      <p className='location'>Hesselby Slott</p>
      <p className='date'>Lördag den 27 juni, 2020</p>

      <div className='timer'>
        <div className='timer-content'>
          <p className='timer-header'>{days}</p>
          <p>{days === 1 ? 'dag' : 'dagar'}</p>
        </div>
        <div className='timer-content'>
          <p className='timer-header'>{hours}</p>
          <p>{hours === 1 ? 'timme' : 'timmar'}</p>
        </div>
        <div className='timer-content'>
          <p className='timer-header'>{minutes}</p>
          <p>{minutes === 1 ? 'minut' : 'minuter'}</p>
        </div>
      </div>
    </section>
  )
}