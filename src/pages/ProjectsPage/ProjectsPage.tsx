import React from 'react';
import { SliderProjects, UpcomingProjects } from '@/modules';
import { CardData } from '@/components';
import styles from './ProjectsPage.module.scss';

interface ProjectsPageProps {
  projectsToRender: CardData[];
  setIsDonModalOpen: (isDonModalOpen: boolean) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  projectsToRender,
  setIsDonModalOpen,
}) => {
  return (
    <section className={styles.projectsPage}>
      <h2></h2>
      <SliderProjects
        projectsToRender={projectsToRender}
        showProgressContainer={true}
        showSupportButton={true}
        setIsDonModalOpen={setIsDonModalOpen}
      />
      <UpcomingProjects
        title="ПРЕДСТОЯЩИЕ"
        projectsToRender={projectsToRender}
      />
    </section>
  );
};
