// src/pages/HomeworkCourseCard/SingleTestPage.jsx

import React from "react";
import { useParams, Link } from "react-router-dom";
import { testQuestionsData } from "./testQuestionsData";
import styles from "./SingleTestPage.module.scss";

const SingleTestPage = () => {
  const { testId } = useParams();

  const testData = testQuestionsData.find(
    (test) => test.testId.toString() === testId
  );

  if (!testData) return <div>Test topilmadi</div>;

  return (
    <section className={styles.section}>
      <div className={styles.header}>
        <h2 className={styles.title}>{testData.title}</h2>
        <span className={styles.timer}>15 : 00</span>
      </div>

      <div className={styles.questions}>
        {testData.questions.map((q) => (
          <div key={q.id} className={styles.questionCard}>
            <p className={styles.questionText}>{q.text}</p>
            {q.options.map((opt, i) => (
              <label key={i} className={styles.option}>
                <input
                  type="radio"
                  name={`question-${q.id}`}
                  value={opt}
                />
                <span>{opt}</span>
              </label>
            ))}
          </div>
        ))}
      </div>

      <button className={styles.submitButton}>Yakunlash</button>
    </section>
  );
};

export default SingleTestPage;
