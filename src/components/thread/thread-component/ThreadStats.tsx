import React from "react";
import { ThreadStatsProps } from "@/types";
import { Statistic } from "antd";
import { CommentOutlined, EyeOutlined, HeartOutlined } from "@ant-design/icons";

const ThreadStats = ({
  props,
  isSmall,
}: {
  props: ThreadStatsProps;
  isSmall?: boolean;
}) => {
  return (
    <div className={props.className}>
      {!isSmall && (
        <>
          <Statistic
            title={<EyeOutlined />}
            value={props.viewCount}
            valueStyle={{ fontSize: "16px" }}
          />
          <Statistic
            title={<HeartOutlined />}
            value={props.likeCount}
            valueStyle={{ fontSize: "16px" }}
          />
          <Statistic
            title={<CommentOutlined />}
            value={props.postCount}
            valueStyle={{ fontSize: "16px" }}
          />
        </>
      )}
      <Statistic
        title={`Latest Post`}
        value={props.lastUpload.toString().slice(0, 10)}
        valueStyle={{ fontSize: "16px" }}
      />
    </div>
  );
};

export default ThreadStats;
