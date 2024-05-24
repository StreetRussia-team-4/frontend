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
  console.log('projectsToRender: ', projectsToRender);
  const currentProjects = projectsToRender.filter(
    project => project.current_status === 'current'
  );

  const upcomingProjects = projectsToRender.filter(
    project => project.current_status === 'future'
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
    </section>
  );
};
