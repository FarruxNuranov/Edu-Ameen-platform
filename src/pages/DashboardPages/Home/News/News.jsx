import React, { useState } from 'react';
import styles from './News.module.scss';
import { FiX, FiArrowLeft, FiArrowRight } from 'react-icons/fi';
import { news1, news2, news3, news4 } from '../../../../utils/getimage';

const newsItems = [
  { image: news1, label: "HR kurslari", videoId: "z4o1f_LNYlM" },
  { image: news2, label: "Islom Moliya­si", videoId: "o4tbI1xOa5o" },
  { image: news3, label: "HR kursi haqida fiklar", videoId: "mkvA5gWM0uU" },
  { image: news4, label: "HR kursi haqida fiklar", videoId: "Jaj9WHXOEro" },
];

const News = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  const openModal = (index) => {
    setActiveIndex(index);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setActiveIndex(0);
  };

  const nextVideo = () => {
    setActiveIndex((prev) => (prev + 1) % newsItems.length);
  };

  const prevVideo = () => {
    setActiveIndex((prev) => (prev - 1 + newsItems.length) % newsItems.length);
  };

  return (
    <div className={styles.home}>
      <section className={styles.section}>
        <h2 className={styles.sectionTitle}>Yangiliklar</h2>
        <div className={styles.newsList}>
          {newsItems.map((item, idx) => (
            <div
              key={idx}
              className={styles.newsItem}
              onClick={() => openModal(idx)}
            >
              <div className={styles.newsImageWrapper}>
                <img src={item.image} alt={item.label} className={styles.newsImage} />
              </div>
              <div className={styles.newsLabel}>{item.label}</div>
            </div>
          ))}
        </div>
      </section>

      {isModalOpen && (
        <div className={styles.modalOverlay} onClick={closeModal}>
          <div className={styles.modalBox} onClick={(e) => e.stopPropagation()}>
            <button className={styles.closeBtn} onClick={closeModal}>
              <FiX />
            </button>

            <button className={styles.prevBtn} onClick={prevVideo}>
              <FiArrowLeft />
            </button>
            <button className={styles.nextBtn} onClick={nextVideo}>
              <FiArrowRight />
            </button>

            <div className={styles.videoWrapper}>
              <iframe
                src={`https://www.youtube.com/embed/${newsItems[activeIndex].videoId}?autoplay=1&controls=1`}
                frameBorder="0"
                allow="autoplay; encrypted-media"
                allowFullScreen
                title={newsItems[activeIndex].label}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default News;
