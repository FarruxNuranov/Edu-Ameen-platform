import React from "react";
import styles from "./LinksSection.module.scss";
import { FaExternalLinkAlt } from "react-icons/fa";
import { AmeenLink, AmeenXLink, HrLinkIcon, InstagramLink, islomlinkIcon, linkIcon } from "../../../utils/getimage";

const LinksSection = () => {
  const kursLinks = [
    {
      title: "HR Management telegram kanali",
      description: "Ushbu telegram kanali orqali HR sohasini birinchi raqamli ustozlar ko’rsatmalarini kuzatib borishingiz mumkin",
      icon: linkIcon,
      url: "https://t.me/hr_channel",
    },
      {
      title: "HR Management telegram kanali",
      description: "Ushbu telegram kanali orqali HR sohasini birinchi raqamli ustozlar ko’rsatmalarini kuzatib borishingiz mumkin",
      icon: HrLinkIcon,
      url: "https://t.me/hr_channel2",
    },
    {
      title: "Islom Moliya telegram kanali",
      description: "Ushbu telegram kanali orqali Islom Moliyasi  sohasi va pul ilmini birinchi raqamli ustozlar ko’rsatmalarini kuzatib borishingiz mumkin",
      icon: linkIcon,
      url: "https://t.me/islom_moliya",
    },
  
    {
      title: "Islom Moliya va fikrlar telegram kanali",
      description: "Ushbu telegram kanali orqali Islom Moliyasi  sohasi va pul ilmini birinchi raqamli ustozlar ko’rsatmalarini kuzatib borishingiz mumkin",
      icon: islomlinkIcon,
      url: "https://t.me/islom_fikr",
    },
  ];

  const ameenLinks = [
    {
      title: "Ameen.uz ommabop telegram kanali",
      description: "Yangi kurslar va yangiliklarni kuzatib boring",
      icon: linkIcon,
      url: "https://t.me/ameen_channel",
    },
    {
      title: "Ameen.uz linkedin sahifasi",
      description: "LinkedIn’da yangiliklar bilan tanishing",
      icon: AmeenLink,
      url: "https://linkedin.com/ameen",
    },
    {
      title: "Ameen.uz instagram kanali",
      description: "Instagramda ham biz bor!",
      icon: InstagramLink,
      url: "https://instagram.com/ameen",
    },
    {
      title: "Ameen.uz twitlari",
      description: "X (Twitter) orqali yangiliklar",
      icon: AmeenXLink,
      url: "https://x.com/ameen",
    },
  ];

  const renderBox = (title, links) => (
    <div className={styles.box}>
      <h3 className={styles.title}>{title}</h3>
      <div className={styles.grid}>
        {links.map((link, index) => (
          <a
            href={link.url}
            target="_blank"
            rel="noopener noreferrer"
            key={index}
            className={styles.card}
          >
            <img src={link.icon} alt={link.title} className={styles.icon} />
            <div>
              <div className={styles.cardTitle}>
                {link.title} <FaExternalLinkAlt className={styles.TitleLink} size={12} />
              </div>
              <p className={styles.desc}>{link.description}</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  );

  return (
    <div className={styles.container}>
      {renderBox("Kurslar uchun ochiq havolalar", kursLinks)}
      {renderBox("Ameen.uz to‘g‘risida ochiq va ommabop havolalar", ameenLinks)}
    </div>
  );
};

export default LinksSection;
