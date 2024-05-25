import React from 'react';
import styles from './CardTeam.module.scss';

const baseUrl = 'https://vk.com/';

export interface CardTeamProps {
  data: CardTeamData;
  region: boolean;
}

export interface CardTeamData {
  id: number;
  image: string | HTMLImageElement;
  name: string;
  description: string;
  location?: string;
}

export const CardTeam: React.FC<CardTeamProps> = ({ data, region }) => {
  const { id, image, name, description, location } = data;

  return (
    <li>
      <a className={styles.card} href={`${baseUrl}${id}`}>
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
      </a>
    </li>
  );
};
