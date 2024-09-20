"use client";

import React from "react";
import { Form, Input } from "antd";
import { ProfilePreviewProps } from "@/types";
import { getPostTitle } from "@/utils";

const Preview: React.FC<ProfilePreviewProps> = (props) => {
  if (!props) return null; // Return null if data is not yet available

  return (
    <Form layout="vertical" initialValues={props}>
      <Form.Item label="Email" name="email">
        <Input disabled />
      </Form.Item>

      <Form.Item label="Username" name="username">
        <Input disabled />
      </Form.Item>

      <Form.Item label="Title" name={getPostTitle(props.likeCount)}>
        <Input disabled />
      </Form.Item>

      <Form.Item label="Write your bio" name="bio">
        <Input.TextArea rows={4} disabled />
      </Form.Item>
    </Form>
  );
};

export default Preview;
