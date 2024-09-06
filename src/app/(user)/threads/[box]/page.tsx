"use client";
import ThreadList from "@/components/thread/ThreadList";
import { Pagination } from "antd";
import { useThread } from "@/context/ThreadContext";

export default function ThreadCategoryPage({
  params,
}: {
  params: { box: string };
}) {
  const { threadsAdvice, threadsFlexing, threadsSupplement, threadsSuggested } =
    useThread();
  const box = params.box;
  const category = `threads${box.charAt(0).toUpperCase()}${box.slice(1)}`;

  const threadListData =
    category === "threadsAdvice"
      ? threadsAdvice
      : category === "threadFlexing"
      ? threadsFlexing
      : category === "threadSupplement"
      ? threadsSupplement
      : threadsSuggested;

  return (
    <>
      <ThreadList threadList={threadListData} />

      <br />
      <Pagination
        align="center"
        defaultCurrent={1}
        // total={threadList.length}
      />
    </>
  );
}
