import React, { useRef } from 'react';
import styles from './PaidCourses.module.scss';


const courses = [
  { title: "Product management", teacher: "Wade Warren",},
  { title: "Product design course", teacher: "Bessie Cooper" },
  { title: "Human Resource Management", teacher: "K. To'rayev", },
  { title: "Marketing fundamentals", teacher: "Anna Smith" , },
  { title: "Product management", teacher: "Wade Warren",},
  { title: "Product design course", teacher: "Bessie Cooper" },
  { title: "Human Resource Management", teacher: "K. To'rayev", },
  { title: "Marketing fundamentals", teacher: "Anna Smith" , },
  { title: "Product management", teacher: "Wade Warren",},
  { title: "Product design course", teacher: "Bessie Cooper" },
  { title: "Human Resource Management", teacher: "K. To'rayev", },
  { title: "Marketing fundamentals", teacher: "Anna Smith" , },
  { title: "Product management", teacher: "Wade Warren",},
  { title: "Product design course", teacher: "Bessie Cooper" },
  { title: "Human Resource Management", teacher: "K. To'rayev", },
  { title: "Marketing fundamentals", teacher: "Anna Smith" , },
];

const PaidCourses = () => {
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
      <div className={styles.info}>
        <h2>Pulli kurslar</h2>
        <p>Professional ustozlardan amaliy va nazariy bilimlar to‘plami.</p>
        <div className={styles.controls}>
          <button onClick={() => scroll('left')} className={styles.arrow}>&larr;</button>
          <button onClick={() => scroll('right')} className={styles.arrow}>&rarr;</button>
        </div>
      </div>

      <div className={styles.carousel} ref={scrollRef}>
        {courses.map((course, idx) => (
          <div className={styles.card} key={idx}>
            <img src='' alt="course" />
            <h3>{course.title}</h3>
            <p><span>Ustoz:</span> {course.teacher}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PaidCourses;
