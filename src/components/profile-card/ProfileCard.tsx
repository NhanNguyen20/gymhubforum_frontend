"use client";

import React, { useState, useEffect } from "react";
import ProfileInfo from "./ProfileCardComponent/ProfileInfo";
import ProfileStat from "./ProfileCardComponent/ProfileStat";
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import Layout from "antd/es/layout/layout";
import { fetchMember } from "@/api";
import { ProfileDataProps } from "@/types";

const ProfileCard: React.FC<{ accessId: number }> = ({ accessId }) => {
  console.log('Hello')
  const [profileData, setProfileData] = useState<ProfileDataProps | null>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);
  
  const fetchAndSetProfileData = async () => {
    try {
      const data = await fetchMember(accessId); // Fetch member details by ID
      if (data) {
        setProfileData({
          profileInfo: {
            id: data.id,
            userName: data.userName,
            email: data.email,
            bio: data.bio,
            joinDate: data.joinDate,
            lastSeen: data.lastSeen,
            encodedImage: data.avatar,
            likeCount: data.likeCount,
          },
          profileStats: {
            likeCount: data.likeCount,
            postCount: data.postCount,
            followerCount: data.followerCount,
          },
        });

        // Update image source for the avatar
        setImageSrc(`data:image/jpeg;base64,${data.avatar}`);
      }
    } catch (error) {
      console.error("Error fetching profile data:", error);
    }
  };

  useEffect(() => {
    // Initial fetch
    fetchAndSetProfileData();

    // Poll the backend every 10 seconds for updated profile data
    const intervalId = setInterval(() => {
      fetchAndSetProfileData();
    }, 10000); // Fetch every 10 seconds

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, [accessId]);

  if (!profileData) {
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
              src={imageSrc || profileData.profileInfo.encodedImage}
              alt=""
              style={{ borderRadius: "5px" }}
            />
          </Col>

          <Col span={20} style={{ padding: "10px" }}>
            <ProfileInfo profileInfo={profileData.profileInfo} accessID={accessId}/>
          </Col>
        </Row>
        <Row>
          <Col span={15} push={5}>
            <ProfileStat profileStats={profileData.profileStats} />
          </Col>
        </Row>
      </Layout>
    </div>
  );
};

export default ProfileCard;
