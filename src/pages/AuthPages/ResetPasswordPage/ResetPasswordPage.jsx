// src/pages/auth/ResetPasswordPage.jsx
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './ResetPasswordPage.module.scss';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const ResetPasswordPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const onSubmit = (data) => {
    console.log('Reset password:', data);
    // отправка нового пароля на backend
  };

  return (
    <div className={styles.reset}>
      <h2 className={styles.title}>Yangi parol</h2>
      <p className={styles.desc}>
        Iltimos, yangi parol kiriting va uni tasdiqlang
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label>Yangi parol</label>
        <div className={styles.passwordField}>
          <input
            type={showPassword ? 'text' : 'password'}
            {...register('password', {
              required: 'Parol kerak',
              minLength: { value: 6, message: 'Kamida 6 ta belgi' },
            })}
            placeholder="********"
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>
        {errors.password && <p className={styles.error}>{errors.password.message}</p>}

        <label>Parolni tasdiqlash</label>
        <div className={styles.passwordField}>
          <input
            type={showConfirm ? 'text' : 'password'}
            {...register('confirm', {
              validate: (val) => val === watch('password') || 'Parollar mos emas',
            })}
            placeholder="********"
          />
          <span onClick={() => setShowConfirm(!showConfirm)}>
            {showConfirm ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>
        {errors.confirm && <p className={styles.error}>{errors.confirm.message}</p>}

        <button type="submit" className={styles.submitBtn}>
          Saqlash
        </button>

        <p className={styles.bottom}>
          <Link to="/login">Ortga qaytish</Link>
        </p>
      </form>
    </div>
  );
};

export default ResetPasswordPage;
