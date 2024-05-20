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
  fundsRaised: number;
  goal: number;
}

export const Card: React.FC<CardData> = ({
  image,
  title,
  location,
  description,
  startDate,
  endDate,
  fundsRaised,
  goal,
}) => {
  const progress = (fundsRaised / goal) * 100;
  return (
    <div className={styles.card}>
      <img
        src={typeof image === 'string' ? image : image.src}
        className={styles.image}
        alt={title}
      />
      <p className={styles.title}>{title}</p>
      <p className={styles.location}>{location}</p>
      <p className={styles.description}>{description}</p>
      <p className={styles.timeframe}>
        Срок установки: {startDate} - {endDate}
      </p>
      <div className={styles.progressContainer}>
        <div className={styles.progress}>
          <div
            className={styles.progressBar}
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <div className={styles.numbersContainer}>
          <span className={styles.progressText}>{fundsRaised}</span>
          <span className={styles.progressText}>{goal}</span>
        </div>
      </div>
      <button className={styles.button}>ПОДДЕРЖАТЬ</button>
      <button className={styles.buttonLearnMore}>Узнать больше</button>
    </div>
  );
};
