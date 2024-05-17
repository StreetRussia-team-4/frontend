import React from 'react';
import Slider from 'react-slick';
import type { CardData } from '@components/index';
import { Card } from '@components/index';
import styles from './SliderEvents.module.scss';

interface SliderProps {
  cards: CardData[];
}

const SliderEvents: React.FC<SliderProps> = ({ cards }) => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <div className={styles.arrowRight} />,
    prevArrow: <div className={styles.arrowLeft} />,
  };

  return (
    <section className={styles.slider}>
      <h2 className={styles.title}>
        НАШИ <br /> ПРОЕКТЫ
      </h2>
      <Slider {...settings} className={styles.events}>
        {cards.map(card => (
          <Card key={card.id} {...card} />
        ))}
      </Slider>
    </section>
  );
};

export { SliderEvents };
