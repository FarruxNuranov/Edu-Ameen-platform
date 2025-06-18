import React from 'react';
import styles from './TopRatings.module.scss';
import { FaCrown } from 'react-icons/fa';
import { BsTrophy } from 'react-icons/bs';
import {  news3, TopRaitingCup } from '../../../../utils/getimage';

const users = [
  {
    name: 'Wade Warren',
    course: 'HR kursi',
    score: '10 000 ball',
    change: '+2',
    badge: '#1',
    icon: <FaCrown color="#F5A623" />,
    avatar: news3,
  },
  {
    name: 'Dianne Russell',
    course: 'Islomiy moliya',
    score: '10 000 ball',
    change: '+2',
    badge: '#2',
    icon: <BsTrophy color="white" />,
    avatar: news3,
  },
  {
    name: 'Dianne Russell',
    course: 'Islomiy moliya',
    score: '10 000 ball',
    change: '+2',
    badge: '#3',
    icon: <BsTrophy color="white" />,
    avatar: news3,
  },
];

const TopRatings = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.left}>
      <h3 className={styles.title}>Top ratinglar</h3>
        <img className={styles.Cup} src={TopRaitingCup} alt="" />
       <div className={styles.ScoreBox}>
       <div className={styles.score}>10 000 ball</div>
       <div className={styles.badge}>#2</div>
       </div>
        <div className={styles.label}>Sizning rating</div>
      </div>

      <div className={styles.right}>
        
        <div className={styles.list}>
          {users.map((user, index) => (
            <div key={index} className={styles.userCard}>
              <div className={styles.userInfo}>
                <img src={user.avatar} alt={user.name} className={styles.avatar} />
                <div>
                  <div className={styles.name}>{user.name}</div>
                  <div className={styles.course}>{user.course}</div>
                </div>
              </div>
              <div className={styles.userIcon}>
              {user.icon}
              </div>
              <div className={styles.meta}>
                
                <span className={styles.points}>{user.score}</span>
                <span className={styles.change}>+{user.change}</span>
                <span className={styles.userBadge}>{user.badge}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TopRatings;
