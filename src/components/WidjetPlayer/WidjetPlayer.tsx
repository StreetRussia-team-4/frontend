import React from 'react';
import styles from './WidjetPlayer.module.scss';
import PromoVideo from '@video/main-video.mp4';

export const WidgetPlayer: React.FC = () => {
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
        <button className={styles.button}>ПРИСОЕДИНИТЬСЯ</button>
      </div>
    </div>
  );
};
