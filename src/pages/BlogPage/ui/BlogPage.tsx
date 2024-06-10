import React from 'react';
import { News } from '@modules/News';
import { Article } from '@modules/Article';
import { Interview } from '@modules/Interview';
import { Advice } from '@modules/Advice';
import { CardBlogData } from '@/type/type';

interface BlogProps {
  newsToRender: CardBlogData[];
  articleToRender: CardBlogData[];
  interwiewToRender: CardBlogData[];
  adviceToRender: CardBlogData[];
}

export const BlogPage: React.FC<BlogProps> = ({
  newsToRender,
  articleToRender,
  interwiewToRender,
  adviceToRender,
}) => {
  return (
    <section className="blog">
      <h2>БЛОГ</h2>
      <News cardsToRender={newsToRender} />
      <Article cardsToRender={articleToRender} />
      <Interview cardsToRender={interwiewToRender} />
      <Advice cardsToRender={adviceToRender} />
    </section>
  );
};
