import React from "react";
import { ThreadStatsProps } from "@/types";
import { Statistic } from "antd";
import { CommentOutlined, EyeOutlined, HeartOutlined } from "@ant-design/icons";

const ThreadStats = ({ props }: { props: ThreadStatsProps }) => {
  return (
    <div className={props.className}>
      <Statistic
        title={<EyeOutlined />}
        value={props.viewCount}
        valueStyle={{ fontSize: "16px" }}
      />
      {props.likeCount && (
        <Statistic
          title={<HeartOutlined />}
          value={props.likeCount}
          valueStyle={{ fontSize: "16px" }}
        />
      )}
      <Statistic
        title={<CommentOutlined />}
        value={props.postCount}
        valueStyle={{ fontSize: "16px" }}
      />
      <Statistic
        title={`Latest Post`}
        value={props.lastUpload}
        valueStyle={{ fontSize: "16px" }}
      />
    </div>
  );
};

export default ThreadStats;
