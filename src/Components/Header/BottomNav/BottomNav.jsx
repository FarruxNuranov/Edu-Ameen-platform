import React from 'react';
import { FaHome, FaBookOpen, FaClipboardCheck, FaBriefcase } from 'react-icons/fa';
import styles from './BottomNav.module.scss';
import { NavLink } from 'react-router-dom';

const BottomNav = () => {
  return (
    <div className={styles.bottomNav}>
      <NavLink to="/" className={({ isActive }) => isActive ? styles.active : ''}>
        <FaHome />
        <span>Bosh sahifa</span>
      </NavLink>
      <NavLink to="#" className={({ isActive }) => isActive ? styles.active : ''}>
        <FaBookOpen />
        <span>Kurslarim</span>
      </NavLink>
      <NavLink to="#" className={({ isActive }) => isActive ? styles.active : ''}>
        <FaClipboardCheck />
        <span>Quizlar</span>
      </NavLink>
      <NavLink to="#" className={({ isActive }) => isActive ? styles.active : ''}>
        <FaBriefcase />
        <span>Uy vazifalar</span>
      </NavLink>
    </div>
  );
};

export default BottomNav;
