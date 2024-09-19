"use client";
import { List, Avatar } from "antd";
import { ThreadInfoProps } from "@/types";
import ThreadStats from "./thread-component/ThreadStats";
import Link from "next/link";

const ThreadListSmall = ({ threadList }: { threadList: ThreadInfoProps[] }) => {
  return (
    <>
      <List
        className="m-auto max-w-screen-xl bg-[#E2E2E2] p-2"
        itemLayout="horizontal"
        dataSource={[...threadList].reverse()}
        renderItem={(item, index) => (
          <List.Item className="relative h-20 hover:bg-slate-100 hover:cursor-pointer bg-white m-2">
            <List.Item.Meta
              className="pl-5"
              avatar={
                <Avatar
                  src={
                    item.authorAvatar ||
                    "https://api.dicebear.com/7.x/miniavs/svg?seed=2"
                  }
                />
              }
              title={<Link href={`/profile/${item.id}`}>{item.title}</Link>}
              description={`Started by ${
                item.authorName
              } - ${item.creationDateTime.toString().slice(0, 10)}`}
            />
            <Link href={`/replies/${item.id}`}>
              <div className="absolute inset-0"></div>
            </Link>
            <ThreadStats
              props={{
                viewCount: item.viewCount,
                postCount: item.postCount,
                likeCount: item.likeCount,
                lastUpload: item.creationDateTime.toString().slice(0, 10), // unclear data
                className: "text-center pr-3",
              }}
              isSmall={true}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default ThreadListSmall;
