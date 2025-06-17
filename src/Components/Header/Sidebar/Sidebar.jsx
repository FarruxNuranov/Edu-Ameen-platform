// src/components/Sidebar/Sidebar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { AiOutlineHome, AiOutlinePlayCircle } from "react-icons/ai";
import { FiHelpCircle, FiChevronLeft, FiChevronRight } from "react-icons/fi";
import styles from "./Sidebar.module.scss";
import { help, home, leftChevron, rightChevron, sidebarCourses, sidebarData, sidebarHomework, sidebarQuizz, sidebarSertification, TakenCourses } from "../../../utils/getimage";

export default function Sidebar() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <aside className={`${styles.sidebar} ${collapsed ? styles.collapsed : ""}`}>
      {/* Кнопка-тоггл */}
      <button
        className={styles.toggleBtn}
        onClick={() => setCollapsed(!collapsed)}
        aria-label="Toggle sidebar"
      >
        {collapsed ? <img src={leftChevron} alt="" /> : <img src={rightChevron} alt="" />}
      </button>

      {/* Верхняя группа */}
      <div className={styles.menuGroup}>
        <NavLink
          to="/"
          end
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <img className={styles.icon} src={home} alt="" />
          {!collapsed && <span className={styles.label}>Bosh sahifa</span>}
        </NavLink>

        <NavLink
         to="/coursestaken"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <img className={styles.icon} src={sidebarCourses} alt="" />
          {!collapsed && (
            <span className={styles.label}>Mening kurslarim</span>
          )}
        </NavLink>
        <NavLink
          to="/refresh"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <img className={styles.icon} src={sidebarQuizz} alt="" />
          {!collapsed && (
            <span className={styles.label}>Quizlar</span>
          )}
        </NavLink>
        <NavLink
         to="/taken"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <img className={styles.icon} src={sidebarHomework} alt="" />
          {!collapsed && (
            <span className={styles.label}>Uy vazifalar</span>
          )}
        </NavLink>
        <NavLink
          to="slov"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <img className={styles.icon} src={sidebarSertification} alt="" />
          {!collapsed && (
            <span className={styles.label}>Sertifikatlar</span>
          )}
        </NavLink>
        <NavLink
          to="/mo"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <img className={styles.icon} src={sidebarData} alt="" />
          {!collapsed && (
            <span className={styles.label}>Ma‘lumotlar</span>
          )}
        </NavLink>
      </div>

      {/* Нижняя группа */}
      <div className={styles.bottomGroup}>
        <NavLink
          to="#"
          className={({ isActive }) =>
            isActive ? `${styles.link} ${styles.active}` : styles.link
          }
        >
          <img className={styles.icon} src={help} alt="" />
          {!collapsed && <span className={styles.label}>Help</span>}
        </NavLink>

        <div className={styles.user}>
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
        </div>
      </div>
    </aside>
  );
}
