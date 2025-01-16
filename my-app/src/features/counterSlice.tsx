import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 상태 타입 정의
interface CounterState {
  value: number;
}

// 초기 상태 정의
const initialState: CounterState = {
  value: 0,
};

// 슬라이스 생성
const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
    incrementByAmount: (state, action: PayloadAction<number>) => {
      state.value += action.payload;
    },
  },
});

// 액션 및 리듀서 내보내기
export const { increment, decrement, incrementByAmount } = counterSlice.actions;
export default counterSlice.reducer;
