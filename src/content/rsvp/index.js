import React from 'react'
import { Link } from '../../components'

export const RSVP = () => {
  return (
    <div className='content'>
      <section className='section'>
        <h1>O.S.A.</h1>
        <p>O.S.A. senast den 4 maj 2020 till <Link href='mailto:osa@ulrikajesper2020.se'>osa@ulrikajesper2020.se</Link>.</p>
        <p>Meddela gärna i O.S.A. om ni planerar att sova över på slottets hotell.</p>
        <h2>Allergier</h2>
        <p>Glöm inte att meddela eventuella allergier i samband med att du O.S.A:r</p>
      </section>
    </div>
  )
}
