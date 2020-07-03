import React from 'react'
import { Link } from '../../components'

export const Accomondation = () => {
  return (
    <article>
      <section>
        <h1>Boende</h1>
        <p>
          Det finns möjlighet att boka övernattning på slottets hotell, och vi blir självklart väldigt glada 
          om ni skulle välja att stanna över natten och sedan äta frukost tillsammans dagen efter.
        </p>
        <br />
        <p>
          För att boka rum online går ni in på <Link external href='https://boka.hesselbyslott.se/se/campaign/campaign-details/764edc54-18af-4b12-90fe-13f2d4bf5e79'>Hesselby slotts bokningssida</Link> och anger koden <strong>ULRIKAJESPER</strong>.
        </p>
        <p>
          Det går även bra att maila bokning till <Link href='mailto:stay@hesselbyslott.se'>stay@hesselbyslott.se</Link> eller ringa <Link href='tel:+4684455140'>08 445 51 40</Link>.
          Om ni ringer eller mailar, uppge att ni är inbjudna till vårt bröllop så hjälper de er med bokningen.
        </p>
        <br />
        <p>Incheckning sker klockan <strong>14.00</strong> och utcheckning är senast klockan <strong>12.00</strong> på söndagen. Frukosten serveras mellan 09-11.</p>
      </section>
      <section>
        <h1>Hitta hit</h1>
        <h2>Tunnelbana</h2>
        <p>
          Det tar 5-10 minuter att gå från Johannelunds tunnelbanestation.
          Gå längs spårets riktning över bron och sedan ner till höger, gå under bron och fortsätt rakt fram över vägen. Första gatan till vänster leder in till slottsområdet.
        </p>
        <h2>Bil</h2>
        <p>
          Gratis gästparkering finns på två ställen vid infarten till slottet.
        </p>
      </section>
      <section>
        <p>
          <iframe
            src='https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d8132.179561869568!2d17.854755!3d59.3655897!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xdd0303435f53f7ec!2sHesselby%20Slott!5e0!3m2!1ssv!2sse!4v1580044827451!5m2!1ssv!2sse' 
            frameBorder='0'
            width='100%'
            height='420px'
            title='Karta Hesselby Slott'
          />
        </p>
      </section>
    </article>
  )
}
