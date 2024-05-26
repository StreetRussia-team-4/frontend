import React from 'react';
import styles from './Partners.module.scss';
import partnerOne from '../../../assets/icon/partner.svg';
import partnerTwo from '../../../assets/icon/partner2.svg';
import partnerThree from '../../../assets/icon/partner3.svg';
import partnerFour from '../../../assets/icon/partner4.svg';
import partnerFive from '../../../assets/icon/partner5.svg';
import partnerSix from '../../../assets/icon/partner6.svg';
import partnerSeven from '../../../assets/icon/partner7.svg';
import partnerEight from '../../../assets/icon/partner8.svg';
import partnerNine from '../../../assets/icon/partner9.svg';
import partnerTen from '../../../assets/icon/partner10.svg';

export const Partners: React.FC = () => {
  return (
    <section className={styles.partners}>
      <h2 className={styles.title}>
        НАШИ
        <br />
        ПАРТНЕРЫ
      </h2>
      <ul className={styles.types}>
        <li className={styles.type}>
          <h4 className={styles.subtitle}>Генеральные партнеры</h4>
          <ul className={styles.list}>
            <li className={styles.element}>
              <a className={styles.link} href="https://президентскиегранты.рф/">
                <img src={partnerOne} alt="логотип партнера" />
              </a>
            </li>
            <li className={styles.element}>
              <a className={styles.link} href="https://fadm.gov.ru/">
                <img src={partnerTwo} alt="логотип партнера" />
              </a>
            </li>
          </ul>
        </li>
        <li className={styles.type}>
          <h4 className={styles.subtitle}>Стратегические партнеры</h4>
          <ul className={styles.list}>
            <li className={styles.element}>
              <a className={styles.link} href="https://ssca.ru/">
                <img src={partnerThree} alt="логотип партнера" />
              </a>
            </li>
            <li className={styles.element}>
              <a className={styles.link} href="https://ncfu.ru/">
                <img src={partnerFour} alt="логотип партнера" />
              </a>
            </li>
          </ul>
        </li>
        <li className={styles.type}>
          <h4 className={styles.subtitle}>Организационные партнеры</h4>
          <ul className={styles.list}>
            <li className={styles.element}>
              <a className={styles.link} href="https://fondpotanin.ru/">
                <img src={partnerFive} alt="логотип партнера" />
              </a>
            </li>
            <li className={styles.element}>
              <a className={styles.link} href="https://offbeats.ru/">
                <img src={partnerSix} alt="логотип партнера" />
              </a>
            </li>
          </ul>
        </li>
        <li className={styles.type}>
          <h4 className={styles.subtitle}>Региональные партнеры</h4>
          <ul className={styles.list}>
            <li className={styles.element}>
              <a
                className={styles.link}
                href="https://instagram.com/trudom_centr/"
              >
                <img src={partnerSeven} alt="логотип партнера" />
              </a>
            </li>
            <li className={styles.element}>
              <a className={styles.link} href="https://vk.com/workoutudm/">
                <img src={partnerEight} alt="логотип партнера" />
              </a>
            </li>
            <li className={styles.element}>
              <a className={styles.link} href="https://vk.com/centerproryv/">
                <img src={partnerNine} alt="логотип партнера" />
              </a>
            </li>
            <li className={styles.element}>
              <a className={styles.link} href="https://vk.com/pskovworkout/">
                <img src={partnerTen} alt="логотип партнера" />
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </section>
  );
};
