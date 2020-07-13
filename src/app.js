import React, { useEffect } from 'react';
import ReactGA from 'react-ga';
import styles from './app.module.scss';
import { Header, Menu, Divider } from './components';
import { useRouting } from './hooks/useRouting';
import { Footer } from './content';

const App = () => {
  const { pageName, currentRoute, navigate } = useRouting();
  const Content = currentRoute.content;

  const scrollAndNavigate = page => {
    document.getElementById('nav-menu').scrollIntoView({ behavior: 'smooth' });
    navigate(page);
  };

  useEffect(() => {
    ReactGA.pageview(pageName);
  }, [pageName]);

  return (
    <div className={styles.app}>
      <Header />
      <div className={styles.mainWrapper}>
        <main className={styles.main}>
          <Menu currentPage={pageName} onClick={scrollAndNavigate} />
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
