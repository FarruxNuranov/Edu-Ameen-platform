// src/components/ContentHeader/ContentHeader.jsx
import React from "react";
import { useLocation, Link, useParams } from "react-router-dom";
import styles from "./ContentHeader.module.scss";
import { Daramod } from "../../utils/getimage";
import { coursesData } from "../../utils/coursesData";

const STATIC_TITLES = {
  "/": "Bosh sahifa",
  "/coursestaken": "Qabul qilingan kurslar",
  // …другие статичные пути
};

export default function ContentHeader({
  revenue = "12 500",
  revenueLink = "/revenue-history",
  revenueLinkText = "Daromad tarixi",
}) {
  const { pathname } = useLocation();
  const { id } = useParams();

  let title = "";

  if (id && pathname.startsWith("/courses/")) {
    const course = coursesData.find((c) => c.id === id);
    const parent = STATIC_TITLES["/coursestaken"] || "";
    title = course ? `${parent}/${course.title}` : parent;
  } else {
    title = STATIC_TITLES[pathname] || "";
  }

  return (
    <div className={styles.header}>
      <h1 className={styles.title}>{title}</h1>

      <div className={styles.actions}>
        <div className={styles.stat}>
          <img className={styles.icon} src={Daramod} alt="revenue icon" />
          <span className={styles.value}>{revenue}</span>
        </div>
        <Link to={revenueLink} className={styles.link}>
          {revenueLinkText}
        </Link>
      </div>
    </div>
  );
}
