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
          <div className={styles.fieldGroupColumn}>
            <div className={styles.fieldGroupColumn}>
              <label>Ваши данные</label>
              <input
                placeholder="ФИО"
                type="text"
                name="fullName"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <div className={styles.fieldGroupRow}>
                <input
                  placeholder="Дата рождения"
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  onChange={handleChange}
                  required
                />
                <input
                  placeholder="Город"
                  type="text"
                  name="city"
                  value={formData.city}
                  onChange={handleChange}
                  required
                />
              </div>
              <select
                name="region"
                value={formData.region}
                onChange={handleChange}
                required
                className={styles.region}
              >
                <option value="" disabled>
                  Область
                </option>
                {/* Add region options here */}
              </select>
            </div>
            <div className={styles.fieldGroupColumn}>
              <label>Паспорт</label>
              <div>
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
          <div className={styles.fieldGroupRow}>
            <div className={styles.fieldGroupColumn}>
              <label>Связь</label>
              <input
                placeholder="+7 (_ _ _) _ _ _ - _ _ - _ _"
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
              />
              <input
                placeholder="е-mail"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
              <input
                placeholder="социальная сеть для связи"
                type="text"
                name="socialMedia"
                value={formData.socialMedia}
                onChange={handleChange}
              />
              <label></label>
              <input
                type="text"
                name="passportIssuedBy"
                placeholder="Кем выдан"
                value={formData.passportIssuedBy}
                onChange={handleChange}
                required
              />
              <Button
                text="ПРИСОЕДИНИТЬСЯ"
                type="submit"
                className={styles.button}
              />
              <span className={styles.disclaimer}>
                Заполняя эту форму, вы соглашаетесь с правами и обязанностями
                участника ООО УКС Улицы России
              </span>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};
