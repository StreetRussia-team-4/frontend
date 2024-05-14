import { useState, useEffect } from 'react';
import styles from './ScrollToTopButton.module.scss';

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  // Проверяем положение скролла при монтировании компонента и при обновлении
  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  // Определяем, когда кнопка должна отображаться
  const toggleVisibility = () => {
    if (window.scrollY > 30) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  // Прокрутка страницы вверх
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
          Вверх
        </button>
      )}
    </div>
  );
};

export default ScrollToTopButton;
