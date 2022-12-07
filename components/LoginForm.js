import react from "react";
import { useCallback, useState } from "react";
import { Form, Input, Button } from "antd";
import Link from "next/link";
import styled from "styled-components";

const ButtonWrapper = styled.div`
  margin-top: 20px;
`;

export default function LoginForm({ setIsLoggedIn }) {
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [Passwordcheck, setPasswordcheck] = useState("");

  const onChangeId = useCallback((e) => {
    setId(e.target.value);
  }, []);

  const onChangePassword = useCallback((e) => {
    setPassword(e.target.value);
  }, []);

  const onSubmitForm = useCallback(() => {
    console.log(Id, Password);
    setIsLoggedIn(true);
  }, [Id, Password]);

  return (
    <Form onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-id">아이디</label>
        <br />
        <input name="user-id" value={Id} onChange={onChangeId} required />
      </div>
      <div>
        <label htmlFor="user-password">패스워드</label>
        <br />
        <input
          name="user-password"
          value={Password}
          type={Password}
          onChange={onChangePassword}
          required
        />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={false}>
          로그인
        </Button>
        <Link href="/signup">
          <a>
            <Button>회원가입</Button>
          </a>
        </Link>
      </ButtonWrapper>
    </Form>
  );
}
