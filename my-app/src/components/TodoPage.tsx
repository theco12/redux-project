import React from "react";
import styled from "styled-components";
import { useState } from "react";
import { addTodo, removeTodo, clearTodos } from "../features/todolistSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

export default function TodoPage() {
  const dispatch = useAppDispatch();
  const todos = useAppSelector((state) => state.todolist.todos);

  const [text, setText] = useState<string>("");
  const [checkedItems, setCheckedItems] = useState<boolean[]>(new Array(todos.length).fill(false));

  const handleAddTodo = () => {
    if (text.trim()) {
      dispatch(addTodo(text)); // Redux에 추가
      setText(""); // 입력 필드 초기화
    }
  };

  const handleCheckboxChange = (index: number) => {
    const newCheckedItems = [...checkedItems];
    newCheckedItems[index] = !newCheckedItems[index];
    setCheckedItems(newCheckedItems);
  };

  return (
    <TodoListPageContainer>
      <h1>📌 TodoList</h1>
      <p>할 일을 추가하고 완료할 수 있는 페이지입니다.</p>

      <TodoContainer>
        <InputContainer>
          <TodoInput type="text" onChange={(e) => setText(e.target.value)} value={text} />
          <AddButton onClick={handleAddTodo}>추가</AddButton>
          <ClearButton onClick={() => dispatch(clearTodos())}>전체 삭제</ClearButton>
        </InputContainer>

        <ul>
          {todos.length > 0 ? (
            todos.map((todo: string, index: number) => (
              <TodoItem key={index} checked={checkedItems[index]}>
                <CheckBox
                  type="checkbox"
                  checked={checkedItems[index]}
                  onChange={() => handleCheckboxChange(index)}
                />
                <TodoText checked={checkedItems[index]}>{todo}</TodoText>
                <DeleteButton onClick={() => dispatch(removeTodo(index))}>🗑</DeleteButton>
              </TodoItem>
            ))
          ) : (
            <EmptyMessage>할 일이 없습니다.</EmptyMessage>
          )}
        </ul>
      </TodoContainer>
    </TodoListPageContainer>
  );
}

// 🌟 전체 페이지 스타일
const TodoListPageContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 80vh;

  h1 {
    font-size: 2.2rem;
    margin-bottom: 0.5rem;
  }

  p {
    font-size: 1.2rem;
    color: #555;
  }
`;

// 🌟 할 일 입력창 + 버튼 컨테이너
const InputContainer = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
`;

// 🌟 전체 컨테이너
const TodoContainer = styled.div`
  width: 400px;
  border: 1px solid #ddd;
  border-radius: 10px;
  padding: 1.2rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  background: white;

  ul {
    padding: 0;
  }
`;

// 🌟 입력창 스타일
const TodoInput = styled.input`
  flex: 1;
  padding: 0.5rem;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
`;

// 🌟 버튼 기본 스타일
const Button = styled.button`
  padding: 0.5rem 1rem;
  border-radius: 5px;
  font-size: 1rem;
  cursor: pointer;
  transition: 0.2s;
  border: none;
  outline: none;
`;

// 🌟 추가 버튼
const AddButton = styled(Button)`
  background: #007bff;
  color: white;

  &:hover {
    background: #0056b3;
  }
`;

// 🌟 전체 삭제 버튼
const ClearButton = styled(Button)`
  background: #ff4444;
  color: white;

  &:hover {
    background: #cc0000;
  }
`;

// 🌟 개별 Todo 항목 스타일
const TodoItem = styled.li<{ checked: boolean }>`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  border-bottom: 1px solid #eee;
  transition: 0.2s;

  &:last-child {
    border-bottom: none;
  }

  background: ${({ checked }) => (checked ? "#f8f9fa" : "white")};
  text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
`;

// 🌟 체크박스 스타일
const CheckBox = styled.input`
  width: 20px;
  height: 20px;
  cursor: pointer;
`;

// 🌟 Todo 텍스트 스타일
const TodoText = styled.span<{ checked: boolean }>`
  flex: 1;
  font-size: 1.1rem;
  color: ${({ checked }) => (checked ? "#888" : "#333")};
  text-decoration: ${({ checked }) => (checked ? "line-through" : "none")};
`;

// 🌟 삭제 버튼 스타일
const DeleteButton = styled.button`
  background: none;
  border: none;
  cursor: pointer;
  font-size: 1.2rem;
  color: #ff4444;
  transition: 0.2s;

  &:hover {
    color: #cc0000;
  }
`;

// 🌟 할 일이 없을 때 메시지
const EmptyMessage = styled.p`
  text-align: center;
  color: #888;
  font-size: 1.1rem;
  margin-top: 1rem;
`;
