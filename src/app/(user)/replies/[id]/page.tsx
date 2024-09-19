"use client";
import ThreadInfo from "@/components/thread/thread-component/ThreadInfo";
import Stats from "./Stats";
import Posts from "./Posts";
import { Button } from "antd";
import { useEffect, useState } from "react";
import HandlePostForm from "@/components/form/HandlePostForm";
import { useMember } from "@/context/MemberContext";
import { usePost } from "@/context/PostContext";
import ProfileSimpleInfo from "@/components/profile/profile-component/ProfileSimpleInfo";
import ThreadAction from "@/components/thread/thread-component/ThreadAction";

export default function PostPage({ params }: { params: { id: number } }) {
  const [threadId, setThreadId] = useState<number | null>(null);
  const [button, setButton] = useState(false);
  const [formRender, setFormRender] = useState(false);
  const { member } = useMember();
  const { posts, tagIds } = usePost();

  useEffect(() => {
    const id = Number(params.id);
    if (!isNaN(id)) {
      setThreadId(id);
    } else {
      const searchParams = new URLSearchParams(window.location.search);
      const idFromUrl = Number(searchParams.get("id"));
      if (!isNaN(idFromUrl)) {
        setThreadId(idFromUrl);
      }
    }
  }, [params.id]);

  const handleButtonClicked = () => {
    setButton(!button);
    setFormRender(!formRender);
  };

  return (
    <>
      <div className="grid grid-cols-8 px-10 mt-8 mb-14">
        <div className="col-span-6">
          <ThreadInfo tagIds={tagIds} />
        </div>
        <div className="col-span-2">
          <Stats />
        </div>
      </div>

      <div className="relative h-12 w-full">
        <ThreadAction threadId={params.id} />
        <Button
          className="absolute inset-y-0 right-5 mr-24"
          type="primary"
          ghost
          onClick={handleButtonClicked}
        >
          {(!button && "Reply Thread") || "Cancel"}
        </Button>
      </div>

      {formRender && (
        <div className="m-auto grid grid-cols-6 w-10/12 px-3 my-10">
          <div className="col-span-1 bg-[#DFDFE1] grid justify-items-center">
            {member && (
              <ProfileSimpleInfo
                props={{
                  authorId: member.id.toString(),
                  authorName: member.userName,
                  authorAvatar: member.avatar,
                  likeCount: member.likeCount,
                }}
              />
            )}
          </div>
          <div className="col-span-5 bg-white p-8">
            {member ? (
              <HandlePostForm
                type="create post"
                postId={posts.length + 1}
                threadId={threadId || params.id}
                ownerId={member.id}
              />
            ) : (
              <div>
                Please login to reply to this thread!
                <br />
                <Button href={`/login?redirect=${window?.location.pathname}`}>
                  Login
                </Button>
              </div>
            )}
          </div>
        </div>
      )}

      {threadId !== null && <Posts posts={posts} threadId={threadId} />}
    </>
  );
}
