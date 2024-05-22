import React, { useState } from 'react';
import { Promo } from '@/modules/Promo';
import { Upcoming, SliderProjects, UpcomingProjects } from '@/modules';
import { cardsForProjects } from '../../utils/constants';
import { cardsForEvents } from '../../utils/constants';
import { RegistrationModal } from '@/components';

interface HomePageProps {
  setIsDonModalOpen: (isDonModalOpen: boolean) => void;
}

export const HomePage: React.FC<HomePageProps> = ({ setIsDonModalOpen }) => {
  const [isRegModalOpen, setRegModalOpen] = useState(false);
  return (
    <main className="main-page">
      <Promo setRegModalOpen={setRegModalOpen} />
      <Upcoming cards={cardsForEvents} pageEvents={false} />
      <SliderProjects
        showProgressContainer={true}
        showSupportButton={true}
        setIsDonModalOpen={setIsDonModalOpen}
      />
      <UpcomingProjects cards={cardsForProjects} />
      <RegistrationModal
        isRegModalOpen={isRegModalOpen}
        onClose={() => setRegModalOpen(false)}
      />
    </main>
  );
};
