import React from 'react';
import { SliderProjects, UpcomingProjects } from '@/modules';

interface ProjectsPageProps {
  setIsDonModalOpen: (isDonModalOpen: boolean) => void;
}

export const ProjectsPage: React.FC<ProjectsPageProps> = ({
  setIsDonModalOpen,
}) => {
  return (
    <section className="projects">
      <SliderProjects
        showProgressContainer={true}
        showSupportButton={true}
        setIsDonModalOpen={setIsDonModalOpen}
      />
      <UpcomingProjects title="ПРЕДСТОЯЩИЕ" />
    </section>
  );
};
