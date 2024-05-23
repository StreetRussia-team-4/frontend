import React, { useState } from 'react';
import { SliderProjects, UpcomingProjects } from '@/modules';
import { CardData } from '@/components';
import styles from './ProjectsPage.module.scss';

interface ProjectsPageProps {
  projectsToRender: CardData[];
  setIsDonModalOpen: (isDonModalOpen: boolean) => void;
}

const isCurrentProject = (project: CardData) => {
  const today = new Date();
  const startDate = new Date(project.startDate);
  const endDate = new Date(project.endDate);
  return today >= startDate && today <= endDate;
};

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  projectsToRender,
  setIsDonModalOpen,
}) => {
  const [viewCurrentProjects, setViewCurrentProjects] = useState(false);

  const currentProjects = projectsToRender.filter(isCurrentProject);
  const upcomingProjects = projectsToRender.filter(
    project => !isCurrentProject(project)
  );

  return (
    <section className={styles.projectsPage}>
      {viewCurrentProjects ? (
        <div>
          <h2>Текущие проекты</h2>
          <SliderProjects
            projectsToRender={currentProjects}
            showProgressContainer={true}
            showSupportButton={true}
            setIsDonModalOpen={setIsDonModalOpen}
            onTitleClick={() => setViewCurrentProjects(false)}
          />
        </div>
      ) : (
        <>
          <SliderProjects
            projectsToRender={projectsToRender}
            showProgressContainer={true}
            showSupportButton={true}
            setIsDonModalOpen={setIsDonModalOpen}
            onTitleClick={() => setViewCurrentProjects(true)}
          />
          <UpcomingProjects
            projectsToRender={upcomingProjects}
            onTitleClick={() => setViewCurrentProjects(false)}
          />
        </>
      )}
    </section>
  );
};
