import React from "react";
import styled from "styled-components";

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
      </MenuItems>
    </HeaderStyled>
  );
}
