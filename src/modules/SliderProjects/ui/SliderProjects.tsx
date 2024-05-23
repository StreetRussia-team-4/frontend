import React from 'react';
import type { CardData } from '@components/index';
import { Card } from '@components/index';
import { CustomSlider } from '@components/index';

interface SliderProjectsProps {
  projectsToRender: CardData[];
  showProgressContainer?: boolean;
  showSupportButton?: boolean;
  setIsDonModalOpen: (isDonModalOpen: boolean) => void;
}

export const SliderProjects: React.FC<SliderProjectsProps> = ({
  projectsToRender,
  showProgressContainer,
  showSupportButton,
  setIsDonModalOpen,
}) => {
  const items = projectsToRender.map(card => (
    <Card
      key={card.id}
      data={card}
      showProgressContainer={showProgressContainer}
      showSupportButton={showSupportButton}
      setIsModalOpen={setIsDonModalOpen}
    />
  ));

  return (
    <div>
      <h2>
        НАШИ <br />
        ПРОЕКТЫ
      </h2>
      <CustomSlider
        items={items}
        title={{ text: 'Текущие', url: '/projects/current' }}
      />
    </div>
  );
};
