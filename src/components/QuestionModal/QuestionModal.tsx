import React, { useState } from 'react';
import styles from './QuestionModal.module.scss';
import { Button } from '@/ui';

interface DonationModalProps {
  isQuestionModalOpen: boolean;
  onClose: () => void;
}

export const QuestionModal: React.FC<DonationModalProps> = ({
  onClose,
  isQuestionModalOpen,
}) => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [name, setName] = useState('');
  const [surname, setSurname] = useState('');

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };

  if (!isQuestionModalOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &#x2715;
        </button>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.textWrapper}>
            <p className={styles.title}>Остались вопросы?</p>
            <p className={styles.subtitle}>ЗАПОЛНИ ФОРМУ И ОТПРАВЛЯЙ</p>
          </div>
          <div className={styles.inputsWrapper}>
            <fieldset className={styles.inputsGrid}>
              <input
                type="text"
                placeholder="Текст сообщения"
                name="message"
                value={message}
                onChange={e => setMessage(e.target.value)}
                required
                className={styles.inputMessage}
              />
              <input
                type="text"
                placeholder="Имя"
                name="firstName"
                value={name}
                onChange={e => setName(e.target.value)}
                required
                className={styles.inputField}
              />
              <input
                type="text"
                placeholder="Фамилия"
                name="surname"
                value={surname}
                onChange={e => setSurname(e.target.value)}
                required
                className={styles.inputField}
              />
              <input
                type="email"
                placeholder="Email"
                name="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
                className={styles.inputField}
              />
            </fieldset>
            <Button
              type="submit"
              onClick={() => handleSubmit}
              text="Отправить"
              className={styles.button}
              fontSize={1}
            />
          </div>
        </form>
      </div>
    </div>
  );
};
