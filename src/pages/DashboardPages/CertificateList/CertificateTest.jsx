import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./CertificateTest.module.scss";

import { TestTest } from "../../../utils/getimage";
import { quizzes } from "../QuizPage/quizData";

const CertificateTest = () => {
  const { certId } = useParams();
  const quiz = quizzes.find((q) => q.id === parseInt(certId));
  const navigate = useNavigate();
  const [answers, setAnswers] = useState({});

  if (!quiz) return <div className={styles.notFound}>Test topilmadi</div>;

  const handleChange = (questionId, selectedOption) => {
    setAnswers((prev) => ({ ...prev, [questionId]: selectedOption }));
  };

  const handleSubmit = () => {
    navigate(`/dashboard/certificate/result/${certId}`);
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{quiz.title}</h2>
      <div className={styles.quizBox}>
        <div className={styles.header}>
          <h3 className={styles.quizTitle}>Sertifikat olish sinovi</h3>
          <span className={styles.timer}>{quiz.time}</span>
        </div>

        <div className={styles.questions}>
          {quiz.questions.map((q) => (
            <div key={q.id} className={styles.questionCard}>
              <img src={TestTest} alt="" className={styles.quizCardIcon} />
              <p className={styles.questionText}>{q.text}</p>
              <div className={styles.options}>
                {q.options.map((opt, i) => (
                  <label key={i} className={styles.option}>
                    <input
                      type="radio"
                      name={`question-${q.id}`}
                      value={opt}
                      checked={answers[q.id] === opt}
                      onChange={() => handleChange(q.id, opt)}
                    />
                    <span className={styles.variant}>{opt}</span>
                  </label>
                ))}
              </div>
            </div>
          ))}
        </div>

        <button className={styles.submitButton} onClick={handleSubmit}>
          Yakunlash
        </button>
      </div>
    </section>
  );
};

export default CertificateTest;
