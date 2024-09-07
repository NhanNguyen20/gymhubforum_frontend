"use client";


import React from 'react';
import { Card, Form, Input } from 'antd';
import { ProfilePreviewProps } from '@/types';
import Picture from '@/components/Picture';
import Image from 'next/image';
import abc from '~/images/abc.png'

interface AccountPreviewProps {
  account: {
    email: string;
    username: string;
    title: string;
    password: string;
    bio: string;
    avatar?: string;
  };
}

const Preview: React.FC<ProfilePreviewProps> = ({ account }) => {
  return (
    <Form layout="vertical" initialValues={account}>
      <Form.Item label="Email" name="email">
        <Input disabled />
      </Form.Item>

      <Form.Item label="Username" name="username">
        <Input disabled />
      </Form.Item>

      <Form.Item label="Title" name="likeCount">
        <Input disabled />
      </Form.Item>

      <Form.Item label="Password" name="password">
        <Input.Password disabled />
      </Form.Item>

      <Form.Item label="Write your bio" name="bio">
        <Input.TextArea rows={4} disabled />
      </Form.Item>
    </Form>


  );
};

export default Preview;
