import React from 'react';
import styles from './AddressPlayground.module.scss';
import type { CardAddressPlaygroundData } from '@/type/type';

export interface CardAddressPlaygroundProps {
  data: CardAddressPlaygroundData;
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
