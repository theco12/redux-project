import React from "react";
import { useAppDispatch, useAppSelector } from "../app/hooks";
import { toggleAuth, setAuthState } from "../features/authSlice";

const Auth: React.FC = () => {
  const dispatch = useAppDispatch();
  const isAuthenticated = useAppSelector(
    (state: { auth: { isAuthenticated: any } }) => state.auth.isAuthenticated,
  );

  return (
    <div>
      <h1>Authentication Status: {isAuthenticated ? "Logged In" : "Logged Out"}</h1>

      {/* 토글 버튼 (클릭 시 상태 반전) */}
      <button onClick={() => dispatch(toggleAuth())}>Toggle Authentication</button>

      {/* 특정 값으로 설정하는 버튼 */}
      <button onClick={() => dispatch(setAuthState(true))}>Set to True</button>
      <button onClick={() => dispatch(setAuthState(false))}>Set to False</button>
    </div>
  );
};

export default Auth;
