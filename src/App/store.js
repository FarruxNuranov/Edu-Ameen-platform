import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './rootReducer';


export const store = configureStore({
  reducer: rootReducer,
  devTools: import.meta.env.MODE !== 'production', // или process.env.NODE_ENV
});