import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import Confetti from "react-confetti";
import styles from "./ResultPage.module.scss";
import { tabriklaymiz } from "../../../utils/getimage";

const ResultPage = () => {
  const location = useLocation();

  const { score = 0, total = 0 } = location.state || {};

  const [showModal, setShowModal] = useState(true);

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
      {/* Modal */}
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

      {/* Header */}
      <div className={styles.header}>
        <h2 className={styles.title}>
          Kompaniyada uchraydigan muammolarga HR beradigan yechimlar
        </h2>
      
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
  );
};

export default ResultPage;
