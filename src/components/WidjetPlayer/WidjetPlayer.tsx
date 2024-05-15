import React from 'react';
import ReactPlayer from 'react-player';
import styles from './WidjetPlayer.module.scss';

export const WidgetPlayer: React.FC = () => {
  return (
    <div className={styles.playerWrapper}>
      <h1>Player</h1>
      <ReactPlayer
        className="react-player"
        url="https://soundcloud.com/pro100mail/sets/radio-1"
        width="1000"
        pip={true}
        stopOnUnmount={false}
        playsinline={false}
        playing={true} // чтобы видео проигрывалось автоматически
        muted={true} // чтобы звук был выключен
        loop={true} // чтобы видео проигрывалось в цикле
        style={{ position: 'absolute', top: 0, left: 0, zIndex: -1 }}
        config={{
          soundcloud: {
            options: {
              start_time: 20, // начать с 20-ой секунды
            },
          },
        }}
      />
      <div
        style={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          textAlign: 'center',
          zIndex: 1,
        }}
      >
        <h1 style={{ color: 'white', fontSize: '2em', marginBottom: '20px' }}>
          С УЛИЦЫ НАЧИНАЮТСЯ С ТЕБЯ
        </h1>
        <button
          style={{
            padding: '10px 20px',
            fontSize: '1.2em',
            backgroundColor: 'transparent',
            color: 'white',
            border: '2px solid white',
            borderRadius: '5px',
          }}
        >
          Присоединиться
        </button>
      </div>
    </div>
  );
};
