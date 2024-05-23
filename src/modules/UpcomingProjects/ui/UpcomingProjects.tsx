import React from 'react';
// import type { CardData } from '@components/index';
import { Card, CardData, CustomSlider } from '@components/index';
import styles from './UpcomingProjects.module.scss';

interface UpcomingProjectsProps {
  projectsToRender: CardData[];
  title: string;
  isHomePage?: boolean;
}

export const UpcomingProjects: React.FC<UpcomingProjectsProps> = ({
  title,
  projectsToRender,
  isHomePage,
}) => {
  const displayedCards = projectsToRender.slice(0, 2);
  const items = projectsToRender.map(card => (
    <Card key={card.id} data={card} />
  ));
  return (
    <div className={styles.projects}>
      {isHomePage ? (
        <div>
          <h3>Предстоящие</h3>
          <div className={styles.cardList}>
            {displayedCards.map(card => (
              <Card key={card.id} data={card} />
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.cardList}>
          <CustomSlider items={items} title={title} />
        </div>
      )}
    </div>
  );
};
