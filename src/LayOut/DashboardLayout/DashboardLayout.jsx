// src/layouts/DashboardLayout/DashboardLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./DashboardLayout.module.scss";
import Navbar from "../../Components/Header/Navbar/Navbar";
import Sidebar from "../../Components/Header/Sidebar/Sidebar";
import ContentHeader from "../../Components/ContentHeader/ContentHeader";
import BottomNav from "../../Components/Header/BottomNav/BottomNav";

const DashboardLayout = () => {
  return (
    <div className={styles.dashboard}>
      {/* Navbar всегда сверху */}
      <Navbar />

      {/* Контейнер с Sidebar слева и основным контентом справа */}
      <div className={styles.container}>
        <div className={styles.siedebar}>
          <Sidebar />
        </div>

        <main className={styles.content}>
          <div className={styles.contentContainer}>
          <ContentHeader />
          </div>
          <Outlet />
        </main>
      </div>

      {/* Мобильное нижнее меню */}
      <BottomNav />
    </div>
  );
};

export default DashboardLayout;
