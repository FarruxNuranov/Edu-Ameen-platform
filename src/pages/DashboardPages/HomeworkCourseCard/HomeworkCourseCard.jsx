import React from "react";
import styles from "./HomeworkCourseCard.module.scss";
import { coursesData } from "../CoursesTaken/coursesData";
import { Link } from "react-router-dom";
import { cardHomeBg, Chek, homeworkBadge, TeacherHomework, TeacherNameIcon } from "../../../utils/getimage";
import { IoIosArrowForward } from "react-icons/io";

const HomeworkCourseCard = () => {
  const renderProgressCircle = (current, total) => {
    const radius = 20;
    const stroke = 4;
    const normalizedRadius = radius - stroke / 2;
    const circumference = 2 * Math.PI * normalizedRadius;
    const progress = (current / total) * circumference;
    const percentage = Math.round((current / total) * 100);

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
        />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dy=".3em"
          fontSize="10"
          fill="black"
        >
          {percentage}%
        </text>
      </svg>
    );
  };

  return (
    <section className={styles.section}>
      <h2 className={styles.sectionTitle}>Uy vazifalar</h2>
      <div className={styles.grid}>
        {coursesData.map((course) => (
          <Link
            to={`/homework/${course.id}`}
            key={course.id}
            className={styles.card}
          >
            <img className={styles.CardBg} src={cardHomeBg} alt="" />
            <div className={styles.box}>
              <div className={styles.left}>
                <div className={styles.titleRow}>
                  <img src={TeacherHomework} alt="" className={styles.icon} />
                  <span className={styles.title}>{course.title}</span>
                </div>

                <div className={styles.teacher}>
                  <img
                    className={styles.TeachernameIcon}
                    src={TeacherNameIcon}
                    alt=""
                  />
                  Kozimxon To’rayev
                </div>
                <div className={styles.actions}>
                  <div className={styles.badge}>
                    <img src={homeworkBadge} alt="" />
                  <div className={styles.textBadge}>
                      Barcha uy vazifalar <span>24</span>
                  </div>
                  </div>
                  <div className={styles.checking}>
                    <img src={Chek} alt="" />
                    <div className={styles.ChekTest}>
                      Tekshirilmoqda <span>4</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className={styles.right}>
                <div className={styles.progressWrapper}>
                  {renderProgressCircle(
                    course.progress.current,
                    course.progress.total
                  )}
                </div>
                <div className={styles.arrow}><IoIosArrowForward/></div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeworkCourseCard;
