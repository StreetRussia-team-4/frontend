import React from 'react';
import styles from './DirectionsPage.module.scss';
import { DirectionDetails } from '@/modules';
import { directions } from '@/assets/mocks/directions/constants';
import type { Direction } from '@/type/type';

export const DirectionsPage: React.FC = () => {
  const [selectedDirection, setSelectedDirection] =
    React.useState<string>('STREET ART');

  const findDirection = (title: string): Direction | undefined => {
    return directions.find(dir => dir.title === title);
  };

  const handleDirectionClick = (title: string) => {
    setSelectedDirection(title);
  };

  const selectedDirectionObject = findDirection(selectedDirection);

  return (
    <section className={styles.directions}>
      <h3 className={styles.title}>
        Уличная культура&nbsp;&mdash; это не&nbsp;просто свод правил или
        перечень направлений, а&nbsp;стиль жизни и&nbsp;совокупность взглядов
      </h3>
      <div className={styles.background}></div>
      <h2>НАПРАВЛЕНИЯ</h2>
      <div className={styles.directionsContainer}>
        <nav className={styles.nav}>
          {directions.map(dir => (
            <button
              className={`${styles.navButton} ${selectedDirection === dir.title ? styles.navButtonSelected : ''}`}
              key={dir.title}
              onClick={() => handleDirectionClick(dir.title)}
            >
              {dir.title}
            </button>
          ))}
        </nav>
        {selectedDirectionObject && (
          <DirectionDetails direction={selectedDirectionObject} />
        )}
      </div>
    </section>
  );
};
