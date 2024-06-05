import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { fetchProjectById } from '../api/api';
import { Project } from '@/type/type';
import { Button } from '@/ui';
import styles from './ProjectDetailPage.module.scss';
import { projectDetail } from '@/assets/mocks/constants';
import Slider from 'react-slick';

interface ProjectDetailPageProps {
  setModalopen: (isModalOpen: boolean) => void;
}

export const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({
  setModalopen,
}) => {
  const { id } = useParams<{ id: string }>();
  const [projectData, setProjectData] = useState<Project | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const slider = React.useRef<Slider | null>(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchProjectById(Number(id));
        setProjectData(data);
      } catch (err) {
        console.error('На нашем сервере пока нет деталей этого проекта:)');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  const displayData = projectData || projectDetail;

  return (
    <div className={styles.page}>
      <h2>
        НАШИ <br />
        ПРОЕКТЫ
      </h2>
      <h3>{displayData.name}</h3>
      <p className={styles.region}>{displayData.region.name}</p>
      <div className={styles.wrapper}>
        <Slider
          ref={slider}
          {...settings}
          className={styles.slickSlider}
        ></Slider>
        <img src={displayData.preview} alt={`Slide`} className={styles.image} />
        <div className={styles.buttonsContainer}>
          <button
            onClick={() => slider.current?.slickPrev()}
            className={styles.arrowLeft}
          ></button>
          <button
            onClick={() => slider.current?.slickNext()}
            className={styles.arrowRight}
          ></button>
        </div>
      </div>
      <p className={styles.description}>{displayData.description}</p>
      <Button
        text="ПОДДЕРЖАТЬ"
        type="button"
        className={styles.button}
        onClick={() => setModalopen(true)}
      />
    </div>
  );
};
