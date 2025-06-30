import React, { useEffect, useRef, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { FiChevronRight, FiLogOut, FiSettings, FiUser } from "react-icons/fi";
import styles from "./Sidebar.module.scss";
import {
  help,
  home,
  leftChevron,
  rightChevron,
  sidebarCourses,
  sidebarData,
  sidebarHomework,
  sidebarQuizz,
  sidebarSertification,
} from "../../../utils/getimage";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const navigate = useNavigate();

  const handleLogout = () => {
    // например, тут очистишь localStorage или токены
 
    navigate("/login");
  };
  const userRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (userRef.current && !userRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
      <button
        className={styles.toggleBtn}
        onClick={() => setCollapsed(!collapsed)}
        aria-label="Toggle sidebar"
      >
        {collapsed ? (
          <img src={leftChevron} alt="" />
        ) : (
          <img src={rightChevron} alt="" />
        )}
      </button>

      <div className={styles.menuGroup}>
        <NavLink
          to="/Dashboard"
          end
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <img className={styles.icon} src={home} alt="" />
          {!collapsed && <span className={styles.label}>Bosh sahifa</span>}
        </NavLink>

        <NavLink
          to="/Dashboard/coursestaken"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <img className={styles.icon} src={sidebarCourses} alt="" />
          {!collapsed && <span className={styles.label}>Mening kurslarim</span>}
        </NavLink>

        <NavLink
          to="/Dashboard/quiz"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <img className={styles.icon} src={sidebarQuizz} alt="" />
          {!collapsed && <span className={styles.label}>Quizlar</span>}
        </NavLink>

        <NavLink
          to="/Dashboard/homework"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <img className={styles.icon} src={sidebarHomework} alt="" />
          {!collapsed && <span className={styles.label}>Uy vazifalar</span>}
        </NavLink>

        <NavLink
          to="/Dashboard/certificate"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <img className={styles.icon} src={sidebarSertification} alt="" />
          {!collapsed && <span className={styles.label}>Sertifikatlar</span>}
        </NavLink>

        <NavLink
          to="/Dashboard/links"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <img className={styles.icon} src={sidebarData} alt="" />
          {!collapsed && <span className={styles.label}>Havolalar</span>}
        </NavLink>
      </div>

      <div className={styles.bottomGroup} ref={userRef}>
        <NavLink
          to="#"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <img className={styles.icon} src={help} alt="" />
          {!collapsed && <span className={styles.label}>Help</span>}
        </NavLink>
        <div
          className={styles.user}
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <div className={styles.avatar}>OM</div>
          {!collapsed && (
            <>
              <div className={styles.info}>
                <span className={styles.name}>Oybek Mirhamidov</span>
                <span className={styles.phone}>+149345345543</span>
              </div>
              <FiChevronRight className={styles.userArrow} />
            </>
          )}

          {/* DROPDOWN меню теперь открывается всегда */}
          {dropdownOpen && (
            <div
              className={`${styles.dropdownMenu} ${
                collapsed ? styles.collapsed : ""
              }`}
            >
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
        </div>
      </div>
    </aside>
  );
}
