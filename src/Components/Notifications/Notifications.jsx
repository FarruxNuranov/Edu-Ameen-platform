import React, { useState } from "react";
import styles from "./Notifications.module.scss";
import { FiSearch } from "react-icons/fi";


const notificationsData = [
  {
    date: "April 25, 2025",
    items: [
      {
        type: "error",
        message: "You have cancelled interaction",
        time: "12:00 PM - 12:30 PM",
      },
      {
        type: "info",
        message: "You have cancelled interaction",
        time: "12:00 PM - 12:30 PM",
      },
      {
        type: "link",
        message: "You have cancelled interaction",
        time: "12:00 PM - 12:30 PM",
      },
      {
        type: "success",
        message: "You have cancelled interaction",
        time: "12:00 PM - 12:30 PM",
      },
    ],
  },
  {
    date: "April 25, 2025",
    items: [
      {
        type: "error",
        message: "You have cancelled interaction",
        time: "12:00 PM - 12:30 PM",
      },
      {
        type: "error",
        message: "You have cancelled interaction",
        time: "12:00 PM - 12:30 PM",
      },
    ],
  },
];

const Notifications = () => {
  const [activeTab, setActiveTab] = useState("notifications"); // notifications | news



  return (
    <div className={styles.page}>
      <h2 className={styles.title}>Bildirishnomalar</h2>

      <div className={styles.topBar}>
        <div className={styles.tabs}>
          <button
            className={`${styles.tab} ${
              activeTab === "notifications" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("notifications")}
          >
            Bildirishnomalar
          </button>
          <button
            className={`${styles.tab} ${
              activeTab === "news" ? styles.active : ""
            }`}
            onClick={() => setActiveTab("news")}
          >
            Yangiliklar
          </button>
        </div>
         <div className={styles.searchWrapper}>
                 <FiSearch className={styles.searchIcon} />
                 <input
                   type="text"
                   className={styles.search}
                   placeholder="Nomi bilan qidirish"
                 
                 />
               </div>
      </div>

      <div className={styles.list}>
        {notificationsData.map((group, index) => (
          <div key={index}>
            <p className={styles.date}>{group.date}</p>
            {group.items.map((item, i) => (
              <div key={i} className={styles.notification}>
           
                <div className={styles.text}>
                  <span className={styles.message}>{item.message}</span>
                  <span className={styles.course}>
                    {" "}
                    on Cooking Salad: The Best Spring Salad...
                  </span>
                  <div className={styles.time}>{item.time}</div>
                </div>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Notifications;
