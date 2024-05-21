import React, { useState } from 'react';
import { Promo } from '@/modules/Promo';
import { Upcoming, SliderProjects, UpcomingProjects } from '@/modules';
import { cardsForSlider, cardsForProjects } from '../../utils/constants';
import { Modal } from '@/components';

export const HomePage: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  return (
    <main className="main-page">
      <Promo />
      <Upcoming />
      <SliderProjects
        cards={cardsForSlider}
        showProgressContainer={true}
        showSupportButton={true}
        setIsModalOpen={setIsModalOpen}
      />
      <UpcomingProjects cards={cardsForProjects} />
      <Modal isModalOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </main>
  );
};
