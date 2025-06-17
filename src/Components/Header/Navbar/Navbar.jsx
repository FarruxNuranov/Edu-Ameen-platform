// src/components/Navbar/Navbar.jsx
import React, { useState } from 'react';
import { FaBell, FaChevronDown, FaSearch, FaCommentDots, FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { Communication, Logo, system } from '../../../utils/getimage';
import styles from './Navbar.module.scss';
import { FiSearch } from 'react-icons/fi';
import BurgerMenu from '../BurgerMenu/BurgerMenu';

const Navbar = () => {
  const [notifications] = useState(4);
  const [messages] = useState(4);
  const [menuOpen, setMenuOpen] = useState(true);
  return (
    <nav className={styles.navbar}>
      <div className={styles.burger}>
      <FaBars className={styles.burgerIcon} onClick={() => setMenuOpen(true)} />
      <BurgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
      {/* Левый блок */}
      <div className={styles.left}>
        <Link to="/" className={styles.logo}>
          <img src={Logo} alt="Ameen Class" />
       
        </Link>

        <div className={styles.dropdown}>
          <span>All</span>
          <FaChevronDown />
        </div>

        <div className={styles.search}>
          <FaSearch className={styles.searchIcon} />
          <input type="text" placeholder="Ctrl + K to search" />
        </div>
      </div>

      {/* Правый блок */}
      <div className={styles.right}>
        <button className={styles.cta}>Kurslarni ko'rish</button>

        <div className={styles.iconButton}>
          <img className={styles.iconSystem} src={system} alt="" />
          {notifications > 0 && <span className={styles.badge}>{notifications}</span>}
        </div>

        <div className={styles.iconButton}>
          <img className={styles.iconSystem} src={Communication} alt="" />
          {messages > 0 && <span className={styles.badge}>{messages}</span>}
        </div>
        <div className={styles.user}>
          <FiSearch className={styles.searchMobile}/>
          <div className={styles.avatar}>OM</div>
            <>
              <div className={styles.info}>

              </div>
              
            </>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
