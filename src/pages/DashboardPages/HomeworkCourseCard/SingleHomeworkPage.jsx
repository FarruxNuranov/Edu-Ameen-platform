import React, { useState } from "react";
import styles from "./SingleHomeworkPage.module.scss";
import { useParams } from "react-router-dom";
import { homework1, homework2, homework3, homework4, tea } from "../../../utils/getimage";

const SingleHomeworkPage = () => {
  const { id, hwId } = useParams();
  const [uploadedFiles, setUploadedFiles] = useState([
    "Vazifa 123.pdf",
    "Vazifa 234.pdf",
  ]);
  const [submittedLinks, setSubmittedLinks] = useState([
    "https://figma.com/task",
    "https://t.me/task",
  ]);
  const [text, setText] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    setSubmitted(true);
  };

  return (
    <div className={styles.page}>
      <h2 className={styles.title}>
        Kompaniyada uchraydigan muammolarga HR beradigan yechimlar
      </h2>

      <div className={styles.grid}>
        {/* Left Info Panel */}
        <div className={styles.infoCard}>
          <h2 className={styles.infoTitle}>Ma’lumotlar</h2>
          <div className={styles.nameBlock}>
            <img className={styles.nameImg} src={tea} alt="" />
            <div className={styles.Name}>
              <p className={styles.label}>O‘qituvchi</p>
              <p className={styles.value}>Kozimxon To‘rayev</p>
            </div>
          </div>
          <div className={styles.nameBlock}>
            <div className={styles.nameBounce}>
              <img src={homework1} alt="" />
            </div>
            <div className={styles.Name}>
              <p className={styles.label}>Nashr qilingan sana</p>
              <p className={styles.value}>19 Noyabr, 2024</p>
            </div>
          </div>
          <div className={styles.nameBlock}>
            <div className={styles.nameBounce}>
              <img src={homework2} alt="" />
            </div>
            <div className={styles.Name}>
              <p className={styles.label}>Murakkablik darajasi</p>
              <p className={styles.value}>Yengil</p>
            </div>
          </div>
          <div className={styles.nameBlock}>
            <div className={styles.nameBounce}>
              <img src={homework3} alt="" />
            </div>
            <div className={styles.Name}>
              <p className={styles.label}>Status</p>
              <p className={`${styles.badge} ${styles.green}`}>
                {submitted ? "Tekshirilmoqda" : "Topshirilmagan"}
              </p>
            </div>
          </div>
          <div className={styles.nameBlock}>
            <div className={styles.nameBounce}>
              <img src={homework4} alt="" />
            </div>
            <div className={styles.Name}>
              {submitted && (
                <div>
                  <p className={styles.label}>To‘plagan ballar</p>
                  <p className={styles.value}>15 (a’lo)</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Right Submission Area */}
        <div className={styles.submitArea}>
          <div className={styles.AreaBox}>
            <div className={styles.blocks}>
              <h4>Vazifa uchun fayllar</h4>
              <div className={styles.fileBox}>
                {uploadedFiles.map((f, i) => (
                  <div key={i} className={styles.fileLink}>
                    <a href="#">{f}</a>
                    <span>🗑</span>
                  </div>
                ))}
              </div>
            </div>

            <div className={styles.blocks}>
              <h4>Topshiriqqa havolalar</h4>
              <div className={styles.fileBox}>
                {submittedLinks.map((l, i) => (
                  <div key={i} className={styles.fileLink}>
                    <a href={l} target="_blank" rel="noreferrer">
                      {l.split("//")[1]}
                    </a>
                    <span>🗑</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className={styles.block}>
            <h4>Yozma shaklda</h4>
            <textarea
              disabled={submitted}
              placeholder="Matn yozish"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
      </div>
      {!submitted && (
        <button className={styles.submitBtn} onClick={handleSubmit}>
          Yakunlash
        </button>
      )}
    </div>
  );
};

export default SingleHomeworkPage;
