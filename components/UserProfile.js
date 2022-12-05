import React, { useCallback } from "react";
import { Avatar, Card, Button } from "antd";

export default function UserProfile({ setIsLoggedIn }) {
  const onLogout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  return;
  <Card
    actions={[
      <div key="twit">
        짹짹
        <br />0
      </div>,
      <div key="following">
        팔로잉
        <br />0
      </div>,
      <div key="following">
        팔로워
        <br />0
      </div>,
    ]}
  >
    <Card.Meta avatar={<Avatar>TC</Avatar>} title="thecorative" />

    <Button onclick={onLogout}>로그아웃</Button>
  </Card>;
}
