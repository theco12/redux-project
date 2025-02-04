import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ScoreboardState {
  homeScore: number;
  awayScore: number;
  time: number; // 초 단위로 저장
  isRunning: boolean;
}

const initialState: ScoreboardState = {
  homeScore: 0,
  awayScore: 0,
  time: 600, // 기본 10분 (600초)
  isRunning: false,
};

const scoreboardSlice = createSlice({
  name: "scoreboard",
  initialState,
  reducers: {
    addHomePoints: (state, action: PayloadAction<number>) => {
      state.homeScore += action.payload;
    },
    addAwayPoints: (state, action: PayloadAction<number>) => {
      state.awayScore += action.payload;
    },
    resetHomeScore: (state) => {
      state.homeScore = 0;
    },
    resetAwayScore: (state) => {
      state.awayScore = 0;
    },
    startTimer: (state) => {
      state.isRunning = true;
    },
    stopTimer: (state) => {
      state.isRunning = false;
    },
    resetTimer: (state, action: PayloadAction<number>) => {
      state.time = action.payload; // 사용자 설정 시간으로 리셋
      state.isRunning = false;
    },
    decrementTime: (state) => {
      if (state.isRunning && state.time > 0) {
        state.time -= 1;
      }
    },
  },
});

export const {
  addHomePoints,
  addAwayPoints,
  resetHomeScore,
  resetAwayScore,
  startTimer,
  stopTimer,
  resetTimer,
  decrementTime,
} = scoreboardSlice.actions;

export default scoreboardSlice.reducer;
