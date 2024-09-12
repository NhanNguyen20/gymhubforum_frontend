import ThreadList from "./ThreadList";
import { ThreadInfoProps } from "@/types";
import Link from "next/link";

const ThreadListHome = ({
  box,
  threadList,
  amount,
}: {
  box: string;
  amount: number;
  threadList: ThreadInfoProps[];
}) => {
  return (
    <div className="my-5">
      <Link href={`/threads/${box}`}>
        <div className="mt-auto mx-auto mb-0 max-w-screen-xl h-11 bg-[#DF6A29] text-white text-xl content-center pl-6">
          {box.toUpperCase()}
        </div>
      </Link>

      <ThreadList threadList={threadList.slice(0, amount)} />
    </div>
  );
};

export default ThreadListHome;
