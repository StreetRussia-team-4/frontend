import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../../assets/logo.svg';

export const Header: React.FC = () => {
  return (
    <header>
      <div className="logo">
        {/* Ваш логотип */}
        <img src={logo} alt="Логотип" />
      </div>
      <nav className={styles.navigat_ion}>
        <ul>
          <li>
            <Link to="/about">О нас</Link>
          </li>
          <li>
            <Link to="/departments">Отделения</Link>
          </li>
          <li>
            <Link to="/directions">Направления</Link>
          </li>
          <li>
            <Link to="/events">События</Link>
          </li>
          <li>
            <Link to="/blog">Блог</Link>
          </li>
          <li>
            <Link to="/contacts">Контакты</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};
