import React from 'react';
import { useForm } from 'react-hook-form';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import styles from './RegisterPage.module.scss';
import { sendPhoneNumber, setPhone } from '../../../App/Api/auth/authSlice';

const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const onSubmit = async (data) => {
    const fullPhone = `${data.code}${data.phone}`;

    try {
      await dispatch(sendPhoneNumber(fullPhone)).unwrap();
      dispatch(setPhone(fullPhone)); // сохраним номер в state

      navigate('/verify');
    } catch (error) {
      alert('Xatolik: Telefon yuborilmadi');
      console.error(error);
    }
  };

  return (
    <div className={styles.register}>
      <h2 className={styles.title}>Ro‘yxatdan o‘tish</h2>
      <p className={styles.desc}>
        Telefon raqamingizga bir martalik tasdiqlash kodini yuboramiz. Iltimos, uning to‘g‘riligiga ishonch hosil qiling
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label>Telefon raqam</label>
        <div className={styles.phoneGroup}>
          <select {...register('code')} defaultValue="+998">
            <option value="+998">+998</option>
          </select>
          <input
            type="text"
            placeholder="__ ___ __ __"
            {...register('phone', {
              required: 'Raqam kerak',
              pattern: {
                value: /^\d{9}$/,
                message: '9 ta raqam kiriting',
              },
            })}
          />
        </div>
        {errors.phone && <p className={styles.error}>{errors.phone.message}</p>}

        <button type="submit" className={styles.submitBtn}>Ro‘yxatdan o‘tish</button>

        <p className={styles.bottom}>
          Avvaldan akkauntingiz bormi? <Link to="/login">Kirish</Link>
        </p>
      </form>
    </div>
  );
};

export default RegisterPage;
