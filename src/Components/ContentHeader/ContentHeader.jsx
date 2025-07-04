import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import styles from "./ContentHeader.module.scss";
import { coursesData } from "../../pages/DashboardPages/CoursesTaken/coursesData";
import { quizzes } from "../../pages/DashboardPages/QuizPage/quizData";

const STATIC_TITLES = {
  "/Dashboard": "Bosh sahifa",
  "/Dashboard/coursestaken": "Mening kurslarim",
  "/Dashboard/homework": "Uy vazifalar",
  "/Dashboard/links": "Havolalar",
  "/Dashboard/quiz": "HR Kursi Quizlari",
  "/Dashboard/certificate": "Sertifikatlar",
  "/dashboard/ratings": "Reytinglar",
};

export default function ContentHeader() {
  const { pathname } = useLocation();
  const { id, hwId, quizId } = useParams();
  const crumbs = [];

  // Всегда начинаем с главной


  if (pathname.startsWith("/Dashboard/coursestaken") && id) {
    const course = coursesData.find((c) => String(c.id) === String(id));
    crumbs.push({ path: "/Dashboard/coursestaken", label: STATIC_TITLES["/Dashboard/coursestaken"] });
    if (course) {
      crumbs.push({ path: null, label: course.title });
    }

  } else if (pathname.startsWith("/Dashboard/homework")) {
    crumbs.push({ path: "/Dashboard/homework", label: STATIC_TITLES["/Dashboard/homework"] });
    if (id) {
      const course = coursesData.find((c) => String(c.id) === String(id));
      if (course) {
        crumbs.push({ path: `/Dashboard/homework/${id}`, label: course.title });
        if (hwId) {
          const homework = course.homeworks?.find((h) => h.id === hwId);
          if (homework) {
            crumbs.push({ path: null, label: homework.title });
          }
        }
      }
    }

  } else if (pathname.startsWith("/Dashboard/quiz")) {
    crumbs.push({ path: "/Dashboard/quiz", label: STATIC_TITLES["/Dashboard/quiz"] });
    if (quizId) {
      const quiz = quizzes.find((q) => String(q.id) === String(quizId));
      if (quiz) {
        crumbs.push({ path: null, label: quiz.title });
      }
    } else if (pathname === "/Dashboard/result") {
      crumbs.push({ path: null, label: "Natija" });
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
