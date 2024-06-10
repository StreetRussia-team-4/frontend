import React from 'react';
import styles from './CardBlog.module.scss';
import type { CardBlogData } from '@/type/type';

const baseUrl = 'https://streetrussia-team-4.github.io/frontend/#/blog/news/';

export interface CardBlogProps {
  data: CardBlogData;
  size?: string;
}

export const CardBlog: React.FC<CardBlogProps> = ({ data, size }) => {
  const { id, image, title, author } = data;

  return size === 'small' ? (
    <li className={styles.card}>
      <a
        className={`${styles.link} ${styles.linkSmall}`}
        href={`${baseUrl}${id}`}
      >
        <img
          className={styles.image}
          src={typeof image === 'string' ? image : image.src}
        />
        <h4 className={styles.subtitle}>{title.toUpperCase()}</h4>
        <p className={styles.author}>{author}</p>
        <p className={styles.more}>Читать</p>
      </a>
    </li>
  ) : (
    <div className={styles.card}>
      <a
        className={`${styles.link} ${styles.linkBig}`}
        href={`${baseUrl}${id}`}
      >
        <img
          className={styles.imageBig}
          src={typeof image === 'string' ? image : image.src}
        />
        <h4 className={styles.subtitle}>{title.toUpperCase()}</h4>
        <p className={styles.author}>{author}</p>
        <p className={styles.more}>Читать</p>
      </a>
    </div>
  );
};
