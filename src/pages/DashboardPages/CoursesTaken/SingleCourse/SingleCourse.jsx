import React, { useState } from "react";
import { useParams } from "react-router-dom";

import styles from "./SingleCourse.module.scss";
import { coursesData } from "../coursesData";
import { FaFilePdf, FaPlayCircle } from "react-icons/fa";
import {
  arrowBottom,
  arrowTop,
  Download,
  locked,
  playlist,
} from "../../../../utils/getimage";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

const SingleCourse = () => {
  const { id } = useParams();
  const course = coursesData.find((c) => c.id === +id);
  const [activeTab, setActiveTab] = useState("description");
  const [comment, setComment] = useState("");
  const [expandedSection, setExpandedSection] = useState(null);
  const [showFullDescription, setShowFullDescription] = useState(false);

  if (!course) return <div>Kurs topilmadi</div>;

  const toggleSection = (index) => {
    setExpandedSection(expandedSection === index ? null : index);
  };

  const getShortDescription = (text) => {
    if (text.length <= 100) return text;
    return showFullDescription ? text : text.slice(0, 100) + "...";
  };

  const visibleSections = course.unlocked
    ? course.sections.map((section) => ({
        ...section,
        locked: false,
        lessons: section.lessons.map((l) => ({ ...l, locked: false })),
      }))
    : course.sections;

  return (
    <div className={styles.wrapper}>
      <h2 className={styles.title}>{course.title}</h2>
      <div className={styles.wrapperBox}>
        <div className={styles.VideoBox}>
          {/* Вкладки */}
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${
                activeTab === "description" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("description")}
            >
              Kurs tavsifi
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "materials" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("materials")}
            >
              Materiallar
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "comments" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("comments")}
            >
              Kommentariya
            </button>
          </div>

          {/* Контент по вкладке */}
          {activeTab === "description" && (
            <>
              <div className={styles.videoWrapper}>
                <img src={course.banner} alt="preview" />
                {/* <button className={styles.playBtn}>▶</button> */}
              </div>
              <p className={styles.date}>Mar 13 2020</p>

              <div className={styles.descriptionBox}>
                <h4 className={styles.subTitle}>Darsning dolzarbligi</h4>
                <div className={styles.descriptionBox}>
                  <h4 className={styles.subTitle}>Darsning dolzarbligi</h4>
                  <p className={styles.description}>
                    {getShortDescription(course.description)}
                  </p>
                  {course.description.length > 100 && (
                    <button
                      onClick={() =>
                        setShowFullDescription(!showFullDescription)
                      }
                      className={styles.readMoreBtn}
                    >
                      {showFullDescription ? "Yopish" : "To‘liq o‘qish"}
                    </button>
                  )}
                </div>
              </div>
              <div className={styles.navButtons}>
                <button>
                  <IoIosArrowBack className={styles.arrow} />
                  Oldingi
                </button>
                <button>
                  Keyingi
                  <IoIosArrowForward className={styles.arrow} />
                </button>
              </div>
            </>
          )}

          {activeTab === "materials" && (
            <div className={styles.materials}>
              {course.materials.map((file, i) => (
                <div key={i} className={styles.materialItem}>
                  <div className={styles.fileInfo}>
                    <file.icon
                      size={24}
                      color={file.icon === FaFilePdf ? "#d32f2f" : "#2e7d32"}
                    />
                    <div>
                      <p>{file.name}</p>
                      <span>{file.size}</span>
                    </div>
                  </div>
                  <a href={file.link} download className={styles.download}>
                    <img src={Download} alt="" />
                    Download
                  </a>
                </div>
              ))}
            </div>
          )}

          {activeTab === "comments" && (
            <div className={styles.comments}>
              <div className={styles.commentInput}>
                <h3>Oybek Mirhamidov</h3>
                <div className={styles.inputBox}>
                  <div className={styles.avatar}>OM</div>
                  <input
                    type="text"
                    placeholder="Izoh"
                    value={comment}
                    onChange={(e) => setComment(e.target.value)}
                  />
                  <button>Yuborish</button>
                </div>
              </div>

              <div className={styles.commentList}>
                {course.comments.map((cmt, i) => (
                  <div key={i} className={styles.commentItem}>
                    <img src={cmt.avatar} alt={cmt.name} />

                    <div className={styles.ItemText}>
                      <div className={styles.commentTop}>
                        <strong>{cmt.name}</strong>
                        <span>{cmt.date}</span>
                      </div>
                      <p>{cmt.text}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>

        <div className={styles.curriculumBox}>
          <div className={styles.curriculumList}>
            <h3 className={styles.curriculumTitle}>O‘quv dasturi</h3>
            {visibleSections.map((section, idx) => (
              <div key={idx} className={styles.section}>
                <div
                  className={styles.sectionHeader}
                  onClick={() => {
                    if (!section.locked) toggleSection(idx);
                  }}
                >
                  <span className={styles.ItemTitle}>{section.title}</span>

                  <div className={styles.sectionIcons}>
                    {section.locked && (
                      <img
                        src={locked}
                        alt="locked"
                        className={styles.lockIcon}
                      />
                    )}
                    <img
                      src={expandedSection === idx ? arrowTop : arrowBottom}
                      alt="arrow"
                      className={styles.arrowIcon}
                    />
                  </div>
                </div>
                {!section.locked && expandedSection === idx && (
                  <div className={styles.lessonList}>
                    {section.lessons.map((lesson, i) => (
                      <div key={i} className={styles.lessonItem}>
                        <span className={styles.lessonIcon}>
                          <img src={playlist} alt="" />
                        </span>
                        <p className={styles.ItemSeriasTitle}>{lesson.title}</p>
                        <span className={styles.lessonStatus}>
                          {lesson.completed ? "✔" : lesson.locked ? "🔒" : ""}
                        </span>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>

          <button className={styles.taskButton}>Uy vazifalarga o‘tish →</button>
        </div>
      </div>
    </div>
  );
};

export default SingleCourse;
