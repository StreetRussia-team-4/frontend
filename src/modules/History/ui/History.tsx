import React from 'react';
import styles from './History.module.scss';

export const History: React.FC = () => {
  return (
    <section className={styles.history}>
      <h2 className={styles.title}>
        НАША
        <br />
        ИСТОРИЯ
      </h2>
      <div className={styles.about}>
        <p className={styles.text}>
          Идея создания сформирована лидерами из 27 субъектов Российской
          Федерации 12 апреля 2019 года
          <br />
          на Общероссийском образовательном форуме уличных культур «КАРДО».
          Учреждена 2 октября 2020 года
          <br />
          на первом учредительном съезде представителей организации из 57
          субъектов Российской Федерации
          <br />
          в рамках финальных мероприятий Всероссийской
          <br />
          конкурс-премии уличных культур «КАРДО».
        </p>
        <ul className={styles.list}>
          <li className={styles.item}>
            <h3 className={styles.subtitle}>Миссия организации</h3>
            <p className={styles.description}>
              КОМПЛЕКСНОЕ РАЗВИТИЕ ЧЕЛОВЕЧЕСКОГО ПОТЕНЦИАЛА ПРЕДСТАВИТЕЛЯ
              УЛИЧНЫХ КУЛЬТУР.
            </p>
          </li>
          <li className={styles.item}>
            <h3 className={styles.subtitle}>Цель организации</h3>
            <p className={styles.description}>
              КОМПЛЕКСНОЕ РАЗВИТИЕ УЛИЧНЫХ КУЛЬТУР ПОСРЕДСТВОМ СОДЕЙСТВИЯ
              ЛИДЕРАМ УЛИЧНЫХ КУЛЬТУР В РАЗВИТИИ ИНИЦИАТИВ И СОЦИАЛЬНО-ЗНАЧИМЫХ
              ПРОЕКТОВ НА ТЕРРИТОРИИ СУБЪЕКТОВ РОССИЙСКОЙ ФЕДЕРАЦИИ.
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
