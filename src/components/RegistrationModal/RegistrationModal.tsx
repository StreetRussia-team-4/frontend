import React, { useState, ChangeEvent, FormEvent } from 'react';
import styles from './RegistrationModal.module.scss';

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
    //Handle form submission
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
          <div className={styles.fieldSets}>
            <div className={styles.personalDataBlock}>
              <label className={styles.label}>Ваши данные</label>
              <fieldset className={styles.dataGrid}>
                <input
                  placeholder="ФИО"
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
                <input
                  placeholder="Дата рождения"
                  type="date"
                  name="birthDate"
                  value={formData.birthDate}
                  className={styles.dateInput}
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
                <label className={styles.labelSelect}>Город</label>
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
                  <option value="region1">Region 1</option>
                  <option value="region2">Region 2</option>
                  <option value="region3">Region 3</option>
                  {/* Add more regions as needed */}
                </select>
              </fieldset>
            </div>
            <div className={styles.contactBlock}>
              <label>Связь</label>
              <fieldset className={styles.contactFlex}>
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
              </fieldset>
            </div>
          </div>
          <div className={styles.passportContainer}>
            <label>Паспорт</label>
            <fieldset className={styles.passportFieldset}>
              <div className={styles.passportBlock}>
                <input
                  className={styles.serie}
                  type="text"
                  name="passportSeries"
                  placeholder="Серия"
                  value={formData.passportSeries}
                  onChange={handleChange}
                  required
                />
                <input
                  className={styles.number}
                  type="text"
                  name="passportNumber"
                  placeholder="Номер"
                  value={formData.passportNumber}
                  onChange={handleChange}
                  required
                />
                <input
                  className={styles.date}
                  type="date"
                  name="passportIssueDate"
                  placeholder="Дата выдачи"
                  value={formData.passportIssueDate}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className={styles.buttonBlock}>
                <input
                  type="text"
                  name="passportIssuedBy"
                  placeholder="Кем выдан"
                  value={formData.passportIssuedBy}
                  onChange={handleChange}
                  required
                />
                <button type="submit" className={styles.button}>
                  ПРИСОЕДИНИТЬСЯ
                </button>
                <span className={styles.disclaimer}>
                  ЗАПОЛНИВ ЭТУ ФОРМУ, ВЫ СОГЛАШАЕТЕСЬ С ПРАВАМИ И ОБЯЗАННОСТЯМИ
                  УЧАСТНИКА ООО УКС УЛИЦЫ РОССИИ
                </span>
              </div>
            </fieldset>
          </div>
        </form>
      </div>
    </div>
  );
};
