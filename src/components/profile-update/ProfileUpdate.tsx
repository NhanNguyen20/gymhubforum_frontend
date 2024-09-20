"use client";

import React, { useEffect, useState } from 'react';
import Preview from './profile-update-component/Preview';
import Updater from './profile-update-component/Updater';
import { ProfilePreviewProps } from '@/types';
import Layout from 'antd/es/layout/layout';
import Row from 'antd/es/grid/row';
import Col from 'antd/es/grid/col';
import { useMember } from '@/context/MemberContext';
import { getMemberPreview, updateMemberProfile } from '@/api';

interface ProfileUpdateProps {
  id: number;
}

const ProfileUpdate: React.FC<ProfileUpdateProps> = ({ id }) => {
  const [account, setAccount] = useState<ProfilePreviewProps>({
    email: '',
    username: '',
    likeCount: 0,
    bio: '',
    avatar: '',
  });
  const { member } = useMember();
  const [loading, setLoading] = useState<boolean>(true);

  const fetchProfile = async () => {
    if (member?.id == id) {
      try {
        const data = await getMemberPreview(id);
        setAccount({
          email: data.email,
          username: data.username,
          likeCount: data.likeCount,
          bio: data.bio,
          avatar: data.avatar,
        });
      } catch (error) {
        console.error("Error fetching profile: ", error);
      } finally {
        setLoading(false);
      }
    }
  };

  useEffect(() => {
    fetchProfile();
  }, [member?.id]);

  const handleUpdate = async (values: any) => {
    try {
      console.log('Received values: ', values);
      const formData = new FormData();

      // Append basic fields
      formData.append('id', String(member?.id));
      formData.append('password', values.newPassword);
      formData.append('bio', values.bio || account?.bio);

      // If there's an avatar, append it as a file (like in the image)
      if (values.avatar) {
        formData.append('stringAvatar', values.avatar.file); // Assuming `values.avatar.file` contains the file object
      }

      if (member?.id) {
        await updateMemberProfile(member.id, formData);
        // Call fetchProfile again to reload the preview after updating
        fetchProfile();
      }
    } catch (error) {
      console.error("Error updating profile: ", error);
    }
  };

  if (loading) {
    return <p>Loading...</p>;
  }
  console.log('account', account)

  return (
    <Layout style={{ background: '#fff', borderRadius: '10px', width: '75%', height: '80%', margin: 'auto', boxShadow: '0 10px 20px rgba(0, 0, 0, 0.15)', marginTop: '40px' }}>
      <Row>
        <Col span={4} style={{ padding: '10px' }}>
          <img src={account?.avatar || "https://picsum.photos/200"} alt="Avatar" style={{ borderRadius: '5px', margin: 'auto' }} />
        </Col>

        <Col span={10} style={{ padding: '20px' }}>
          <Preview
            email={account?.email}
            username={account?.username}
            likeCount={account?.likeCount}
            bio={account?.bio}
            avatar={account?.avatar}
          />
        </Col>

        <Col span={10} style={{ padding: '20px' }}>
          <Updater onFinish={handleUpdate} />
        </Col>
      </Row>
    </Layout>
  );
};

export default ProfileUpdate;
