import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PostStats from "@/components/post/post-component/PostStats";
import ThreadStats from "@/components/thread/thread-component/ThreadStats";
import ProfileInfo from "@/components/profile/profile-component/ProfileInfo";
import LastestPostItem from "@/components/profile-latest-post/LatestPostItem/LatestPostItem";

export default function Home() {
  return (
    <main>
      <NavBar />
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
      <Footer />
    </main>
  );
}
