import React from 'react';
import styles from './CardEvent.module.scss';
const baseUrl = 'https://streetrussia-team-4.github.io/frontend/#/events/';

export interface CardEventProps {
  data: CardEventData;
  size: string;
  pageEvents: boolean;
}

export interface CardEventData {
  id: number;
  image: string | HTMLImageElement; //почему?
  title: string;
  location: string;
  description: string;
  startDate: string;
  endDate?: string;
}

export const CardEvent: React.FC<CardEventProps> = ({
  data,
  size,
  pageEvents,
}) => {
  const { id, image, title, location, description, startDate, endDate } = data;

  // return size === small ? (
  //   <li className={styles.el}>
  //     <img className={styles.image_small} src={typeof image === 'string' ? image : image.src} />
  //     <p className={styles.date}>{`${startDate} ${endDate ? `- ${endDate}` : ""}`}</p>
  //     <h2 className={styles.subtitle_small}>{title}</h2>
  //     <a className={styles.link} href={`${baseUrl}${id}`}>
  //       ПОДРОБНЕЕ
  //     </a>
  //   </li>) : (
  //   <div className={styles.card}>
  //     <img className={styles.image} src={typeof image === 'string' ? image : image.src} />
  //     <div className={styles.description}>
  //       <p className={styles.date}>{`${startDate} ${endDate ? `- ${endDate}` : ""}`}</p>
  //       <h2 className={styles.subtitle}>{title}</h2>
  //       <p className={styles.text}>{description}</p>
  //       <a className={styles.link} href={`${baseUrl}${id}`}>
  //         ПОДРОБНЕЕ
  //       </a>
  //     </div>
  //   </div>
  // )

  return pageEvents ? (
    <div className={styles.item}>
      <img
        className={styles.image}
        src={typeof image === 'string' ? image : image.src}
      />
      <p
        className={styles.dateEvents}
      >{`${startDate} ${endDate ? `- ${endDate}` : ''}`}</p>
      <h2 className={styles.subtitle}>{title}</h2>
      <p className={styles.location}>{location}</p>
      <p className={styles.text}>{description}</p>
      <a className={styles.linkEvents} href={`${baseUrl}${id}`}>
        ПОДРОБНЕЕ
      </a>
    </div>
  ) : size === 'small' ? (
    <li className={styles.el}>
      <img
        className={styles.imageSmall}
        src={typeof image === 'string' ? image : image.src}
      />
      <p
        className={styles.date}
      >{`${startDate} ${endDate ? `- ${endDate}` : ''}`}</p>
      <h2 className={styles.subtitleSmall}>{title}</h2>
      <a className={styles.link} href={`${baseUrl}${id}`}>
        ПОДРОБНЕЕ
      </a>
    </li>
  ) : (
    <div className={styles.card}>
      <img
        className={styles.imageBig}
        src={typeof image === 'string' ? image : image.src}
      />
      <div className={styles.descriptionBig}>
        <p
          className={styles.date}
        >{`${startDate} ${endDate ? `- ${endDate}` : ''}`}</p>
        <h2 className={styles.subtitleBig}>{title}</h2>
        <p className={styles.textBig}>{description}</p>
        <a className={styles.link} href={`${baseUrl}${id}`}>
          ПОДРОБНЕЕ
        </a>
      </div>
    </div>
  );
};
