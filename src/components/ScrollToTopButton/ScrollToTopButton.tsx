import React, { useState, useEffect } from 'react';
import arrowUp from '@icon/arrow-up.svg';
import styles from './ScrollToTopButton.module.scss';

export const ScrollToTopButton: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 30) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <div className={styles['scroll-to-top']}>
      {isVisible && (
        <button className={styles.button} onClick={scrollToTop} title="Наверх">
          <img
            src={arrowUp}
            alt="Наверх экрана"
            className={styles.arrowUp}
          ></img>
        </button>
      )}
    </div>
  );
};
