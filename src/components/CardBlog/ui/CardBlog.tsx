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
      <img
        className={styles.image}
        src={typeof image === 'string' ? image : image.src}
      />
      <h4 className={styles.subtitle}>{title}</h4>
      <p className={styles.author}>{author}</p>
      <a className={styles.link} href={`${baseUrl}${id}`}>
        Читать
      </a>
    </li>
  ) : (
    <div className={styles.cardBig}>
      <img
        className={styles.imageBig}
        src={typeof image === 'string' ? image : image.src}
      />
      <h4 className={styles.subtitle}>{title}</h4>
      <p className={styles.author}>{author}</p>
      <a className={styles.link} href={`${baseUrl}${id}`}>
        Читать
      </a>
    </div>
  );
};