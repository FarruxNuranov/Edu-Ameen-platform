import React from "react";
import styles from "./CertificateList.module.scss";
import { SertificateIcon, Sertifikat, Xicon } from "../../../utils/getimage";

const certificates = [
  {
    id: 1,
    title: "HR Management kursi sertifikari",
    user: "Oybek Mirhamidov",
    date: "25.01.2025",
    downloaded: false,
    course: "Human Resources Management Courses",
  },
  {
    id: 2,
    title: "Islom Moliya kursi sertifikari",
    user: "Oybek Mirhamidov",
    date: "25.01.2025",
    downloaded: true,
    course: "Human Resources Management Courses",
  },
  {
    id: 3,
    title: "HR Management kursi sertifikari",
    user: "Oybek Mirhamidov",
    date: "25.01.2025",
    downloaded: true,
    course: "Human Resources Management Courses",
  },
];

const CertificateList = () => {
  return (
    <div className={styles.certificatePage}>
      <h2>Sertifikatlar</h2>
      <div className={styles.certificateGrid}>
        {certificates.map((cert) => (
          <div key={cert.id} className={styles.certificateCard}>
            <img src={Sertifikat} alt="" className={styles.icon} />
            <div className={styles.textBlock}>
              <h3 className={styles.cardCoursesTitle}>{cert.title}</h3>
              <div className={styles.testBlock}>
                <button className={styles.buttonTest}>
                  <img src={SertificateIcon} alt="" />
                  Sertifikat olish
                </button>
                <div className={styles.status}>
                  {cert.downloaded ? "✔ Olingan" : "✖ Olinmagan"}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CertificateList;
