import React from 'react';
import { Promo } from '@/modules/Promo';
import { Upcoming } from '@/modules';

export const HomePage: React.FC = () => {
  return (
    <main className="main-page">
      <Promo />
      <Upcoming />
    </main>
  );
};
