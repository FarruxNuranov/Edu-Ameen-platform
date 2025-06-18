import React from 'react'
import styles from './News.module.scss'
import { news1, news2, news3, news4 } from '../../../../utils/getimage';

const newsItems = [
    { image: news1, label: "HR kurslari" },
    { image: news2, label: "Islom Moliya­si" },
    { image: news3, label: "HR kursi haqida fiklar" },
    { image: news4, label: "HR kursi haqida fiklar" },
    { image: news1, label: "HR kurslari" },
    { image: news2, label: "Islom Moliya­si" },
    { image: news3, label: "HR kursi haqida fiklar" },

   
  ];
  
const News = () => {
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
  </div>
  )
}

export default News