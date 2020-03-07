import React from 'react'
import '../content.css'
import { Link } from '../../components'

export const Information = () => {
  return (
    <div className='content'>
      <section className='section'>
        <h1>Tid och plats</h1>
        <h2>Hesselby Slott</h2>
        <p><strong>Datum:</strong> 27 juni 2020</p>
        <p><strong>Tid:</strong> Klockan 15.00-03.00</p>
        <p><strong>Adress:</strong> <Link external href='https://goo.gl/maps/grChjctvGP1JHGzq9'>Maltesholmsvägen 1, Vällingby</Link></p>
      </section>
      <section className='section'>
        <h1>Klädkod</h1>
        <h2>Kavaj</h2>
        <p>Det innebär kostym för herrar och klänning eller kjol av finare tyg för damerna.</p>
        <p>Vigseln kommer att hållas utomhus och middagen kommer att vara i ett partytält, så ta med kläder efter väder.</p>
      </section>
      <section className='section'>
        <h1>Presenter</h1>
        <p>Den bästa presenten är att ni kommer på vårat bröllop!</p>
        <p>
          Vi har redan allt vi behöver i form av prylar och saker, men vill ni ändå ge oss någonting så tar vi tacksamt emot bidrag till vår smekmånad. 
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
