import React from 'react';
import { NavLink } from 'react-router-dom';
import type { CardData } from '@/type/type';
import styles from './Card.module.scss';
import { Button } from '@/ui';

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
  const fundsRaisedFormatted = (data.fundsRaised ?? 0).toLocaleString('ru-RU');
  const goalFormatted = (data.goal ?? 0).toLocaleString('ru-RU');

  const handleSupportClick = () => {
    if (setIsModalOpen) {
      setIsModalOpen(true);
    }
  };

  return (
    <div className={styles.card}>
      <NavLink to={`/projects/${id}`} className={styles.navLink}>
        <img
          src={typeof image === 'string' ? image : image.src}
          className={styles.image}
          alt={title}
        />
        <div className={styles.paragrapgs}>
          <p className={styles.title}>{title}</p>
          <p className={styles.location}>{location}</p>
          <p className={styles.description}>{description}</p>
          <p className={styles.timeframe}>
            Срок установки: {startDate} - {endDate}
          </p>
        </div>
        {showProgressContainer && (
          <div className={styles.progressContainer}>
            <div className={styles.progress}>
              <div
                className={styles.progressBar}
                style={{ width: `${progress}%` }}
              ></div>
            </div>
            <div className={styles.numbersContainer}>
              <span className={styles.progressText}>
                {fundsRaisedFormatted}
              </span>
              <span className={styles.progressText}>{goalFormatted}</span>
            </div>
          </div>
        )}
      </NavLink>
      <div className={styles.buttonContainer}>
        {showSupportButton && (
          <Button
            type="button"
            text="ПОДДЕРЖАТЬ"
            className={styles.button}
            onClick={handleSupportClick}
          ></Button>
        )}
        <NavLink to={`/projects/${id}`} className={styles.buttonLearnMore}>
          Узнать больше
        </NavLink>
      </div>
    </div>
  );
};
