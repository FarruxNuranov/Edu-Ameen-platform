import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import styles from './CreatePasswordPage.module.scss';
import { FiEye, FiEyeOff } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { submitPassword } from '../../../App/Api/auth/authSlice';

const CreatePasswordPage = () => {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const phone = useSelector((state) => state.auth.phone_number);

  const onSubmit = async (data) => {
    try {
      const payload = {
        phone_number: phone,
        first_name: data.firstName,
        last_name: data.lastName,
        password: data.password,
      };

      console.log("Payload:", payload);
      await dispatch(submitPassword(payload)).unwrap();
      navigate('/dashboard'); // или куда нужно
    } catch (error) {
      console.error("Xatolik:", error);
      alert("Ro‘yxatdan o‘tishda xatolik yuz berdi");
    }
  };

  return (
    <div className={styles.create}>
      <h2 className={styles.title}>Ma’lumotlarni to‘ldiring</h2>
      <p className={styles.desc}>
        Akkountni yakunlash uchun ism, familiya va parol kiriting
      </p>

      <form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
        <label>Ismingiz</label>
        <input
          type="text"
          placeholder="Ali"
          {...register('firstName', { required: 'Ism majburiy' })}
        />
        {errors.firstName && <p className={styles.error}>{errors.firstName.message}</p>}

        <label>Familiyangiz</label>
        <input
          type="text"
          placeholder="Valiyev"
          {...register('lastName', { required: 'Familiya majburiy' })}
        />
        {errors.lastName && <p className={styles.error}>{errors.lastName.message}</p>}

        <label>Parol</label>
        <div className={styles.passwordField}>
          <input
            type={showPassword ? 'text' : 'password'}
            placeholder="********"
            {...register('password', {
              required: 'Parol kerak',
              minLength: { value: 6, message: 'Kamida 6ta belgi' },
            })}
          />
          <span onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>
        {errors.password && <p className={styles.error}>{errors.password.message}</p>}

        <label>Qayta parol</label>
        <div className={styles.passwordField}>
          <input
            type={showConfirm ? 'text' : 'password'}
            placeholder="********"
            {...register('confirm', {
              required: 'Parolni takrorlang',
              validate: (val) => val === watch('password') || 'Parollar mos emas',
            })}
          />
          <span onClick={() => setShowConfirm(!showConfirm)}>
            {showConfirm ? <FiEyeOff /> : <FiEye />}
          </span>
        </div>
        {errors.confirm && <p className={styles.error}>{errors.confirm.message}</p>}

        <button type="submit" className={styles.submitBtn}>Saqlash</button>
      </form>
    </div>
  );
};

export default CreatePasswordPage;
