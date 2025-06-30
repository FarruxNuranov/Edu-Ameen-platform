// src/components/Navbar/Navbar.jsx
import React, { useEffect, useRef, useState } from "react";
import {
  FaBell,
  FaChevronDown,
  FaSearch,
  FaCommentDots,
  FaBars,
} from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import {
  burger,
  Communication,
  Logo,
  news1,
  search,
  system,
} from "../../../utils/getimage";
import styles from "./Navbar.module.scss";
import { FiLogOut, FiSearch, FiSettings, FiUser } from "react-icons/fi";
import BurgerMenu from "../BurgerMenu/BurgerMenu";

const Navbar = () => {
  const [notifications] = useState(4);
 
  const [messages] = useState(4);
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);
  const navigate = useNavigate();


   const userRef = useRef();
  
    useEffect(() => {
      function handleClickOutside(event) {
        if (userRef.current && !userRef.current.contains(event.target)) {
          setUserMenuOpen(false);
        }
      }
  
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, []);


    const handleLogout = () => {
    // например, тут очистишь localStorage или токены
 
    navigate("/login");
  };




  return (
    <nav className={styles.navbar}>
      <div className={styles.burger}>
        <img
          src={burger}
          alt=""
          className={styles.burgerIcon}
          onClick={() => setMenuOpen(true)}
          img
        />
        <BurgerMenu isOpen={menuOpen} onClose={() => setMenuOpen(false)} />
      </div>
      {/* Левый блок */}
      <div className={styles.left}>
        <Link to="/Dashboard" className={styles.logo}>
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

        <div
          onClick={() => navigate("/dashboard/notifications")}
          className={styles.iconButton}
        >
          <img className={styles.iconSystem} src={system} alt="" />
          {notifications > 0 && (
            <span className={styles.badge}>{notifications}</span>
          )}
        </div>

        <div className={styles.iconButton}>
          <img className={styles.iconSystem} src={Communication} alt="" />
          {messages > 0 && <span className={styles.badge}>{messages}</span>}
        </div>
        <div className={styles.user} ref={userRef}>
          <img className={styles.searchMobile} src={search} alt="" />
          <div  onClick={() => setUserMenuOpen(!userMenuOpen)} className={styles.avatar}>
            <img className={styles.imgAva} src={news1} alt="" />
          </div>
          <>
            {userMenuOpen && (
              <div className={styles.userMenu}>
                 <button onClick={() => navigate("/Dashboard/profile")}>
                              <FiUser />
                              Mening profilim
                            </button>
                            <button onClick={handleLogout}>
                              <FiLogOut />
                              Logout
                            </button>
              </div>
            )}
          </>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
