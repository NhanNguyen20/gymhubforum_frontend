"use client";
import { Tag } from "antd";
import PostStats from "./post-component/PostStats";
import PostInfo from "./post-component/PostInfo";
import PostAction from "./post-component/PostAction";
import ProfileSimpleInfo from "@/components/profile/profile-component/ProfileSimpleInfo";
import { PostInfoProps } from "@/types";
import { useMember } from "@/context/MemberContext";

const Post = ({
  post,
  index,
  threadId,
}: {
  post: PostInfoProps;
  index: number;
  threadId: number;
}) => {
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
    content,
    reason,
    encodedImage,
  } = post;

  const { member } = useMember();
  const aiDetect = "Body Shaming";

  return reason === aiDetect && parseInt(authorId) != member?.id ? (
    <></>
  ) : (
    <div className="m-auto grid grid-cols-6 w-10/12 px-3 my-10 relative">
      {reason === aiDetect && (
        <Tag color="red" className="absolute top-0 right-0 my-3 mx-20">
          Body Shaming
        </Tag>
      )}
      <div
        className={`col-span-1 grid justify-items-center ${
          reason === aiDetect ? "bg-[#7A7A7A]" : "bg-[#DFDFE1]"
        }`}
      >
        <ProfileSimpleInfo props={{ authorName, authorId, likeCount }} />
      </div>
      <div
        className={`col-span-5 p-8 ${
          reason === aiDetect ? "bg-[#DA635D]" : "bg-white"
        }`}
      >
        <PostInfo
          postInfo={{
            creationDateTime,
            content: content,
            postId: index,
            encodedImage,
          }}
        />
        <div className="float-right grid grid-cols-2 text-center">
          <PostStats props={{ likeCount, postId: id }} />
          <PostAction authorId={authorId} post={post} threadId={threadId} />
        </div>
      </div>
    </div>
  );
};

export default Post;
