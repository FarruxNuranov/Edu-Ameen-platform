// src/layouts/AuthLayout.jsx
import React from 'react';
import styles from './AuthLayout.module.scss';
import { Outlet } from 'react-router-dom';

import { Logo } from '../../utils/getimage';


const AuthLayout = () => {
  return (
    <div className={styles.authLayout}>
      <header className={styles.header}>
        <div className="container">
          <div className={styles.headerInner}>
            <img src={Logo} alt="Ameen Group" className={styles.logo} />
          
          </div>
        </div>
      </header>

      <main className={styles.main}>
        <div className={styles.cardWrapper}>
          <Outlet />
        </div>
      </main>
    </div>
  );
};

export default AuthLayout;
