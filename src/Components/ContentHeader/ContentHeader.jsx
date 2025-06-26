import React from "react";
import { useLocation, useParams, Link } from "react-router-dom";
import styles from "./ContentHeader.module.scss";
import { coursesData } from "../../pages/DashboardPages/CoursesTaken/coursesData";
import { quizzes } from "../../pages/DashboardPages/QuizPage/quizData"; // 👈 обязательно импортируй свои данные

const STATIC_TITLES = {
  "/": "Bosh sahifa",
  "/coursestaken": "Mening kurslarim",
  "/homework": "Uy vazifalar",
  "/links": "Havolalar",
  "/quiz": "HR Kursi Quizlari",
};

export default function ContentHeader() {
  const { pathname } = useLocation();
  const { id, hwId, quizId } = useParams();
  const crumbs = [];

  // Always start with home
  crumbs.push({ path: "/", label: STATIC_TITLES["/"] });

  if (pathname.startsWith("/coursestaken") && id) {
    const course = coursesData.find((c) => String(c.id) === String(id));
    crumbs.push({ path: "/coursestaken", label: STATIC_TITLES["/coursestaken"] });
    if (course) {
      crumbs.push({ path: null, label: course.title });
    }

  } else if (pathname.startsWith("/homework")) {
    crumbs.push({ path: "/homework", label: STATIC_TITLES["/homework"] });
    if (id) {
      const course = coursesData.find((c) => String(c.id) === String(id));
      if (course) {
        crumbs.push({ path: `/homework/${id}`, label: course.title });
        if (hwId) {
          const homework = course.homeworks?.find((h) => h.id === hwId);
          if (homework) {
            crumbs.push({ path: null, label: homework.title });
          }
        }
      }
    }

  } else if (pathname.startsWith("/quiz")) {
    crumbs.push({ path: "/quiz", label: STATIC_TITLES["/quiz"] });

    if (quizId) {
      const quiz = quizzes.find((q) => String(q.id) === String(quizId));
      if (quiz) {
        crumbs.push({ path: null, label: quiz.title });
      }
    } else if (pathname === "/result") {
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
