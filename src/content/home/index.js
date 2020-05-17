import React from 'react'
import styles from './home.module.scss'
import us from '../../images/us@0.15.jpeg'

export const Home = () => {
  return (
    <article>
      <section className={styles.intro}>
        <h1>Välkommen till Ulrika och Jespers bröllop!</h1>
        <p>Vi hoppas att ni vill fira och dela vår kärlek i september, när Forsgren och Lehtinen blir Nord.</p>
        <p>På den här sidan hittar ni all information ni behöver inför bröllopet.</p>
        <figure>
          <img src={us} className={[styles.us, 'image-border'].join(' ')} alt='Jesper och Ulrika, 2/5 2019' />
          <figcaption>New York 2/5 2019, dagen då vi förlovade oss.</figcaption>
        </figure>
      </section>
      <section>
        <p>
          Vi hoppas att alla kan och vill komma på vårt bröllop i september, trots att situationen ser ut som den gör.
          Vi vill därför påminna om att hålla extra avstånd till varandra och speciellt till våra äldre släktingar. 
          Om du känner dig sjuk så önskar vi att du väljer att stanna hemma istället, och fira med oss en annan gång.
        </p>
      </section>
    </article>
  )
}
