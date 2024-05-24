import React, { useState } from 'react';
import styles from './EventsPage.module.scss';
import { CardEventData } from '@/components';
import { CardEvent } from '@components/index';
// import { Button } from '@/ui';

interface EventsProps {
  eventsToRender: CardEventData[];
}

export const EventsPage: React.FC<EventsProps> = ({ eventsToRender }) => {
  const locations = eventsToRender.map(card => card.location);
  const uniqueLocations = [...new Set(locations)];

  const directions = eventsToRender.map(card => card.direction);
  const uniqueDirections = [...new Set(directions)];

  const [showFilterLocation, setShowFilterLocation] = useState<boolean>(false);
  const [isFilterLocationOn, setIsFilterLocationOn] = useState<boolean>(false);
  // const [filteredLocationCards, setFilteredLocationCards] = useState([]);
  const [showFilterDirection, setShowFilterDirection] =
    useState<boolean>(false);
  // const [isFilterDirection, setIsFilterDirection] = useState<boolean>(false);

  const [cardsForRender, setCardsForRender] = useState(eventsToRender);

  const handleFilterLocationClick = () => {
    setShowFilterDirection(false);
    setShowFilterLocation(!showFilterLocation);
  };

  const handleFilterDirectionClick = () => {
    setShowFilterLocation(false);
    setShowFilterDirection(!showFilterDirection);
  };

  //фильтр по региону
  const handleLocationFiltering = (
    cards: CardEventData[],
    isFilterLocationOn: boolean,
    buttonLocation: string | null
  ) => {
    if (isFilterLocationOn) {
      const result = cards.filter(card => card.location === buttonLocation);
      return result;
    } else {
      return cards;
    }
  };
  // useEffect(() => {
  // добавить сюда ф-ию
  // }, [])
  const handleLocationClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const buttonId = (event.target as HTMLButtonElement).textContent;
    setIsFilterLocationOn(true);
    const filtered = handleLocationFiltering(
      eventsToRender,
      isFilterLocationOn,
      buttonId
    );
    setCardsForRender(filtered);
  };

  return (
    <main className={styles.events}>
      <h2 className={styles.title}>СОБЫТИЯ</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button className={styles.button}>
            Дата
            <div className={styles.arrow} />
          </button>
        </li>
        <li className={styles.item}>
          <button
            className={styles.button}
            onClick={handleFilterDirectionClick}
          >
            Направления
            <div className={styles.arrow} />
          </button>
        </li>
        <li className={styles.item}>
          <button className={styles.button} onClick={handleFilterLocationClick}>
            Регион
            <div className={styles.arrow} />
          </button>
        </li>
      </ul>
      {showFilterLocation ? (
        <ul className={styles.filter}>
          {uniqueLocations.map(location => (
            <li key={locations.indexOf(location)}>
              <button
                name={location}
                className={styles.filterButton}
                onClick={handleLocationClick}
              >
                {location}
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
      {showFilterDirection ? (
        <ul className={styles.filter}>
          {uniqueDirections.map(direction => (
            <li key={directions.indexOf(direction)}>
              <button className={styles.filterButton}>{direction}</button>
            </li>
          ))}
        </ul>
      ) : (
        <></>
      )}
      <ul className={styles.cards}>
        {cardsForRender.map(card => (
          <CardEvent key={card.id} data={card} pageEvents={true} />
        ))}
      </ul>
    </main>
  );
};
