import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './RegistrationModal.module.scss';
import { Button } from '@/ui';

interface RegistrationModalProps {
  isRegModalOpen: boolean;
  onClose: () => void;
}

interface FormData {
  fullName: string;
  birthDate: string;
  city: string;
  region: string;
  phone: string;
  email: string;
  socialMedia: string;
  passportSeries: string;
  passportNumber: string;
  passportIssueDate: string;
  passportIssuedBy: string;
}

export const RegistrationModal: React.FC<RegistrationModalProps> = ({
  isRegModalOpen,
  onClose,
}) => {
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    birthDate: '',
    city: '',
    region: '',
    phone: '',
    email: '',
    socialMedia: '',
    passportSeries: '',
    passportNumber: '',
    passportIssueDate: '',
    passportIssuedBy: '',
  });

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form data submitted:', formData);
  };

  if (!isRegModalOpen) return null;

  return (
    <div className={styles.modalOverlay}>
      <div className={styles.modal}>
        <button className={styles.closeButton} onClick={onClose}>
          &#x2715;
        </button>
        <form onSubmit={handleSubmit} className={styles.form}>
          <div className={styles.fieldGroup}>
            <label>Ваши данные</label>
            <input
              placeholder="ФИО"
              type="text"
              name="fullName"
              value={formData.fullName}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.fieldGroup}>
            <input
              placeholder="Дата рождения"
              type="date"
              name="birthDate"
              value={formData.birthDate}
              onChange={handleChange}
              required
            />
          </div>
          <input
            placeholder="Город"
            type="text"
            name="city"
            value={formData.city}
            onChange={handleChange}
            required
          />
          <div className={styles.fieldGroup}>
            <select
              name="region"
              value={formData.region}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Область
              </option>
              {/* Add region options here */}
            </select>
          </div>
          <div className={styles.fieldGroup}>
            <label>Телефон</label>
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.fieldGroup}>
            <label>E-mail</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className={styles.fieldGroup}>
            <label>Социальная сеть для связи</label>
            <input
              type="text"
              name="socialMedia"
              value={formData.socialMedia}
              onChange={handleChange}
            />
          </div>
          <div className={styles.fieldGroup}>
            <label>Паспорт</label>
            <div className={styles.passportFields}>
              <input
                type="text"
                name="passportSeries"
                placeholder="Серия"
                value={formData.passportSeries}
                onChange={handleChange}
                required
              />
              <input
                type="text"
                name="passportNumber"
                placeholder="Номер"
                value={formData.passportNumber}
                onChange={handleChange}
                required
              />
            </div>
            <div className={styles.passportFields}>
              <input
                type="text"
                name="passportIssuedBy"
                placeholder="Кем выдан"
                value={formData.passportIssuedBy}
                onChange={handleChange}
                required
              />
              <input
                type="date"
                name="passportIssueDate"
                placeholder="Дата выдачи"
                value={formData.passportIssueDate}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          <Button
            text="Присоединиться"
            type="submit"
            className={styles.submitButton}
          />
          <p className={styles.disclaimer}>
            Заполняя эту форму, вы соглашаетесь с правами и обязанностями
            участника ООО УКС Улицы России
          </p>
        </form>
      </div>
    </div>
  );
};
