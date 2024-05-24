import React from 'react';
import { useNavigate } from 'react-router-dom';
import type { CardData } from '@/type/type';
import styles from './Card.module.scss';

export interface CardProps {
  data: CardData;
  showProgressContainer?: boolean;
  showSupportButton?: boolean;
  setIsModalOpen?: (isModalOpen: boolean) => void;
}

export const Card: React.FC<CardProps> = ({
  data,
  showProgressContainer,
  showSupportButton,
  setIsModalOpen,
}) => {
  const {
    id,
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
  const navigate = useNavigate();
  const fundsRaisedFormatted = (data.fundsRaised ?? 0).toLocaleString('ru-RU');
  const goalFormatted = (data.goal ?? 0).toLocaleString('ru-RU');

  const handleSupportClick = () => {
    if (setIsModalOpen) {
      setIsModalOpen(true);
    }
  };

  const handleLearnMore = () => {
    navigate(`/projects/${id}`);
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
            <span className={styles.progressText}>{fundsRaisedFormatted}</span>
            <span className={styles.progressText}>{goalFormatted}</span>
          </div>
        </div>
      )}
      {showSupportButton && (
        <button className={styles.button} onClick={handleSupportClick}>
          ПОДДЕРЖАТЬ
        </button>
      )}
      <button className={styles.buttonLearnMore} onClick={handleLearnMore}>
        Узнать больше
      </button>
    </div>
  );
};
