import React from "react";
import styles from "./Profile.module.scss";

const ProfileSettings = () => {
  return (
    <div className={styles.profileSettings}>
      <h2>Sozlamalar</h2>
      <ul>
        <li>Parolni o'zgartirish</li>
        <li>Bildirishnoma sozlamalari</li>
        <li>Tilni o'zgartirish</li>
      </ul>
    </div>
  );
};

export default ProfileSettings;
