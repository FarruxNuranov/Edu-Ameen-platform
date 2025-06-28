import React from 'react';
import { NavLink } from 'react-router-dom';
import styles from './BottomNav.module.scss';
import { home, homework, quizz, TakenCourses, Takencurs } from '../../../utils/getimage';

const navItems = [
  { to: '/', label: 'Bosh sahifa', icon: home },
  { to: '/Dashboard/coursestaken', label: 'Kurslarim', icon: Takencurs },
  { to: 'Dashboard/quiz', label: 'Quizlar', icon: quizz },
  { to: 'Dashboard/homework', label: 'Uy vazifalar', icon: homework },
];

const BottomNav = () => {
 
  return (
    <div className={styles.bottomNav}>
      {navItems.map((item, idx) => (
        <NavLink
          key={idx}
          to={item.to}
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ''}`
          }
        >
          <img src={item.icon} alt={item.label} className={styles.icon} />
          <span>{item.label}</span>
        </NavLink>
      ))}
    </div>
  );
};

export default BottomNav;
