import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import styles from "./SingleQuizTestPage.module.scss";
import { quizzes } from "./quizData";
import { TestTest } from "../../../utils/getimage";

const SingleTestPage = () => {
  const { quizId } = useParams();
  const quiz = quizzes.find((q) => q.id === parseInt(quizId));
  const navigate = useNavigate();

  const [answers, setAnswers] = useState({});

  if (!quiz) return <div>Test topilmadi</div>;

  const handleChange = (questionId, selectedOption) => {
    setAnswers((prev) => ({ ...prev, [questionId]: selectedOption }));
  };

  const handleSubmit = () => {
    let score = 0;
    quiz.questions.forEach((q) => {
      if (answers[q.id] === q.correctAnswer) {
        score++;
      }
    });

    navigate("/result", { state: { score, total: quiz.questions.length } });
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.title}>{quiz.title}</h2>
      <div className={styles.quizBox}>
        <div className={styles.header}>
          <h3 className={styles.quizTitle}>Quiz sinovi</h3>
          <span className={styles.timer}>{quiz.time}</span>
        </div>

        <div className={styles.questions}>
          {quiz.questions.map((q) => (
            <div key={q.id} className={styles.questionCard}>
              <img src={TestTest} alt="" className={styles.quizCardIcon} />
              <p className={styles.questionText}>{q.text}</p>
              {q.options.map((opt, i) => (
                <label key={i} className={styles.option}>
                  <input
                    type="radio"
                    name={`question-${q.id}`}
                    value={opt}
                    onChange={() => handleChange(q.id, opt)}
                  />
                  <span className={styles.variant}>{opt}</span>
                </label>
              ))}
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

export default SingleTestPage;
