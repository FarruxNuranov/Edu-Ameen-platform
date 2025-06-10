import React from "react";
import { courses1, star } from "../../../utils/getimage";
import styles from './CoursesTaken.module.scss';

const courses = [
  {
    image: courses1,
    title: "Mental Health & Emotional Well-being",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Human Resource Management",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Rehabilitation & Recovery",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Daily Support & Assistance",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Disability Assistance & Inclusion",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Elderly Support & Wellness",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Community Outreach & Empowerment",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Personalized Care Interventions",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Mental Health & Emotional Well-being",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Human Resource Management",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Rehabilitation & Recovery",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Daily Support & Assistance",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Disability Assistance & Inclusion",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Elderly Support & Wellness",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Community Outreach & Empowerment",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Personalized Care Interventions",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Mental Health & Emotional Well-being",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Human Resource Management",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Rehabilitation & Recovery",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Daily Support & Assistance",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Disability Assistance & Inclusion",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Elderly Support & Wellness",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Community Outreach & Empowerment",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Personalized Care Interventions",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Mental Health & Emotional Well-being",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Human Resource Management",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Rehabilitation & Recovery",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Daily Support & Assistance",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Disability Assistance & Inclusion",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Elderly Support & Wellness",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Community Outreach & Empowerment",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
  {
    image: courses1,
    title: "Personalized Care Interventions",
    teacher: "Ustoz: K. To’rayev",
    rating: "4.7",
  },
];
const CoursesTaken = () => {



  return (
  
  <>
   {/* Секция «Bepul kurslar» */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Kurslar</h2>
        <div className={styles.coursesGrid}>
          {courses.map((c, idx) => (
            <a  key={idx} className={styles.card}>
              <div className={styles.cardImageWrapper}>
                <img src={c.image} alt={c.title} className={styles.cardImage} />
              </div>
              <div className={styles.cardContent}>
                <div className={styles.cardText}>
                  <div className={styles.cardTitle}>{c.title}</div>
                  <div className={styles.cardTeacher}>{c.teacher}</div>
                </div>
                <div className={styles.cardRating}>
                  <img className={styles.starIcon} src={star} alt="" />
                  <span className={styles.ratingText}>{c.rating}</span>
                </div>
              </div>
            </a>
          ))}
        </div>
      </section>
  </>
  

        )
};

export default CoursesTaken;
