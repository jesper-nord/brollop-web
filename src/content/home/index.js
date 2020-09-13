import React from 'react';
import styles from './home.module.scss';
import wedding from '../../images/wedding.jpg';

export const Home = () => (
  <article>
    <section className={styles.intro}>
      <h1>Tack!</h1>
      <p>Tack för ett underbart bröllop, och att ni kom och firade vår magiska dag.</p>
      <p>
        Fler bilder kommer att dyka upp i albumet under <a href="#pictures">bilder</a>.
      </p>
    </section>
    <section>
      <figure>
        <img src={wedding} className="image-border" alt="Ulrika och Jesper, 5/9 2020" />
      </figure>
    </section>
  </article>
);
