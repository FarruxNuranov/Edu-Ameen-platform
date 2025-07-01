import React, { useState } from "react";
import styles from "./Profile.module.scss";
import ProfileEdit from "./ProfileEdit";

const ProfileInfo = () => {
  const [editMode, setEditMode] = useState(false);
  const [profile, setProfile] = useState({
    ism: "Oybek",
    familiya: "Mirhamidov",
    address: "City, State",
    kasb: "CEO",
    businessOwner: "Ha",
    phone: "+149345345543",
    password: "******"
  });

  return (
    <div className={styles.profileInfo}>
      {editMode ? (
        <ProfileEdit
          profile={profile}
          setProfile={setProfile}
          exitEdit={() => setEditMode(false)}
        />
      ) : (
        <div>
          <h2>Profil ma'lumotlari</h2>
          <ul>
            <li><strong>Ism:</strong> {profile.ism}</li>
            <li><strong>Familiya:</strong> {profile.familiya}</li>
            <li><strong>Address:</strong> {profile.address}</li>
            <li><strong>Kasbi:</strong> {profile.kasb}</li>
            <li><strong>Business Owner:</strong> {profile.businessOwner}</li>
            <li><strong>Telefon:</strong> {profile.phone}</li>
            <li><strong>Parol:</strong> {profile.password}</li>
          </ul>
          <button onClick={() => setEditMode(true)}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default ProfileInfo;
