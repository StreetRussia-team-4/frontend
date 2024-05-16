import React from 'react';
import styles from './Upcoming.module.scss';

export const Upcoming: React.FC = () => {
  return (
    <>
      <h1 className={styles.title}>БЛИЖАЙШИЕ СОБЫТИЯ</h1>
      <div className={styles.events}>
        <div className={styles.card}>
          <div className={styles.image} />
          <div className={styles.description}>
            <p className={styles.date}>24.06.2024 - 25.06.2024</p>
            <h2 className={styles.subtitle}>bLACK MOVES VOL.19</h2>
            <p className={styles.text}>
              Жаркие танцевальные выходные пройдут в самом сердце Москвы. 24 и
              25 июня Парк Горького станет эпицентром хип-хоп культуры.
            </p>
            <a className={styles.link} href="#">
              ПОДРОБНЕЕ
            </a>
          </div>
        </div>
        <ul className={styles.list}>
          <li className={styles.el}>
            <div className={styles.image} />
            <p className={styles.date}>24.06.2024 - 25.06.2024</p>
            <h2 className={styles.subtitle}>bLACK MOVES VOL.19</h2>
            <a className={styles.link} href="#">
              ПОДРОБНЕЕ
            </a>
          </li>
          <li className={styles.el}>
            <div className={styles.image} />
            <p className={styles.date}>24.06.2024 - 25.06.2024</p>
            <h2 className={styles.subtitle}>bLACK MOVES VOL.19</h2>
            <a className={styles.link} href="#">
              ПОДРОБНЕЕ
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};
