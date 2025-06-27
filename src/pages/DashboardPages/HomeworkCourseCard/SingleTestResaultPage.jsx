import React from "react";
import styles from "./SingleTestResaultPage.module.scss";
import {
  homework1,
  homework2,
  homework3,
  
  tea,
} from "../../../utils/getimage";

const SingleTestResaultPage = () => {
  const { score = 0, total = 0 } = location.state || {};

  const correct = score;
  const wrong = total - score;
  const rank =
    score >= 0.9 * total
      ? "A'lo"
      : score >= 0.7 * total
      ? "Yaxshi"
      : "Qoniqarli";

  return (
    <div className={styles.page}>
      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          Kompaniyada uchraydigan muammolarga HR beradigan yechimlar
        </h2>
        <button className={styles.goLesson}>Darsga o‘tish →</button>
      </div>
      <div className={styles.mainSection}>
        <div className={styles.leftBlock}>
          <h2 className={styles.blockTitle}>Ma’lumotlar</h2>

          <div className={styles.infoItem}>
            <img className={styles.icon} src={tea} alt="" />
            <div>
              <p className={styles.label}>O‘qituvchi</p>
              <p className={styles.value}>Kozimxon To‘rayev</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.IconBorder}>
              <img className={styles.icon} src={homework1} alt="" />
            </div>
            <div>
              <p className={styles.label}>Nashr qilingan sana</p>
              <p className={styles.value}>19 Noyabr, 2024</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.IconBorder}>
              <img className={styles.icon} src={homework2} alt="" />
            </div>
            <div>
              <p className={styles.label}>Murakkablik darajasi</p>
              <p className={styles.value}>Yengil</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.IconBorder}>
              <img className={styles.icon} src={homework3} alt="" />
            </div>
            <div>
              <p className={styles.label}>Status</p>
              <div className={`${styles.badge} ${styles.orange}`}>
                Topshirilmagan
              </div>
            </div>
          </div>
            </div>
        {/* Result Boxes */}
        <div className={styles.resultBoxes}>
          <div className={styles.leftbox}>
            <h4 className={styles.leftTitle}>Ballar</h4>
            <div className={styles.ballBox}>
              <p>To‘plagan ballar:</p>
              <p>
                <strong>{score}</strong>
              </p>
            </div>
            <div className={styles.Maqomi}>
              <p>Maqomi:</p>
              <p>
                <strong>{rank}</strong>
              </p>
            </div>
          </div>
          <div className={styles.rightbox}>
            <h4 className={styles.leftTitle}>Natijalar</h4>
            <div className={styles.ballBox}>
              <p>To’g’ri javoblar</p>
              <p>
                <strong style={{ color: "green" }}>{correct}</strong>
              </p>
            </div>
            <div className={styles.Maqomi}>
              <p>Noto’g’ri javoblar:</p>
              <p>
                <strong style={{ color: "red" }}>{wrong}</strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleTestResaultPage;
