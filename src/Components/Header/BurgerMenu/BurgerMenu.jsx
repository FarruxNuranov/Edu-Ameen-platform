import { Link } from 'react-router-dom';
import { FiChevronRight } from 'react-icons/fi';
import styles from './BurgerMenu.module.scss';
import {
  burgerHelp,
  burgerStars,
  burgerSystem,
  data,
  Logo,
} from '../../../utils/getimage';

const BurgerMenu = ({ isOpen, onClose }) => {
  return (
    <>
      {/* Overlay — при клике закрывает меню */}
      {isOpen && <div className={styles.overlay} onClick={onClose} />}

      {/* Menu */}
      <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
        {/* Header */}
        <div className={styles.header}>
          <img src={Logo} alt="Ameen Class" className={styles.logo} />
        </div>
        <hr className={styles.divider} />

        {/* Menu items */}
        <div className={styles.menuContent}>
          {[
            { icon: burgerStars, label: 'Sertifikatlar' },
            { icon: data, label: "Ma'lumotlar", to:"/links"},
            { icon: burgerSystem,  label: 'Bildirishnomalar', badge: 1 },
            { icon: burgerHelp, label: 'Help' },
          ].map((item, i) => (
            <div className={styles.menuItem} key={i} onClick={onClose}>
              <div className={styles.left}>
                <img src={item.icon} alt="" />
                <Link to={item.to}>{item.label}</Link>
              </div>

              <div className={styles.right}>
                {item.badge && <span className={styles.badge}>{item.badge}</span>}
                <FiChevronRight />
              </div>
            </div>
          ))}
        </div>

        {/* Logout */}
        <div className={styles.logout}>
          <button onClick={onClose}>
            <svg viewBox="0 0 24 24" fill="none" width="20" height="20">
              <path
                d="M16 17L21 12L16 7"
                stroke="red"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M21 12H9"
                stroke="red"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M12 5H6C4.89543 5 4 5.89543 4 7V17C4 18.1046 4.89543 19 6 19H12"
                stroke="red"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Akkauntdan chiqish
          </button>
        </div>
      </div>
    </>
  );
};

export default BurgerMenu;
