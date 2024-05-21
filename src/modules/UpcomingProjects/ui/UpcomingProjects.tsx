import React from 'react';
import type { CardData } from '@components/index';
import { Card } from '@components/index';
import styles from './UpcomingProjects.module.scss';

interface UpcomingProjectsProps {
  cards: CardData[];
}

export const UpcomingProjects: React.FC<UpcomingProjectsProps> = ({
  cards,
}) => {
  const displayedCards = cards.slice(0, 2);
  return (
    <div className={styles.projects}>
      <h3 className={styles.subTitle}>Предстоящие</h3>
      <div className={styles.cardList}>
        {displayedCards.map(card => (
          <Card key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
};
