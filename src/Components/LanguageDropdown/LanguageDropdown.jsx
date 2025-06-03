// src/components/ui/LanguageDropdown.jsx
import React, { useState } from 'react';

import styles from './LanguageDropdown.module.scss';
import { uz } from '../../utils/getimage';
import { MdKeyboardArrowDown } from 'react-icons/md';

const languages = [
  { code: 'uz', name: 'UZ', flag: {uz} },
  { code: 'ru', name: 'RU', flag: {uz} },
  { code: 'en', name: 'EN', flag: {uz} },
];

const LanguageDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentLang, setCurrentLang] = useState(languages[0]);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const selectLanguage = (lang) => {
    setCurrentLang(lang);
    setIsOpen(false);
    // i18n.changeLanguage(lang.code); // если используешь i18next
  };

  return (
    <div className={styles.dropdown} onClick={toggleDropdown}>
      <img src={uz} alt={currentLang.name} />
      <span>{currentLang.name}</span>
      <MdKeyboardArrowDown className={styles.arrow}/>

      {isOpen && (
        <ul className={styles.options}>
          {languages.map((lang) => (
            <li key={lang.code} onClick={() => selectLanguage(lang)}>
              <img src={uz} alt={lang.name} />
              <span>{lang.name}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default LanguageDropdown;
