import React from 'react';
import styles from './News.module.scss';
import { CardBlogData, CardBlog } from '@/components';

interface BlogProps {
  cardsToRender: CardBlogData[];
}

export const News: React.FC<BlogProps> = ({ cardsToRender }) => {
  return (
    <section className={styles.news}>
      <h3 className={styles.subtitle}>Новости</h3>
      <div className={styles.columns}>
        <ul className={styles.list}>
          {cardsToRender.slice(0, 2).map(card => (
            <CardBlog key={card.id} data={cardsToRender} />
          ))}
        </ul>
      </div>
    </section>
  );
};
