// src/pages/auth/VerifyPage.jsx
import React, { useState, useRef, useEffect } from 'react';
import styles from './VerifyPage.module.scss';
import { useNavigate } from 'react-router-dom';

const VerifyPage = () => {
  const [code, setCode] = useState(['', '', '', '', '', '']);
  const [timer, setTimer] = useState(120); // 2 минуты
  const inputs = useRef([]);

  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < 5) {
        inputs.current[index + 1].focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === 'Backspace' && !code[index] && index > 0) {
      inputs.current[index - 1].focus();
    }
  };

  const navigate =useNavigate()

  const handleSubmit = (e) => {
    e.preventDefault();
   navigate('/login')
    // const fullCode = code.join('');
    // console.log('Submitted code:', fullCode);
    // отправка на backend
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = String(Math.floor(timer / 60)).padStart(2, '0');
  const seconds = String(timer % 60).padStart(2, '0');

  return (
    <div className={styles.verify}>
      <h2 className={styles.title}>Tasdiqlash</h2>
      <p className={styles.desc}>
        Telefon raqamingizga yuborilgan yagona tasdiqlash kodini kiriting.
        Ushbu kod sizning hisobingiz xavfsizligi va haqiqiyligini ta’minlaydi.
      </p>

      <form onSubmit={handleSubmit} className={styles.codeForm}>
        <div className={styles.codeInputs}>
          {code.map((val, index) => (
            <input
              key={index}
              type="text"
              maxLength={1}
              value={val}
              onChange={(e) => handleChange(e.target.value, index)}
              onKeyDown={(e) => handleKeyDown(e, index)}
              ref={(el) => (inputs.current[index] = el)}
            />
          ))}
        </div>
        <p className={styles.timer}>
          Kodni qayta yuboring <span>{minutes}:{seconds}</span>
        </p>
        <button type="submit" className={styles.submitBtn}>Tasdiqlash</button>
      </form>
    </div>
  );
};

export default VerifyPage;
