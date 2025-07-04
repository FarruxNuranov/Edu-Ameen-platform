import React from "react";
import styles from "./OverallRatings.module.scss";
import { courses1, kubok, kubokBlack } from "../../../utils/getimage";

const topUsers = [
  { name: "Hursanoy 02", points: 1534, avatar: courses1 },
  { name: "Ralph Edwards", points: 1529, avatar: courses1 },
  { name: "Courtney Henry", points: 1525, avatar: courses1 },
];

const ratings = [
  { name: "Jacob Jones", score: 10000, rank: 1 },
  { name: "Jacob Jones", score: 10000, rank: 2 },
  { name: "Jacob Jones", score: 10000, rank: 2 },
  { name: "Jacob Jones", score: 10000, rank: 1 },
  { name: "Jacob Jones", score: 10000, rank: 2 },
  { name: "Jacob Jones", score: 10000, rank: 2 },
  { name: "Jacob Jones", score: 10000, rank: 1 },
  { name: "Jacob Jones", score: 10000, rank: 2 },
  { name: "Jacob Jones", score: 10000, rank: 2 },
  { name: "Jacob Jones", score: 10000, rank: 1 },
  { name: "Jacob Jones", score: 10000, rank: 2 },
  { name: "Jacob Jones", score: 10000, rank: 2 },
];

const OverallRatings = () => {
  return (
    <div className={styles.container}>
      <div className={styles.topBlock}>
        <h3>Top reytinglar</h3>
        <div className={styles.topUsers}>
          {topUsers.map((user, idx) => (
            <div className={styles.user} key={idx}>
              <img src={user.avatar} alt={user.name} />
              <div className={styles.name}>{user.name}</div>
              <div className={styles.points}>
                <span className={styles.iconLeft}>⭐</span>
                <span className={styles.value}>{user.points}</span>
                <span className={styles.iconRight}>👑</span>
              </div>
            </div>
          ))}
        </div>
        <img className={styles.topBlockIcon} src={kubok} alt="" />
      </div>

      <div className={styles.list}>
        {ratings.map((user, idx) => (
          <div className={styles.listItem} key={idx}>
            <div className={styles.info}>
              <img src={courses1} alt={user.name} />
              <div>
                <div className={styles.name}>{user.name}</div>
                <div className={styles.course}>HR kursi</div>
              </div>
            </div>
            <div className={styles.main}>
              <img src={kubokBlack} alt="" />
            </div>
            <div className={styles.right}>
              <div className={styles.score}>{user.score} ball</div>
              <div className={styles.rank}>#{user.rank}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OverallRatings;
