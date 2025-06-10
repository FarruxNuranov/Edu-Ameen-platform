import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./DashboardLayout.module.scss";
import Navbar from "../../Components/Header/Navbar/Navbar";
import Sidebar from "../../Components/Header/Sidebar/Sidebar";

const DashboardLayout = () => {
  return (
    <div className={styles.dashboard}>
      {/* Navbar всегда сверху */}
      <Navbar />
      {/* Контейнер с Sidebar слева и основным контентом справа */}
      <div className={styles.container}>
        <Sidebar />
        <main className={styles.content}>
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;