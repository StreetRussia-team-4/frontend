import React from 'react';
import styles from './CardTeam.module.scss';
import type { CardTeamData } from '@/type/type';

export interface CardTeamProps {
  data: CardTeamData;
  region: boolean;
}

export const CardTeam: React.FC<CardTeamProps> = ({ data, region }) => {
  const { image, name, description, location, link } = data;

  return (
    <li className={styles.card}>
      <a className={styles.link} href={link} target="_blank" rel="noreferrer">
        <img
          className={styles.image}
          src={typeof image === 'string' ? image : image.src}
        />
        <h4 className={styles.name}>{name}</h4>
        <div className={styles.description}>
          <div className={styles.logo}></div>
          <p
            className={styles.position}
          >{`${description}${region! ? '' : `, ${location}`}`}</p>
        </div>
        <p className={styles.more}>Подробнее</p>
      </a>
    </li>
  );
};
