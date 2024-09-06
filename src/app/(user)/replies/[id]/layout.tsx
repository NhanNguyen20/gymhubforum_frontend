"use client";
import { ReactNode } from "react";
import { findThreadById } from "@/utils";
import { fetchPostsThread } from "@/api";
import { PostContextProvider } from "@/context/PostContext";
import { useThread } from "@/context/ThreadContext";

export default async function Layout({
  params,
  children,
}: {
  params: { id: number };
  children: ReactNode;
}) {
  const { id } = params;
  const { allThreads } = useThread();
  const [
    {
      creationDateTime,
      likeCount,
      viewCount,
      postCount,
      authorName,
      authorId,
      title,
    },
    posts,
  ] = await Promise.all([findThreadById(id, allThreads), fetchPostsThread(id)]);
  return (
    <PostContextProvider
      threadId={id}
      creationDateTime={creationDateTime}
      likeCount={likeCount}
      viewCount={viewCount}
      postCount={postCount}
      authorName={authorName}
      authorId={authorId}
      title={title}
      posts={posts}
    >
      {children}
    </PostContextProvider>
  );
}
