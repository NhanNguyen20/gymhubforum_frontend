// contain threads as search results
import FormGroup from "@/components/form/FormGroup";
import Post from "@/components/post/Post";
import Thread from "@/components/thread/Thread";
import ThreadList from "@/components/thread/ThreadList";

const testThreadInfoList = [
  {
    id: 55,
    creationDateTime: "2024-08-09T06:34:09.449Z",
    likeCount: 30,
    viewCount: 300,
    beenReport: false,
    postCount: 10,
    authorName: "Spamer",
    authorId: "M999",
    authorAvatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=2",
    name: "Body transformation by the year 2024!",
  },
  {
    id: 56,
    creationDateTime: "2024-08-10T07:45:10.123Z",
    likeCount: 45,
    viewCount: 450,
    beenReport: true,
    postCount: 15,
    authorName: "FitnessGuru",
    authorId: "M1000",
    authorAvatar: "https://api.dicebear.com/7.x/miniavs/svg?seed=1",
    name: "Achieving your fitness goals!",
  },
];

export default function SearchResults({}) {
  return (
    <>
      Thread results
      <div>
        {/* <FormGroup formType="create post" /> */}
        <Thread />
        <Post />

        <ThreadList threadList={testThreadInfoList} />
      </div>
    </>
  );
}
