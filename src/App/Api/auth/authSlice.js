// src/features/auth/authSlice.js
import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  checkPhone,
  finalRegister,
  verifySMS as verifySMSAPI,
  loginUser,
} from "./authAPI";

// 1. Отправка номера
export const sendPhoneNumber = createAsyncThunk(
  "auth/sendPhoneNumber",
  async (phone_number, thunkAPI) => {
    const res = await checkPhone(phone_number);
    return res;
  }
);

// 2. Проверка SMS-кода
export const verifySMSSlice = createAsyncThunk(
  "auth/verifySMSSlice",
  async ({ phone_number, smsCode }, thunkAPI) => {
    const res = await verifySMSAPI({ phone_number, smsCode });
    return res;
  }
);

// 3. Создание пароля и получение токена
export const submitPassword = createAsyncThunk(
  "auth/submitPassword",
  async ({ first_name, last_name, password }, thunkAPI) => {
    const state = thunkAPI.getState().auth;
    const phone_number = state.phone_number;

    const res = await finalRegister({
      phone_number,
      first_name,
      last_name,
      password,
    });

    return res;
  }
);

// 4. Логин
export const login = createAsyncThunk(
  "auth/login",
  async ({ phone_number, password }, thunkAPI) => {
    const res = await loginUser({ phone_number, password });
    return res;
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    loading: false,
    error: null,
    phone_number: "",
    isVerified: false,
    user: null,
    finalToken: null,
  },
  reducers: {
    setPhone(state, action) {
      state.phone_number = action.payload;
    },
    clearAuthState(state) {
      state.loading = false;
      state.error = null;
      state.phone_number = "";
      state.isVerified = false;
      state.user = null;
      state.finalToken = null;
      localStorage.removeItem("token");
    },
  },
  extraReducers: (builder) => {
    builder
      // check phone
      .addCase(sendPhoneNumber.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(sendPhoneNumber.fulfilled, (state) => {
        state.loading = false;
      })
      .addCase(sendPhoneNumber.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // verify code
      .addCase(verifySMSSlice.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(verifySMSSlice.fulfilled, (state) => {
        state.loading = false;
        state.isVerified = true;
      })
      .addCase(verifySMSSlice.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // submit password
      .addCase(submitPassword.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(submitPassword.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.user;
        state.finalToken = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(submitPassword.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })

      // login
      .addCase(login.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(login.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload.username || null;
        state.finalToken = action.payload.token;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      });
  },
});

export const { setPhone, clearAuthState } = authSlice.actions;
export default authSlice.reducer;
