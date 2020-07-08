import React from 'react'
import { format } from 'date-fns'
import { sv } from 'date-fns/esm/locale'
import { Link } from '../../components'
import { WEDDING_DATE, EMAILS } from '../../constants'

export const Information = () => {
  return (
    <article>
      <section>
        <h1>Tid och plats</h1>
        <h2>Hesselby Slott</h2>
        <p><strong>Datum:</strong> {format(WEDDING_DATE, 'PPP', { locale: sv })}</p>
        <p><strong>Tid:</strong> Klockan 14.30-03.00</p>
        <p><strong>Adress:</strong> <Link external href='https://goo.gl/maps/grChjctvGP1JHGzq9'>Maltesholmsvägen 1, Vällingby</Link></p>
      </section>
      <section>
        <h1>Klädkod</h1>
        <h2>Kavaj</h2>
        <p>Det innebär kostym för herrar och klänning eller kjol av finare tyg för damerna.</p>
        <p>Vigseln kommer att hållas utomhus och middagen kommer att vara i ett partytält, så ta med kläder efter väder.</p>
      </section>
      <section>
        <h1>Presenter</h1>
        <p>Den bästa presenten är att ni kommer på vårt bröllop!</p>
        <p>Vi har redan allt vi behöver i form av prylar och saker. Istället önskar vi oss gärna och tacksamt bidrag till vår smekmånad, via överföring till konto <strong>9252&nbsp;5138791</strong> (SBAB). Om ni vill ge kontanter kommer det finnas möjlighet att göra det på bröllopet.</p>
        <p>Om ni bestämt vill ge någonting annat så kan ni kontakta våra toastmasters på <Link href={`mailto:${EMAILS.TOASTMASTERS}`}>{EMAILS.TOASTMASTERS}</Link> för förslag!</p>
      </section>
      <section>
        <h1>Barnfritt</h1>
        <p>
          Vi älskar barn men denna dag får de stanna hemma. Barn som ammas är förstås välkomna.      
        </p>
      </section>
    </article>
  )
}
