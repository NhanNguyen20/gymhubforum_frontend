// "use client";
import { ReactNode } from "react";
import { fetchPostsThread, fetchThreadByID } from "@/api";
import { PostContextProvider } from "@/context/PostContext";

export default async function Layout({
  params,
  children,
}: {
  params: { id: number };
  children: ReactNode;
}) {
  const { id } = params;
  const [
    {
      creationDateTime,
      likeCount,
      viewCount,
      postCount,
      authorName,
      authorId,
      title,
      tagIds,
    },
    posts,
  ] = await Promise.all([fetchThreadByID(id), fetchPostsThread(id)]);
  // console.log(posts);

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
      tagIds={tagIds}
    >
      {children}
    </PostContextProvider>
  );
}
