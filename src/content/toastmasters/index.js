import React from 'react'
import { Link, Presentation } from '../../components'
import daniela from '../../images/daniela.jpg'
import thomas from '../../images/thomas.jpg'
import sharedStyles from '../content.module.scss'

export const Toastmasters = () => {
  return (
    <div className={sharedStyles.content}>
      <section>
        <h1>Toastmadame &amp; Toastmaster</h1>
        <p>Daniela och Thomas kommer att vara våra eminenta toastmadame och toastmaster för kvällen. De kommer att hålla i trådarna under middagen och göra sitt bästa för att vi ska få en kväll vi aldrig glömmer.</p>
        <br />
        <h2>Tal</h2>
        <p>
          Vill ni hålla tal eller har frågor så mailar ni så snart som möjligt till <Link href='mailto:toastmasters@ulrikajesper2020.se'>toastmasters@ulrikajesper2020.se</Link>. 
        </p>
        <p>Tal är underbart! Men försök att hålla det kort, gärna under 3 minuter.</p>
        <Presentation title='Daniela' image={daniela}>
          <p>
            Daniela (Ela) är Ulrikas barndomsvän och de gick i skolan tillsammans från årskurs 7.
            De har gjort mycket roligt tillsammans, bland annat rest ihop och varit på ridläger.
            Det är tack vare Daniela att bröllopet överhuvudtaget blir av, eftersom hon tog med Jesper till en oktoberfest på Ulrikas jobb där brudparet träffades för första gången. 
          </p>
          <p>
            Utöver sin roll som toastmadame är Daniela även Ulrikas brudtärna.
          </p>
        </Presentation>
        <Presentation title='Thomas' image={thomas}>
          <p>
            Thomas och Jesper har känt varandra i flera år och har ett gemensamt intresse för brädspel, datorspel och bra öl. 
            De har även hunnit med att jobba på två jobb tillsammans i konsultbranchen.
          </p>
          <p>
            Utöver sin roll som toastmaster är Thomas även Jespers best man.
          </p>
        </Presentation>
      </section>
    </div>
  )
}
