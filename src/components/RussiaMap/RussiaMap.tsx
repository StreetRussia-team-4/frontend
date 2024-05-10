import React from 'react';
import RussiaSVG from '../../assets/ru.svg';

const RussiaMap: React.FC = () => {
  // // 1
  // const mouseEntered = (e: React.MouseEvent<SVGPathElement, MouseEvent>) => {
  //   const target = e.currentTarget;
  //   if (target.nodeName === 'path') {
  //     target.style.opacity = '0.6';
  //   }
  // };

  // // 2
  // const mouseGone = (e: React.MouseEvent<SVGPathElement, MouseEvent>) => {
  //   const target = e.currentTarget;
  //   if (target.nodeName === 'path') {
  //     target.style.opacity = '1';
  //   }
  // };

  return (
    <div className="map-container">
      <img src={RussiaSVG} alt="Russia Map" />
    </div>
  );
};

export default RussiaMap;
