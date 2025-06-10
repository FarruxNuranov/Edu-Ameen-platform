// src/components/CoursesTaken/CoursesTaken.jsx
import React from "react";
import { Link } from "react-router-dom";
import { coursesData } from "../../../utils/coursesData";
import styles from "./CoursesTaken.module.scss";
import { star } from "../../../utils/getimage";

export default function CoursesTaken() {
  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Kurslar</h2>
      <div className={styles.coursesGrid}>
        {coursesData.map((course) => (
          <Link
            to={`/courses/${course.id}`}
            key={course.id}
            className={styles.card}
          >
            <div className={styles.cardImageWrapper}>
              <img
                src={course.banner}
                alt={course.title}
                className={styles.cardImage}
              />
            </div>
            <div className={styles.cardContent}>
              <div className={styles.cardText}>
                <div className={styles.cardTitle}>{course.title}</div>
                <div className={styles.cardTeacher}>
                  Ustoz: {course.author.name}
                </div>
              </div>
              <div className={styles.cardRating}>
                <img src={star} alt="star" className={styles.starIcon} />
                <span className={styles.ratingText}>
                  {course.rating || "—"}
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
