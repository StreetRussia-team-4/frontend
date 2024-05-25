import React from 'react';
import { SliderProjects, UpcomingProjects } from '@/modules';
import { CardData } from '@/components';
import styles from './ProjectsPage.module.scss';
import { CompletedProjects } from '@/modules/CompletedProjects';

interface ProjectsPageProps {
  projectsToRender: CardData[];
  setIsDonModalOpen: (isDonModalOpen: boolean) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  projectsToRender,
  setIsDonModalOpen,
}) => {
  const currentProjects = projectsToRender.filter(
    project => project.current_status === 'current'
  );

  const upcomingProjects = projectsToRender.filter(
    project => project.current_status === 'future'
  );

  const completedProjects = projectsToRender.filter(
    project => project.current_status === 'done'
  );

  return (
    <section className={styles.projectsPage}>
      <SliderProjects
        projectsToRender={currentProjects}
        showProgressContainer={true}
        showSupportButton={true}
        setIsDonModalOpen={setIsDonModalOpen}
      />
      <UpcomingProjects projectsToRender={upcomingProjects} />
      <CompletedProjects projectsToRender={completedProjects} />
    </section>
  );
};
