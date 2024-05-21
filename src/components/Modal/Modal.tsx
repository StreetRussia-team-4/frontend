import React, { useState } from 'react';
import styles from './Modal.module.scss';

interface ModalProps {
  isModalOpen: boolean;
  onClose: () => void;
}

export const Modal: React.FC<ModalProps> = ({ onClose, isModalOpen }) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [isAgreed, setIsAgreed] = useState(false);

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // handle form submission
  };

  if (!isModalOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &#x2715;
        </button>
        <div className={styles.amountContainer}>
          {[300, 500, 1000].map(amount => (
            <button
              key={amount}
              className={`${styles.amountButton} ${
                selectedAmount === amount ? styles.selected : ''
              }`}
              onClick={() => handleAmountClick(amount)}
            >
              {amount} ₽
            </button>
          ))}
          <button
            className={styles.amountButton}
            onClick={() => setSelectedAmount(null)}
          >
            Другая сумма
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="электронная почта"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className={styles.inputField}
          />
          <input
            type="tel"
            placeholder="номер телефона"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
            className={styles.inputField}
          />
          <div className={styles.checkboxContainer}>
            <input
              type="checkbox"
              id="agreement"
              checked={isAgreed}
              onChange={() => setIsAgreed(!isAgreed)}
              required
            />
            <label htmlFor="agreement">
              Я принимаю <a href="#">договор-оферту</a>
            </label>
          </div>
          <button type="submit" className={styles.button}>
            ПОДДЕРЖАТЬ
          </button>
        </form>
      </div>
    </div>
  );
};
