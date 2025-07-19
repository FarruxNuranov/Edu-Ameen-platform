// src/features/auth/authAPI.js

const API_BASE = import.meta.env.VITE_API_URL;

// 1. Проверка номера телефона — отправить SMS
export const checkPhone = async (phone) => {
  console.log("req:", phone);

  const response = await fetch(`${API_BASE}/auth/check-phone`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phone_number: phone }),
  });

  if (!response.ok) {
    throw new Error("Xatolik: SMS yuborilmadi");
  }

  return await response.json();
};

// 2. Верификация SMS-кода
export const verifySMS = async ({ phone_number, smsCode }) => {
  const response = await fetch(`${API_BASE}/auth/verify-sms`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone_number,
      sms_code: smsCode,
    }),
  });

  if (!response.ok) {
    throw new Error("Xatolik: Kod noto‘g‘ri yoki muddati tugagan");
  }

  return await response.json();
};

// 3. Регистрация пользователя (имя + пароль)
export const finalRegister = async ({
  phone_number,
  first_name,
  last_name,
  password,
}) => {
  const response = await fetch(`${API_BASE}/auth/register`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      phone_number,
      first_name,
      last_name,
      password,
    }),
  });

  if (!response.ok) {
    throw new Error("Xatolik: Ro‘yxatdan o‘tishda muammo");
  }

  return await response.json(); // ожидаем { user, token } или что вернёт сервер
};

// 4. Логин пользователя
export const loginUser = async ({ phone_number, password }) => {
  const response = await fetch(`${API_BASE}/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phone_number, password }),
  });

  if (!response.ok) {
    throw new Error("Xatolik: Kirishda muammo");
  }

  return await response.json(); // ожидаем { token, first_name }
};

export const forgotPasswordRequest = async (phone_number) => {
  const response = await fetch(`${API_BASE}/auth/forgot-password`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ phone_number }),
  });

  if (!response.ok) {
    throw new Error("Xatolik: Kodni yuborishda muammo yuz berdi");
  }

  return await response.json();
};
