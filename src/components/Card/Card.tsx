import React, { useState } from 'react';
import { Modal } from '@components/index';
import styles from './Card.module.scss';

export interface CardProps {
  data: CardData;
  showProgressContainer?: boolean;
  showSupportButton?: boolean;
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
  const [isModalOpen, setIsModalOpen] = useState(false);
  const progress = fundsRaised && goal ? (fundsRaised / goal) * 100 : 0;

  const handleSupportClick = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
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
      {isModalOpen && <Modal onClose={handleCloseModal} />}
    </div>
  );
};
