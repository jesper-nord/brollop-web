import React from 'react'
import '../content.css'
import { Link } from '../../components/link'

export const Information = ({ navigate }) => {
  return (
    <div className='content'>
      <section className='section'>
        <h1>Tid och plats</h1>
        <h2>Hesselby Slott</h2>
        <p><strong>Datum:</strong> 27/6 2020</p>
        <p><strong>Tid:</strong> Klockan 15:00-03:00</p>
        <p><strong>Adress:</strong> <Link external href='https://goo.gl/maps/gahTqt2hg1eeqbJEA'>Maltesholmsvägen 1, Vällingby</Link></p>
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
        <h2>Kavaj</h2>
        <p>Det innebär kostym för herrar och klänning eller kjol av finare tyg för damerna.</p>
        <br />
        <p>Vigseln kommer att hållas utomhus och middagen kommer att vara i ett partytält, så ta med kläder efter väder.</p>
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
