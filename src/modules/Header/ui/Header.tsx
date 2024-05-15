import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../../assets/logo.svg';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* Ваш логотип */}
        <img src={logo} alt="Логотип" />
      </div>
      <nav className={styles.navigation}>
        <ul className={styles.links}>
          <li>
            <Link to="/about" className={styles.link}>
              О нас
            </Link>
          </li>
          <li>
            <Link to="/departments" className={styles.link}>
              Отделения
            </Link>
          </li>
          <li>
            <Link to="/directions" className={styles.link}>
              Направления
            </Link>
          </li>
          <li>
            <Link to="/events" className={styles.link}>
              События
            </Link>
          </li>
          <li>
            <Link to="/blog" className={styles.link}>
              Блог
            </Link>
          </li>
          <li>
            <Link to="/contacts" className={styles.link}>
              Контакты
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
