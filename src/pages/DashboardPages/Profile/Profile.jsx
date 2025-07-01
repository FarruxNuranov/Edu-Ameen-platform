import React, { useState } from "react";
import styles from "./Profile.module.scss";
import ProfileInfo from "./ProfileInfo";
import ProfileSettings from "./ProfileSettings";
import ProfileHelp from "./ProfileHelp";
import {
  courses1,
  profileHelp,
  profileLogOut,
  profileSettings,
  profileStrelka,
  profileUser,
} from "../../../utils/getimage";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("info");

  return (
    <div className={styles.profileContainer}>
      <div className={styles.sidebar}>
        <div className={styles.userCard}>
          <img src={courses1} alt="avatar" />
          <div className={styles.user}>
            <h3 className={styles.userTitle}>Oybek Mirhamidov</h3>
            <p className={styles.userPhone}>+149345345543</p>
          </div>
        </div>
        <div
          className={`${styles.listLink} ${
            activeTab === "info" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("info")}
        >
          <img src={profileUser} alt="" />
          Personal informations
          <img className={styles.arrow} src={profileStrelka} alt="" />
        </div>

        <div
          className={`${styles.listLink} ${
            activeTab === "settings" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("settings")}
        >
          <img src={profileSettings} alt="" />
          Sozlamalar
          <img className={styles.arrow} src={profileStrelka} alt="" />
        </div>

        <div
          className={`${styles.listLink} ${
            activeTab === "help" ? styles.active : ""
          }`}
          onClick={() => setActiveTab("help")}
        >
          <img src={profileHelp} alt="" />
          Help
          <img className={styles.arrow} src={profileStrelka} alt="" />
        </div>
        <div className={styles.logout}>
          <img src={profileLogOut} alt="" />
          Logout
          <img className={styles.arrow} src={profileStrelka} alt="" />
        </div>
      </div>

      <div className={styles.content}>
        {activeTab === "info" && <ProfileInfo />}
        {activeTab === "settings" && <ProfileSettings />}
        {activeTab === "help" && <ProfileHelp />}
      </div>
    </div>
  );
};

export default Profile;
