import React, { useState } from 'react';
import { documents } from '@/utils/constants';
import type { DocumentType } from '@/type/type';
import DowloadIcon from '@icon/download.svg';
import styles from './DocumentsPage.module.scss';

export const DocumentsPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<DocumentType | 'все'>('все');
  const menuItems: (DocumentType | 'все')[] = [
    'все',
    'официальные',
    'внутренние',
    'внешние',
  ];

  const filteredDocuments =
    selectedType === 'все'
      ? documents
      : documents.filter(doc => doc.type === selectedType);

  return (
    <div className={styles.container}>
      <h3 className={styles.title}>
        Документы <br /> организации
      </h3>
      <button className={styles.button}>
        ДОКУМЕНТЫ <div className={styles.arrow} />
      </button>
      <nav className={styles.navmenu}>
        {menuItems.map(item => (
          <button
            key={item}
            onClick={() => setSelectedType(item)}
            className={`${styles.item} ${selectedType === item ? styles.itemActive : ''}`}
          >
            {item}
          </button>
        ))}
      </nav>
      <table>
        <thead>
          <tr>
            <th className={styles.columnTitle}>Название</th>
            <th className={styles.columnTitle}>Тип документа</th>
            <th className={styles.columnTitle}>Дата документа</th>
            <th className={styles.columnTitle}>Ссылка для скачивания</th>
          </tr>
        </thead>
        <tbody>
          {filteredDocuments.map(doc => (
            <tr key={doc.title}>
              <td className={styles.string}>{doc.title}</td>
              <td className={styles.string}>{doc.type}</td>
              <td className={styles.string}>{doc.date}</td>
              <td className={`${styles.string} ${styles.linkGroup}`}>
                <img
                  src={DowloadIcon}
                  alt="скачать"
                  className={styles.downloadLink}
                />
                <a href={doc.downloadLink} className={styles.link}>
                  скачать
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
