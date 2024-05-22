import React from 'react';
import styles from './Upcoming.module.scss';
import type { CardEventData } from '@components/index';
import { CardEvent } from '@components/index';

// export interface EventData {
//     id: number;
//     image: string | HTMLImageElement;
//     title: string;
//     description: string;
//     startDate: string;
//     endDate: string;
//     link: string;
//   }

//   export const Card: React.FC<EventData> = ({
//     image,
//     title,
//     description,
//     startDate,
//     endDate,
//     link,
//   }) => {}

interface CardsEventsProps {
  cards: CardEventData[];
  pageEvents: boolean;
}

export const Upcoming: React.FC<CardsEventsProps> = ({ cards, pageEvents }) => {
  return (
    <section className={styles.upcoming}>
      <h2 className={styles.title}>БЛИЖАЙШИЕ СОБЫТИЯ</h2>
      <div className={styles.events}>
        {/* <div className={styles.card}>
          <img className={styles.image} src={image} />
          <div className={styles.description}>
            <p className={styles.date}>24.06.2024 - 25.06.2024</p>
            <h2 className={styles.subtitle}>BLACK MOVES VOL.19</h2>
            <p className={styles.text}>
              Жаркие танцевальные выходные пройдут в самом сердце Москвы. 24 и
              25 июня Парк Горького станет эпицентром хип-хоп культуры.
            </p>
            <a className={styles.link} href="#">
              ПОДРОБНЕЕ
            </a>
          </div>
        </div> */}
        {cards.slice(0, 1).map(card => (
          <CardEvent
            key={card.id}
            data={card}
            size={'big'}
            pageEvents={pageEvents}
          />
        ))}
        <ul className={styles.list}>
          {/* <li className={styles.el}>
            <img className={styles.image_small} src={imageTop} />
            <p className={styles.date}>14.08.2024 - 04.09.2024</p>
            <h2 className={styles.subtitle_small}>
              ФЕСТИВАЛЬ ГРАФФИТИ #FЛАКON
            </h2>
            <a className={styles.link} href="#">
              ПОДРОБНЕЕ
            </a>
          </li>
          <li className={styles.el}>
            <img className={styles.image_small} src={imageBottom} />
            <p className={styles.date}>02.07.2024 - 04.07.2024</p>
            <h2 className={styles.subtitle_small}>ФЕСТИВАЛЬ Паркур_fest</h2>
            <a className={styles.link} href="#">
              ПОДРОБНЕЕ
            </a>
          </li> */}
          {cards.slice(1, 3).map(card => (
            <CardEvent
              key={card.id}
              data={card}
              size={'small'}
              pageEvents={pageEvents}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
