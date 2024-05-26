import React, { useState } from 'react';
import styles from './DonationModal.module.scss';
import { Button } from '@/ui';

interface DonationModalProps {
  isDonModalOpen: boolean;
  onClose: () => void;
}

export const DonationModal: React.FC<DonationModalProps> = ({
  onClose,
  isDonModalOpen,
}) => {
  const [selectedAmount, setSelectedAmount] = useState<number | null>(1000);
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');

  const handleAmountClick = (amount: number) => {
    setSelectedAmount(amount);
  };

  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // handle form submission
  };

  if (!isDonModalOpen) return null;

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
            className={`${styles.amountButton} ${styles.otherAmount} ${
              selectedAmount === null ? styles.selected : ''
            }`}
            onClick={() => setSelectedAmount(null)}
          >
            другая сумма
          </button>
        </div>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            placeholder="e-mail"
            value={email}
            onChange={e => setEmail(e.target.value)}
            required
            className={styles.inputField}
          />
          <input
            type="tel"
            placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            required
            className={styles.inputField}
          />
          <Button
            type="submit"
            onClick={() => handleSubmit}
            text="ПОДДЕРЖАТЬ"
            className={styles.button}
          />
          <div className={styles.agreement}>
            Заполнив эту форму, вы принимаете
          </div>
          <a className={styles.link} href="#" target="_blank" rel="noreferrer">
            договор-оферту
          </a>
        </form>
      </div>
    </div>
  );
};
