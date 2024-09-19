import React from "react";
import { PostStatsProps } from "@/types";
import HeartOutlined from "@ant-design/icons/lib/icons/HeartOutlined";
import { Button, Statistic } from "antd";

const PostStats = ({ props }: { props: PostStatsProps }) => {
  const likeButton = () => {
    return <Button type="default" shape="circle" icon={<HeartOutlined />} />;
  };

  return (
    <div className={props.className}>
      <Statistic
        title={likeButton()}
        value={props.likeCount}
        valueStyle={{ fontSize: "18px" }}
      />
    </div>
  );
};


export default PostStats;
