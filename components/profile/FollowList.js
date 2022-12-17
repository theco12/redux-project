import react from "react";
import PropTypes from "prop-types";
import { Card, Form, List } from "antd";
import { StopOutlined } from "@ant-design/icons";

const FollowList = ({ header, data }) => {
  return (
    <List
      style={{ marginBottom: 20 }}
      header={<div>{header}</div>}
      size="small"
      grid={{ gutter: 4, xs: 2, md: 3 }}
      loadMore={
        <div style={{ textalign: "center", margin: "10px 0" }}>
          <button>더보기</button>
        </div>
      }
      bordered
      dataSource={data}
      renderItem={(item) => {
        <List.Item style={{ marginTop: 20 }}>
          <Card action={[<StopOutlined key="stop" />]}>
            <Card.Meta description={item.nickname} />
          </Card>
        </List.Item>;
      }}
    />
  );
};

FollowList.prototype = {
  header: prototype.string.isRequired,
  data: prototype.array.isRequired,
};

export default FollowList;
