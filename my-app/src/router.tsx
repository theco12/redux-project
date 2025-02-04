import React from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import NotFound from "./pages/NotFound/NotFound";
import Counter from "./components/counter";
import Auth from "./components/auth";
import Header from "./components/Header";
import Login from "./pages/Login/Login";
import TodoList from "./pages/TodoList/todolist";

const Router: React.FC = () => {
  return (
    <>
      <Header />
      <Routes>
        {/* 기본 라우트 */}
        <Route path="/" element={<Home />} />
        <Route path="/counter" element={<Counter />} />
        <Route path="/auth" element={<Auth />} />
        <Route path="/login" element={<Login />} />
        <Route path="/todolist" element={<TodoList />} />

        {/* 404 페이지 */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
};

export default Router;
