import React from "react";
import styled from "styled-components";
import { toggleTheme } from "../features/darkModeSlice";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { useEffect } from "react";

const HeaderStyled = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: #3f51b5;
  color: white;
  font-size: 1.2rem;
`;

const MenuItems = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    a {
      color: #fff;
      text-decoration: none;
      margin-right: 1rem;
      cursor: pointer;
    }
  }
`;

export default function Header() {
  const theme = useAppSelector((state) => state.darkMode.theme); // 현재 theme 값 가져오기
  const dispatch = useAppDispatch();

  // 테마 변경 시 <html> 요소에 data-theme 속성 추가
  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <HeaderStyled>
      <div>My App</div>
      <MenuItems>
        <li>
          <a href="/">Home</a>
        </li>
        <li>
          <a href="/counter">Counter</a>
        </li>
        <li>
          <a href="/auth">Auth</a>
        </li>
        <li>
          <a href="/login">Login</a>
        </li>
        <li>
          <button onClick={() => dispatch(toggleTheme())}>
            {theme === "light" ? "LightMode" : "DarkMode"}
          </button>
        </li>
      </MenuItems>
    </HeaderStyled>
  );
}
