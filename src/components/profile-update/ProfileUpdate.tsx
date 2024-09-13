"use client";

  import Preview from './profile-update-component/Preview';
import Updater from './profile-update-component/Updater';
import { ProfilePreviewProps } from '@/types';
import Layout from 'antd/es/layout/layout';
import Row from 'antd/es/grid/row';
import Col from 'antd/es/grid/col';
import { useState } from 'react';

interface Account {
  email: string;
  username: string;
  likeCount: number;
  password: string;
  bio: string;
  avatar?: string;
}

const ProfileUpdate: React.FC = () => {
  const [account, setAccount] = useState<ProfilePreviewProps["account"]>({
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
    <Layout style={{ background: '#fff', borderRadius: '10px', width: '75%', height: '80%',  margin: 'auto', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)', marginTop:'40px'}}>
      <Row>
        <Col span={4} style={{padding:'10px'}}>
          <img src="https://picsum.photos/200" alt="" style={{borderRadius:'5px', margin:'auto'}}/>
        </Col>

        <Col span={10} style={{padding:'20px'}}>
        <Preview account={account}/>
        </Col>

        <Col span={10} style={{padding:'20px'}}>
          <Updater onFinish={onFinish} />
        </Col>
      </Row>
    </Layout>
  );
};

export default ProfileUpdate;
