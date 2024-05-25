import React, { useState, useEffect } from 'react';
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
  const [isFilterDirectionOn, setIsFilterDirectionOn] =
    useState<boolean>(false);

  const [cardsForRender, setCardsForRender] = useState(eventsToRender);

  useEffect(() => {
    setCardsForRender(eventsToRender);
  }, [eventsToRender]);

  const handleFilterLocationClick = () => {
    setIsFilterLocationOn(!isFilterLocationOn);
    setIsFilterDirectionOn(false);
    setShowFilterDirection(false);
    setShowFilterLocation(!showFilterLocation);
  };

  const handleFilterDirectionClick = () => {
    setIsFilterDirectionOn(!isFilterDirectionOn);
    setIsFilterLocationOn(false);
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

  const handleLocationClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const buttonId = (event.target as HTMLButtonElement).textContent;
    console.log('allooo: ', buttonId);
    // Обновляем состояние для фильтрации по региону
    setIsFilterLocationOn(true);
    setIsFilterDirectionOn(false); // Сбрасываем состояние для фильтрации по направлению
    const filtered = handleLocationFiltering(
      eventsToRender,
      true, // Передаем true для фильтрации по региону
      buttonId
    );
    setCardsForRender(filtered);
  };

  //фильтр по направлению
  const handleDirectionFiltering = (
    cards: CardEventData[],
    isFilterDirectionOn: boolean,
    buttonDirection: string | null
  ) => {
    if (isFilterDirectionOn) {
      const result = cards.filter(card => card.direction === buttonDirection);
      return result;
    } else {
      return cards;
    }
  };

  const handleDirectionClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const buttonId = (event.target as HTMLButtonElement).textContent;
    setIsFilterDirectionOn(true);
    setIsFilterLocationOn(false); // Сбрасываем состояние для фильтрации по региону
    const filtered = handleDirectionFiltering(
      eventsToRender,
      true, // Передаем true для фильтрации по направлению
      buttonId
    );
    setCardsForRender(filtered);
  };

  console.log('isFilterLocationOn: ', isFilterLocationOn);

  return (
    <main className={styles.events}>
      <h2 className={styles.title}>СОБЫТИЯ</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button id="date" className={styles.button}>
            Дата
            <div id="arrowDate" className={styles.arrow} />
          </button>
        </li>
        <li className={styles.item}>
          <button
            id="directions"
            className={`${styles.button} ${isFilterDirectionOn ? styles.buttonActive : ''}`}
            onClick={handleFilterDirectionClick}
          >
            Направления
            <div
              id="arrowDirection"
              className={`${styles.arrow} ${isFilterDirectionOn ? styles.arrowActive : ''}`}
            />
          </button>
        </li>
        <li className={styles.item}>
          <button
            id="locations"
            className={`${styles.button} ${isFilterLocationOn ? styles.buttonActive : ''}`}
            onClick={handleFilterLocationClick}
          >
            Регион
            <div
              id="arrowLocation"
              className={`${styles.arrow} ${isFilterLocationOn ? styles.arrowActive : ''}`}
            />
          </button>
        </li>
      </ul>
      {showFilterLocation ? (
        <ul className={styles.filter}>
          {uniqueLocations.map(location => (
            <li key={locations.indexOf(location)}>
              <button
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
              <button
                className={styles.filterButton}
                onClick={handleDirectionClick}
              >
                {direction}
              </button>
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
