import React from 'react';
import type { CardData } from '@components/index';
import { Card } from '@components/index';
import styles from './CurrentProjectsPage.module.scss';

interface CurrentProjectsPageProps {
  projectsToRender: CardData[];
  setIsDonModalOpen: (isDonModalOpen: boolean) => void;
}

export const CurrentProjectsPage: React.FC<CurrentProjectsPageProps> = ({
  projectsToRender,
  setIsDonModalOpen,
}) => {
  return (
    <div className={styles.currentProjectsPage}>
      <h2>Текущие проекты</h2>
      <div className={styles.projectsGrid}>
        {projectsToRender.map(card => (
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
