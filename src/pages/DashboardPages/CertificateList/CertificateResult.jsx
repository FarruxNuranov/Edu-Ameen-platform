import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import styles from "./CertificateResult.module.scss";
import {
  copy,
  downlo,
  linkin,
  mediumLink,
  Sertifikat,
  tabriklaymiz,
} from "../../../utils/getimage";
import Confetti from "react-confetti";

const CertificateResult = () => {
  const location = useLocation();
  const { score = 30, total = 30 } = location.state || {};
  const [showModal, setShowModal] = useState(true);
  
  const rank =
    score >= 0.9 * total
      ? "A'lo"
      : score >= 0.7 * total
      ? "Yaxshi"
      : "Qoniqarli";

  return (
    <div className={styles.page}>
      {showModal && (
        <>
          <div className={styles.modalOverlay}>
            <Confetti
              width={window.innerWidth}
              height={window.innerHeight}
              numberOfPieces={500}
              gravity={0.3}
              friction={0.95}
            />
            <div className={styles.modal}>
              <div className={styles.modalBox}>
                <div className={styles.modalIcon}>
                  <img src={tabriklaymiz} alt="" />
                </div>
                <h3 className={styles.modalTitle}>Tabriklaymiz!</h3>

                <div className={styles.boxScore}>
                  <div className={styles.ballScore}>
                    <p>To‘plagan ballar:</p>
                    <p>
                      <strong>{score}</strong>
                    </p>
                  </div>
                  <div className={styles.MaqomiScore}>
                    <p>Maqomi:</p>
                    <p>
                      <strong>{rank}</strong>
                    </p>
                  </div>
                </div>
              </div>
              <div className={styles.modalActions}>
                <button
                  onClick={() => setShowModal(false)}
                  className={styles.confirm}
                >
                  Olg`a
                </button>
              </div>
            </div>
          </div>
        </>
      )}
      <div className={styles.header}>
        <h2 className={styles.title}>
          Kompaniyada uchraydigan muammolarga HR beradigan yechimlar
        </h2>
        <button className={styles.goLesson}>Darsga o‘tish →</button>
      </div>

      <div className={styles.sectionBox}>
        <div className={styles.left}>
          <div className={styles.resultsBox}>
            <h3>Natijalar</h3>
            <div className={styles.resultNumbers}>
              <div className={styles.testResault}>
                <span>To‘g‘ri javoblar</span>
                <strong className={styles.correct}>{score}</strong>
              </div>
              <div className={styles.testFols}>
                <span>Noto‘g‘ri javoblar</span>
                <strong className={styles.incorrect}>{total - score}</strong>
              </div>
            </div>
          </div>

          <div className={styles.shareBox}>
            <h4>Sertifikatni ulashish</h4>
            <div className={styles.inputBox}>
              <input
                type="text"
                value="http://ameen.uz/sertifikatlar/..."
                readOnly
              />
              <button>
                <img src={copy} alt="" />
              </button>
            </div>
            <button className={styles.linkedin}>
              <img src={linkin} alt="" />
              Linkedin orqali yuborish
            </button>
            <button className={styles.medium}>
              <img src={mediumLink} alt="" />
              Medium orqali yuborish
            </button>
          </div>
        </div>

        <div className={styles.right}>
          <img
            src={Sertifikat}
            alt="Sertifikat"
            className={styles.certificate}
          />
          <button className={styles.downloadBtn}>
            <img src={downlo} alt="" />
            Sertifikatni PDF shaklida yuklab olish
          </button>
        </div>
      </div>
    </div>
  );
};

export default CertificateResult;
