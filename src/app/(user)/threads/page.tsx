// contain threads as search results
"use client";
import FormGroup from "@/components/form/FormGroup";
import Post from "@/components/post/Post";
import Thread from "@/components/thread/Thread";
import ThreadList from "@/components/thread/ThreadList";
import {
  fetchBoxThreads,
  fetchPostsThread,
  fetchThreadsUser,
  fetchPostsUser,
  fetchMember,
  fetchModProfile,
  fetchModDashboard,
  modUpdateProfile,
  banMember,
  createPost,
  updateMemberProfile,
  updatePost,
  createTag,
  updateTag,
  deleteTag,
  createThread,
  fetchThreadByID,
} from "@/api";
import { PostInfoProps, ThreadCategory, ThreadInfoProps } from "@/types";
import { Pagination, List } from "antd";
import { useState } from "react";
import { useThread } from "@/context/ThreadContext";

export default function SearchResults({}) {
  fetchPostsThread(7);
  // createPost({
  //   postId: 25,
  //   ownerId: 3,
  //   content: "Testing for post creation",
  //   encodedImage: "string",
  //   threadId: 8,
  // });

  // createThread({
  //   title: "Testing from Frontend side",
  //   category: ThreadCategory.FLEXING,
  //   tags: [{ id: 2 }, { id: 3 }],
  // });
  // fetchThreadByID(2);

  const [loadThreads, setLoadThreads] = useState(false);

  const handleCreate = () => {
    setLoadThreads(true);
  };

  const getThreadObjects = () => {
    setLoadThreads(false);
    // const threadList : ThreadInfoProps[] = "";
    // return <ThreadList />;
  };

  const { allThreads, threadsAdvice } = useThread();

  return (
    <>
      Thread results
      <div>
        <FormGroup formType="create thread" onSubmit={handleCreate} />

        <ThreadList threadList={threadsAdvice} />

        <br />
        <Pagination
          align="center"
          defaultCurrent={1}
          // total={threadList.length}
        />
      </div>
    </>
  );
}
