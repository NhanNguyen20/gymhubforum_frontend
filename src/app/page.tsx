import PostStats from "@/components/post/post-component/PostStats";
import ThreadStats from "@/components/thread/thread-component/ThreadStats";
import ProfileInfo from "@/components/profile/profile-component/ProfileInfo";
import UserBanListTable from "@/components/mod/UserBanListTable";
import ReportContentTable from "@/components/mod/ReportContentTable";
import { ThreadReportProps, ThreadCategory } from "@/types";

export default function Home() {
  const reportList: ThreadReportProps[] = [
    {
      id: 1,
      reason: ["Spam", "Offensive Content"],
      threadCategory: ThreadCategory.FLEXING,
      from: 1620000000000,
      to: 1620086400000,
      comment: "This post violates community guidelines."
    },
    {
      id: 2,
      reason: ["Harassment"],
      threadCategory: ThreadCategory.ADVISE,
      from: 1620050000000,
      to: 1620126400000,
    },
    {
      id: 3,
      reason: ["Misinformation"],
      threadCategory: ThreadCategory.SUPPLEMENT,
      from: 1620100000000,
      to: 1620186400000,
      comment: "This information is misleading and false."
    },
    {
      id: 4,
      reason: ["Hate Speech"],
      threadCategory: ThreadCategory.FLEXING,
      from: 1620150000000,
      to: 1620236400000,
      comment: "Contains offensive language towards a group of people."
    },
  ];
  

  return (
    <main>
      <ReportContentTable reportList={reportList} />
      <UserBanListTable />
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
    </main>
  );
}
