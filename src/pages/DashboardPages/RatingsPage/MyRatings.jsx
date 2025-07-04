import React from "react";
import { BsTrophy } from "react-icons/bs";
import styles from "./MyRatings.module.scss";
import { answerIcon, myraiting, starRaiting } from "../../../utils/getimage";

const MyRatings = () => {
  const cards = [
    { value: 60, label: "Umumiy reyting" },
    { value: 40, label: "HR Management kursi" },
    { value: 20, label: "Islom Moliya kursi" },
  ];

  const items = [
    "Kompaniyada uchraydigan muammolarga HR beradigan yechim...",
    "Kompaniyada uchraydigan muammolarga HR beradigan yechim...",
    "Kompaniyada uchraydigan muammolarga HR beradigan yechim...",
    "Kompaniyada uchraydigan muammolarga HR beradigan yechim...",
    "Kompaniyada uchraydigan muammolarga HR beradigan yechim...",
    "Kompaniyada uchraydigan muammolarga HR beradigan yechim..."
  ];

  return (
    <div className={styles.container}>
      <div className={styles.wrapperBox}>
        <div className={styles.cards}>
          {cards.map((card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.left}>
                <div className={styles.value}>{card.value}</div>
                <div className={styles.label}>{card.label}</div>
              </div>
              <div className={styles.icon}>
                <img className={styles.icon} src={myraiting} alt="" />
              </div>
            </div>
          ))}
        </div>

        <div className={styles.bottomBox}>
          <p>
           
          </p>
        </div>

        <div className={styles.list}>
          {items.map((item, index) => (
            <div key={index} className={styles.item}>
              <div className={styles.title}>
                <img src={answerIcon} alt="" /> {item}
              </div>
              <div className={styles.meta}>
               <div className={styles.text}>
                 <img src={starRaiting} alt="" /> 15
               </div>
                <span className={styles.date}>17 Sentyabr, 2024 12:25</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MyRatings;
