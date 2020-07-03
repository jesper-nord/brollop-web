import React from 'react'
import { Link } from '../../components'
import { EMAILS } from '../../constants'

export const RSVP = () => {
  return (
    <article>
      <section>
        <h1>O.S.A.</h1>
        <p>O.S.A. senast den 26 juli 2020 till <Link href={`mailto:${EMAILS.RSVP}`}>{EMAILS.RSVP}</Link>.</p>
        <p>Meddela gärna i O.S.A. om ni planerar att sova över på slottets hotell.</p>
      </section>
      <section>
        <h1>Matallergier</h1>
        <p>Glöm inte att meddela eventuella allergier i samband med att du O.S.A:r</p>
      </section>
    </article>
  )
}
