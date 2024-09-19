import { ProfileInfoProps } from "@/types";
import { getTitle } from "@/utils";
import Button from "antd/es/button/button";
import Row from "antd/es/grid/row";
import Space from "antd/es/space";
import Typography from "antd/es/typography";
import { useRouter } from "next/navigation";  // Use 'useRouter' from next/navigation for app directory
const { Title, Text } = Typography;
import { useMember } from "@/context/MemberContext";
import { useState } from "react";

const ProfileInfo: React.FC<{ profileInfo: ProfileInfoProps; accessID: number }> = ({ profileInfo, accessID }) => {
  const { member } = useMember();
  const router = useRouter();  // Correct hook from next/navigation
  const [followList, setFollowList] = useState<number[]>([]);

  const handleUpdateClick = () => {
    // Navigate to the profile update page
    router.push(`/profile/${accessID}/update`);
  };

  const handleFollow = () => {
    if (!followList.includes(accessID)) {
      setFollowList([...followList, accessID]);  // Add user to follow list
    } else {
      setFollowList(followList.filter(id => id !== accessID));  // Remove user from follow list
    }
  };

  const buttonGen = () => {
    if (member?.id) {
      if (accessID !== member?.id) {
        if (followList.includes(accessID)) {
          return (
            <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
              <Button type="primary" size="small" ghost onClick={handleFollow}>
                ✔️ Followed
              </Button>
            </div>
          );
        }
        return (
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <Button type="primary" size="small"  onClick={handleFollow}>
              Follow
            </Button>
          </div>
        );
      }
      return (
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <Button type="primary" size="small" onClick={handleUpdateClick}>
            Update
          </Button>
        </div>
      );
    }
    return null;
  };

  return (
    <Space direction="vertical" style={{ width: "100%" }}>
      {/* Row for username and buttons */}
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",  // Buttons are aligned to the right
          alignItems: "center",
          width: "100%",  // Full width to ensure alignment
        }}
      >
        <Title level={3} style={{ margin: 0 }}>{profileInfo.userName}</Title>
        <div>{buttonGen()}</div>
      </Row>

      {/* Other profile information using Text */}
      <Text>
        <strong>Title:</strong> {getTitle(profileInfo.likeCount)}
      </Text>
      <Text>
        <strong>Join Date:</strong> {profileInfo.joinDate}
      </Text>
      <Text>
        {`"${profileInfo.bio}"`}
      </Text>
    </Space>
  );
};

export default ProfileInfo;
