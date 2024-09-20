import ThreadList from "./ThreadList";
import { ThreadInfoProps } from "@/types";
import Link from "next/link";
import { sortThreads } from "@/utils";
import ThreadListSmall from "./ThreadListSmall";

const ThreadListHome = ({
  box,
  threadList,
  amount,
}: {
  box: string;
  amount: number;
  threadList: ThreadInfoProps[];
}) => {
  const sortedThreads = sortThreads("oldest", threadList.slice(0, amount));

  return (
    <div className="my-5">
      <Link href={`/threads/${box}`}>
        <div className="mt-auto mx-auto mb-0 max-w-screen-xl h-11 bg-[#DF6A29] text-white text-xl content-center pl-6">
          {box.toUpperCase()}
        </div>
      </Link>
      {threadList && threadList.length > 0 ? (
        box === "suggested" || box === "lastpost" ? (
          <ThreadListSmall threadList={sortedThreads} />
        ) : (
          <ThreadList threadList={sortedThreads} />
        )
      ) : (
        <p>No threads available</p>
      )}
    </div>
  );
};

export default ThreadListHome;
