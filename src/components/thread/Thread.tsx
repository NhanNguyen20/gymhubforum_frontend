import ThreadInfo from "./thread-component/ThreadInfo";
import ThreadStats from "./thread-component/ThreadStats";

// test data
const testThreadStats = {
  postCount: 3,
  viewCount: 100,
  lastUpload: "32-09-2024",
  className: "grid grid-cols-3 justify-items-center text-center",
};

const testThreadInfo = {
  id: 55,
  creationDateTime: "2024-08-09T06:34:09.449Z",
  likeCount: 30,
  viewCount: 300,
  beenReport: false,
  postCount: 10,
  authorName: "Spamer",
  authorId: "M999",
  authorAvatar: "string",
  name: "Body transformation by the year 2024!",
};

const Thread = () => {
  return (
    <div className="grid grid-cols-8 px-10">
      <div className="col-span-6">
        <ThreadInfo props={testThreadInfo} />
      </div>
      <div className="col-span-2">
        <ThreadStats props={testThreadStats} />
      </div>
    </div>
  );
};

export default Thread;
