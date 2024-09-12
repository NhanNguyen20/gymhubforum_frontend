"use client";
import { useThread } from "@/context/ThreadContext";
import ThreadListHome from "@/components/thread/ThreadListHome";
import { useMember } from "@/context/MemberContext";
import { ThreadCategory } from "@/types";

export default function Home() {
  const {
    threadsAdvice,
    threadsFlexing,
    threadsSupplement,
    threadsSuggested,
    threadsLastpost,
  } = useThread();
  const { member } = useMember();
  console.log(member);

  return (
    <main className="grid grid-cols-3 gap-4 p-5">
      <div className="col-span-2">
        <ThreadListHome
          box={ThreadCategory.ADVICE}
          threadList={threadsAdvice}
          amount={4}
        />
        <ThreadListHome
          box={ThreadCategory.FLEXING}
          threadList={threadsFlexing}
          amount={4}
        />
        <ThreadListHome
          box={ThreadCategory.SUPPLEMENT}
          threadList={threadsSupplement}
          amount={4}
        />
      </div>
      <div className="col-span-1">
        <div className="">
          <ThreadListHome
            box={ThreadCategory.SUGGESTED}
            threadList={threadsSuggested || null}
            amount={6}
          />
        </div>
        <div className="">
          <ThreadListHome
            box={ThreadCategory.LASTPOST}
            threadList={threadsLastpost || null}
            amount={6}
          />
        </div>
      </div>
    </main>
  );
}
