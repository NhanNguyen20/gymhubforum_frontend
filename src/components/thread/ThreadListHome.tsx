import ThreadList from "./ThreadList";
import { ThreadInfoProps } from "@/types";

const ThreadListHome = ({
  box,
  threadList,
}: {
  box: string;
  threadList: ThreadInfoProps[];
}) => {
  return (
    <div className="my-5">
      <div className="mt-auto mx-auto mb-0 max-w-screen-xl h-11 bg-[#DF6A29] text-white text-xl content-center pl-6">
        {box}
      </div>
      <ThreadList threadList={threadList.slice(0, 4)} />
    </div>
  );
};

export default ThreadListHome;
