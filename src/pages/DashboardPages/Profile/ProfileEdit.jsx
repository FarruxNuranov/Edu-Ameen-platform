import React, { useState } from "react";
import styles from "./Profile.module.scss";

const ProfileEdit = ({ profile, setProfile, exitEdit }) => {
  const [formData, setFormData] = useState(profile);

  const handleChange = (e) => {
    setFormData({...formData, [e.target.name]: e.target.value});
  };

  const handleSave = () => {
    setProfile(formData);
    exitEdit();
  };

  return (
    <div className={styles.profileEdit}>
      <h2>Edit Profile</h2>
      <input type="text" name="ism" value={formData.ism} onChange={handleChange} placeholder="Ism" />
      <input type="text" name="familiya" value={formData.familiya} onChange={handleChange} placeholder="Familiya" />
      <input type="text" name="address" value={formData.address} onChange={handleChange} placeholder="Address" />
      <input type="text" name="kasb" value={formData.kasb} onChange={handleChange} placeholder="Kasbi" />
      <input type="text" name="businessOwner" value={formData.businessOwner} onChange={handleChange} placeholder="Business Owner" />
      <input type="text" name="phone" value={formData.phone} onChange={handleChange} placeholder="Telefon" />
      <button onClick={handleSave}>Saqlash</button>
      <button onClick={exitEdit}>Bekor qilish</button>
    </div>
  );
};

export default ProfileEdit;
