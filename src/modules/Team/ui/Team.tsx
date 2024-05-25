import React from 'react';
import styles from './Team.module.scss';

export const Team: React.FC = () => {
  return (
    <section className={styles.team}>
      <h3>Наша команда</h3>
      <ul className={styles.buttons}>
        <li>
          <button className={styles.button}></button>
        </li>
        <li>
          <button className={styles.button}></button>
        </li>
      </ul>
      <ul></ul>
    </section>
  );
};
