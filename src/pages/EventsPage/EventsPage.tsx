import React from 'react';
import styles from './EventsPage.module.scss';
import { CardEventData } from '@/components';
import { CardEvent } from '@components/index';

interface EventsProps {
  eventsToRender: CardEventData[];
}

export const EventsPage: React.FC<EventsProps> = ({ eventsToRender }) => {
  return (
    <main className={styles.events}>
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
      <ul className={styles.cards}>
        {eventsToRender.map(card => (
          <CardEvent key={card.id} data={card} pageEvents={true} />
        ))}
      </ul>
    </main>
  );
};
