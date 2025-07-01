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
import ProfileEdit from "./ProfileEdit";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("info");

  // profileData теперь в стейте
  const [profileData, setProfileData] = useState([
    { label: "Ism:", value: "Hasanboy" },
    { label: "Familiya:", value: "Tursunov" },
    { label: "Address:", value: "City, State" },
    { label: "Kasbi:", value: "CEO" },
    { label: "Business Owner:", value: "Ha" },
    { label: "Telefon raqami:", value: "+998 93 111 66 44" },
   
  ]);

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
        {activeTab === "info" && (
          <ProfileInfo data={profileData} onEdit={() => setActiveTab("edit")} />
        )}
        {activeTab === "settings" && <ProfileSettings />}
        {activeTab === "help" && <ProfileHelp />}
        {activeTab === "edit" && (
          <ProfileEdit
            data={profileData}
            setData={setProfileData}
            goBack={() => setActiveTab("info")}
          />
        )}
      </div>
    </div>
  );
};

export default Profile;
