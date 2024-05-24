import React from 'react';
import styles from './AboutUsPage.module.scss';

export const AboutUsPage: React.FC = () => {
  return (
    <main className={styles.aboutUs}>
      <h3 className={styles.title}>
        МЫ ПРО УЛИЦЫ, ТВОРЧЕСТВО, СПОРТ, МОЛОДЁЖЬ, ОТКРЫТОСТЬ И СТРЕМЛЕНИЕ К
        САМО&shy;СОВЕРШЕНСТВОВАНИЮ
      </h3>
      <div className={styles.background}></div>
      <section className={styles.address}>
        <div className={styles.ourAddress}>
          <h3 className={styles.subtitle}>Мы находимся здесь</h3>
          <iframe
            className={styles.map}
            src="https://yandex.ru/map-widget/v1/?um=constructor%3A737d4fed475acbf60a3d6a4d8b5da81bea271a9e8e70b3ed96cd62df51efcd0d&amp;source=constructor"
            width="923"
            height="470"
          ></iframe>
        </div>
        <div className={styles.otherAddress}>
          <h3 className={styles.subtitle}>
            Адреса площадок для уличного спорта по Москве и МО
          </h3>
          <div className={styles.places}>
            <ul className={styles.list}>
              <li className={styles.item}>
                <div className={styles.mark}></div>
                <p className={styles.text}> Г. НОГИНСК, УЛ. ЛЕСНОВА, 2</p>
              </li>
              <li className={styles.item}>
                <div className={styles.mark}></div>
                <p className={styles.text}>Г. МОСКВА, НЕСКУЧНЫЙ САД</p>
              </li>
              <li className={styles.item}>
                <div className={styles.mark}></div>
                <p className={styles.text}>
                  Г. КРАСНОГОРСК, ЖИЛОЙ КОМПЛЕКС АРТ
                </p>
              </li>
            </ul>
            <button className={styles.button}>СМОТРЕТЬ ВСЕ АДРЕСА</button>
          </div>
        </div>
      </section>
    </main>
  );
};
