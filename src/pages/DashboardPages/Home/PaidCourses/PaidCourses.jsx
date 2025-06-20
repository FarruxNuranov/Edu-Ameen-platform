import React, { useRef } from "react";
import styles from "./PaidCourses.module.scss";

import { courses1, CurrentPage, people, school } from "../../../../utils/getimage";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const courses = [
  { title: "Product management", teacher: "Wade Warren" },
  { title: "Product design course", teacher: "Bessie Cooper" },
  { title: "Human Resource Management", teacher: "K. To'rayev" },
  { title: "Marketing", teacher: "Anna Smith" },
  { title: "Product management", teacher: "Wade Warren" },
  { title: "Product design course", teacher: "Bessie Cooper" },
  { title: "Human Resource Management", teacher: "K. To'rayev" },
  { title: "Marketing", teacher: "Anna Smith" },
  { title: "Product management", teacher: "Wade Warren" },
  { title: "Product design course", teacher: "Bessie Cooper" },
  { title: "Human Resource Management", teacher: "K. To'rayev" },
  { title: "Marketing", teacher: "Anna Smith" },
];

const PaidCourses = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === "left" ? -290 : 290,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h2>Pulli kurslar</h2>
        <p>Professional ustozlardan amaliy va nazariy bilimlar to‘plami.</p>
        <div className={styles.controls}>
          <button onClick={() => scroll("left")}>
            <IoIosArrowBack className={styles.arrow} />
          </button>
          <button onClick={() => scroll("right")}>
            <IoIosArrowForward className={styles.arrow} />
          </button>
        </div>
      </div>

      <div className={styles.carousel} ref={scrollRef}>
        {courses.map((course, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imageWrapper}>
              <img src={courses1} alt={course.title} />
            </div>
            <div className={styles.textBox}>
              <div className={styles.textProgress}>
                <div className={styles.ProgresDiv}>
                  <img src={CurrentPage} alt="" />
                  16 ta darslar
                </div>
                <div className={styles.ProgresDiv}>
                  <img src={CurrentPage} alt="" />
                  Sertifikat
                </div>
              </div>
              <h3>{course.title}</h3>
              <div className={styles.TeacherBox}>
                <div className={styles.teacher}>
                  <img src={school} alt="" />
                  {course.teacher}
                </div>
                <div className={styles.teacherInfo}>
                   45<img src={people} alt="" />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaidCourses;
