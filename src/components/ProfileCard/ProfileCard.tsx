"use client";

import React, { useState, useEffect } from "react";
import ProfileInfo from "./ProfileCardComponent/ProfileInfo";
import ProfileStat from "./ProfileCardComponent/ProfileStat";
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import Layout from "antd/es/layout/layout";
import { useMember } from "@/context/MemberContext";

const ProfileCard = () => {
  const [profileInfo, setProfileInfo] = useState<any>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  const { member } = useMember();

  useEffect(() => {
    // Mock API call to get profile info including Base64 image data
    setTimeout(() => {
      setProfileInfo({
        id: 1,
        userName: member?.userName,
        email: member?.email,
        bio: member?.bio,
        joinDate: member?.joinDate,
        // lastSeen: "",
        encodedImage: member?.avatar,
        likeCount: member?.likeCount,
      });

      // Assuming Base64 image comes from an API
      setImageSrc(`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBD...`);
    }, 1000);
  }, []);

  if (!profileInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{ margin: "auto" }}>
      <Layout
        style={{
          maxWidth: "80%",
          borderRadius: "10px",
          margin: "30px auto",
          boxShadow: "0 20px 50px rgba(0, 0, 0, 0.2)",
          padding: "5px",
        }}
      >
        <Row justify="space-between" style={{ margin: "10px" }}>
          <Col
            span={4}
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <img
              src={profileInfo.encodedImage}
              alt=""
              style={{ borderRadius: "5px" }}
            />
          </Col>

          <Col span={20} style={{ padding: "10px" }}>
            <ProfileInfo profileInfo={profileInfo} />
          </Col>
        </Row>
        <Row>
          <Col span={15} push={5}>
            <ProfileStat />
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default ProfileCard;
