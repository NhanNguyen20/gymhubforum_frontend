"use client";

import React from 'react';
import { Form, Input, Button, Upload, Card } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface UpdaterProps {
  onFinish: (values: any) => void;
}

const Updater: React.FC<UpdaterProps> = ({ onFinish }) => {
  const uploadProps = {
    beforeUpload: (file: File) => {
      // handle file upload
      return false; // prevent automatic upload
    },
  };

  return (
      <Form layout="vertical" onFinish={onFinish}>
        <Form.Item
          label="New Password"
          name="newPassword"
          rules={[{ required: true, message: 'Please input your new password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item
          label="Re-enter New Password"
          name="confirmPassword"
          rules={[{ required: true, message: 'Please confirm your new password!' }]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item label="Write your bio" name="bio">
          <Input.TextArea rows={5} />
        </Form.Item>

        <Form.Item label="Choose avatar" name="avatar">
          <Upload {...uploadProps}>
            <Button icon={<UploadOutlined />}>Choose file...</Button>
          </Upload>
        </Form.Item>

        <Form.Item style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-end', marginRight:'20px', marginBottom:'0'}}>
          <Button type="primary" htmlType="submit" >
            Update
          </Button>
        </Form.Item>
      </Form>
  );
};

export default Updater;
