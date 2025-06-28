import React, { useRef } from 'react';
import styles from './FreeCourses.module.scss';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import {  PaidCourses } from '../../../../utils/getimage';


const courses = [
  { title: "Human Resource Management", teacher: "Brooklyn Simmons", image: PaidCourses },
  { title: "Human Resource Management", teacher: "Darrell Steward", image: PaidCourses },
  { title: "Human Resource Management", teacher: "Savannah Nguyen", image: PaidCourses },
  { title: "Human Resource Management", teacher: "Dianne Russell", image: PaidCourses },
  { title: "Human Resource Management", teacher: "Brooklyn Simmons", image: PaidCourses },
  { title: "Human Resource Management", teacher: "Darrell Steward", image: PaidCourses },
  { title: "Human Resource Management", teacher: "Savannah Nguyen", image: PaidCourses },
  { title: "Human Resource Management", teacher: "Dianne Russell", image: PaidCourses },
  { title: "Human Resource Management", teacher: "Brooklyn Simmons", image: PaidCourses },
  { title: "Human Resource Management", teacher: "Darrell Steward", image: PaidCourses },
  { title: "Human Resource Management", teacher: "Savannah Nguyen", image: PaidCourses },
  { title: "Human Resource Management", teacher: "Dianne Russell", image: PaidCourses },
  { title: "Human Resource Management", teacher: "Brooklyn Simmons", image: PaidCourses },
  { title: "Human Resource Management", teacher: "Darrell Steward", image: PaidCourses },
  { title: "Human Resource Management", teacher: "Savannah Nguyen", image: PaidCourses },
  { title: "Human Resource Management", teacher: "Dianne Russell", image: PaidCourses },
  { title: "Human Resource Management", teacher: "Brooklyn Simmons", image: PaidCourses },
  { title: "Human Resource Management", teacher: "Darrell Steward", image: PaidCourses },
  { title: "Human Resource Management", teacher: "Savannah Nguyen", image: PaidCourses },
  { title: "Human Resource Management", teacher: "Dianne Russell", image: PaidCourses },
];

const FreeCourses = () => {
    const scrollRef = useRef();
  
    const scroll = (offset) => {
      scrollRef.current.scrollLeft += offset;
    };
  

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Bepul kurslar</h2>
        <div className={styles.controls}>
          <button onClick={() => scroll(-276)}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => scroll(276)}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <div className={styles.carousel} ref={scrollRef}>
        {courses.map((course, index) => (
          <div className={styles.card} key={course.id + "-" + index}>
            <div className={styles.imageWrapper}>
              <img src={course.image} alt={course.title} />
            </div>
            <div className={styles.textBox}>
              <h3>{course.title}</h3>
              <p><span>Ustoz:</span> {course.teacher}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FreeCourses;
