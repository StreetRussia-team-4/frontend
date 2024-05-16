import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../../assets/logo.svg';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <div className={styles.logo}>
        {/* Ваш логотип */}
        <img className={styles.image} src={logo} alt="Логотип" />
      </div>
      <nav>
        <ul className={styles.links}>
          <li className={styles.navigation}>
            <Link to="/about" className={styles.link}>
              О НАС
            </Link>
          </li>
          <li className={styles.navigation}>
            <Link to="/departments" className={styles.link}>
              ОТДЕЛЕНИЯ
            </Link>
            <div className={styles.arrow}></div>
          </li>
          <li className={styles.navigation}>
            <Link to="/directions" className={styles.link}>
              НАПРАВЛЕНИЯ
            </Link>
            <div className={styles.arrow}></div>
          </li>
          <li className={styles.navigation}>
            <Link to="/events" className={styles.link}>
              СОБЫТИЯ
            </Link>
          </li>
          <li className={styles.navigation}>
            <Link to="/projects" className={styles.link}>
              ПРОЕКТЫ
            </Link>
            <div className={styles.arrow}></div>
          </li>
          <li className={styles.navigation}>
            <Link to="/blog" className={styles.link}>
              БЛОГ
            </Link>
            <div className={styles.arrow}></div>
          </li>
        </ul>
      </nav>
    </header>
  );
};
