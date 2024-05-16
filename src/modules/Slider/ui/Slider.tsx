import React from 'react';
import type { CardData } from '@components/index';
import { Card } from '@components/index';
import styles from './Slider.module.scss';

interface SliderProps {
  cards: CardData[];
}

const cards = [
  {
    id: 1,
    image: '@image/eventOne.png',
    title: 'SCATEBOARDING ПЛОЩАДКА',
    location: 'РЯЗАНСКАЯ ОБЛ.',
    description: 'Планируем поставить рампы, разгонки и перила.',
    startDate: '24.12.2024',
    endDate: '24.03.2025',
    progress: 60,
    fundsRaised: 6,
  },
  {
    id: 2,
    image: '../../../../assets/eventOne.png',
    title: 'SCATEBOARDING ПЛОЩАДКА',
    location: 'РЯЗАНСКАЯ ОБЛ.',
    description: 'Планируем поставить рампы, разгонки и перила.',
    startDate: '24.12.2024',
    endDate: '24.03.2025',
    progress: 60,
    fundsRaised: 6,
  },
  {
    id: 3,
    image: '../../../../assets/eventOne.png',
    title: 'SCATEBOARDING ПЛОЩАДКА',
    location: 'РЯЗАНСКАЯ ОБЛ.',
    description: 'Планируем поставить рампы, разгонки и перила.',
    startDate: '24.12.2024',
    endDate: '24.03.2025',
    progress: 60,
    fundsRaised: 6,
  },
];

const Slider: React.FC<SliderProps> = () => {
  return (
    <div className={styles.events}>
      {cards.map(card => (
        <Card key={card.id} {...card} />
      ))}
    </div>
  );
};

export default Slider;
