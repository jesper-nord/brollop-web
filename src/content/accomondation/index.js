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
      <section className='section'>
        <h1>Hitta hit</h1>
        <p>
          Det tar ca 7 minuter att gå från Johannelunds tunnelbanestation. 
          Gå längs spårets riktning över bron och sedan ner till höger, under bron och fortsätt längs vägen. Ni ser slottet och det är även skyltat.
        </p>
      </section>
    </div>
  )
}
