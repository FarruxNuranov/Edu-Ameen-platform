import React from 'react';
import styles from './ProgressCards.module.scss';
import { BsBriefcase, BsCheck2Square, BsInfoCircle } from 'react-icons/bs';
import { progressOne, progressThree, progressTwo } from '../../../utils/getimage';

const ProgressCards = () => {
  const data = [
    {
      count: 60,
      label: 'Barcha Vazifalar',
      icon: progressOne,
      color: 'blue',
    },
    {
      count: 43,
      label: 'Tekshirilgan',
      icon: progressTwo,
      color: 'green',
    },
    {
      count: 5,
      label: 'Tekshirilmoqda',
      icon: progressThree,
      color: 'orange',
    },
  ];

  return (
    <div className={styles.wrapper}>
      <h3>Progress</h3>
      <div className={styles.cards}>
        {data.map((item, index) => (
          <div key={index} className={`${styles.card} ${styles[item.color]}`}>
            <div className={styles.top}>
              <span className={styles.count}>{item.count}</span>
              <span className={styles.icon}><img src={item.icon} alt="" /></span>
            </div>
            <div className={styles.label}>{item.label}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProgressCards;
