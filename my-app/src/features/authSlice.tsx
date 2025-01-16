import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 상태 타입 정의
interface AuthState {
  isAuthenticated: boolean;
}

// 초기 상태 정의
const initialState: AuthState = {
  isAuthenticated: false,
};

// 슬라이스 생성
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    toggleAuth: (state) => {
      state.isAuthenticated = !state.isAuthenticated;
    },
    // 특정 값을 강제로 설정하는 리듀서
    setAuthState: (state, action: PayloadAction<boolean>) => {
      state.isAuthenticated = action.payload;
    },
  },
});

// 액션 및 리듀서 내보내기
export const { toggleAuth, setAuthState } = authSlice.actions;
export default authSlice.reducer;
