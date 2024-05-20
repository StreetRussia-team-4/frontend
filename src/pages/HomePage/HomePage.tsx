import React from 'react';
import { Promo } from '@/modules/Promo';
import { Upcoming, SliderProjects, UpcomingProjects } from '@/modules';
import { cardsForSlider, cardsForProjects } from '../../utils/constants';

export const HomePage: React.FC = () => {
  return (
    <main className="main-page">
      <Promo />
      <Upcoming />
      <SliderProjects
        cards={cardsForSlider}
        showProgressContainer={true}
        showSupportButton={true}
      />
      <UpcomingProjects cards={cardsForProjects} />
    </main>
  );
};
