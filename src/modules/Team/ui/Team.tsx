import React, { useState } from 'react';
import styles from './Team.module.scss';
import { CardTeamData } from '@/components';
// import { CardTeam } from '@components/index';
// import { Button } from '@/ui';

interface TeamProps {
  managersToRender: CardTeamData[];
}

export const Team: React.FC<TeamProps> = () => {
  const [showFegeralTeam, setShowFegeralTeam] = useState<boolean>(true);

  const handleButtonClick = () => {
    setShowFegeralTeam(false);
  };

  return (
    <section className={styles.team}>
      <h3 className={styles.title}>Наша команда</h3>
      <ul className={styles.buttons}>
        <li>
          <button className={styles.button} onClick={handleButtonClick}>
            Федеральная
          </button>
        </li>
        <li>
          <button className={styles.button} onClick={handleButtonClick}>
            Региональная
          </button>
        </li>
      </ul>
      {showFegeralTeam ? <ul className={styles.list}></ul> : <></>}
    </section>
  );
};
