// src/layouts/DashboardLayout/DashboardLayout.jsx
import React from "react";
import { Outlet } from "react-router-dom";

import styles from "./DashboardLayout.module.scss";
import Navbar from "../../Components/Header/Navbar/Navbar";
import Sidebar from "../../Components/Header/Sidebar/Sidebar";
import ContentHeader from "../../Components/ContentHeader/ContentHeader";

const DashboardLayout = () => {
  return (
    <div className={styles.dashboard}>
      {/* Navbar всегда сверху */}
      <Navbar />

      {/* Контейнер с Sidebar слева и основным контентом справа */}
      <div className={styles.container}>
        <Sidebar />

        <main className={styles.content}>
          {/* Шапка страницы */}
          <ContentHeader />

          {/* Тело страницы */}
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DashboardLayout;
