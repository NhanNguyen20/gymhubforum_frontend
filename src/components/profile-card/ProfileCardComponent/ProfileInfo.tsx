import { ProfileInfoProps } from "@/types";
import { getTitle } from "@/utils";
import Button from "antd/es/button/button";
import Row from "antd/es/grid/row";
import Space from "antd/es/space";
import Typography from "antd/es/typography";
const { Title, Text } = Typography;
import { useMember } from "@/context/MemberContext";

const ProfileInfo: React.FC<{ profileInfo: ProfileInfoProps; accessID: number }> = ({ profileInfo, accessID }) => {
  const { member } = useMember()
  const buttonGen = () => {
    if (member?.id) {
      if (member?.id == accessID) {
        return (
          <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
            <Button type="primary" size="small">
              Follow
            </Button>
            <Button type="primary" danger size="small">
              Report
            </Button>
          </div>
        )
      }
      return (
        <div style={{ display: "flex", justifyContent: "flex-end", gap: "10px" }}>
          <Button type="primary" size="small">
            Update
          </Button>
        </div>
      )
    }
    return null
  }



  return (
    <Space direction="vertical">
      <Row
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          width: "97%",
        }}
      >
        <Title level={3}>{profileInfo.userName}</Title>
        <>{buttonGen}</>
      </Row>

      <Text>
        <strong>Title:</strong> {getTitle(profileInfo.likeCount)}
      </Text>
      <div>
        <Text style={{ marginRight: "10px" }}>
          <strong>Join Date:</strong> {profileInfo.joinDate}
        </Text>
        <Text>
          <strong>Last Seen:</strong> {profileInfo.lastSeen}
        </Text>
      </div>
      <Text>{`"${profileInfo.bio}"`}</Text>
    </Space>
  );
};

export default ProfileInfo;
