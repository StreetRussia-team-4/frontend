import React from 'react';
// import type { CardData } from '@components/index';
import { cardsForProjects } from '@/utils/constants';
import { Card } from '@components/index';
import styles from './UpcomingProjects.module.scss';

interface UpcomingProjectsProps {
  title: string;
  isHomePage?: boolean;
}

export const UpcomingProjects: React.FC<UpcomingProjectsProps> = ({
  title,
}) => {
  const displayedCards = cardsForProjects.slice(0, 2);
  return (
    <div className={styles.projects}>
      <h3 className={styles.subTitle}>{title}</h3>
      <div className={styles.cardList}>
        {displayedCards.map(card => (
          <Card key={card.id} data={card} />
        ))}
      </div>
    </div>
  );
};
