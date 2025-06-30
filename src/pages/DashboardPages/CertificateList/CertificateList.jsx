import React from "react";
import styles from "./CertificateList.module.scss";
import { Link } from "react-router-dom";
import {
  Sertifikat,
  SertificateIcon,
  statusX,
  statusDone,
  statusWaiting,
  downlo,
  alohidaLink
} from "../../../utils/getimage";

const certificates = [
  {
    id: 1,
    title: "HR Management kursi sertifikati",
    user: "Oybek Mirhamidov",
    date: "25.01.2025",
    status: "olinmagan",
  },
  {
    id: 2,
    title: "Islom Moliyasi kursi sertifikati",
    user: "Oybek Mirhamidov",
    date: "25.01.2025",
    status: "olingan",
  },
  {
    id: 3,
    title: "HR Management kursi sertifikati",
    user: "Oybek Mirhamidov",
    date: "25.01.2025",
    status: "jarayonda",
  },
];

const CertificateList = () => {
  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Sertifikatlar</h2>
      <div className={styles.list}>
        {certificates.map((cert) => {
          let iconPath = "";
          if (cert.status === "olinmagan") iconPath = statusX;
          else if (cert.status === "olingan") iconPath = statusDone;
          else if (cert.status === "jarayonda") iconPath = statusWaiting;

          return (
            <div key={cert.id} className={styles.card}>
              <img src={Sertifikat} alt="Sertifikat" className={styles.image} />
              <div className={styles.info}>
                <h3>{cert.title}</h3>
                <div className={`${styles.status} ${styles[cert.status]}`}>
                  <img src={iconPath} alt="" />
                  {cert.status === "olinmagan" && "Olinmagan"}
                  {cert.status === "olingan" && "Olingan"}
                  {cert.status === "jarayonda" && "Jarayonda"}
                </div>

                <div className={styles.actions}>
                  {cert.status === "olingan" ? (
                    <button className={styles.button}>
                      <img src={downlo} alt="" />
                      Sertifikat yuklab olish
                    </button>
                  ) : cert.status === "jarayonda" ? (
                    <button className={`${styles.button} ${styles.disabled}`} disabled>
                      <img src={downlo} alt="" />
                      Sertifikat yuklab olish
                    </button>
                  ) : (
                    <Link
                      to={`/dashboard/certificate/test/${cert.id}`}
                      className={styles.button}
                    >
                      <img src={downlo} alt="" />
                      Sertifikat olish
                    </Link>
                  )}
                  <a href="#" className={styles.link}>
                    Alohida sahifada ochib ko‘rish <img src={alohidaLink} alt="" />
                  </a>
                </div>
              </div>

              <div className={styles.linkedin}>
                <button
                  className={styles.linkedinBtn}
                  disabled={cert.status !== "olingan"}
                >
                  <span className={styles.icon}>in</span> Add to Profile
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CertificateList;
