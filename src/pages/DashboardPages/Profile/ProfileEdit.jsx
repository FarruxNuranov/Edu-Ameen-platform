import React, { useState, useRef } from "react";
import styles from "./ProfileEdit.module.scss";

const ProfileEdit = ({ data, setData, goBack }) => {
  const initialState = {
    ism: data[0].value,
    familiya: data[1].value,
    address: data[2].value,
    kasb: data[3].value,
    businessOwner: data[4].value,
    phone: data[5].value
  };

  const [formData, setFormData] = useState(initialState);
  const [image, setImage] = useState(null);
  const fileInputRef = useRef(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const newData = [
      { label: "Ism:", value: formData.ism },
      { label: "Familiya:", value: formData.familiya },
      { label: "Address:", value: formData.address },
      { label: "Kasbi:", value: formData.kasb },
      { label: "Business Owner:", value: formData.businessOwner },
      { label: "Telefon raqami:", value: formData.phone },
    ];
    setData(newData);
    goBack();
  };

  const handleUploadClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file));
    }
  };

  return (
    <div className={styles.profileEditBox}>
      <div className={styles.upload} onClick={handleUploadClick}>
        {image ? (
          <img src={image} alt="Preview" className={styles.previewImage} />
        ) : (
          <>
            <div className={styles.circle}>+</div>
            <div className={styles.textBox}>
              <div className={styles.text}>Upload Image</div>
              <span>
                You can upload profile image in following formats: .jpeg, .png, .svg
              </span>
            </div>
          </>
        )}
        <input
          type="file"
          accept="image/*"
          ref={fileInputRef}
          style={{ display: "none" }}
          onChange={handleFileChange}
        />
      </div>

      <div className={styles.grid}>
        <div>
          <label>Ism</label>
          <input
            type="text"
            name="ism"
            value={formData.ism}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Familiya</label>
          <input
            type="text"
            name="familiya"
            value={formData.familiya}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Telefon raqam</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Address</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Kasbi</label>
          <input
            type="text"
            name="kasb"
            value={formData.kasb}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Business Owner</label>
          <select
            name="businessOwner"
            value={formData.businessOwner}
            onChange={handleChange}
          >
            <option value="Ha">Ha</option>
            <option value="Yo'q">Yo'q</option>
          </select>
        </div>
      </div>

      <button onClick={handleSave}>Saqlash</button>
    </div>
  );
};

export default ProfileEdit;
