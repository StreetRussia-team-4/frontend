import React from 'react';
import { Card, CardData, CustomSlider } from '@components/index';
import styles from './CompletedProjects.module.scss';

interface CompletedProjectsProps {
  projectsToRender: CardData[];
}

export const CompletedProjects: React.FC<CompletedProjectsProps> = ({
  projectsToRender,
}) => {
  const items = projectsToRender.map(card => (
    <Card key={card.id} data={card} />
  ));
  return (
    <div className={styles.cardList}>
      <CustomSlider
        items={items}
        title={{ text: 'Выполненные', url: '/' }}
        slidesToShow={2}
      />
    </div>
  );
};
