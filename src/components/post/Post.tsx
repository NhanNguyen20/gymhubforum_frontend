"use client";
import PostStats from "./post-component/PostStats";
import PostInfo from "./post-component/PostInfo";
import PostAction from "./post-component/PostAction";
import ProfileSimpleInfo from "@/components/profile/profile-component/ProfileSimpleInfo";
import { PostInfoProps } from "@/types";

const Post = ({ post }: { post: PostInfoProps }) => {
  const {
    id,
    creationDateTime,
    likeCount,
    viewCount,
    toxicStatus,
    resolveStatus,
    beenLiked,
    postCount,
    authorName,
    authorId,
    authorAvatar,
    name,
    reason,
    encodedImage,
  } = post;
  return (
    <div className="m-auto grid grid-cols-6 w-10/12 px-3 my-10">
      <div className="col-span-1 bg-[#DFDFE1] grid justify-items-center">
        <ProfileSimpleInfo
          props={{ authorName, authorId, authorAvatar, likeCount }}
        />
      </div>
      <div className="col-span-5 bg-white p-8">
        <PostInfo
          postInfo={{
            creationDateTime,
            content: name,
            postId: id,
            encodedImage,
          }}
        />
        <div className="float-right grid grid-cols-2 text-center">
          <PostStats props={{ likeCount }} />
          <PostAction />
        </div>
      </div>
    </div>
  );
};

export default Post;
