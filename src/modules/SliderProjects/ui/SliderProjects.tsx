import React, { useEffect, useState } from 'react';
import Slider from 'react-slick';
import type { CardData } from '@components/index';
import { Card } from '@components/index';
import { fetchProjects, Project } from '../api/api';
import styles from './SliderProjects.module.scss';
import { cardsForSlider } from '@/utils/constants';

interface SliderProjectsProps {
  showProgressContainer?: boolean;
  showSupportButton?: boolean;
  setIsDonModalOpen: (isDonModalOpen: boolean) => void;
}

export const SliderProjects: React.FC<SliderProjectsProps> = ({
  showProgressContainer,
  showSupportButton,
  setIsDonModalOpen,
}) => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const getProjects = async () => {
      try {
        const projectsData = await fetchProjects();
        setProjects(projectsData);
        console.log('projects: ', projects);
      } catch (error) {
        setError('Failed to fetch projects');
      } finally {
        setLoading(false);
      }
    };

    getProjects();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const slider = React.useRef<Slider | null>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  const cardsToRender: CardData[] =
    projects.length > 0
      ? projects.map(project => ({
          id: project.id,
          image: project.preview,
          title: project.name,
          location: project.region.name,
          description: project.description,
          startDate: project.start_date,
          endDate: project.end_date,
          fundsRaised: project.funds_raised,
          goal: project.goal,
        }))
      : cardsForSlider;

  return (
    <section className={styles.slider}>
      <h2 className={styles.title}>
        НАШИ <br /> ПРОЕКТЫ
      </h2>
      <div className={styles.courouselle}>
        <div className={styles.courouselleHeader}>
          <h3 className={styles.subTitle}>Текущие</h3>
          <div className={styles.buttonsContainer}>
            <button
              onClick={() => slider?.current?.slickPrev()}
              className={styles.arrowLeft}
            ></button>
            <button
              onClick={() => slider?.current?.slickNext()}
              className={styles.arrowRight}
            ></button>
          </div>
        </div>
        <Slider ref={slider} {...settings} className={styles.events}>
          {cardsToRender.map(card => (
            <Card
              key={card.id}
              data={card}
              showProgressContainer={showProgressContainer}
              showSupportButton={showSupportButton}
              setIsModalOpen={setIsDonModalOpen}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};
