// src/pages/AuthPages/ForgotPasswordPage/ForgotPasswordPage.jsx
import React from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './ForgotPasswordPage.module.scss';
import { setPhone } from '../../../App/Api/auth/authSlice';

const ForgotPasswordPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = (data) => {
    const fullPhone = `${data.code}${data.phone}`;
    dispatch(setPhone(fullPhone));
    // тут можно ещё отправить код повторно, если хочешь
    navigate('/verify-reset'); // 👉 новый роут
  };

  return (
    <div className={styles.forgot}>
      <h2 className={styles.title}>Parolni unutdingizmi</h2>
      <p className={styles.desc}>
        Iltimos, ro‘yxatdan o‘tgan telefon raqamingizni kiriting.
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label>Telefon raqam</label>
        <div className={styles.phoneGroup}>
          <select {...register('code')}>
            <option value="+998">+998</option>
          </select>
          <input
            type="text"
            {...register('phone', {
              required: 'Telefon raqam kerak',
              pattern: {
                value: /^\d{9}$/,
                message: '9 ta raqam kiriting',
              },
            })}
            placeholder="__ ___ __ __"
          />
        </div>
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}

        <button type="submit" className={styles.submitBtn}>Parolni tiklash</button>

        <p className={styles.bottom}>
          Akkountingiz yo‘qmi? <Link to="/register">Ro‘yxatdan o‘tish</Link>
        </p>
      </form>
    </div>
  );
};

export default ForgotPasswordPage;
