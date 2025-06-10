// src/pages/CoursePage/CoursePage.jsx
import React, { useState } from "react";
import { useParams } from "react-router-dom";
import {
  FaPlay,
  FaHeart,
  FaRegHeart,
  FaUsers,
  FaClock,
  FaBookOpen,
  FaVideo,
  FaStar,
  FaRegStar,
} from "react-icons/fa";
import { coursesData } from "../../utils/coursesData";
import styles from "./CoursePage.module.scss";
import { news1 } from "../../utils/getimage";

export default function CoursePage() {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === id);
  const [activeTab, setActiveTab] = useState("description");
  const [fav, setFav] = useState(false);

  if (!course) return <p>Курс не найден</p>;

  const { title, banner, date, description, author, modules, stats } = course;

  // Заглушка для отзывов
  const ratingPercentages = { 5: 65, 4: 20, 3: 8, 2: 5, 1: 2 };
  const totalReviews = "5,690";
  const avgRating = 4;
  const reviewsList = [
    {
      id: "r1",
      avatar: author.avatar,
      name: "Jamila Akbarova",
      date: "September 20, 2023",
      rating: 4.0,
      text: "Very good course. Well done!",
    },
    {
      id: "r2",
      avatar: author.avatar,
      name: "Azizbek Muhammedov",
      date: "September 20, 2023",
      rating: 4.0,
      text: "Great foundation, thank you!",
    },
    // … ещё отзывы
  ];

  return (
    <div className={styles.page}>
      {/* Заголовок */}
      <h1 className={styles.heading}>{title}</h1>

      {/* Табы */}

      {/* Содержание */}
      <div className={styles.inner}>
        {/* ЛЕВЫЙ СТОЛБЕЦ */}
        <div className={styles.left}>
          {/* ОДНА ОБЩАЯ ГРУППА ДЛЯ ОБОИХ TAB-ОВ */}
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${
                activeTab === "description" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("description")}
            >
              Kurs tavsifi
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "reviews" ? styles.activeTab : ""
              }`}
              onClick={() => setActiveTab("reviews")}
            >
              Sharhlar
            </button>
          </div>
          {activeTab === "description" && (
            <div className={styles.contentGroup}>
              {/* Медиа-блок */}
              <div className={styles.media}>
                <img src={banner} alt={title} className={styles.banner} />
                <button className={styles.playBtn}>
                  <FaPlay />
                </button>
              </div>
              {/* Описание */}
              <div className={styles.desc}>
                <div className={styles.date}>{date}</div>
                <p className={styles.text}>{description}</p>
                <div className={styles.author}>
                  <img
                    src={news1}
                    alt={author.name}
                    className={styles.avatar}
                  />
                  <div>
                    <div className={styles.authorName}>{author.name}</div>
                    <div className={styles.authorRole}>{author.role}</div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === "reviews" && (
            <div className={styles.contentGroup}>
              {/* Гистограмма и средний рейтинг */}
              <div className={styles.reviewsSummary}>
                <div className={styles.histogram}>
                  {[5, 4, 3, 2, 1].map((star) => (
                    <div key={star} className={styles.histogramItem}>
                      <span className={styles.histogramLabel}>{star}</span>
                      <div className={styles.histogramBar}>
                        <div
                          className={styles.histogramFill}
                          style={{ width: `${ratingPercentages[star]}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
                <div className={styles.average}>
                  <span className={styles.avgNumber}>{avgRating}</span>
                  <div className={styles.avgStars}>
                    {Array.from({ length: 5 }).map((_, i) =>
                      i < avgRating ? <FaStar key={i} /> : <FaRegStar key={i} />
                    )}
                  </div>
                  <span className={styles.outOf}>out of 5</span>
                </div>
                <div className={styles.totalReviews}>
                  Barcha sharhlar:{" "}
                  <span className={styles.totalNumber}>{totalReviews}</span>
                </div>
              </div>
              {/* Список отзывов */}
              <div className={styles.reviewsList}>
                {reviewsList.map((r) => (
                  <div key={r.id} className={styles.review}>
                    <img
                      src={r.avatar}
                      alt={r.name}
                      className={styles.reviewAvatar}
                    />
                    <div className={styles.reviewContent}>
                      <div className={styles.reviewHeader}>
                        <span className={styles.reviewName}>{r.name}</span>
                        <span className={styles.reviewDate}>{r.date}</span>
                      </div>
                      <div className={styles.reviewRating}>
                        {Array.from({ length: 5 }).map((_, i) =>
                          i < Math.floor(r.rating) ? (
                            <FaStar key={i} />
                          ) : (
                            <FaRegStar key={i} />
                          )
                        )}
                        <span className={styles.reviewScore}>
                          {r.rating.toFixed(1)}
                        </span>
                      </div>
                      <p className={styles.reviewText}>{r.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        {/* ПРАВЫЙ СТОЛБЕЦ (SIDEBAR) */}
        <aside className={styles.sidebar}>
          <div className={styles.sidebarGroupOne}>
            <h2 className={styles.sidebarTitle}>O‘quv dasturi</h2>
            <ul className={styles.moduleList}>
              {modules.map((m) => (
                <li key={m.id} className={styles.moduleItem}>
                  <button className={styles.moduleBtn}>
                    <FaPlay className={styles.moduleIcon} />
                    <span>
                      {m.id} {m.title}
                    </span>
                  </button>
                </li>
              ))}
            </ul>
             <div className={styles.favBtn} >
              <button className={styles.favorite}  onClick={() => setFav(!fav)}>
                {fav ? <FaHeart /> : <FaRegHeart />}
              {!fav ? " Sevimlilar ro‘yxatiga qo‘shish" : " Qo‘shildi"}
              </button>
            </div>
          </div>
          
          <div className={styles.sidebarGroupTwo}>
            <div className={styles.stats}>
              <div>
                <FaUsers /> Ro‘yxatdan o‘tgan talabalar: <b>{stats.students}</b>
              </div>
              <div>
                <FaClock /> Muddati: <b>{stats.duration}</b>
              </div>
              <div>
                <FaBookOpen /> Ma’ruzalar: <b>{stats.lectures}</b>
              </div>
              <div>
                <FaVideo /> Videolar: <b>{stats.videos}</b>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
