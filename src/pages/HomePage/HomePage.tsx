import React, { useState } from 'react';
import { Promo } from '@/modules/Promo';
import { Upcoming, SliderProjects, UpcomingProjects } from '@/modules';
import { CardData, CardEventData, RegistrationModal } from '@/components';
import styles from './HomePage.module.scss';

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
    <main className={styles.homePage}>
      <Promo setRegModalOpen={setRegModalOpen} />
      <Upcoming eventsToRender={eventsToRender} pageEvents={false} />
      <SliderProjects
        projectsToRender={projectsToRender}
        showProgressContainer={true}
        showSupportButton={true}
        setIsDonModalOpen={setIsDonModalOpen}
      />
      <UpcomingProjects
        title="ПРЕДСТОЯЩИЕ"
        projectsToRender={projectsToRender}
        isHomePage={true}
      />
      <RegistrationModal
        isRegModalOpen={isRegModalOpen}
        onClose={() => setRegModalOpen(false)}
      />
    </main>
  );
};
