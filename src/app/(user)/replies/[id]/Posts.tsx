"use client";
import React from "react";
import Post from "@/components/post/Post";
import { PostInfoProps } from "@/types";

const Posts = ({
  posts,
  threadId,
}: {
  posts: PostInfoProps[];
  threadId: number;
}) => {
  return (
    <>
      {Array.isArray(posts) ? (
        posts.map((item, i) => (
          <Post key={i} index={i + 1} post={item} threadId={threadId} />
        ))
      ) : (
        <p>No posts available</p>
      )}
    </>
  );
};

export default Posts;
