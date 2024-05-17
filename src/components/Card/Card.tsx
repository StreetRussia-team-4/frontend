import React from 'react';
import styles from './Card.module.scss';

export interface CardData {
  id: number;
  image: string | HTMLImageElement;
  title: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;
  progress: number;
  fundsRaised: number;
}

export const Card: React.FC<CardData> = ({
  image,
  title,
  location,
  description,
  startDate,
  endDate,
  progress,
  fundsRaised,
}) => {
  return (
    <div className={styles.card}>
      <img
        src={typeof image === 'string' ? image : image.src}
        className={styles.image}
        alt={title}
      />
      <p className={styles.title}>{title}</p>
      <p className={styles.description}>{location}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.timeframe}>
        Срок установки: {startDate} - {endDate}
      </p>
      <div className="progress">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <p>{fundsRaised}</p>
      <button className={styles.button}>ПОДДЕРЖАТЬ</button>
      <button className={styles.buttonLearnMore}>Узнать больше</button>
    </div>
  );
};
