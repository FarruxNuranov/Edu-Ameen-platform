// src/pages/HomePage/HomePage.jsx
import React from "react";
import { NavLink } from "react-router-dom";
import { FaStar } from "react-icons/fa";
import styles from "./HomePage.module.scss";

import {
  courses1,
  news1,
  news2,
  news3,
  news4,
  star,
} from "../../../utils/getimage";

const newsItems = [
  { image: news1, label: "HR kurslari" },
  { image: news2, label: "Islom Moliya­si" },
  { image: news3, label: "HR kursi haqida fiklar" },
  { image: news4, label: "HR kursi haqida fiklar" },
  { image: news1, label: "HR kurslari" },
  { image: news2, label: "Islom Moliya­si" },
  { image: news2, label: "Islom Moliya­si" },
];

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
];

export default function HomePage() {
  return (
    <div className={styles.home}>
      {/* Секция «Yangiliklar» */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Yangiliklar</h2>
        <div className={styles.newsList}>
          {newsItems.map((item, idx) => (
            <div key={idx} className={styles.newsItem}>
              <div className={styles.newsImageWrapper}>
                <img
                  src={item.image}
                  alt={item.label}
                  className={styles.newsImage}
                />
              </div>
              <div className={styles.newsLabel}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Секция «Bepul kurslar» */}
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Bepul kurslar</h2>
        <div className={styles.coursesGrid}>
          {courses.map((c, idx) => (
            <NavLink to="/coursestaken" key={idx} className={styles.card}>
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
            </NavLink>
          ))}
        </div>
      </section>
    </div>
  );
}
