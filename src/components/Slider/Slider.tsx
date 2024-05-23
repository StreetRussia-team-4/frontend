import React from 'react';
import Slider from 'react-slick';
import styles from './Slider.module.scss';

interface CustomSliderProps {
  items: React.ReactNode[];
  title?: string;
}

export const CustomSlider: React.FC<CustomSliderProps> = ({ items, title }) => {
  const slider = React.useRef<Slider | null>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  return (
    <div className={styles.slider}>
      <div className={styles.carousel}>
        <div className={styles.courouselleHeader}>
          {title && <h3 className={styles.title}>{title}</h3>}
          <div className={styles.buttonsContainer}>
            <button
              onClick={() => slider.current?.slickPrev()}
              className={styles.arrowLeft}
            ></button>
            <button
              onClick={() => slider.current?.slickNext()}
              className={styles.arrowRight}
            ></button>
          </div>
        </div>
        <Slider ref={slider} {...settings} className={styles.events}>
          {items}
        </Slider>
      </div>
    </div>
  );
};
