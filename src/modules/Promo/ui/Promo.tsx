import React from 'react';
import styles from './Promo.module.scss';
import PromoVideo from '@video/promo-video.mp4';
import playIcon from '@icon/play-circle.svg';
import { Link } from 'react-router-dom';
import { Button } from '@/ui';

interface PromoProps {
  setRegModalOpen: (isModalOpen: boolean) => void;
}

export const Promo: React.FC<PromoProps> = ({ setRegModalOpen }) => {
  return (
    <div className={styles.playerWrapper}>
      <video autoPlay loop muted controls={false} className={styles.video}>
        <source src={PromoVideo} type="video/mp4" />
      </video>
      <div className={styles.container}>
        <h1 className={styles.title}>
          УЛИЦЫ <br />
          НАЧИНАЮТСЯ
          <br />С ТЕБЯ
        </h1>
        <div className={styles.buttonsWrapper}>
          <Button
            text="ПРИСОЕДИНИТЬСЯ"
            type="button"
            onClick={() => setRegModalOpen(true)}
          />
          <Link className={styles.link} to="#">
            <span className={styles.aboutTeam}>О команде</span>
            <img src={playIcon} alt="Иконка Play" className={styles.playIcon} />
          </Link>
        </div>
      </div>
    </div>
  );
};
