import React, { useRef } from "react";
import styles from "./Quiz.module.scss";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import { quizCard } from "../../../utils/getimage";
import { Link } from "react-router-dom";

const quizzes = [
  {
    id: 1,
    image: "/quiz1.jpg",
    title: "Music History Buff Test",
    desc: "Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum...",
    tag: "Yengil",
    time: "15 daqiqa",
  },
  {
    id: 2,
    image: "/quiz2.jpg",
    title: "Social Media Savvy Quiz",
    desc: "Phasellus accumsan imperdiet tempor. Cras tincidunt...",
    tag: "Yengil",
    time: "15 daqiqa",
  },
  {
    id: 3,
    image: "/quiz3.jpg",
    title: "Pop Culture Prodigy",
    desc: "Cras tincidunt, arcu nec elementum rutrum, elit erat...",
    tag: "Yengil",
    time: "15 daqiqa",
  },
  {
    id: 4,
    image: "/quiz4.jpg",
    title: "Gaming Geek Knowledge",
    desc: "Suspendisse potenti. Pellentesque habitant morbi...",
    tag: "Yengil",
    time: "15 daqiqa",
  },
  {
    id: 4,
    image: "/quiz4.jpg",
    title: "Gaming Geek Knowledge",
    desc: "Suspendisse potenti. Pellentesque habitant morbi...",
    tag: "Yengil",
    time: "15 daqiqa",
  },
  {
    id: 1,
    image: "/quiz1.jpg",
    title: "Music History Buff Test",
    desc: "Duis ac augue ut lectus congue luctus. Vivamus eu lacus vestibulum...",
    tag: "Yengil",
    time: "15 daqiqa",
  },
  {
    id: 2,
    image: "/quiz2.jpg",
    title: "Social Media Savvy Quiz",
    desc: "Phasellus accumsan imperdiet tempor. Cras tincidunt...",
    tag: "Yengil",
    time: "15 daqiqa",
  },
  {
    id: 3,
    image: "/quiz3.jpg",
    title: "Pop Culture Prodigy",
    desc: "Cras tincidunt, arcu nec elementum rutrum, elit erat...",
    tag: "Yengil",
    time: "15 daqiqa",
  },
  {
    id: 4,
    image: "/quiz4.jpg",
    title: "Gaming Geek Knowledge",
    desc: "Suspendisse potenti. Pellentesque habitant morbi...",
    tag: "Yengil",
    time: "15 daqiqa",
  },
  {
    id: 4,
    image: "/quiz4.jpg",
    title: "Gaming Geek Knowledge",
    desc: "Suspendisse potenti. Pellentesque habitant morbi...",
    tag: "Yengil",
    time: "15 daqiqa",
  },
];

const Quiz = () => {
  const scrollRef = useRef();

  const scroll = (offset) => {
    scrollRef.current.scrollLeft += offset;
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.top}>
        <h2>HR Kursi Quizlari</h2>
        <div className={styles.arrows}>
          <button onClick={() => scroll(-300)} className={styles.arrow}>
            <FaChevronLeft />
          </button>
          <button onClick={() => scroll(300)} className={styles.arrowActive}>
            <FaChevronRight />
          </button>
        </div>
      </div>

      <div className={styles.cards} ref={scrollRef}>
        {quizzes.map((quiz, index) => (
          <div className={styles.card} key={quiz.id + "-" + index}>
            <div className={styles.image}>
              <img src={quizCard} alt={quiz.title} />
              <span className={styles.tag}>{quiz.tag}</span>
              <span className={styles.time}>🕒 {quiz.time}</span>
            </div>
            <div className={styles.content}>
              <h3>{quiz.title}</h3>
              <p>{quiz.desc}</p>
              <Link className={styles.buttonStart} to={`/Dashboard/quiz/${quiz.id}`}>
                ▶ Start quiz
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Quiz;
