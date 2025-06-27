// src/pages/HomeworkCourseCard/SingleTestPage.jsx

import React from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { testQuestionsData } from "./testQuestionsData";
import styles from "./SingleTestPage.module.scss";
import { TestTest } from "../../../utils/getimage";

const SingleTestPage = () => {
  const { testId } = useParams();
  const navigate = useNavigate();
  const testData = testQuestionsData.find(
    (test) => test.testId.toString() === testId
  );

  if (!testData) return <div>Test topilmadi</div>;

  return (
    <section className={styles.section}>
      <div className={styles.topTitle}>
        <h2 className={styles.title}>{testData.title}</h2>
        <button className={styles.lessonBtn}>Darsga o‘tish →</button>
      </div>
      <div className={styles.testBox}>
        <div className={styles.header}>
          <h3 className={styles.testTitle}>Test sinovi</h3>
          <span className={styles.timer}>15 : 00</span>
        </div>

        <div className={styles.questions}>
          {testData.questions.map((q) => (
            <div key={q.id} className={styles.questionCard}>
              <img src={TestTest} alt="" className={styles.cardicon} />
              <p className={styles.questionText}>{q.text}</p>
              {q.options.map((opt, i) => (
                <label key={i} className={styles.option}>
                  <input type="radio" name={`question-${q.id}`} value={opt} />
                  <span className={styles.spanText}>{opt}</span>
                </label>
              ))}
            </div>
          ))}
        </div>

        <button
          onClick={() => navigate("/test/resault")}
          className={styles.submitButton}
        >
          Yakunlash
        </button>
      </div>
    </section>
  );
};

export default SingleTestPage;
