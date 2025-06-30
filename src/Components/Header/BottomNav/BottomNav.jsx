import React from "react";
import { NavLink } from "react-router-dom";
import styles from "./BottomNav.module.scss";
import { home, homework, quizz, Takencurs } from "../../../utils/getimage";

const navItems = [
  { to: "/dashboard", label: "Bosh sahifa", icon: home },
  { to: "/dashboard/coursestaken", label: "Kurslarim", icon: Takencurs },
  { to: "/dashboard/quiz", label: "Quizlar", icon: quizz },
  { to: "/dashboard/homework", label: "Uy vazifalar", icon: homework },
];

const BottomNav = () => {
  return (
    <div className={styles.bottomNav}>
      {navItems.map((item, idx) => (
        <NavLink
          key={idx}
          to={item.to}
          end={item.to === "/dashboard"}
          className={({ isActive }) =>
            `${styles.navItem} ${isActive ? styles.active : ""}`
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
