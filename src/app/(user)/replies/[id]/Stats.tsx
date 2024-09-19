"use client";
import { FC } from "react";
import { ThreadInfoProps } from "@/types";
import { usePost } from "@/context/PostContext";
import ThreadStats from "@/components/thread/thread-component/ThreadStats";

const Stats: FC = () => {
  const { viewCount, likeCount, postCount, posts } = usePost();
  const lastUpload = posts?.length
    ? posts.slice(-1)[0].creationDateTime.toString()
    : "No uploads";

  const styling = "grid grid-cols-4 text-center pr-4 max-w-96 mt-2";

  return (
    <ThreadStats
      props={{
        viewCount,
        likeCount,
        postCount,
        lastUpload,
        className: styling,
      }}
    />
  );
};

export default Stats;
