import React, { useState } from 'react';
import { FaBell, FaChevronDown, FaUser, FaCog, FaDoorOpen, FaBookmark, FaUsers, FaCertificate, FaStar, FaRegBell } from 'react-icons/fa';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';
import { Avatar} from '../../../utils/getimage';
import LanguageDropdown from '../../LanguageDropdown/LanguageDropdown';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

  return (
    <header className={styles.navbar}>
     
        <div className={styles.inner}>
          <Link to="/" className={styles.logo}>
           
          </Link>

          <div className={styles.right}>
            <button className={styles.button}>Kurslarni ko‘rish</button>

             <LanguageDropdown />

            <FaRegBell className={styles.icon} />

            <div className={styles.avatarBox} onClick={toggleDropdown}>
              <img
                src={Avatar}
                alt="User"
                className={styles.avatar}
              />
              {dropdownOpen && (
                <div className={styles.dropdown}>
                  <div className={styles.profileHeader}>
                    <img src={Avatar} alt="User" />
                    <div>
                      <strong>Hasanboy Tursunov</strong>
                      <p>+99 893 111 66 11</p>
                    </div>
                  </div>
                  <hr />
                  <ul className={styles.menu}>
                    <li><FaUser /> Profilim</li>
                    <li><FaCog /> Sozlamalar</li>
                    <li><FaBookmark /> Product booking</li>
                    <li><FaUsers /> Guruhlar</li>
                    <li><FaCertificate /> Sertifikatlarim</li>
                    <li><FaStar /> Mening ballarim</li>
                  </ul>
                  <hr />
                  <div className={styles.logout}>
                    <FaDoorOpen />
                    <span>Chiqish</span>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
     
    </header>
  );
};

export default Navbar;
