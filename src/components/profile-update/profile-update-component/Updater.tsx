"use client";

import React from 'react';
import { Form, Input, Button, Upload, Card, message } from 'antd';
import { UploadOutlined } from '@ant-design/icons';

interface UpdaterProps {
  onFinish: (values: any) => void;
}

const Updater: React.FC<UpdaterProps> = ({ onFinish }) => {
  const uploadProps = {
    beforeUpload: (file: File) => {
      return false; // Prevent automatic upload
    },
  };

  const handleSubmit = (values: any) => {
    if (values.newPassword !== values.confirmPassword) {
      message.error("Passwords do not match!");
      return;
    }
    onFinish(values); // Submit the form values to the parent component
  };

  return (
    <Form layout="vertical" onFinish={handleSubmit}>
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

      <Form.Item
        label="Write your bio"
        name="bio"
      >
        <Input.TextArea rows={5} />
      </Form.Item>

      <Form.Item
        label="Choose avatar"
        name="avatar"
      >
        <Upload {...uploadProps}>
          <Button icon={<UploadOutlined />}>Choose file...</Button>
        </Upload>
      </Form.Item>

      <Form.Item
        style={{ display: 'flex', justifyContent: 'flex-end' }}
      >
        <Button type="primary" htmlType="submit">
          Update
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Updater;
