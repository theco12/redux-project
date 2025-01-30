import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 슬라이스 생성
const darkModeSlice = createSlice({
  name: "darkMode",
  initialState: { theme: "light" },
  reducers: {
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
    },
  },
});

// 액션 및 리듀서 내보내기
export const { toggleTheme } = darkModeSlice.actions;
export default darkModeSlice.reducer;
