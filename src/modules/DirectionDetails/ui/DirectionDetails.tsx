import React from 'react';
import styles from './DirectionDetails.module.scss';
import ReactPlayer from 'react-player/youtube';
import { Direction } from '@/type/type';

export const DirectionDetails: React.FC<{ direction: Direction }> = ({
  direction,
}) => {
  const { subtitle, paragraphs, images, videoUrl } = direction;

  return (
    <div className={styles.directionDetails}>
      <h4 className={styles.subtitle}>STREET ART</h4>
      <p className={styles.paragraph}>{subtitle}</p>
      {paragraphs.map((paragraph, index) => (
        <p className={styles.paragraph} key={index}>
          {paragraph}
        </p>
      ))}
      <div className={styles.images}>
        {images.map((image, index) => (
          <img key={index} src={image} alt={`Street Art ${index + 1}`} />
        ))}
      </div>
      <div className={styles.video}>
        <ReactPlayer
          light
          width="560"
          height="315"
          url={videoUrl}
          controls={false}
        />
      </div>
    </div>
  );
};
