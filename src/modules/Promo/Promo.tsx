import React from 'react';
import styles from './Promo.module.scss';
import PromoVideo from '@video/promo-video.mp4';
import playIcon from '@icon/play-circle.svg';
import { Link } from 'react-router-dom';

const Promo: React.FC = () => {
  return (
    <div className={styles.playerWrapper}>
      <video autoPlay loop muted controls={false} className={styles.video}>
        <source src={PromoVideo} type="video/mp4" />
        Ваш браузер не поддерживает тег video
      </video>
      <div className={styles.container}>
        <h1 className={styles.title}>
          УЛИЦЫ <br />
          НАЧИНАЮТСЯ
          <br />С ТЕБЯ
        </h1>
        <div className={styles.buttonsWrapper}>
          <button className={styles.button}>ПРИСОЕДИНИТЬСЯ</button>
          <Link className={styles.link} to="#">
            <span className={styles.aboutTeam}>О команде</span>
            <img src={playIcon} alt="Иконка Play" className={styles.playIcon} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export { Promo };
