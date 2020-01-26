import React from 'react'
import { Link } from '../../components/link'
import '../content.css'

export const Accomondation = () => {
  return (
    <div className='content'>
      <section className='section'>
        <h1>Boende</h1>
        <p>
          Det finns möjlighet att boka övernattning på slottets hotell, och vi blir självklart väldigt glada 
          om ni skulle välja att stanna över natten. 
          På <Link external href='https://www.hesselbyslott.se/hotell/'>Hesselby slotts hemsida</Link> går det att läsa mer om rummen och boka.
        </p>
      </section>
    </div>
  )
}
