import React from "react";
import { PostStatsProp } from "@/types";
import HeartOutlined from "@ant-design/icons/lib/icons/HeartOutlined";
import { Button, Statistic } from "antd";

const PostStats = ({ props }: { props: PostStatsProp }) => {
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

export const UserPostTitle = ({ likeCount }: { likeCount: number }) => {
  const getTitle = () => {
    switch (true) {
      case likeCount <= 10:
        return "Chicken Leg";
      case likeCount <= 20:
        return "Try-harder";
      case likeCount <= 40:
        return "Gym Rat";
      case likeCount <= 100:
        return "Gym Bro";
      case likeCount <= 500:
        return "Acient Gymmer";
      default:
        return "Mr.Olympia";
    }
  };

  return <p>{getTitle()}</p>;
};

export default PostStats;
