import React from "react";
import { useParams, Link } from "react-router-dom";
import { coursesData } from "../CoursesTaken/coursesData";
import styles from "./HomeworkCoursePage.module.scss";

import {  CardBg, homeworkicon } from "../../../utils/getimage";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";
import { IoIosArrowForward } from "react-icons/io";

const HomeworkCoursePage = () => {
  const { id } = useParams();
  const course = coursesData.find((item) => item.id.toString() === id);

  if (!course) return <div>Kurs topilmadi</div>;

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{course.title} vazifalari</h2>

      <div className={styles.grid}>
        {course.homeworks?.map((hw) => (
          <Link
            key={hw.id}
            // to={`/coursestaken/${course.id}/homeworks/${hw.id}`}
            className={styles.card}
          >
             <img src={CardBg} alt="" className={styles.bgIcon} />
            <div className={styles.left}>
              <div className={styles.nameTitle}>
                <img className={styles.icon} src={homeworkicon} alt="" />
                <div className={styles.title}>{hw.title}</div>
              </div>
              <div
                className={`${styles.status} ${
                  hw.status === "Tekshirilgan"
                    ? styles.checked
                    : hw.status === "Topshirilmoqda"
                    ? styles.inProgress
                    : styles.unchecked
                }`}
              >
                {hw.status === "Tekshirilgan" && (
                  <FaCheckCircle className={styles.icon} />
                )}
                {hw.status === "Topshirilmoqda" && (
                  <FaClock className={styles.icon} />
                )}
                {hw.status === "Topshirilmagan" && (
                  <FaTimesCircle className={styles.icon} />
                )}

                {hw.status}
              </div>
            </div>
            <div className={styles.right}>
              <span className={styles.arrow}>
                <IoIosArrowForward />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default HomeworkCoursePage;
