import React from 'react'
import { Link } from '../../components'
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
        <br />
        <iframe
          src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8132.179561869568!2d17.854755!3d59.3655897!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd0303435f53f7ec!2sHesselby%20Slott!5e0!3m2!1ssv!2sse!4v1580044827451!5m2!1ssv!2sse' 
          frameBorder='0'
          width='100%'
          height='420px'
          title='Karta Hesselby Slott'
        />
      </section>
    </div>
  )
}
