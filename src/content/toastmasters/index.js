import React from 'react'
import { Link } from '../../components/link'
import daniela from '../../images/daniela.jpg'
import thomas from '../../images/thomas.jpg'
import './toastmasters.css'
import '../content.css'

export const Toastmasters = () => {
  return (
    <div className='content'>
      <section className='section'>
        <h1>Toastmadame &amp; Toastmaster</h1>
        <p>Daniela och Thomas kommer att vara våra eminenta toastmadame och toastmaster för kvällen. De kommer att hålla i trådarna under middagen och göra sitt bästa för att vi ska få en kväll vi aldrig glömmer.</p>
        <br />
        <p>
          Vill ni hålla tal så mailar ni så snart som möjligt till <Link href='mailto:toastmasters@ulrikajesper2020.se'>toastmasters@ulrikajesper2020.se</Link>. 
        </p>
        <p>Tal är underbart! Men försök att hålla det kort, gärna under 3 minuter.</p>
        <div className='presentation'>
          <h2>Daniela</h2>
          <img className='img-presentation image-border' src={daniela} alt='Daniela' />
          <p>
            Daniela är Ulrikas barndomsvän och de gick i skolan tillsammans från årskurs 7. 
            De har gjort mycket roligt tillsammans, bland annat rest till ett flertal länder och varit på ridläger tillsammans.
            Det är tack vare Daniela att bröllopet överhuvudtaget blir av, eftersom hon tog med Jesper till en oktoberfest på Ulrikas jobb där de träffades för första gången. 
            Utöver sin roll som toastmadame är Daniela även Ulrikas brudtärna.
          </p>
        </div>
        <div className='presentation'>
          <h2>Thomas</h2>
          <img className='img-presentation image-border' src={thomas} alt='Thomas' />
          <p>
            Thomas och Jesper har känt varandra i flera år, med ett gemensamt intresse för brädspel, datorer och öl. 
            De har även hunnit med att jobba på två jobb tillsammans i konsultbranchen.
            Utöver sin roll som toastmaster är Thomas även Jespers best man.
          </p>
        </div>
      </section>
    </div>
  )
}
