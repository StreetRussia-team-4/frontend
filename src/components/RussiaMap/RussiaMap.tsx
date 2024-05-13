import React from 'react';
import { MouseEventHandler } from 'react';
import RussiaSVG from '../../assets/ru.svg';

const RussiaMap: React.FC = () => {
  const mouseEntered: MouseEventHandler<HTMLImageElement> = event => {
    const target = event.currentTarget;
    if (target && target.nodeName === 'path') {
      target.style.opacity = '0.6';
    }
  };

  const mouseGone: MouseEventHandler<HTMLImageElement> = event => {
    const target = event.currentTarget;
    if (target.nodeName === 'path') {
      target.style.opacity = '1';
    }
  };

  return (
    <div className="map-container">
      <img
        src={RussiaSVG}
        alt="Russia Map"
        onMouseEnter={mouseEntered}
        onMouseLeave={mouseGone}
      />
    </div>
  );
};

export default RussiaMap;
