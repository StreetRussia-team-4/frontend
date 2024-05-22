import React, { useState } from 'react';
import { Promo } from '@/modules/Promo';
import { Upcoming, SliderProjects, UpcomingProjects } from '@/modules';
import { CardData, CardEventData, RegistrationModal } from '@/components';

interface HomePageProps {
  setIsDonModalOpen: (isDonModalOpen: boolean) => void;
  projectsToRender: CardData[];
  eventsToRender: CardEventData[];
}

export const HomePage: React.FC<HomePageProps> = ({
  setIsDonModalOpen,
  projectsToRender,
  eventsToRender,
}) => {
  const [isRegModalOpen, setRegModalOpen] = useState(false);
  return (
    <main className="main-page">
      <Promo setRegModalOpen={setRegModalOpen} />
      <Upcoming eventsToRender={eventsToRender} pageEvents={false} />
      <SliderProjects
        projectsToRender={projectsToRender}
        showProgressContainer={true}
        showSupportButton={true}
        setIsDonModalOpen={setIsDonModalOpen}
      />
      <UpcomingProjects title="ПРЕДСТОЯЩИЕ" />
      <RegistrationModal
        isRegModalOpen={isRegModalOpen}
        onClose={() => setRegModalOpen(false)}
      />
    </main>
  );
};
