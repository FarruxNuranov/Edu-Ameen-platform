import React, { useState, useRef, useEffect } from "react";
import styles from "./VerifyForgotPage.module.scss";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { verifySMSSlice } from "../../../App/Api/auth/authSlice";

const CODE_LENGTH = 4;

const VerifyForgotPage = () => {
  const [code, setCode] = useState(new Array(CODE_LENGTH).fill(""));
  const [timer, setTimer] = useState(120);
  const inputs = useRef([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const phone = useSelector((state) => state.auth.phone_number);

  const handleChange = (value, index) => {
    if (/^\d?$/.test(value)) {
      const newCode = [...code];
      newCode[index] = value;
      setCode(newCode);
      if (value && index < CODE_LENGTH - 1) {
        inputs.current[index + 1]?.focus();
      }
    }
  };

  const handleKeyDown = (e, index) => {
    if (e.key === "Backspace" && !code[index] && index > 0) {
      inputs.current[index - 1]?.focus();
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const fullCode = code.join("");

    if (fullCode.length < CODE_LENGTH) {
      alert(`${CODE_LENGTH} xonali kodni kiriting`);
      return;
    }

    try {
      await dispatch(
        verifySMSSlice({ phone_number: phone, smsCode: fullCode })
      ).unwrap();
      navigate("/reset-password");
    } catch (err) {
      alert("Kod noto‘g‘ri yoki muddati tugagan");
      console.error(err);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const minutes = String(Math.floor(timer / 60)).padStart(2, "0");
  const seconds = String(timer % 60).padStart(2, "0");

  return (
    <div className={styles.verify}>
      <h2 className={styles.title}>Tasdiqlash</h2>
      <p className={styles.desc}>
        {phone
          ? `Kod ${phone} raqamiga yuborildi.`
          : "Telefon raqamingizga yuborilgan tasdiqlash kodini kiriting."}
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

        {timer > 0 ? (
          <p className={styles.timer}>
            Kodni qayta yuborish mumkin{" "}
            <span>
              {minutes}:{seconds}
            </span>{" "}
            dan keyin
          </p>
        ) : (
          <button
            type="button"
            className={styles.resendBtn}
            onClick={() => {
              console.log("Kod qayta yuborildi (имитация)");
              setTimer(120);
              // Тут можно: dispatch(sendPhoneNumber(phone));
            }}
          >
            Kodni qayta yuborish
          </button>
        )}

        <button type="submit" className={styles.submitBtn}>
          Tasdiqlash
        </button>
      </form>
    </div>
  );
};

export default VerifyForgotPage;
