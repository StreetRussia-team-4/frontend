import React, { useState, useEffect } from 'react';
import styles from './EventsPage.module.scss';
import './custom-datepicker-styles.scss';
import { CardEventData } from '@/components';
import { CardEvent } from '@components/index';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

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
  const [showFilterDirection, setShowFilterDirection] =
    useState<boolean>(false);
  const [isFilterDirectionOn, setIsFilterDirectionOn] =
    useState<boolean>(false);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isFilterDateOn, setIsFilterDateOn] = useState<boolean>(false);

  const [cardsForRender, setCardsForRender] = useState(eventsToRender);

  useEffect(() => {
    setCardsForRender(eventsToRender);
  }, [eventsToRender]);

  const handleFilterLocationClick = () => {
    setIsFilterLocationOn(!isFilterLocationOn);
    setIsFilterDirectionOn(false);
    setIsFilterDateOn(false);
    setShowFilterDirection(false);
    setShowFilterLocation(!showFilterLocation);
    setShowDatePicker(false);
  };

  const handleFilterDirectionClick = () => {
    setIsFilterDirectionOn(!isFilterDirectionOn);
    setIsFilterLocationOn(false);
    setIsFilterDateOn(false);
    setShowFilterLocation(false);
    setShowFilterDirection(!showFilterDirection);
    setShowDatePicker(false);
  };

  const handleDateClick = () => {
    setIsFilterDateOn(!isFilterDateOn);
    setShowDatePicker(!showDatePicker);
    setIsFilterDirectionOn(false);
    setIsFilterLocationOn(false);
    setShowFilterLocation(false);
    setShowFilterDirection(false);
  };

  //фильтр по дате
  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    console.log('selectedDate: ', selectedDate);
    setShowDatePicker(false);
    if (date) {
      const filtered = eventsToRender.filter(card => {
        const eventDate = new Date(card.startDate);
        return eventDate.toDateString() === date.toDateString();
      });
      console.log('filtered: ', filtered);
      setCardsForRender(filtered);
    } else {
      setCardsForRender(eventsToRender);
    }
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

  return (
    <main className={styles.events}>
      <h2 className={styles.title}>СОБЫТИЯ</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button
            id="date"
            className={`${styles.button} ${isFilterDateOn ? styles.buttonActive : ''}`}
            onClick={handleDateClick}
          >
            Дата
            <div
              id="arrowDate"
              className={`${styles.arrow} ${isFilterDateOn ? styles.arrowActive : ''}`}
            />
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
      {showDatePicker && (
        <div className={styles.datePickerWrapper}>
          <DatePicker
            selected={selectedDate}
            onChange={handleDateChange}
            inline
            calendarClassName={styles.DatePicker}
          />
        </div>
      )}
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
