import React, { useState, useEffect } from 'react';
import styles from './AddressesPage.module.scss';
import { CardAddressPlaygroundData } from '@/type/type';
import { CardAddressPlayground } from '@components/index';

interface AddressPlaygroundProps {
  addressToRender: CardAddressPlaygroundData[];
}

export const AddressesPage: React.FC<AddressPlaygroundProps> = ({
  addressToRender,
}) => {
  const regions = addressToRender.map(card => card.region);
  const uniqueLocations = [...new Set(regions)];

  const [showFilterLocation, setShowFilterLocation] = useState<boolean>(false);
  const [isFilterLocationOn, setIsFilterLocationOn] = useState<boolean>(false);

  const [isAllLocationOn, setIsAllLocationOn] = useState<boolean>(true);

  const [activeFilterButton, setActiveFilterButton] = useState<string | null>(
    null
  );
  const [cardsForRender, setCardsForRender] = useState(addressToRender);

  useEffect(() => {
    function restoreInitialCards() {
      if (!isFilterLocationOn && isAllLocationOn) {
        setCardsForRender(addressToRender);
      }
    }

    restoreInitialCards();
  }, [addressToRender, isFilterLocationOn, isAllLocationOn]);

  const handleFilterLocationClick = () => {
    setIsFilterLocationOn(!isFilterLocationOn);
    setIsAllLocationOn(false);
    setShowFilterLocation(!showFilterLocation);
  };

  const handleAllLocationClick = () => {
    setIsFilterLocationOn(false);
    setIsAllLocationOn(true);
    setShowFilterLocation(false);
  };

  //фильтр по региону
  const handleLocationFiltering = (
    cards: CardAddressPlaygroundData[],
    isFilterLocationOn: boolean,
    buttonLocation: string | null
  ) => {
    if (isFilterLocationOn) {
      const result = cards.filter(
        card => card.region.toLocaleUpperCase() === buttonLocation
      );
      return result;
    } else {
      return cards;
    }
  };

  const handleLocationClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>
  ) => {
    const buttonLocation = (event.target as HTMLButtonElement).textContent;
    setActiveFilterButton(buttonLocation);
    setIsFilterLocationOn(true);
    const filtered = handleLocationFiltering(
      addressToRender,
      true,
      buttonLocation
    );
    setCardsForRender(filtered);
  };

  return (
    <section className={styles.addresses}>
      <h2 className={styles.title}>
        Адреса площадок
        <br />
        для уличного спорта
      </h2>
      <iframe
        className={styles.map}
        src="https://yandex.ru/map-widget/v1/?um=constructor%3A737d4fed475acbf60a3d6a4d8b5da81bea271a9e8e70b3ed96cd62df51efcd0d&amp;source=constructor"
        width="1240"
        height="580"
      ></iframe>
      <div>
        <ul className={styles.list}>
          <li className={styles.item}>
            <button
              className={`${styles.button} ${isAllLocationOn ? styles.buttonActive : ''}`}
              onClick={handleAllLocationClick}
            >
              Все адреса
              <div
                className={`${styles.arrow} ${isAllLocationOn ? styles.arrowActive : ''}`}
              />
            </button>
          </li>
          <li className={styles.item}>
            <button
              className={`${styles.button} ${isFilterLocationOn ? styles.buttonActive : ''}`}
              onClick={handleFilterLocationClick}
            >
              Регион
              <div
                className={`${styles.arrow} ${isFilterLocationOn ? styles.arrowActive : ''}`}
              />
            </button>
          </li>
        </ul>
        {showFilterLocation ? (
          <ul className={styles.filter}>
            {uniqueLocations.map(location => (
              <li key={regions.indexOf(location)}>
                <button
                  className={`${styles.filterButton} ${activeFilterButton === location.toLocaleUpperCase() ? styles.filterButtonActive : ''}`}
                  onClick={handleLocationClick}
                >
                  {location.toLocaleUpperCase()}
                </button>
              </li>
            ))}
          </ul>
        ) : (
          <></>
        )}
        <ul className={styles.cards}>
          {cardsForRender.map(card => (
            <CardAddressPlayground key={card.id} data={card} />
          ))}
        </ul>
      </div>
    </section>
  );
};
