import { createSlice, PayloadAction } from "@reduxjs/toolkit";

// 상태 타입 정의
interface TodoListState {
  [x: string]: any;
  todos: string[];
}

// 로컬스토리지에서 데이터 불러오기 함수
const loadTodosFromLocalStorage = (): string[] => {
  const data = localStorage.getItem("todos");
  return data ? JSON.parse(data) : [];
};

// 로컬스토리지에 데이터 저장하는 함수
const saveTodosToLocalStorage = (todos: string[]) => {
  localStorage.setItem("todos", JSON.stringify(todos));
};

// 슬라이스 생성
const todolistSlice = createSlice({
  name: "todolist",
  initialState: { todos: loadTodosFromLocalStorage() } as TodoListState,
  reducers: {
    addTodo: (state, action: PayloadAction<string>) => {
      state.todos.push(action.payload);
      saveTodosToLocalStorage(state.todos);
    },

    removeTodo: (state, action: PayloadAction<number>) => {
      state.todos = state.todos.filter((_, index) => index !== action.payload);
      saveTodosToLocalStorage(state.todos);
    },
    clearTodos: (state) => {
      state.todos = [];
      localStorage.removeItem("todos"); // ✅ 전체 삭제 시 LocalStorage에서도 삭제
    },
  },
});

// 액션 및 리듀서 내보내기
export const { addTodo, removeTodo, clearTodos } = todolistSlice.actions;
export default todolistSlice.reducer;
