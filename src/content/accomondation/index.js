import React from 'react'
import { Link } from '../../components'

export const Accomondation = () => {
  return (
    <article>
      <section>
        <h1>Boende</h1>
        <p>
          Det finns möjlighet att boka övernattning på slottets hotell, och vi blir självklart väldigt glada 
          om ni skulle välja att stanna över natten och sedan äta frukost tillsammans.
          För att boka rum mailar ni till <Link href='mailto:stay@hesselbyslott.se'>stay@hesselbyslott.se</Link> eller ringer <Link href='tel:+4684455140'>08 445 51 40</Link>.
          Uppge att ni är inbjudna till vårt bröllop så hjälper de er med bokningen. Incheckning sker klockan 15.00.
        </p>
        <p>På <Link external href='https://www.hesselbyslott.se/'>Hesselby slotts hemsida</Link> kan ni läsa mer om slottet och rummen.</p>
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
          Gästparkering för gäster till slottet finns på två ställen vid infarten till slottet.
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
