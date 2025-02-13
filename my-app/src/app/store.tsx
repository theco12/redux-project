import { configureStore } from "@reduxjs/toolkit";
import scoreBoardReducer from "../features/scoreboardSlice";
import authReducer from "../features/authSlice";
import darkModeReducer from "../features/darkModeSlice";
import todolistReducer from "../features/todolistSlice";

// Redux 스토어 설정
export const store = configureStore({
  reducer: {
    scoreboardSlice: scoreBoardReducer,
    auth: authReducer,
    darkMode: darkModeReducer,
    todolist: todolistReducer,
  },
});

// RootState와 AppDispatch 타입 정의
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
