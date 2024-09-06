"use client";
import { List, Avatar } from "antd";
import { ThreadInfoProps } from "@/types";
import ThreadStats from "./thread-component/ThreadStats";

const ThreadList = ({ threadList }: { threadList: ThreadInfoProps[] }) => {
  return (
    <>
      <List
        className="m-auto max-w-screen-xl bg-[#E2E2E2] p-2"
        itemLayout="horizontal"
        dataSource={threadList}
        renderItem={(item, index) => (
          <List.Item className="h-20 hover:bg-slate-100 hover:cursor-pointer bg-white m-2">
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
              title={<a href="https://ant.design">{item.title}</a>}
              description={`Started by ${item.authorName} - ${item.creationDateTime}`}
            />

            <ThreadStats
              props={{
                postCount: item.postCount,
                viewCount: item.viewCount,
                likeCount: item.likeCount,
                lastUpload: item.creationDateTime,
                className: "grid grid-cols-4 text-center pr-10 max-w-96",
              }}
            />
          </List.Item>
        )}
      />
    </>
  );
};

export default ThreadList;
