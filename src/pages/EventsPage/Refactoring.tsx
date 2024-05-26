import React, { useState, useEffect } from 'react';
import styles from './EventsPage.module.scss';
import { CardEventData } from '@/components';
import { CardEvent } from '@components/index';
import 'react-datepicker/dist/react-datepicker.css';
import DatePicker from 'react-datepicker';

interface EventsProps {
  eventsToRender: CardEventData[];
}

const EventsPage: React.FC<EventsProps> = ({ eventsToRender }) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(null);
  const [isFilterDateOn, setIsFilterDateOn] = useState<boolean>(false);
  const [showDatePicker, setShowDatePicker] = useState<boolean>(false);
  const [cardsForRender, setCardsForRender] = useState(eventsToRender);
  const [isFilterLocationOn, setIsFilterLocationOn] = useState<boolean>(false);
  const [isFilterDirectionOn, setIsFilterDirectionOn] =
    useState<boolean>(false);
  const [showFilterLocation, setShowFilterLocation] = useState<boolean>(false);
  const [showFilterDirection, setShowFilterDirection] =
    useState<boolean>(false);
  const locations = eventsToRender.map(card => card.location);
  const uniqueLocations = [...new Set(locations)];

  const directions = eventsToRender.map(card => card.direction);
  const uniqueDirections = [...new Set(directions)];

  useEffect(() => {
    setCardsForRender(eventsToRender);
  }, [eventsToRender]);

  const handleFilter = (filterType: string) => {
    switch (filterType) {
      case 'date':
        setIsFilterDateOn(!isFilterDateOn);
        setShowDatePicker(!showDatePicker);
        break;
      case 'directions':
        setIsFilterDirectionOn(!isFilterDirectionOn);
        setIsFilterLocationOn(false);
        setShowFilterLocation(false);
        setShowFilterDirection(!showFilterDirection);
        setShowDatePicker(false);
        break;
      case 'locations':
        setIsFilterLocationOn(!isFilterLocationOn);
        setIsFilterDirectionOn(false);
        setShowFilterDirection(false);
        setShowFilterLocation(!showFilterLocation);
        setShowDatePicker(false);
        break;
      default:
        break;
    }
  };

  const handleDateChange = (date: Date | null) => {
    setSelectedDate(date);
    if (date) {
      const filtered = eventsToRender.filter(
        card => new Date(card.startDate).toDateString() === date.toDateString()
      );
      setCardsForRender(filtered);
    } else {
      setCardsForRender(eventsToRender);
    }
  };

  const handleLocationOrDirectionClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
    filterType: 'location' | 'direction'
  ) => {
    const buttonId = (event.target as HTMLButtonElement).textContent;
    const filtered = eventsToRender.filter(card => {
      if (filterType === 'location') {
        return card.location === buttonId;
      } else if (filterType === 'direction') {
        return card.direction === buttonId;
      }
      return false;
    });
    setCardsForRender(filtered);
  };

  return (
    <main className={styles.events}>
      <h2 className={styles.title}>СОБЫТИЯ</h2>
      <ul className={styles.list}>
        <li className={styles.item}>
          <button
            id="date"
            className={`${styles.button} ${
              isFilterDateOn ? styles.buttonActive : ''
            }`}
            onClick={() => handleFilter('date')}
          >
            Дата
            <div
              id="arrowDate"
              className={`${styles.arrow} ${
                isFilterDateOn ? styles.arrowActive : ''
              }`}
            />
          </button>
        </li>
        <li className={styles.item}>
          <button
            id="directions"
            className={`${styles.button} ${
              isFilterDirectionOn ? styles.buttonActive : ''
            }`}
            onClick={() => handleFilter('directions')}
          >
            Направления
            <div
              id="arrowDirection"
              className={`${styles.arrow} ${
                isFilterDirectionOn ? styles.arrowActive : ''
              }`}
            />
          </button>
        </li>
        <li className={styles.item}>
          <button
            id="locations"
            className={`${styles.button} ${
              isFilterLocationOn ? styles.buttonActive : ''
            }`}
            onClick={() => handleFilter('locations')}
          >
            Регион
            <div
              id="arrowLocation"
              className={`${styles.arrow} ${
                isFilterLocationOn ? styles.arrowActive : ''
              }`}
            />
          </button>
        </li>
      </ul>
      {showDatePicker && (
        <div className={styles.datePickerWrapper}>
          <DatePicker
            selected={selectedDate}
            onChange={selectedDate => handleDateChange(selectedDate)}
            inline
            calendarClassName={styles.DatePicker}
          />
        </div>
      )}
      {showFilterLocation && (
        <ul className={styles.filter}>
          {uniqueLocations.map(location => (
            <li key={location}>
              <button
                className={styles.filterButton}
                onClick={event =>
                  handleLocationOrDirectionClick(event, 'location')
                }
              >
                {location}
              </button>
            </li>
          ))}
        </ul>
      )}
      {showFilterDirection && (
        <ul className={styles.filter}>
          {uniqueDirections.map(direction => (
            <li key={direction}>
              <button
                className={styles.filterButton}
                onClick={event =>
                  handleLocationOrDirectionClick(event, 'direction')
                }
              >
                {direction}
              </button>
            </li>
          ))}
        </ul>
      )}
      <ul className={styles.cards}>
        {cardsForRender.length === 0 ? (
          <li className={styles.noResults}>
            Ничего не нашлось. <br /> Но что-то интересное обязательно будет:
            просто на другую тему, в другое время или в другом городе.
          </li>
        ) : (
          cardsForRender.map(card => (
            <CardEvent key={card.id} data={card} pageEvents={true} />
          ))
        )}
      </ul>
    </main>
  );
};

export default EventsPage;
