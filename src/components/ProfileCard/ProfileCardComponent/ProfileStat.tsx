"use client"

import Space from 'antd/es/space';
import Statistic from 'antd/es/statistic/Statistic';
import Typography from 'antd/es/typography';
import React, { useState, useEffect } from 'react';

const { Text } = Typography;

const ProfileStat = () => {
    const [stats, setStats] = useState({ likeCount: 0, postCount: 0, followerCount: 0 });

    useEffect(() => {
        // Simulate an API call to fetch profile statistics
        setTimeout(() => {
            setStats({
                likeCount: 100,
                postCount: 100,
                followerCount: 100,
            });
        }, 1000);

        // Simulate real-time updates
        const interval = setInterval(() => {
            setStats((prevStats) => ({
                likeCount: prevStats.likeCount + Math.floor(Math.random() * 5),
                postCount: prevStats.postCount + Math.floor(Math.random() * 3),
                followerCount: prevStats.followerCount + Math.floor(Math.random() * 2),
            }));
        }, 2000);

        return () => clearInterval(interval); // Cleanup on unmount
    }, []);

    return (
        <Space direction="vertical" size="middle" style={{ width: '100%' , marginBottom:'5px'}}>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <div style={{ textAlign: 'center' }}>
                    <Statistic title='Like Counts' value={stats.likeCount} valueStyle={{fontSize:'20px'}}/>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Statistic title='Post Counts' value={stats.postCount} valueStyle={{fontSize:'20px'}}/>
                </div>
                <div style={{ textAlign: 'center' }}>
                    <Statistic title='Follower Counts' value={stats.followerCount} valueStyle={{fontSize:'20px'}}/>
                </div>
            </div>
        </Space>

    );
};

export default ProfileStat;
