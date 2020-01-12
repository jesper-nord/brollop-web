import React from 'react'
import './information.css'
import '../content.css'
import daniela from '../../images/daniela.jpg'
import thomas from '../../images/thomas.jpg'
import { Link } from '../../components/link'

export const Information = ({ navigate }) => {
  return (
    <div className='content'>
      <section className='section'>
        <h1>Tid och plats</h1>
        <h2>Hesselby Slott</h2>
        <p>Datum: 27/6 2020</p>
        <p>Tid: Klockan 15.00</p>
        <p>Adress: <Link external href='https://goo.gl/maps/gahTqt2hg1eeqbJEA'>Maltesholmsvägen 1, Vällingby</Link></p>
        <h2>Hitta hit</h2>
        <p>
          Det tar ca 7 minuter att gå från Johannelunds tunnelbanestation. 
          Gå längs spårets riktning över bron och sedan ner till höger, under bron och fortsätt längs vägen. Ni ser slottet och det är även skyltat.
          
        </p>
      </section>
      <section className='section'>
        <h1>Boende</h1>
        <p>
          Det finns möjlighet att bo över på slottets hotell. Läs mer under <Link onClick={() => navigate('accomondation')}>boende</Link>.
        </p>
      </section>
      <section className='section'>
        <h1>Klädkod</h1>
        <p><strong>Kavaj</strong></p>
        <p>Det innebär kostym för herrar och klänning eller kjol av finare tyg för damerna.</p>
      </section>
      <section className='section'>
        <h1>Toastmadame &amp; Toastmaster</h1>
        <p>Daniela och Thomas kommer att vara våra eminenta toastmadame och toastmaster för kvällen.</p>
        <p>
          De kommer att hålla i trådarna under middagen och göra sitt bästa för att vi ska få en kväll vi aldrig glömmer.
          Vill ni hålla tal så mailar ni så snart som möjligt till <Link href='mailto:toastmasters@ulrikajesper2020.se'>toastmasters@ulrikajesper2020.se</Link>. 
        </p>
        <p>Tal är underbart! Men försök att hålla det kort, gärna under 3 minuter.</p>
        <p className='presentation'>
          <h2>Daniela</h2>
          <img className='img-presentation' src={daniela} alt='Daniela' />
          <p>
            Daniela är Ulrikas barndomsvän och de gick i skolan tillsammans från årskurs 7. 
            De har gjort mycket roligt tillsammans, bland annat rest till ett flertal länder och varit på ridläger tillsammans.
            Det är tack vare Daniela att bröllopet överhuvudtaget blir av, eftersom hon tog med Jesper till en oktoberfest på Ulrikas jobb där de träffades för första gången. 
            Utöver sin roll som toastmadame är Daniela även Ulrikas brudtärna.
          </p>
        </p>
        <p className='presentation'>
          <h2>Thomas</h2>
          <img className='img-presentation' src={thomas} alt='Thomas' />
          <p>
            Thomas och Jesper har känt varandra i flera år, med ett gemensamt intresse för brädspel, datorer och öl. 
            De har även hunnit med att jobba på två jobb tillsammans i konsultbranchen.
            Utöver sin roll som toastmaster är Thomas även Jespers best man.
          </p>
        </p>
      </section>
      <section className='section'>
        <h1>Presenter</h1>
        <p>
          Den bästa presenten är att ni kommer på vårat bröllop.
        </p>
        <p>
          Vi har redan allt vi behöver i form av prylar och saker, men vill ni ändå ge någonting så tar vi tacksamt emot bidrag till vår smekmånad. 
          Det går bra att överföra till konto <strong>9252 5138791</strong> (SBAB) och kontanter går förstås också bra. 
        </p>
      </section>
      <section className='section'>
        <h1>Barnfritt</h1>
        <p>
          Vi älskar barn men denna dag får de stanna hemma. Barn som ammas är förstås välkomna.      
        </p>
      </section>
    </div>
  )
}
