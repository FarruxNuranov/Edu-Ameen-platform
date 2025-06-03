import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi';
import { FaHeart, FaClipboardList, FaBoxOpen } from 'react-icons/fa';
import { AiOutlineHome, AiOutlinePlayCircle } from 'react-icons/ai';
import styles from './Sidebar.module.scss';
import { navLogo } from '../../../utils/getimage';

const Sidebar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <aside className={`${styles.sidebar} ${isCollapsed ? styles.collapsed : ''}`}>
      {/* Logo */}
      <div className={styles.logo}>
        <img src={navLogo} alt="Ameen Group" />
        
      </div>

      {/* Toggle Button */}
      <div className={styles.toggleBtn} onClick={toggleSidebar}>
        {isCollapsed ? <FiChevronRight /> : <FiChevronLeft />}
      </div>

      {/* Navigation */}
      <nav className={styles.nav}>
        <NavLink to="" className={styles.link}>
          <AiOutlineHome className={styles.icon} />
          {!isCollapsed && <span className={styles.label}>Bosh sahifa</span>}
        </NavLink>
        <NavLink to="" className={styles.link}>
          <AiOutlinePlayCircle className={styles.icon} />
          {!isCollapsed && <span className={styles.label}>Qabul qilingan kurslar</span>}
        </NavLink>
        <NavLink to="" className={styles.link}>
          <FaHeart className={styles.icon} />
          {!isCollapsed && <span className={styles.label}>Sevimli kurslar</span>}
        </NavLink>
        <NavLink to="" className={styles.link}>
          <FaClipboardList className={styles.icon} />
          {!isCollapsed && <span className={styles.label}>Ro'yxatdan o'tgan viktorinalar</span>}
        </NavLink>
        <NavLink to="" className={styles.link}>
          <FaBoxOpen className={styles.icon} />
          {!isCollapsed && <span className={styles.label}>Buyurtmalarim</span>}
        </NavLink>
      </nav>
    </aside>
  );
};

export default Sidebar;
