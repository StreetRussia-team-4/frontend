import React from 'react';
import styles from './AddressPlayground.module.scss';

export interface CardAddressPlaygroundProps {
  data: CardAddressPlaygroundData;
}

export interface CardAddressPlaygroundData {
  id: number;
  region: string;
  address: string;
}

export const CardAddressPlayground: React.FC<CardAddressPlaygroundProps> = ({
  data,
}) => {
  const { address } = data;

  return (
    <li className={styles.card}>
      <div className={styles.icon}></div>
      <p className={styles.address}>{address.toLocaleUpperCase()}</p>
    </li>
  );
};
