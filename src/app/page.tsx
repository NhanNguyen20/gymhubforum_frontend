import PostStats from "@/components/post/post-component/PostStats";
import ThreadStats from "@/components/thread/thread-component/ThreadStats";
import ProfileInfo from "@/components/profile/profile-component/ProfileInfo";
import LastestPostItem from "@/components/profile-latest-post/LatestPostItem/LatestPostItem";
import UserBanListTable from "@/components/mod/mod-component/UserBanListTable";

export default function Home() {
  return (
    <main>
      <UserBanListTable/>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <h1>Hello</h1>
      <PostStats props={{ likeCount: 520, className: "IDK" }} />
      <br />
      <ThreadStats
        props={{
          lastUpload: "Ngaynaodo",
          postCount: 5,
          viewCount: 5,
          className: "ThreadStats",
        }}
      />

      <br />
      <ProfileInfo
        props={{
          id: 1,
          userName: "Michelle",
          email: "mail",
          likeCount: 20,
          postCount: 10,
          followerCount: 100,
          bio: "abc",
          joinDate: "a date",
          lastSeen: "anotherdate",
          className: "class",
        }}
      />
      <br />

      <br />
      <LastestPostItem />
    </main>
  );
}
