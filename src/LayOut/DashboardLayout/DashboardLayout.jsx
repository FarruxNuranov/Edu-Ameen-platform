import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./DashboardLayout.module.scss";
import Navbar from "../../Components/Header/Navbar/Navbar";
import Sidebar from "../../Components/Header/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
   <div className={styles.dashboard}>
  <Sidebar />
  <div className={styles.main}>
    <Navbar /> {/* ВАЖНО: должен быть здесь */}
    <Outlet />
  </div>
</div>
  );
};

export default DashboardLayout;
