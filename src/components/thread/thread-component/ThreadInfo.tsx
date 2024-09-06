"use client";
import { FC } from "react";
import { ThreadInfoProps } from "@/types";
import { Flex, Tag } from "antd";
import { usePost } from "@/context/PostContext";

const ThreadInfo: FC = () => {
  const { title, authorName, creationDateTime, authorId } = usePost();

  return (
    <div>
      <h1 className="font-semibold text-4xl mb-3">{title}</h1>
      <div>
        Started by{" "}
        <span className="font-extrabold text-cyan-600">{authorName}</span> -{" "}
        {creationDateTime}
        <span className="ml-8">
          <Flex gap="4px 0" wrap className="inline">
            <Tag color="success">Body Building</Tag>
            <Tag color="processing">Processing</Tag>
            <Tag color="warning">Weight Gain</Tag>
            <Tag color="default">Sharing</Tag>
          </Flex>
        </span>
      </div>
    </div>
  );
};

export default ThreadInfo;
