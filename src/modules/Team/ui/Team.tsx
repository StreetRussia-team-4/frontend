import React, { useState } from 'react';
import styles from './Team.module.scss';
import { CardTeamData, CardTeam } from '@/components';
import Slider from 'react-slick';

interface TeamProps {
  federalManagersToRender: CardTeamData[];
  regionalManagersToRender: CardTeamData[];
}

export const Team: React.FC<TeamProps> = ({
  federalManagersToRender,
  regionalManagersToRender,
}) => {
  const [showFegeralTeam, setShowFegeralTeam] = useState<boolean>(true);
  const [cardsForRender, setCardsForRender] = useState<CardTeamData[]>(
    federalManagersToRender
  );

  // useEffect(() => {
  //   setCardsForRender(federalManagersToRender);
  // }, [eventsToRender]);

  const handleRegionalButtonClick = () => {
    setShowFegeralTeam(false);
    setCardsForRender(regionalManagersToRender);
  };

  const handleFederalButtonClick = () => {
    setShowFegeralTeam(true);
    setCardsForRender(federalManagersToRender);
  };

  const slider = React.useRef<Slider | null>(null);

  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  const items = regionalManagersToRender.map(card => (
    <CardTeam key={card.id} data={card} region={showFegeralTeam!} />
  ));

  return (
    <section className={styles.team}>
      <h3 className={styles.title}>Наша команда</h3>
      <ul className={styles.buttons}>
        <li>
          <button
            className={`${styles.button} ${showFegeralTeam ? styles.buttonActive : ''}`}
            onClick={handleFederalButtonClick}
          >
            Федеральная
          </button>
        </li>
        <li>
          <button
            className={`${styles.button} ${showFegeralTeam ? '' : styles.buttonActive}`}
            onClick={handleRegionalButtonClick}
          >
            Региональная
          </button>
        </li>
      </ul>
      {showFegeralTeam ? (
        <ul className={styles.list}>
          {cardsForRender.map(card => (
            <CardTeam key={card.id} data={card} region={showFegeralTeam!} />
          ))}
        </ul>
      ) : (
        <ul className={styles.listSlider}>
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
          <Slider ref={slider} {...settings} className={styles.slickSlider}>
            {items}
          </Slider>
        </ul>
      )}
    </section>
  );
};
