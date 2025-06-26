import React, { useRef, useState } from "react";
import styles from "./SingleHomeworkPage.module.scss";
import {
  FaUser,
  FaCalendarAlt,
  FaSignal,
  FaCheckCircle,
  FaStar,
  FaCommentAlt,
  FaLink,
} from "react-icons/fa";
import {
  arrowUp,
  basket,
  homework1,
  homework2,
  homework3,
  homework4,
  homework5,
  homework6,
  modalInfo,
  tabriklaymiz,
  tea,
} from "../../../utils/getimage";

const SingleHomeworkPage = () => {
  const [uploadedFiles, setUploadedFiles] = useState([
    "Vazifa 123.pdf",
    "Vazifa 234.pdf",
  ]);
  const [submittedLinks, setSubmittedLinks] = useState([
    "Topshiriq figma link",
    "Topshiriq telegram",
  ]);
  const [text, setText] = useState("");
  const fileInputRef = useRef();
  const [showModal, setShowModal] = useState(false);

  const handleFileUpload = (e) => {
    const files = Array.from(e.target.files).map((f) => f.name);
    setUploadedFiles((prev) => [...prev, ...files]);
    e.target.value = null;
  };

  const handleDeleteFile = (index) => {
    setUploadedFiles((prev) => prev.filter((_, i) => i !== index));
  };

  const handleDeleteLink = (index) => {
    setSubmittedLinks((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className={styles.page}>
      <div className={styles.header}>
        <h1 className={styles.title}>
          Kompaniyada uchraydigan muammolarga HR beradigan yechimlar
        </h1>
        <button className={styles.lessonBtn}>Darsga o‘tish →</button>
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

          <div className={styles.infoItem}>
            <div className={styles.IconBorder}>
              <img className={styles.icon} src={homework4} alt="" />
            </div>
            <div>
              <p className={styles.label}>To‘plagan ballar</p>
              <p className={styles.value}>-</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.IconBorder}>
              <img className={styles.icon} src={homework5} alt="" />
            </div>
            <div>
              <p className={styles.label}>
                Natija bo‘yicha ustoz kommentariyasi
              </p>
              <p className={styles.value}>-</p>
            </div>
          </div>

          <div className={styles.infoItem}>
            <div className={styles.IconBorder}>
              <img className={styles.icon} src={homework6} alt="" />
            </div>
            <div>
              <p className={styles.label}>Topshiriq uchun havolalar</p>
              <p className={styles.value}>-</p>
            </div>
          </div>
        </div>
        <div className={styles.rightBlock}>
          <h2 className={styles.sectionTitle}>
            Vazifani bajaring va natijangizni yuboring
          </h2>
          <p className={styles.sectionDesc}>
            Ushbu vazifani diqqat bilan o‘rganing va berilgan mavzu bo‘yicha
            topshiriqni bajaring. Kerakli fayllar va havolalarni yuklang yoki
            yozma javob kiriting. Tugatganingizdan so‘ng yakunlash tugmasini
            bosing.
          </p>

          <div className={styles.uploadGrid}>
            {/* File Upload */}
            <div className={styles.uploadBox}>
              <h4>Vazifa uchun fayllar</h4>
              <div className={styles.fileList}>
                {uploadedFiles.map((file, i) => (
                  <div key={i} className={styles.fileItem}>
                    <a href="#">{file}</a>
                    <button onClick={() => handleDeleteFile(i)}><img src={basket} alt="" /></button>
                  </div>
                ))}
                <label className={styles.uploadBtn}>
                  <img src={arrowUp} alt="" /> Fayl yuklash
                  <input
                    type="file"
                    hidden
                    multiple
                    ref={fileInputRef}
                    onChange={handleFileUpload}
                  />
                </label>
              </div>
            </div>

            {/* Links */}
            <div className={styles.uploadBox}>
              <h4>Topshiriqqa havolalar</h4>
              <div className={styles.fileList}>
                {submittedLinks.map((link, i) => (
                  <div key={i} className={styles.fileItem}>
                    <a href="#">{link}</a>
                    <button onClick={() => handleDeleteLink(i)}> <img src={basket} alt="" /></button>
                  </div>
                ))}
                <div className={styles.uploadBtn}>
                  <img src={arrowUp} alt="" /> Fayl yuklash
                  <input type="file" hidden multiple />
                </div>
              </div>
            </div>
          </div>

          <div className={styles.textBlock}>
            <h4>Yozma shaklda</h4>
            <textarea
              placeholder="Matn yozish"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
        </div>
      </div>
      <div className={styles.LastBtn}>
        <button onClick={() => setShowModal(true)} className={styles.BtnDone}>
          Yakunlash
        </button>
      </div>
      {showModal && (
         

        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
            <div className={styles.modalBox}>
              <div className={styles.modalIcon}>
                <img src={tabriklaymiz} alt="" />
              </div>
              <h3 className={styles.modalTitle}>Tabriklaymiz!</h3>
              <p className={styles.modalText}>
                Siz vazifalarni muvaffaqiyatli topshirdingiz! Ballingizni
                tekshirilgandan so’ng ko’rishingiz mumkin.
              </p>
              <div className={styles.modalActions}>
                <button
                  onClick={() => setShowModal(false)}
                  className={styles.confirm}
                >
                  Tushundim
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};
export default SingleHomeworkPage;
