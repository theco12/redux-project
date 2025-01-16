import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../features/counterSlice";
import authReducer from "../features/authSlice";

// Redux 스토어 설정
export const store = configureStore({
  reducer: {
    counter: counterReducer,
    auth: authReducer,
  },
});

// RootState와 AppDispatch 타입 정의
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
