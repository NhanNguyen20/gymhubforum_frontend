import { Avatar, Space } from "antd";
import { ProfileInfoProp } from "@/types";
import { UserPostTitle } from "@/components/post/post-component/PostStats";

const ProfileSimpleInfo = ({ user }: { user: ProfileInfoProp }) => {
  return (
    <div className={user.className}>
      <Space wrap size={16}>
        <Avatar
          className="mb-3"
          shape="square"
          size={80}
          src="https://cdn.prod.website-files.com/5ec7dad2e6f6295a9e2a23dd/64dcad8a6f971bb006637318_gaming-avatar-how-to.jpg"
        />
      </Space>
      <p className="font-extrabold text-xl">{user.userName || "unknown"}</p>
      <UserPostTitle likeCount={50} />
    </div>
  );
};

export default ProfileSimpleInfo;
