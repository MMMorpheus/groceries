import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import { Button } from 'components';
import landingPng from 'assets/img/landing.png';
import landingWebp from 'assets/img/landing.webp';

import styles from './home.module.scss';

const Home = () => {
  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    if (location.pathname.slice(1) !== 'home') {
      navigate('home');
    }
  });

  return (
    <section className={styles.home}>
      <div className={styles.home__content}>
        <h1 className={styles.home__title}>Let’s now shop For daily food & necessary.</h1>
        <p className={styles.home__desc}>
          Freshness and Speed at your Fingertips: Get groceries delivered in 30 Minutes with our website or mobile app.
        </p>
        <Button variant="contained">Order Now</Button>
        <Button variant="outlined" disabled>
          <span>Download for iOS</span>
        </Button>
      </div>
      <div className={styles.home__landing}>
        <picture>
          <source srcSet={landingWebp} type="image/webp" />
          <img src={landingPng} alt="A basket with groceries" loading="lazy" />
        </picture>
      </div>
    </section>
  );
};

export default Home;
