import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './Footer.module.scss';
import logo from '@icon/logoFooter.svg';
import youtubeIcon from '@icon/youtube.svg';
import vkIcon from '@icon/vk.svg';

interface FooterProps {
  setIsModalOpen: (isModalOpen: boolean) => void;
}

export const Footer: React.FC<FooterProps> = ({ setIsModalOpen }) => {
  const openQuestionModal = () => {
    if (setIsModalOpen) {
      setIsModalOpen(true);
    }
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.questions}>
        <div className={styles.logo}>
          <img src={logo} alt="Логотип" />
        </div>
        <div>
          <p className={styles.text}>
            Остались вопросы?
            <br />
            Свяжитесь с нами через
            <br />
            форму по кнопке ниже.
          </p>
          <button className={styles.button} onClick={openQuestionModal}>
            ЗАДАТЬ ВОПРОС
          </button>
        </div>
      </div>
      <ul className={styles.columns}>
        <li className={styles.column}>
          <h4 className={styles.title}>НАШИ АДРЕСА</h4>
          <ul className={styles.list}>
            <li>
              <h5 className={styles.subtitle}>Юридический</h5>
              <p className={styles.text}>
                355006, Ставропольский
                <br />
                край, г. Ставрополь,
                <br />
                Станичная ул, д. 64
              </p>
            </li>
            <li>
              <h5 className={styles.subtitle}>Фактический</h5>
              <p className={styles.text}>
                355006, Ставропольский
                <br />
                край, г. Ставрополь,
                <br />
                Станичная ул, д. 64
              </p>
            </li>
          </ul>
        </li>
        <li className={styles.column}>
          <h4 className={styles.title}>ДОКУМЕНТЫ</h4>
          <ul className={styles.docs}>
            <li>
              <NavLink to="/documents" className={styles.doc}>
                Все документы
              </NavLink>
            </li>
            <li>
              <NavLink to="/documents" className={styles.doc}>
                Официальные документы
              </NavLink>
            </li>
            <li>
              <NavLink to="/documents" className={styles.doc}>
                Внутренние документы
              </NavLink>
            </li>
            <li>
              <NavLink to="/documents" className={styles.doc}>
                Внешние документы
              </NavLink>
            </li>
          </ul>
        </li>
        <li className={styles.column}>
          <h4 className={styles.title}>КОНТАКТЫ</h4>
          <ul className={styles.list}>
            <li className={styles.element}>
              <h5 className={styles.subtitle}>EMAIL</h5>
              <a
                className={styles.mail}
                href="mailto:info@streetrussia.ru"
                target="_blank"
                rel="noreferrer"
              >
                info@streetrussia.ru
              </a>
            </li>
            <li>
              <h5 className={styles.subtitle}>СОЦ. СЕТИ</h5>
              <ul className={styles.links}>
                <li>
                  <a
                    className={styles.link}
                    href="https://vk.com/streetrf"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={vkIcon} />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.link}
                    href="https://www.youtube.com/channel/UCse4y0X9dK0utXKtjwlZ1dg"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={youtubeIcon} />
                  </a>
                </li>
              </ul>
            </li>
          </ul>
        </li>
      </ul>
    </footer>
  );
};
