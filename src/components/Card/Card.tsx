import React from 'react';
import styles from './Card.module.scss';

export interface CardProps {
  data: CardData;
  showProgressContainer?: boolean;
  showSupportButton?: boolean;
  setIsModalOpen?: (isModalOpen: boolean) => void;
}

export interface CardData {
  id: number;
  image: string | HTMLImageElement;
  title: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;
  fundsRaised?: number;
  goal?: number;
}

export const Card: React.FC<CardProps> = ({
  data,
  showProgressContainer,
  showSupportButton,
  setIsModalOpen,
}) => {
  const {
    image,
    title,
    location,
    description,
    startDate,
    endDate,
    fundsRaised,
    goal,
  } = data;

  const progress = fundsRaised && goal ? (fundsRaised / goal) * 100 : 0;

  const handleSupportClick = () => {
    if (setIsModalOpen) {
      setIsModalOpen(true);
    }
  };

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
      {showProgressContainer && (
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
      )}
      {showSupportButton && (
        <button className={styles.button} onClick={handleSupportClick}>
          ПОДДЕРЖАТЬ
        </button>
      )}
      <button className={styles.buttonLearnMore}>Узнать больше</button>
    </div>
  );
};
