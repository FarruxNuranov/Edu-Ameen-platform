import React from "react";
import styles from "./LinksSection.module.scss";
import { FaExternalLinkAlt } from "react-icons/fa";

const linksData = [
  {
    title: "Kurslar uchun ochiq havolalar",
    items: [
      {
        title: "HR Management telegram kanali",
        description: "HR sohasi bo‘yicha ustozlar ko‘rsatmalarini kuzatishingiz mumkin",
        icon: "/icons/telegram.png",
        link: "https://t.me/hr_channel",
      },
      {
        title: "Islom Moliya telegram kanali",
        description: "Islom moliyasi sohasi bo‘yicha ustozlardan o‘rganing",
        icon: "/icons/telegram.png",
        link: "https://t.me/islom_moliya",
      },
    ],
  },
  {
    title: "Ameen.uz to‘g‘risida ochiq va ommabop havolalar",
    items: [
      {
        title: "Ameen.uz instagram kanali",
        description: "Instagram’da bizni kuzatib boring",
        icon: "/icons/instagram.png",
        link: "https://instagram.com/ameen_uz",
      },
      {
        title: "Ameen.uz linkedin sahifasi",
        description: "Bizning yangiliklarimiz endi LinkedIn’da ham",
        icon: "/icons/linkedin.png",
        link: "https://linkedin.com/company/ameen",
      },
    ],
  },
];

const LinksSection = () => {
  return (
    <div className={styles.container}>
      {linksData.map((section, index) => (
        <div key={index} className={styles.section}>
          <h3 className={styles.sectionTitle}>{section.title}</h3>
          <div className={styles.grid}>
            {section.items.map((item, idx) => (
              <a href={item.link} target="_blank" rel="noopener noreferrer" key={idx} className={styles.card}>
                <img src={item.icon} alt={item.title} className={styles.icon} />
                <div className={styles.info}>
                  <div className={styles.cardTitle}>
                    {item.title} <FaExternalLinkAlt size={12} />
                  </div>
                  <p className={styles.desc}>{item.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default LinksSection;
