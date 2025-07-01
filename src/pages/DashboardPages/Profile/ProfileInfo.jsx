import React from "react";
import styles from "./ProfileInfo.module.scss";
import { profileEditIcon,  profileminiInfo } from "../../../utils/getimage";

const ProfileInfo = ({ data, onEdit }) => {
  return (
    <div className={styles.profileInfoBox}>
      <div className={styles.header}>
        <h2>Profil ma'lumotlari</h2>
        <img
          src={profileEditIcon}
          alt="Edit"
          className={styles.editIcon}
          onClick={onEdit}
        />
      </div>
      <table className={styles.profileTable}>
        <tbody>
          {data.map((item, idx) => (
            <tr key={idx}>
              <td>{item.label}</td>
              <td className={item.label === "Ism:" ? styles.withTooltip : ""}>
                {item.value}
                {item.label === "Ism:" && (
                  <div className={styles.tooltipWrapper}>
                    <img src={profileminiInfo} alt="info" />
                    <div className={styles.tooltip}>
                      Ushbu ism va familiya sertifikatlarga yoziladi.
                      <br /> Iltimos e’tiborli bo‘ling!
                    </div>
                  </div>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ProfileInfo;
