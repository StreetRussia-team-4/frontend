import React from 'react';
import styles from './Article.module.scss';
import { CardBlog } from '@/components';
import type { CardBlogData } from '@/type/type';

interface BlogProps {
  cardsToRender: CardBlogData[];
}

export const Article: React.FC<BlogProps> = ({ cardsToRender }) => {
  return (
    <section className={styles.news}>
      <h3 className={styles.subtitle}>Статьи</h3>
      <div className={styles.columns}>
        {cardsToRender.slice(0, 1).map(card => (
          <CardBlog key={card.id} data={card} />
        ))}
        <ul className={styles.list}>
          {cardsToRender.slice(1, 3).map(card => (
            <CardBlog key={card.id} data={card} size="small" />
          ))}
        </ul>
      </div>
    </section>
  );
};
