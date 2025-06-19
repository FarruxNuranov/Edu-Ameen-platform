import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import styles from "./ContentHeader.module.scss";
import { coursesData } from "../../pages/DashboardPages/CoursesTaken/coursesData";

const STATIC_TITLES = {
  "/": "Bosh sahifa",
  "/coursestaken": "Mening kurslarim"
};

export default function ContentHeader() {
  const { pathname } = useLocation();
  const { id } = useParams();

  const crumbs = [];
  crumbs.push({ path: "/", label: STATIC_TITLES["/"] });

  if (pathname.includes("/coursestaken/") && id) {
    const course = coursesData.find((c) => String(c.id) === String(id));
    crumbs.push({ path: "/coursestaken", label: STATIC_TITLES["/coursestaken"] });
    if (course) {
      crumbs.push({ path: null, label: course.title });
    }
  } else if (STATIC_TITLES[pathname]) {
    crumbs.push({ path: null, label: STATIC_TITLES[pathname] });
  }

  return (
    <div className={styles.header}>
      <nav className={styles.breadcrumbs}>
        {crumbs.map((crumb, index) => (
          <span key={index}>
            {crumb.path ? (
              <Link to={crumb.path}>{crumb.label}</Link>
            ) : (
              <span className={styles.current}>{crumb.label}</span>
            )}
            {index < crumbs.length - 1 && (
              <span className={styles.separator}> / </span>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
}
