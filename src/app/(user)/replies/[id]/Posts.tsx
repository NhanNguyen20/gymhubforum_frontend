"use client";
import { FC } from "react";
import { usePost } from "@/context/PostContext";
import Post from "@/components/post/Post";

const Posts: FC = () => {
  const { posts } = usePost();
  return (
    <>
      {posts.map((item, i) => (
        <Post key={i} post={item} />
      ))}
    </>
  );
};

export default Posts;
