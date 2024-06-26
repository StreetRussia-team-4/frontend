import React from 'react';
import { Card, CustomSlider } from '@components/index';
import type { CardData } from '@/type/type';
import styles from './UpcomingProjects.module.scss';

interface UpcomingProjectsProps {
  projectsToRender: CardData[];
  isHomePage?: boolean;
  onTitleClick?: () => void;
}

export const UpcomingProjects: React.FC<UpcomingProjectsProps> = ({
  projectsToRender,
  isHomePage,
}) => {
  const displayedCards = projectsToRender.slice(0, 2);
  const items = projectsToRender.map(card => (
    <Card key={card.id} data={card} />
  ));
  return (
    <>
      {isHomePage ? (
        <div className={styles.upcomingProjects}>
          <h3>Предстоящие</h3>
          <div className={styles.cardListHomePage}>
            {displayedCards.map(card => (
              <Card key={card.id} data={card} />
            ))}
          </div>
        </div>
      ) : (
        <div className={styles.cardList}>
          <CustomSlider
            items={items}
            title={{ text: 'Предстоящие', url: '/' }}
            slidesToShow={2}
          />
        </div>
      )}
    </>
  );
};
