"use client";
import { Tag } from "antd";
import { usePost } from "@/context/PostContext";
import { useTag } from "@/context/TagContext";
import Link from "next/link";

const ThreadInfo = ({ tagIds }: { tagIds: number[] }) => {
  const { title, authorName, creationDateTime, authorId } = usePost();
  const { tags } = useTag();

  return (
    <div>
      <h1 className="font-semibold text-4xl mb-3">{title}</h1>
      <div>
        Started by{" "}
        <Link href={`/profile/${authorId}`}>
          <span className="font-extrabold text-cyan-600">{authorName}</span>
        </Link>
        - {creationDateTime}
        <span className="ml-8">
          {tags
            .filter((tag) => tagIds.includes(tag.id))
            .map((tag) => (
              <Tag key={tag.id} color="success" className="text-xl mr-3">
                {tag.tagName}
              </Tag>
            ))}
        </span>
      </div>
    </div>
  );
};

export default ThreadInfo;
