import React, { useState } from 'react';
import { Promo } from '@/modules/Promo';
import { Upcoming, SliderProjects, UpcomingProjects } from '@/modules';
import { cardsForSlider, cardsForProjects } from '../../utils/constants';
import { DonationModal, RegistrationModal } from '@/components';

export const HomePage: React.FC = () => {
  const [isDonModalOpen, setIsDonModalOpen] = useState(false);
  const [isRegModalOpen, setRegModalOpen] = useState(false);
  return (
    <main className="main-page">
      <Promo setRegModalOpen={setRegModalOpen} />
      <Upcoming />
      <SliderProjects
        cards={cardsForSlider}
        showProgressContainer={true}
        showSupportButton={true}
        setIsDonModalOpen={setIsDonModalOpen}
      />
      <UpcomingProjects cards={cardsForProjects} />
      <RegistrationModal
        isRegModalOpen={isRegModalOpen}
        onClose={() => setRegModalOpen(false)}
      />
      <DonationModal
        isDonModalOpen={isDonModalOpen}
        onClose={() => setIsDonModalOpen(false)}
      />
    </main>
  );
};
