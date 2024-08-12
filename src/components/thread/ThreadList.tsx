"use client";
import { List, Avatar, Pagination } from "antd";
import { ThreadInfoProp } from "@/types";
import ThreadStats from "./thread-component/ThreadStats";

const ThreadList = ({ threadList }: { threadList: ThreadInfoProp[] }) => {
  return (
    <>
      <List
        className="m-auto max-w-screen-xl bg-white"
        itemLayout="horizontal"
        dataSource={threadList}
        renderItem={(item, index) => (
          <List.Item className="h-24 hover:bg-slate-100 hover:cursor-pointer">
            <List.Item.Meta
              className="pl-5"
              avatar={<Avatar src={item.authorAvatar} />}
              title={<a href="https://ant.design">{item.name}</a>}
              description={`Started by ${item.authorName} - ${item.creationDateTime}`}
            />

            <ThreadStats
              props={{
                postCount: item.postCount,
                viewCount: item.viewCount,
                likeCount: item.likeCount,
                lastUpload: item.creationDateTime.substring(0, 7),
                className:
                  "grid grid-cols-4 justify-items-center text-center pr-5",
              }}
            />
          </List.Item>
        )}
      />
      <br />
      <Pagination align="center" defaultCurrent={1} total={threadList.length} />
    </>
  );
};

export default ThreadList;
