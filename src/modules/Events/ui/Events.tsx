import React from 'react';
import { Card } from '../../../components';
import styles from './Events.module.scss';

interface Event {
  id: string; // Assuming each event has a unique id
  image: string;
  title: string;
  location: string;
  description: string;
  startDate: string;
  endDate: string;
  progress: number;
  fundsRaised: number;
}

interface EventsProps {
  events: Event[];
}

const Events: React.FC<EventsProps> = ({ events }) => {
  return (
    <div className={styles.events}>
      {events.map(event => (
        <Card
          key={event.id}
          image={event.image}
          title={event.title}
          location={event.location}
          description={event.description}
          startDate={event.startDate}
          endDate={event.endDate}
          progress={event.progress}
          fundsRaised={event.fundsRaised}
        />
      ))}
    </div>
  );
};

export default Events;
