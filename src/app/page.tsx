"use client";
import { useThread } from "@/context/ThreadContext";
import ThreadListHome from "@/components/thread/ThreadListHome";

export default function Home() {
  const { threadsAdvice, threadsFlexing, threadsSupplement, threadsSuggested } =
    useThread();

  return (
    <main className="grid grid-cols-3 gap-4 p-5">
      <div className="col-span-2">
        <ThreadListHome box="ADVICE" threadList={threadsAdvice} />
        <ThreadListHome box="FLEXING" threadList={threadsFlexing} />
        <ThreadListHome box="SUPPLEMENT" threadList={threadsSupplement} />
      </div>
      <div className="col-span-1">
        <ThreadListHome box="SUGGESTED" threadList={threadsSuggested} />
      </div>
    </main>
  );
}
