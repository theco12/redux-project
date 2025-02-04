import React from "react";
import styled from "styled-components";
import { useAppSelector } from "../../app/hooks";
import { useNavigate } from "react-router-dom";

const NotFound: React.FC = () => {
  const theme = useAppSelector((state: { darkMode: { theme: any } }) => state.darkMode.theme); // 다크모드 여부 가져오기
  const navigate = useNavigate();

  return (
    <NotFoundContainer themeMode={theme}>
      <NotFoundContent>
        <ErrorCode>404</ErrorCode>
        <ErrorMessage>페이지를 찾을 수 없습니다.</ErrorMessage>
        <GoHomeButton onClick={() => navigate("/")}>🏠 홈으로 돌아가기</GoHomeButton>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

export default NotFound;

// 🌟 스타일 추가
const NotFoundContainer = styled.div<{ themeMode: string }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  height: 100vh;
  background: ${(props) => (props.themeMode === "dark" ? "#121212" : "#f8f9fa")};
  color: ${(props) => (props.themeMode === "dark" ? "#fff" : "#333")};
  transition: background 0.3s ease-in-out;
  text-align: center;
`;

const NotFoundContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 6rem;
`;

const ErrorCode = styled.h1`
  font-size: 6rem;
  font-weight: bold;
  margin-bottom: 1rem;
  animation: fadeIn 1s ease-in-out;
`;

const ErrorMessage = styled.p`
  font-size: 1.5rem;
  margin-bottom: 2rem;
  animation: fadeIn 1.5s ease-in-out;
`;

const GoHomeButton = styled.button`
  padding: 0.8rem 1.5rem;
  background: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  font-size: 1.2rem;
  cursor: pointer;
  transition: 0.3s ease-in-out;
  animation: fadeIn 2s ease-in-out;

  &:hover {
    background: #0056b3;
  }
`;

// ✨ 애니메이션 추가
const fadeIn = `
  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-10px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

const GlobalStyle = styled.div`
  ${fadeIn}
`;
