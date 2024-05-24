import React from 'react';
import type { CardData } from '@components/index';
import { Card } from '@components/index';
import styles from './CurrentProjectsPage.module.scss';

interface CurrentProjectsProps {
  projectsToRender: CardData[];
  setIsDonModalOpen: (isDonModalOpen: boolean) => void;
}

export const CurrentProjectsPage: React.FC<CurrentProjectsProps> = ({
  projectsToRender,
  setIsDonModalOpen,
}) => {
  const currentProjects = projectsToRender.filter(
    project => project.current_status === 'current'
  );

  console.log('currentProjects: ', currentProjects);

  return (
    <div className={styles.currentProjects}>
      <h2>
        НАШИ <br />
        ПРОЕКТЫ
      </h2>
      <h3>Текущие</h3>
      <div className={styles.currentProjectsGrid}>
        {currentProjects.map(card => (
          <Card
            key={card.id}
            data={card}
            showProgressContainer={true}
            showSupportButton={true}
            setIsModalOpen={setIsDonModalOpen}
          />
        ))}
      </div>
    </div>
  );
};
