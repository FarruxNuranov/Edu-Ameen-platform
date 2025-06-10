import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../LayOut/DashboardLayout/DashboardLayout';
import AuthLayout from '../LayOut/AuthLayout/AuthLayout';

// Импортируем страницы


import LoginPage from '../pages/AuthPages/LoginPage/LoginPage';
import RegisterPage from '../pages/AuthPages/RegisterPage/RegisterPage';
import VerifyPage from '../pages/AuthPages/VerifyPage/VerifyPage';
import ForgotPasswordPage from '../pages/AuthPages/ForgotPasswordPage/ForgotPasswordPage';
import ResetPasswordPage from '../pages/AuthPages/ResetPasswordPage/ResetPasswordPage';
import HomePage from '../pages/DashboardPages/Home/HomePage';
import CoursesTaken from '../pages/CoursesTaken/CoursesTaken';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <DashboardLayout />,
    children: [
      { path: '', element: <HomePage /> },
      { path: '/coursestaken', element: <CoursesTaken /> },
      // Добавь другие страницы дашборда по желанию
    ],
  },
  {
    path: '/auth',
    element: <AuthLayout />,
    children: [
      { path: 'login', element: <LoginPage /> },
      { path: 'register', element: <RegisterPage /> },
      { path: 'verify', element: <VerifyPage /> },
      { path: 'forgot-password', element: <ForgotPasswordPage /> },
      { path: 'reset-password', element: <ResetPasswordPage /> },
    ],
  },
]);
