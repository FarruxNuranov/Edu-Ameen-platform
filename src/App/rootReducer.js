// src/app/rootReducer.js
import { combineReducers } from '@reduxjs/toolkit';
import authReducer from '../App/Api/auth/authSlice';


const rootReducer = combineReducers({
  auth: authReducer,
  // courses: courseReducer,
  // teachers: teacherReducer,
});

export default rootReducer;
