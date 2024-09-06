"use client";
import { createContext, FC, PropsWithChildren, useContext } from "react";
import { PostInfoProps, ThreadInfoProps } from "@/types";

interface PostContextType {
  threadId: number;
  creationDateTime: string;
  likeCount: number;
  viewCount: number;
  postCount: number;
  authorName: string;
  authorId: string;
  title: string;
  posts: PostInfoProps[];
}

export const PostContext = createContext<PostContextType>({
  threadId: 0,
  creationDateTime: "",
  likeCount: 0,
  viewCount: 0,
  postCount: 0,
  authorName: "",
  authorId: "",
  title: "",
  posts: [],
} as PostContextType);

export const PostContextProvider: FC<PropsWithChildren<PostContextType>> = ({
  children,
  threadId,
  creationDateTime,
  likeCount,
  viewCount,
  postCount,
  authorName,
  authorId,
  title,
  posts,
}) => {
  return (
    <PostContext.Provider
      value={{
        threadId,
        creationDateTime,
        likeCount,
        viewCount,
        postCount,
        authorName,
        authorId,
        title,
        posts,
      }}
    >
      {children}
    </PostContext.Provider>
  );
};

export const usePost = () => useContext(PostContext);
