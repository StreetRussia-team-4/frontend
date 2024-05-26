import React, { useState } from 'react';
import styles from './Team.module.scss';
import { CardTeamData, CardTeam } from '@/components';

// import { Button } from '@/ui';

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
        </ul> //ниже должен быть слайдер с региональными сотрудниками!
      ) : (
        <ul className={styles.list}>
          {cardsForRender.map(card => (
            <CardTeam key={card.id} data={card} region={showFegeralTeam!} />
          ))}
        </ul>
      )}
    </section>
  );
};
