import { Avatar, Space } from "antd";
import { SimpleProfileProps } from "@/types";
import { getPostTitle } from "@/utils";
import Link from "next/link";

const ProfileSimpleInfo = ({ props }: { props: SimpleProfileProps }) => {
  return (
    <div className={props.className || "pt-10 text-center"}>
      <Space wrap size={16}>
        <Link href={`/profile/${props.authorId}`}>
          <Avatar
            className="mb-3"
            shape="square"
            size={80}
            src={
              props.authorAvatar ||
              "https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/64dcad8a6f971bb006637318_gaming-avatar-how-to.jpg"
            }
          />
        </Link>
      </Space>
      <p className="font-extrabold text-xl">{props.authorName || "unknown"}</p>
      <p>{getPostTitle(props.likeCount)}</p>
    </div>
  );
};

export default ProfileSimpleInfo;
