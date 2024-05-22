import React from 'react';
import Slider from 'react-slick';
import type { CardData } from '@components/index';
import { Card } from '@components/index';
import styles from './SliderProjects.module.scss';

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
  const slider = React.useRef<Slider | null>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <section className={styles.slider}>
      <h2 className={styles.title}>
        НАШИ <br /> ПРОЕКТЫ
      </h2>
      <div className={styles.courouselle}>
        <div className={styles.courouselleHeader}>
          <h3 className={styles.subTitle}>Текущие</h3>
          <div className={styles.buttonsContainer}>
            <button
              onClick={() => slider?.current?.slickPrev()}
              className={styles.arrowLeft}
            ></button>
            <button
              onClick={() => slider?.current?.slickNext()}
              className={styles.arrowRight}
            ></button>
          </div>
        </div>
        <Slider ref={slider} {...settings} className={styles.events}>
          {projectsToRender.map(card => (
            <Card
              key={card.id}
              data={card}
              showProgressContainer={showProgressContainer}
              showSupportButton={showSupportButton}
              setIsModalOpen={setIsDonModalOpen}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};
