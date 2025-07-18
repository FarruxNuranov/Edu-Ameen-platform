import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import styles from './LoginPage.module.scss';
import { login } from '../../../App/Api/auth/authSlice';

const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const onSubmit = async (data) => {
    try {
      const fullPhone = data.code + data.phone; // например: +998901234567
      await dispatch(login({ phone_number: fullPhone, password: data.password })).unwrap();
      navigate('/dashboard');
    } catch (err) {
      alert('Kirishda xatolik: ' + err);
    }
  };

  return (
    <div className={styles.login}>
      <h2 className={styles.title}>Kirish</h2>
      <p className={styles.desc}>
        Telefon raqamingiz va parolingizni kiriting
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
              required: 'Raqam kerak',
              pattern: {
                value: /^\d{9}$/,
                message: 'Raqam 9 ta sondan iborat bo‘lishi kerak',
              },
            })}
            placeholder="__ ___ __ __"
          />
        </div>
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}

        <label>Parol</label>
        <div className={styles.passwordField}>
          <input
            type={showPassword ? 'text' : 'password'}
            {...register('password', { required: 'Parol kerak' })}
            placeholder="********"
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>
        {errors.password && <p className={styles.error}>{errors.password.message}</p>}

        {error && <p className={styles.error}>{error}</p>}

        <div className={styles.forgot}>
          <Link to="/forgot-password">Parolni unutdingizmi?</Link>
        </div>

        <button type="submit" className={styles.submitBtn} disabled={loading}>
          {loading ? "Yuklanmoqda..." : "Kirish"}
        </button>

        <p className={styles.bottom}>
          Akkountingiz yo‘qmi? <Link to="/register">Ro‘yxatdan o‘tish</Link>
        </p>
      </form>
    </div>
  );
};

export default LoginPage;
