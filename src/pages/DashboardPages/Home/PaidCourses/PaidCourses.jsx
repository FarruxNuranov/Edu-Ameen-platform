import React, { useRef, useEffect } from 'react';
import styles from './PaidCourses.module.scss';
import { courses1 } from '../../../../utils/getimage';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';

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
  { title: "Product management", teacher: "Wade Warren" },
  { title: "Product design course", teacher: "Bessie Cooper" },
  { title: "Human Resource Management", teacher: "K. To'rayev" },
  { title: "Marketing", teacher: "Anna Smith" },
  // ...ещё карточки
];

const PaidCourses = () => {
  const scrollRef = useRef(null);
  const isDown = useRef(false);
  const startX = useRef(0);
  const scrollLeft = useRef(0);

  // кнопки скролла
  const scroll = (direction) => {
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction === 'left' ? -300 : 300,
        behavior: 'smooth'
      });
    }
  };

  // drag-to-scroll
  useEffect(() => {
    const slider = scrollRef.current;
    if (!slider) return;

    const onMouseDown = (e) => {
      isDown.current = true;
      slider.classList.add(styles.activeDrag);
      startX.current = e.pageX - slider.offsetLeft;
      scrollLeft.current = slider.scrollLeft;
    };

    const onMouseLeave = () => {
      isDown.current = false;
      slider.classList.remove(styles.activeDrag);
    };

    const onMouseUp = () => {
      isDown.current = false;
      slider.classList.remove(styles.activeDrag);
    };

    const onMouseMove = (e) => {
      if (!isDown.current) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX.current) * 1.5; // чувствительность
      slider.scrollLeft = scrollLeft.current - walk;
    };

    // события
    slider.addEventListener('mousedown', onMouseDown);
    slider.addEventListener('mouseleave', onMouseLeave);
    slider.addEventListener('mouseup', onMouseUp);
    slider.addEventListener('mousemove', onMouseMove);

    return () => {
      slider.removeEventListener('mousedown', onMouseDown);
      slider.removeEventListener('mouseleave', onMouseLeave);
      slider.removeEventListener('mouseup', onMouseUp);
      slider.removeEventListener('mousemove', onMouseMove);
    };
  }, []);

  return (
    <div className={styles.wrapper}>
      <div className={styles.info}>
        <h2>Pulli kurslar</h2>
        <p>Professional ustozlardan amaliy va nazariy bilimlar to‘plami.</p>
        <div className={styles.controls}>
          <button onClick={() => scroll('left')}>
            <IoIosArrowBack className={styles.arrow} />
          </button>
          <button onClick={() => scroll('right')}>
            <IoIosArrowForward className={styles.arrow} />
          </button>
        </div>
      </div>

      <div className={styles.carousel} ref={scrollRef}>
        {courses.map((course, index) => (
          <div className={styles.card} key={index}>
            <div className={styles.imageWrapper}>
              <img src={courses1} alt={course.title} draggable={false} />
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

export default PaidCourses;
