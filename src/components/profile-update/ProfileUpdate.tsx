"use client";

import React, { useState } from 'react';
import { Layout, Divider } from 'antd';
import Preview from './profile-update-component/Preview';
import Updater from './profile-update-component/Updater';

const { Content, Sider } = Layout;

interface Account {
  email: string;
  username: string;
  likeCount: number;
  password: string;
  bio: string;
  avatar?: string;
}

const ProfileUpdate: React.FC = () => {
  const [account, setAccount] = useState<Account>({
    email: 'example@gmail.com',
    username: 'Michelle',
    likeCount: 100,
    password: 'iL********1234',
    bio: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent augue diam, blandit nec metus in, facilisis vehicula lacus...',
    avatar: '/path/to/avatar.jpg',
  });

  const onFinish = (values: any) => {
    console.log('Received values: ', values);
    // Here you would typically send the updated data to your backend and update the state
    setAccount((prevAccount) => ({
      ...prevAccount,
      bio: values.bio || prevAccount.bio,
      avatar: values.avatar || prevAccount.avatar,
    }));
  };

  return (
    <Layout style={{ background: '#fff', padding: '24px', borderRadius: '10px' }}>
      <Sider width={400} style={{ background: '#fff' }}>
        <Preview account={account} />
      </Sider>
      <Divider type="vertical" style={{ height: '100%' }} />

      <Content style={{ padding: '24px' }}>
        <Updater onFinish={onFinish} />
      </Content>
    </Layout>
  );
};

export default ProfileUpdate;
