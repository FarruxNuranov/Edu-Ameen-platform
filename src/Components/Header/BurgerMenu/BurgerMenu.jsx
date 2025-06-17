
import { Link } from 'react-router-dom';
import { FaTimes } from 'react-icons/fa';
import styles from './BurgerMenu.module.scss';
import { Logo } from '../../../utils/getimage';

const BurgerMenu = ({ isOpen, onClose }) => {
  return (
    <div className={`${styles.menu} ${isOpen ? styles.open : ''}`}>
      <div className={styles.header}>
        <img src={Logo} alt="Ameen Class" className={styles.logo} />
        <FaTimes onClick={onClose} className={styles.closeIcon} />
      </div>
      <ul>
        <li><Link to="/">Sertifikatlar</Link></li>
        <li><Link to="/">Ma'lumotlar</Link></li>
        <li><Link to="/">Bildirishnomalar</Link></li>
        <li><Link to="/">Chat</Link></li>
        <li><Link to="/">Help</Link></li>
        <li><Link to="/">Tilni o'zgartirish</Link></li>
        <li><Link to="/">Ilova ko‘rinishi</Link></li>
      </ul>
      <div className={styles.logout}>
        <button>Akkauntdan chiqish</button>
      </div>
    </div>
  );
};

export default BurgerMenu;
