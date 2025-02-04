import React, { useState, ChangeEvent, FormEvent } from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toggleAuth } from "../features/authSlice";

const LoginPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(
    (state: { auth: { isAuthenticated: any } }) => state.auth.isAuthenticated,
  );

  const isDarkMode = useAppSelector(
    (state: { darkMode: { theme: string } }) => state.darkMode.theme,
  );

  // State 관리
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  // 입력 값 변경 처리
  const handleInputChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const { name, value } = event.target;
    if (name === "username") setUsername(value);
    if (name === "password") setPassword(value);
  };

  // 로그인 처리
  const handleLogin = (event: FormEvent): void => {
    event.preventDefault();
    dispatch(toggleAuth()); // 인증 상태 변경 (예제)
  };

  return (
    <div style={styles.container(isDarkMode)}>
      <h1 style={styles.title(isDarkMode)}>Login</h1>
      <form onSubmit={handleLogin} style={styles.form(isDarkMode)}>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={username}
          onChange={handleInputChange}
          style={styles.input(isDarkMode)}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={password}
          onChange={handleInputChange}
          style={styles.input(isDarkMode)}
        />
        <button type="submit" style={styles.button(isDarkMode)}>
          Login
        </button>
      </form>
    </div>
  );
};

const styles: { [key: string]: (isDarkMode: string) => React.CSSProperties } = {
  container: (isDarkMode) => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "20vh",
    height: "100vh",
    backgroundColor: isDarkMode === "dark" ? "#121212" : "#f9f9f9",
    color: isDarkMode === "dark" ? "#ffffff" : "#000000",
  }),
  title: (isDarkMode) => ({
    fontSize: "24px",
    marginBottom: "20px",
    color: isDarkMode === "dark" ? "#ffffff" : "#000000",
  }),
  form: () => ({
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "10px",
  }),
  input: (isDarkMode) => ({
    width: "300px",
    padding: "10px",
    fontSize: "16px",
    borderRadius: "5px",
    border: `1px solid ${isDarkMode === "dark" ? "#444" : "#ccc"}`,
    backgroundColor: isDarkMode === "dark" ? "#333" : "#fff",
    color: isDarkMode === "dark" ? "#fff" : "#000",
  }),
  button: (isDarkMode) => ({
    width: "100%",
    padding: "10px",
    fontSize: "16px",
    backgroundColor: isDarkMode === "dark" ? "#BB86FC" : "#3f51b5",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
  }),
};

export default LoginPage;
