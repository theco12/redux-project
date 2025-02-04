import React, { useEffect } from "react";
import styled from "styled-components";
import { toggleTheme } from "../features/darkModeSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";

export default function Header() {
  const theme = useAppSelector((state) => state.darkMode.theme); // 현재 theme 값 가져오기
  const dispatch = useAppDispatch();

  // 테마 변경 시 <html> 요소에 data-theme 속성 추가
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderStyled themeMode={theme}>
      <Logo>
        <a href="/">Thecorative</a>
      </Logo>
      <MenuItems>
        <MenuItem>
          <a href="/">Home</a>
        </MenuItem>
        <MenuItem>
          <a href="/scoreboard">score</a>
        </MenuItem>
        <MenuItem>
          <a href="/login">Login</a>
        </MenuItem>
        <MenuItem>
          <a href="/todolist">Todo</a>
        </MenuItem>
        <MenuItem>
          <ThemeToggleButton onClick={() => dispatch(toggleTheme())} themeMode={theme}>
            {theme === "light" ? "🌙 Dark Mode" : "☀️ Light Mode"}
          </ThemeToggleButton>
        </MenuItem>
      </MenuItems>
    </HeaderStyled>
  );
}

// 🌟 스타일 추가

const HeaderStyled = styled.header<{ themeMode: string }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${(props) => (props.themeMode === "dark" ? "#222" : "#3f51b5")};
  color: white;
  font-size: 1.2rem;
  box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.1);
  transition: background 0.3s ease-in-out;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;

  a {
    color: #fff;
    text-decoration: none;
  }
`;

const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;
  gap: 1rem;
  align-items: center;
`;

const MenuItem = styled.li`
  a {
    color: #fff;
    text-decoration: none;
    font-weight: 500;
    transition: color 0.3s;

    &:hover {
      color: #ffeb3b; /* 밝은 노란색 강조 */
    }
  }
`;

const ThemeToggleButton = styled.button<{ themeMode: string }>`
  padding: 0.5rem 1rem;
  background: ${(props) => (props.themeMode === "dark" ? "#555" : "#fff")};
  color: ${(props) => (props.themeMode === "dark" ? "#fff" : "#3f51b5")};
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-weight: 500;
  transition: 0.3s ease-in-out;

  &:hover {
    background: ${(props) => (props.themeMode === "dark" ? "#777" : "#ddd")};
  }
`;
