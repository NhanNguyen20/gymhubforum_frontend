"use client";
import { FC } from "react";
import { ThreadInfoProps } from "@/types";
import { usePost } from "@/context/PostContext";
import ThreadStats from "@/components/thread/thread-component/ThreadStats";

const Stats: FC = () => {
  const { viewCount, likeCount, postCount, posts } = usePost();
  const lastUpload = posts?.slice(-1)[0].creationDateTime;
  return (
    <ThreadStats props={{ viewCount, likeCount, postCount, lastUpload }} />
  );
};

export default Stats;
