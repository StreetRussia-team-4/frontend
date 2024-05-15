import React from 'react';
import styles from './Card.module.scss';

interface CardProps {
  image: string;
  title: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;
  progress: number;
  fundsRaised: number;
}

export const Card: React.FC<CardProps> = ({
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
      <img src={image} className={styles.image} alt={title} />
      <h2 className={styles.title}>{title}</h2>
      <p className={styles.description}>{location}</p>
      <p className={styles.description}>{description}</p>
      <p>
        Срок установки: {startDate} - {endDate}
      </p>
      <div className="progress">
        <div className="progress-bar" style={{ width: `${progress}%` }}></div>
      </div>
      <p>{fundsRaised}</p>
      <div className="buttons">
        <button>ПОДДЕРЖАТЬ</button>
        <button>Узнать больше</button>
      </div>
    </div>
  );
};
