import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import styles from './app.module.scss';
import { Header, Menu, Divider } from './components';
import {
  Home, RichTextContent, Toastmasters, Footer
} from './content';
import { useHashNavigation } from './hooks/useHashNavigation';

const routes = {
  home: {
    text: 'Hem',
    content: Home
  },
  information: {
    text: 'Information',
    content: RichTextContent,
    contentId: 'ckc7ylsmg0iir01545re6b3n4'
  },
  toastmasters: {
    text: 'Toastmasters',
    content: Toastmasters,
    contentId: 'ckcgg3gio0d4n0153embbxkp7'
  },
  pictures: {
    text: 'Bilder',
    content: RichTextContent,
    contentId: 'ckcggto6w043w014871is41p0'
  },
  accomondation: {
    text: 'Boende & Hitta hit',
    content: RichTextContent,
    contentId: 'ckc7ywymo0ikz0154g1xb362c'
  },
  rsvp: {
    text: 'O.S.A.',
    content: RichTextContent,
    contentId: 'ckcgfuo5s03to0148x2rbfhd7'
  }
};

const App = () => {
  const { route, navigate } = useHashNavigation(routes, 'home');
  const currentRoute = routes[route];
  const Content = currentRoute.content;

  const scrollAndNavigate = page => {
    document.getElementById('nav-menu').scrollIntoView({ behavior: 'smooth' });
    navigate(page);
  };

  useEffect(() => {
    ReactGA.pageview(route);
  }, [route]);

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.mainWrapper}>
        <main className={styles.main}>
          <Menu items={routes} currentPage={route} onClick={scrollAndNavigate} />
          <Divider />
          <section className={styles.mainContent}>
            <Content contentId={currentRoute.contentId} />
          </section>
          <Footer />
        </main>
      </div>
    </div>
  );
};

export default App;
