import React from 'react';
import { News } from '@modules/News';
import { CardBlogData } from '@/components';

interface BlogProps {
  newsToRender: CardBlogData[];
  articleToRender: CardBlogData[];
  interwiewToRender: CardBlogData[];
  adviceToRender: CardBlogData[];
}

export const BlogPage: React.FC<BlogProps> = ({ newsToRender }) => {
  return (
    <section className="blog">
      <h2>БЛОГ</h2>
      <News cardsToRender={newsToRender} />
    </section>
  );
};
