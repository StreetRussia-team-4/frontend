// import React from 'react';
// import styles from './CardEvent.module.scss';

export interface CardEventData {
  id: number;
  image: string | HTMLImageElement; //почему?
  title: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;
}
