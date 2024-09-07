"use client"

import React, { useState, useEffect } from "react";
import ProfileInfo from "./ProfileCardComponent/ProfileInfo";
import ProfileStat from "./ProfileCardComponent/ProfileStat";
import Row from "antd/es/grid/row";
import Col from "antd/es/grid/col";
import Layout from "antd/es/layout/layout";


const ProfileCard = () => {
  const [profileInfo, setProfileInfo] = useState<any>(null);
  const [imageSrc, setImageSrc] = useState<string | null>(null);

  useEffect(() => {
    // Mock API call to get profile info including Base64 image data
    setTimeout(() => {
      setProfileInfo({
        id: 1,
        userName: 'Monery',
        email: 'monery@example.com',
        bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum',
        joinDate: '2023-01-01',
        lastSeen: '2024-09-05',
        encodedImage: 'https://picsum.photos/200',
        likeCount: 200
      });

      // Assuming Base64 image comes from an API
      setImageSrc(`data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBD...`);
    }, 1000);
  }, []);

  if (!profileInfo) {
    return <p>Loading...</p>;
  }

  return (
    <div style={{margin:'auto'}}>
      <Layout style={{
        maxWidth:'80%',
        borderRadius: '10px',
        margin: '30px auto',
        boxShadow: '0 20px 50px rgba(0, 0, 0, 0.2)',
        padding: '5px'
      }}>
        <Row justify="space-between" style={{ margin: '10px' }}>
          <Col span={4} style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <img src={profileInfo.encodedImage} alt="" style={{ borderRadius: '5px' }} />
          </Col>

          <Col span={20} style={{ padding: '10px' }}>
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

