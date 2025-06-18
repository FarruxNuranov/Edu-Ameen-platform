import React from 'react'
import styles from './CurrentLessons.module.scss'
import { CurrentPage } from '../../../../utils/getimage'

const CurrentLessons = () => {
  const tasks = [
    {
      id: 1,
      title: 'Kompaniya qadriyatlari',
      date: '20 may, 2024',
      progress: 25,
      icon: '$'
    },
    {
      id: 2,
      title: 'HR rejalashtirish',
      date: '20 may, 2024',
      progress: 52
    },
    {
      id: 3,
      title: 'Kompaniya maqsadi',
      date: '20 may, 2024',
      progress: 75
    },
    {
      id: 4,
      title: 'Kompaniya misiyasi',
      date: '20 may, 2024',
      progress: 15
    }
  ]

  return (
    <div className={styles.Wrapper}>
      <h2 className={styles.Wrappertitle}>Joriy darslar</h2>
      <div className={styles.cards}>
        {tasks.map(task => (
          <div key={task.id} className={styles.card}>
            <div className={styles.cardHeader}>
              <div className={styles.title}>
                <img src={CurrentPage} alt="" />
                <h3 className={styles.cardTitle}>{task.title}</h3>
              </div>
              <span className={styles.date}>{task.date}</span>
            </div>
            <div className={styles.circleWrapper}>
              <svg width="48" height="48" className={styles.circleSvg}>
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="#d2e3fc"
                  strokeWidth="4"
                  fill="none"
                />
                <circle
                  cx="24"
                  cy="24"
                  r="20"
                  stroke="#005eff"
                  strokeWidth="4"
                  fill="none"
                  strokeDasharray={2 * Math.PI * 20}
                  strokeDashoffset={2 * Math.PI * 20 - (2 * Math.PI * 20 * task.progress) / 100}
                  strokeLinecap="round"
                  className={styles.progressCircle}
                />
              </svg>
              <span className={styles.circleLabel}>{task.progress}%</span>
            </div>
           

          </div>
        ))}
      </div>
    </div>
  )
}

export default CurrentLessons