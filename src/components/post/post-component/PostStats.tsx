"use client";
import React, { useEffect, useState } from "react";
import { PostStatsProps } from "@/types";
import HeartOutlined from "@ant-design/icons/lib/icons/HeartOutlined";
import { Button, Statistic } from "antd";
import { likePost, unlikePost } from "@/api";
import { useMember } from "@/context/MemberContext";

const PostStats = ({ props }: { props: PostStatsProps }) => {
  const { member } = useMember();
  const [likeCount, setLikeCount] = useState(props.likeCount);
  const [liked, setLiked] = useState(false);

  useEffect(() => {
    const fetchLike = async () => {
      const res = await likePost(props.postId);
      if (res !== 200) {
        setLiked(true);
      } else {
        await unlikePost(props.postId);
        setLiked(false);
      }
    };
    member?.id && fetchLike();
  }, []);

  const handleLike = async () => {
    const res = await likePost(props.postId);
    if (res === 200) {
      setLikeCount(likeCount + 1);
      setLiked(true);
    }
  };

  const handleUnlike = async () => {
    const res = await unlikePost(props.postId);
    if (res === 200 && likeCount > 0) {
      setLikeCount(likeCount - 1);
      setLiked(false);
    }
  };

  const likeButton = () => {
    return (
      <Button
        type={liked ? "primary" : "default"}
        shape="circle"
        icon={<HeartOutlined />}
        onClick={() => {
          if (!liked) handleLike();
          else handleUnlike();
        }}
      />
    );
  };

  return (
    <div className={props.className || ""}>
      <Statistic
        title={likeButton()}
        value={likeCount}
        valueStyle={{ fontSize: "18px" }}
      />
    </div>
  );
};

export default PostStats;
