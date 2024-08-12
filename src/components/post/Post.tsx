"use client";
import PostStats from "./post-component/PostStats";
import PostInfo from "./post-component/PostInfo";
import PostAction from "./post-component/PostAction";
import ProfileSimpleInfo from "@/components/profile/profile-component/ProfileSimpleInfo";

// test data
const testUser = {
  id: 0,
  userName: "hehehe",
  email: "string",
  title: "string",
  bio: "string",
  stringAvatar: "string",
  joinDate: "2024-08-08T10:02:29.435Z",
  lastSeen: "2024-08-08T10:02:29.435Z",
  likeCount: 0,
  postCount: 0,
  followerCount: 0,
  className: "pt-10 text-center",
};

const testPostInfo = {
  threadId: "T10",
  postId: 1,
  authorId: 20,
  content:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  encodedImages: [
    "https://i.pinimg.com/originals/c8/ab/61/c8ab614eb7f602cf471e1fdefd06f8a1.jpg",
    "https://i.pinimg.com/originals/cd/59/28/cd592899385e097deabaf5501300f95b.jpg",
  ],
  className: "px-3",
};

const testPostStats = {
  likeCount: 50,
  className: "grid justify-items-center",
};

const Post = () => {
  return (
    <div className="m-auto grid grid-cols-6 w-10/12 p-3">
      <div className="col-span-1 bg-[#DFDFE1] grid justify-items-center">
        <ProfileSimpleInfo user={testUser} />
      </div>
      <div className="col-span-5 bg-white p-8">
        <PostInfo postInfo={testPostInfo} />
        <div className="float-right grid grid-cols-2 text-center">
          <PostStats props={testPostStats} />
          <PostAction />
        </div>
      </div>
    </div>
  );
};

export default Post;
