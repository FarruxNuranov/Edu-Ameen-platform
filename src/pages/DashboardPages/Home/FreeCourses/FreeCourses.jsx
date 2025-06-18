import React, { useRef } from 'react';
import styles from './FreeCourses.module.scss';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import { courses1 } from '../../../../utils/getimage';


const courses = [
  { title: "Human Resource Management", teacher: "Brooklyn Simmons", image: courses1 },
  { title: "Human Resource Management", teacher: "Darrell Steward", image: courses1 },
  { title: "Human Resource Management", teacher: "Savannah Nguyen", image: courses1 },
  { title: "Human Resource Management", teacher: "Dianne Russell", image: courses1 },
  { title: "Human Resource Management", teacher: "Brooklyn Simmons", image: courses1 },
  { title: "Human Resource Management", teacher: "Darrell Steward", image: courses1 },
  { title: "Human Resource Management", teacher: "Savannah Nguyen", image: courses1 },
  { title: "Human Resource Management", teacher: "Dianne Russell", image: courses1 },
  { title: "Human Resource Management", teacher: "Brooklyn Simmons", image: courses1 },
  { title: "Human Resource Management", teacher: "Darrell Steward", image: courses1 },
  { title: "Human Resource Management", teacher: "Savannah Nguyen", image: courses1 },
  { title: "Human Resource Management", teacher: "Dianne Russell", image: courses1 },
  { title: "Human Resource Management", teacher: "Brooklyn Simmons", image: courses1 },
  { title: "Human Resource Management", teacher: "Darrell Steward", image: courses1 },
  { title: "Human Resource Management", teacher: "Savannah Nguyen", image: courses1 },
  { title: "Human Resource Management", teacher: "Dianne Russell", image: courses1 },
  { title: "Human Resource Management", teacher: "Brooklyn Simmons", image: courses1 },
  { title: "Human Resource Management", teacher: "Darrell Steward", image: courses1 },
  { title: "Human Resource Management", teacher: "Savannah Nguyen", image: courses1 },
  { title: "Human Resource Management", teacher: "Dianne Russell", image: courses1 },
];

const FreeCourses = () => {
  const scrollRef = useRef(null);

  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.header}>
        <h2>Bepul kurslar</h2>
        <div className={styles.controls}>
          <button onClick={() => scroll('left')}>
            <IoIosArrowBack />
          </button>
          <button onClick={() => scroll('right')}>
            <IoIosArrowForward />
          </button>
        </div>
      </div>

      <div className={styles.carousel} ref={scrollRef}>
        {courses.map((course, index) => (
          <div className={styles.card} key={index}>
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
