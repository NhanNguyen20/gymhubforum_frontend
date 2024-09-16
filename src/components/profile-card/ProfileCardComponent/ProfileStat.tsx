"use client";

import React from 'react';
import Space from 'antd/es/space';
import Statistic from 'antd/es/statistic/Statistic';
import { ProfileStatProps } from "@/types";

const ProfileStat: React.FC<{ profileStats: ProfileStatProps }> = ({ profileStats }) => {
  return (
    <Space direction="vertical" size="middle" style={{ width: '100%', marginBottom: '5px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between' }}>
        <div style={{ textAlign: 'center' }}>
          <Statistic title="Like Count" value={profileStats.likeCount} valueStyle={{ fontSize: '20px' }} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <Statistic title="Post Count" value={profileStats.postCount} valueStyle={{ fontSize: '20px' }} />
        </div>
        <div style={{ textAlign: 'center' }}>
          <Statistic title="Follower Count" value={profileStats.followerCount} valueStyle={{ fontSize: '20px' }} />
        </div>
      </div>
    </Space>
  );
};

export default ProfileStat;
