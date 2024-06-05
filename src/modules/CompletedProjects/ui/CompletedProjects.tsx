import React from 'react';
import { Card, CustomSlider } from '@components/index';
import type { CardData } from '@/type/type';

interface CompletedProjectsProps {
  projectsToRender: CardData[];
}

export const CompletedProjects: React.FC<CompletedProjectsProps> = ({
  projectsToRender,
}) => {
  const items = projectsToRender.map(card => (
    <Card key={card.id} data={card} />
  ));
  return (
    <div>
      <CustomSlider
        items={items}
        title={{ text: 'Выполненные', url: '/' }}
        slidesToShow={2}
      />
    </div>
  );
};
