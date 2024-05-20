import React from 'react';
import { Promo } from '@/modules/Promo';
import { Upcoming, SliderProjects } from '@/modules';
import { cards } from '../../utils/constants';

export const HomePage: React.FC = () => {
  return (
    <main className="main-page">
      <Promo />
      <Upcoming />
      <SliderProjects cards={cards} />
    </main>
  );
};
