import React, { useState } from 'react';
import { documents } from '@/utils/constants';
import type { DocumentType } from '@/type/type';
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
            className={selectedType === item ? 'active' : ''}
          >
            {item}
          </button>
        ))}
      </nav>
      <table>
        <thead>
          <tr>
            <th>Название</th>
            <th>Тип документа</th>
            <th>Дата документа</th>
            <th>Ссылка для скачивания</th>
          </tr>
        </thead>
        <tbody>
          {filteredDocuments.map(doc => (
            <tr key={doc.title}>
              <td>{doc.title}</td>
              <td>{doc.type}</td>
              <td>{doc.date}</td>
              <td>
                <a href={doc.downloadLink}>скачать</a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};
