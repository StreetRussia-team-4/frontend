import React from 'react';
import type { CardData } from '@components/index';
import { Card } from '@components/index';
import styles from './Slider.module.scss';

interface SliderProps {
  cards: CardData[];
}

export const Slider: React.FC<SliderProps> = ({ cards }) => {
  return (
    <section className={styles.slider}>
      <h2 className={styles.title}>
        НАШИ <br /> ПРОЕКТЫ
      </h2>
      <div className={styles.events}>
        {cards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </div>
    </section>
  );
};
