import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '@icon/logo.svg';

export const Header: React.FC = () => {
  return (
    <header className={styles.header}>
      <NavLink to="/" className={styles.logo}>
        {/* Ваш логотип */}
        <img className={styles.image} src={logo} alt="Логотип" />
      </NavLink>
      <nav>
        <ul className={styles.links}>
          <li className={styles.navigation}>
            <NavLink to="/about-us" className={styles.link}>
              О НАС
            </NavLink>
          </li>
          <li className={styles.navigation}>
            <NavLink to="/departments" className={styles.link}>
              ОТДЕЛЕНИЯ
            </NavLink>
            <div className={styles.arrow}></div>
            <ul className={styles.sublinks}>
              <li className={styles.sublink}>
                <NavLink to="/departments/federal" className={styles.link}>
                  ФЕДЕРАЛЬНЫЕ
                </NavLink>
              </li>
              <li className={styles.sublink}>
                <NavLink to="/departments/regional" className={styles.link}>
                  РЕГИОНАЛЬНЫЕ
                </NavLink>
              </li>
            </ul>
          </li>
          <li className={styles.navigation}>
            <NavLink to="/directions" className={styles.link}>
              НАПРАВЛЕНИЯ
            </NavLink>
          </li>
          <li className={styles.navigation}>
            <NavLink to="/events" className={styles.link}>
              СОБЫТИЯ
            </NavLink>
            <div className={styles.arrow}></div>
            <ul className={styles.sublinks}>
              <li className={styles.sublink}>
                <NavLink to="/events" className={styles.link}>
                  СКОРО
                </NavLink>
              </li>
              <li className={styles.sublink}>
                <NavLink to="/events/archive" className={styles.link}>
                  АРХИВ
                </NavLink>
              </li>
            </ul>
          </li>
          <li className={styles.navigation}>
            <NavLink to="/projects" className={styles.link}>
              ПРОЕКТЫ
            </NavLink>
            <div className={styles.arrow}></div>
            <ul className={styles.sublinks}>
              <li className={styles.sublink}>
                <NavLink to="/projects/current" className={styles.link}>
                  ТЕКУЩИЕ
                </NavLink>
              </li>
              <li className={styles.sublink}>
                <NavLink to="/projects/upcoming" className={styles.link}>
                  ПРЕДСТОЯЩИЕ
                </NavLink>
              </li>
              <li className={styles.sublink}>
                <NavLink to="/projects/done" className={styles.link}>
                  ВЫПОЛНЕННЫЕ
                </NavLink>
              </li>
            </ul>
          </li>
          <li className={styles.navigation}>
            <NavLink to="/blog" className={styles.link}>
              БЛОГ
            </NavLink>
            <div className={styles.arrow}></div>
            <ul className={styles.sublinks}>
              <li className={styles.sublink}>
                <NavLink to="/blog/news" className={styles.link}>
                  НОВОСТИ
                </NavLink>
              </li>
              <li className={styles.sublink}>
                <NavLink to="/blog/articles" className={styles.link}>
                  СТАТЬИ
                </NavLink>
              </li>
              <li className={styles.sublink}>
                <NavLink to="/blog/interview" className={styles.link}>
                  ИНТЕРВЬЮ
                </NavLink>
              </li>
              <li className={styles.sublink}>
                <NavLink to="/blog/advice" className={styles.link}>
                  СОВЕТЫ
                </NavLink>
              </li>
            </ul>
          </li>
        </ul>
      </nav>
    </header>
  );
};
