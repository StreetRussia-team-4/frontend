import React from 'react';
import styles from './EventsPage.module.scss';

export const EventsPage: React.FC = () => {
  return (
    <section className={styles.events}>
      <h2 className={styles.title}>СОБЫТИЯ</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button className={styles.button}>
            Дата
            <div className={styles.arrow} />
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.button}>
            Направления
            <div className={styles.arrow} />
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.button}>
            Регион
            <div className={styles.arrow} />
          </button>
        </li>
      </ul>
      <ul className={styles.cards}></ul>
    </section>
  );
};
