import React, { useRef, useEffect } from 'react';
import ReactPlayer from 'react-player/youtube';
import styles from './WidjetPlayer.module.scss';

export const WidgetPlayer: React.FC = () => {
  const playerRef = useRef<ReactPlayer>(null);

  useEffect(() => {
    if (playerRef.current) {
      // Как только компонент монтируется, перемотайте видео к 20-й секунде
      playerRef.current.seekTo(20, 'seconds');
    }
  }, []); // Этот эффект выполняется только один раз после монтирования компонента

  return (
    <div className={styles.playerWrapper}>
      <ReactPlayer
        className={styles.reactPlayer}
        ref={playerRef}
        url="https://www.youtube.com/watch?v=YNbAsl2OUFs"
        width="1440px"
        height="735px"
        pip={true}
        stopOnUnmount={false}
        playsinline={false}
        controls={false}
        playing // чтобы видео проигрывалось автоматически
        muted // чтобы звук был выключен
        loop={true} // чтобы видео проигрывалось в цикле
        style={{ opacity: '0.6' }}
        progressInterval={1000}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'left',
          zIndex: 1,
        }}
      >
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
