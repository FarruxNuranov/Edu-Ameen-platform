import React from "react";
import { Link } from "react-router-dom";

import styles from "./CoursesTaken.module.scss";
import { coursesData } from "./coursesData";

export default function CoursesTaken() {
  const renderProgressCircle = (current, total) => {
    const radius = 20;
    const stroke = 4;
    const normalizedRadius = radius - stroke / 2;
    const circumference = 2 * Math.PI * normalizedRadius;
    const progress = (current / total) * circumference;

    return (
      <svg height={radius * 2} width={radius * 2} className={styles.svg}>
        <circle
          stroke="#cce0ff"
          fill="white"
          strokeWidth={stroke}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
        />
        <circle
          stroke="#0050d8"
          fill="transparent"
          strokeWidth={stroke}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={circumference - progress}
          r={normalizedRadius}
          cx={radius}
          cy={radius}
          className={styles.progress}
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="10"
          fill="black"
        >
          {current} of {total}
        </text>
      </svg>
    );
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Mening kurslarim</h2>
      <div className={styles.grid}>
        {coursesData.map((course) => (
          <Link
            to={`/Dashboard/coursestaken/${course.id}`}
            key={course.id}
            className={styles.card}
          >
            <div className={styles.imageWrapper}>
              <img src={course.banner} alt={course.title} />
            </div>
            <div className={styles.box}>
              <div className={styles.info}>
                <div className={styles.title}>{course.title}</div>
                <div className={styles.teacher}>
                  Ustoz: <span className={styles.teacherName}>{course.author.name}</span>{" "}
                </div>
              </div>
              <div className={styles.progressWrapper}>
                {renderProgressCircle(
                  course.progress.current,
                  course.progress.total
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
