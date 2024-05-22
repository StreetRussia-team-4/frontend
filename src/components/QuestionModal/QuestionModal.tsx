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
    // handle form submission
  };

  if (!isQuestionModalOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &#x2715;
        </button>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Текст сообщения"
            value={message}
            onChange={e => setMessage(e.target.value)}
            required
            className={styles.inputField}
          />
          <div>
            <input
              type="text"
              placeholder="Имя"
              value={name}
              onChange={e => setName(e.target.value)}
              required
              className={styles.inputField}
            />
            <input
              type="text"
              placeholder="Фамилия"
              value={surname}
              onChange={e => setSurname(e.target.value)}
              required
              className={styles.inputField}
            />
          </div>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className={styles.inputField}
          />
          <Button
            type="submit"
            onClick={() => handleSubmit}
            text="Отправить"
            className={styles.button}
          />
        </form>
      </div>
    </div>
  );
};
