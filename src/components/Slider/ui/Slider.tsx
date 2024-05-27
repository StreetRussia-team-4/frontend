import React from 'react';
import { useNavigate } from 'react-router-dom';
import Slider from 'react-slick';
import styles from './Slider.module.scss';

interface CustomSliderProps {
  items: React.ReactNode[];
  title?: {
    text: string;
    url: string;
  };
  slidesToShow: number;
}

export const CustomSlider: React.FC<CustomSliderProps> = ({
  items,
  title,
  slidesToShow,
}) => {
  const slider = React.useRef<Slider | null>(null);
  const navigate = useNavigate();

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: slidesToShow,
    slidesToScroll: 1,
  };

  const handleTitleClick = () => {
    if (title && title.url) {
      navigate(title.url);
    }
  };

  return (
    <div className={styles.slider}>
      <div className={styles.carousel}>
        <div className={styles.carouselHeader}>
          {title && (
            <h3 className={styles.title} onClick={handleTitleClick}>
              {title.text}
            </h3>
          )}
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
        <Slider ref={slider} {...settings} className={styles.slickSlider}>
          {items}
        </Slider>
      </div>
    </div>
  );
};
