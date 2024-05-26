import React from 'react';
import styles from './AboutUsPage.module.scss';
import { AboutUsAddress } from '@modules/AboutUsAddress';
import { History } from '@modules/History';
import { Team } from '@modules/Team';
import { Partners } from '@modules/Partners';
import { CardTeamData } from '@/components';

interface TeamProps {
  federalManagersToRender: CardTeamData[];
  regionalManagersToRender: CardTeamData[];
}

export const AboutUsPage: React.FC<TeamProps> = ({
  federalManagersToRender,
  regionalManagersToRender,
}) => {
  return (
    <main className={styles.aboutUs}>
      <h3 className={styles.title}>
        МЫ ПРО УЛИЦЫ, ТВОРЧЕСТВО, СПОРТ, МОЛОДЁЖЬ, ОТКРЫТОСТЬ И СТРЕМЛЕНИЕ К
        САМО&shy;СОВЕРШЕНСТВОВАНИЮ
      </h3>
      <div className={styles.background}></div>
      <History />
      <Team
        federalManagersToRender={federalManagersToRender}
        regionalManagersToRender={regionalManagersToRender}
      />
      <Partners />
      <AboutUsAddress />
    </main>
  );
};
