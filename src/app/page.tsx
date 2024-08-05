import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import PostStats from "@/components/post/post-component/PostStats";
import ThreadStats from "@/components/thread/thread-component/ThreadStats"
import ProfileInfo from "@/components/profile/profile-component/ProfileInfo";

export default function Home() {
  return (
    <main>
      <NavBar />
      <h1>Hello</h1>
      <PostStats likeCount={520} className="IDK"/>
      <br />
      <ThreadStats lastUpload="Ngaynaodo" postCount={5} viewCount={5} className="ThreadStats"/>

      <br />
      <ProfileInfo username="Michelle" title = "Member" bio="abc" joinDate="a date" lastSeenDate="anotherdate" className="class"/>
      <br />
      
      <Footer />
    </main>
  );
}
