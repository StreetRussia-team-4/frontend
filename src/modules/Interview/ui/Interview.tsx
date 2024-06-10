import React from 'react';
import styles from './Interview.module.scss';
import { CardBlog } from '@/components';
import type { CardBlogData } from '@/type/type';

interface BlogProps {
  cardsToRender: CardBlogData[];
}

export const Interview: React.FC<BlogProps> = ({ cardsToRender }) => {
  return (
    <section className={styles.news}>
      <h3 className={styles.subtitle}>Интервью</h3>
      <div className={styles.columns}>
        <ul className={styles.list}>
          {cardsToRender.slice(0, 2).map(card => (
            <CardBlog key={card.id} data={card} size="small" />
          ))}
        </ul>
        {cardsToRender.slice(2, 3).map(card => (
          <CardBlog key={card.id} data={card} />
        ))}
      </div>
    </section>
  );
};
