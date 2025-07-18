import { createBrowserRouter, Navigate } from "react-router-dom";
import DashboardLayout from "../LayOut/DashboardLayout/DashboardLayout";
import AuthLayout from "../LayOut/AuthLayout/AuthLayout";

// Импортируем страницы

import LoginPage from "../pages/AuthPages/LoginPage/LoginPage";
import RegisterPage from "../pages/AuthPages/RegisterPage/RegisterPage";
import VerifyPage from "../pages/AuthPages/VerifyPage/VerifyPage";
import ForgotPasswordPage from "../pages/AuthPages/ForgotPasswordPage/ForgotPasswordPage";
import ResetPasswordPage from "../pages/AuthPages/ResetPasswordPage/ResetPasswordPage";
import HomePage from "../pages/DashboardPages/Home/HomePage";
import CoursesTaken from "../pages/DashboardPages/CoursesTaken/CoursesTaken";

import NotFoundPage from "../Components/NotFoundPage/NotFoundPage";
import SingleCourse from "../pages/DashboardPages/CoursesTaken/SingleCourse/SingleCourse";
import HomeworkCourseCard from "../pages/DashboardPages/HomeworkCourseCard/HomeworkCourseCard";
import HomeworkCoursePage from "../pages/DashboardPages/HomeworkCourseCard/HomeworkCoursePage";
import SingleHomeworkPage from "../pages/DashboardPages/HomeworkCourseCard/SingleHomeworkPage";
import SingleTestPage from "../pages/DashboardPages/HomeworkCourseCard/SingleTestPage";
import Quiz from "../pages/DashboardPages/QuizPage/Quiz";
import SingleQuizTestPage from "../pages/DashboardPages/QuizPage/SingleQuizTestPage";
import ResultPage from "../pages/DashboardPages/QuizPage/ResultPage";
import LinksSection from "../pages/DashboardPages/LinksSection/LinksSection";
import SingleTestResaultPage from "../pages/DashboardPages/HomeworkCourseCard/SingleTestResaultPage";
import CertificateList from "../pages/DashboardPages/CertificateList/CertificateList";
import CertificateTest from "../pages/DashboardPages/CertificateList/CertificateTest";
import CertificateResult from "../pages/DashboardPages/CertificateList/CertificateResult";
import Notifications from "../Components/Notifications/Notifications";
import Profile from "../pages/DashboardPages/Profile/Profile";
import RatingsPage from "../pages/DashboardPages/RatingsPage/RatingsPage";
import CreatePasswordPage from "../pages/AuthPages/CreatePasswordPage/CreatePasswordPage";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
 {
    path: "/dashboard",
    element: <PrivateRoute />, // сначала проверка
    children: [
      {
        path: "",
        element: <DashboardLayout />, // теперь layout внутри
        children: [
          { path: "", element: <HomePage /> },
          { path: "coursestaken", element: <CoursesTaken /> },
          { path: "coursestaken/:id", element: <SingleCourse /> },
          { path: "ratings", element: <RatingsPage /> },
          { path: "homework", element: <HomeworkCourseCard /> },
          { path: "homework/:id", element: <HomeworkCoursePage /> },
          { path: "homework/:id/:hwId", element: <SingleHomeworkPage /> },
          { path: "test/:courseId/:testId", element: <SingleTestPage /> },
          { path: "test/resault", element: <SingleTestResaultPage /> },
          { path: "quiz", element: <Quiz /> },
          { path: "quiz/:quizId", element: <SingleQuizTestPage /> },
          { path: "result", element: <ResultPage /> },
          { path: "certificate", element: <CertificateList /> },
          { path: "certificate/test/:certId", element: <CertificateTest /> },
          { path: "certificate/result/:certId", element: <CertificateResult /> },
          { path: "notifications", element: <Notifications /> },
          { path: "profile", element: <Profile /> },
          { path: "links", element: <LinksSection /> },
          { path: "*", element: <NotFoundPage /> },
        ],
      },
    ],
  },
  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { index: true, element: <Navigate to="/login" replace /> },
      { path: "login", element: <LoginPage /> },
      { path: "register", element: <RegisterPage /> },
      { path: "verify", element: <VerifyPage /> },
      { path: "create-password", element: <CreatePasswordPage /> }, 
      { path: "forgot-password", element: <ForgotPasswordPage /> },
      { path: "reset-password", element: <ResetPasswordPage /> },
    ],
  },
]);
