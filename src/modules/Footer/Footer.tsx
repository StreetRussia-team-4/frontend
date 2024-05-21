import React from 'react';
// import { Link } from 'react-router-dom';
import styles from './Footer.module.scss';
import logo from '@icon/logoFooter.svg';
import youtubeIcon from '@icon/youtube.svg';
import vkIcon from '@icon/vk.svg';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.questions}>
        <div className={styles.logo}>
          {/* Ваш логотип */}
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
          <button className={styles.button}>ЗАДАТЬ ВОПРОС</button>
        </div>
      </div>
      <ul className={styles.columns}>
        <li className={styles.column}>
          <h2 className={styles.title}>НАШИ АДРЕСА</h2>
          <ul className={styles.list}>
            <li>
              <h3 className={styles.subtitle}>Юридический</h3>
              <p>
                355006, Ставропольский
                <br />
                край, г. Ставрополь,
                <br />
                Станичная ул, д. 64
              </p>
            </li>
            <li>
              <h3 className={styles.subtitle}>Фактический</h3>
              <p>
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
          <h2 className={styles.title}>КОНТАКТЫ</h2>
          <ul className={styles.list}>
            <li>
              <h3 className={styles.subtitle}>EMAIL</h3>
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
              <h3 className={styles.subtitle}>СОЦ. СЕТИ</h3>
              <ul className={styles.links}>
                <li>
                  <a
                    className={styles.link}
                    href="#"
                    target="_blank"
                    rel="noreferrer"
                  >
                    <img src={vkIcon} />
                  </a>
                </li>
                <li>
                  <a
                    className={styles.link}
                    href="#"
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

export { Footer };
