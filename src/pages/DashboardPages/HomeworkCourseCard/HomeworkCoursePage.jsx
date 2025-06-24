import React, { useState } from "react";
import { useParams, Link, useNavigate } from "react-router-dom";
import { coursesData } from "../CoursesTaken/coursesData";
import styles from "./HomeworkCoursePage.module.scss";

import {
  CardBg,
  CardTest,
  homeworkicon,
  modalInfo,
} from "../../../utils/getimage";
import { FaCheckCircle, FaTimesCircle, FaClock } from "react-icons/fa";
import { IoIosArrowForward, IoMdClose } from "react-icons/io";
import { courseTestsData } from "./courseTestsData";

const HomeworkCoursePage = () => {
  const { id } = useParams();
  const course = coursesData.find((item) => item.id.toString() === id);

  const [activeTab, setActiveTab] = useState("homework"); // homework | tests
  const [statusFilter, setStatusFilter] = useState(""); // Tekshirilgan и т.п.
  const [searchTerm, setSearchTerm] = useState("");

  const [selectedTest, setSelectedTest] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  if (!course) return <div>Kurs topilmadi</div>;

  const filteredHomeworks = course.homeworks
    ?.filter((hw) => hw.title.toLowerCase().includes(searchTerm.toLowerCase()))
    .filter((hw) => (statusFilter ? hw.status === statusFilter : true));

  const handleTestClick = (test) => {
    setSelectedTest(test);
    setShowModal(true);
  };

//   const handleCancelModal = () => {
//   setSelectedTest(null);
//   setShowModal(false);
// };

  return (
    <section className={styles.section}>
      <h2 className={styles.heading}>{course.title} vazifalari</h2>

      {/* Tabs, Filter, Search */}
      <div className={styles.topControls}>
        <div className={styles.TopleftBox}>
          <div className={styles.tabs}>
            <button
              className={`${styles.tab} ${
                activeTab === "homework" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("homework")}
            >
              Vazifalar
            </button>
            <button
              className={`${styles.tab} ${
                activeTab === "tests" ? styles.active : ""
              }`}
              onClick={() => setActiveTab("tests")}
            >
              Testlar
            </button>
          </div>
          <select
            className={styles.filter}
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
          >
            <option value="">Filter by status</option>
            <option value="Tekshirilgan">Tekshirilgan</option>
            <option value="Topshirilmoqda">Topshirilmoqda</option>
            <option value="Topshirilmagan">Topshirilmagan</option>
          </select>
        </div>

        <input
          type="text"
          className={styles.search}
          placeholder="Vazifalar nomi bo‘yicha qidirish"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Only show when tab is 'homework' */}
      {activeTab === "homework" && (
        <div className={styles.grid}>
          {filteredHomeworks.map((hw) => (
            <Link
              key={hw.id}
              to={`/homework/${course.id}/${hw.id}`}
              className={styles.card}
            >
              <img src={CardBg} alt="" className={styles.bgIcon} />
              <div className={styles.left}>
                <div className={styles.nameTitle}>
                  <img className={styles.icon} src={homeworkicon} alt="" />
                  <div className={styles.title}>{hw.title}</div>
                </div>
                <div
                  className={`${styles.status} ${
                    hw.status === "Tekshirilgan"
                      ? styles.checked
                      : hw.status === "Topshirilmoqda"
                      ? styles.inProgress
                      : styles.unchecked
                  }`}
                >
                  {hw.status === "Tekshirilgan" && (
                    <FaCheckCircle className={styles.icon} />
                  )}
                  {hw.status === "Topshirilmoqda" && (
                    <FaClock className={styles.icon} />
                  )}
                  {hw.status === "Topshirilmagan" && (
                    <FaTimesCircle className={styles.icon} />
                  )}
                  {hw.status}
                </div>
              </div>
              <div className={styles.right}>
                <span className={styles.arrow}>
                  <IoIosArrowForward />
                </span>
              </div>
            </Link>
          ))}
        </div>
      )}

      {activeTab === "tests" && (
        <div className={styles.grid}>
          {courseTestsData
            .find((t) => t.courseId.toString() === id)
            ?.tests?.filter((test) =>
              test.title.toLowerCase().includes(searchTerm.toLowerCase())
            )
            .filter((test) =>
              statusFilter ? test.status === statusFilter : true
            )
            .map((test) => (
              <div
                key={test.id}
                className={styles.card}
                onClick={() => handleTestClick(test)}
              >
                <img src={CardTest} alt="" className={styles.bgIcon} />
                <div className={styles.left}>
                  <div className={styles.nameTitle}>
                    <img className={styles.icon} src={homeworkicon} alt="" />
                    <div className={styles.title}>{test.title}</div>
                  </div>
                  <div
                    className={`${styles.status} ${
                      test.status === "Tekshirilgan"
                        ? styles.checked
                        : test.status === "Topshirilmoqda"
                        ? styles.inProgress
                        : styles.unchecked
                    }`}
                  >
                    {test.status === "Tekshirilgan" && (
                      <FaCheckCircle className={styles.icon} />
                    )}
                    {test.status === "Topshirilmoqda" && (
                      <FaClock className={styles.icon} />
                    )}
                    {test.status === "Topshirilmagan" && (
                      <FaTimesCircle className={styles.icon} />
                    )}
                    {test.status}
                  </div>
                </div>
                <div className={styles.right}>
                  <span className={styles.arrow}>
                    <IoIosArrowForward />
                  </span>
                </div>
              </div>
            ))}
        </div>
      )}

      {showModal && selectedTest && (
        <div className={styles.modalOverlay}>
          <div className={styles.modal}>
          
            <div className={styles.modalBox}>
              <div className={styles.modalIcon}>
                <img src={modalInfo} alt="" />
              </div>
              <h3 className={styles.modalTitle}>Ogohlantirish</h3>
              <p className={styles.modalText}>
                Diqqat! Test bajarish jarayonida qurilmangiz orqali boshqa
                ilovalarga o‘tish mumkin emas.
              </p>
              <div className={styles.modalActions}>
                <button
                  onClick={() => setShowModal(false)}
                  className={styles.cancel}
                >
                  Bekor qilish
                </button>
                <button
                  onClick={() => navigate(`/test/${id}/${selectedTest.id}`)}
                  className={styles.confirm}
                >
                  Boshlash
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomeworkCoursePage;
