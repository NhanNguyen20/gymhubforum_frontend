"use client";
import { useState } from "react";
import { Form, Button, Input, Upload, notification } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import { handleForm } from "@/api";
import { useRouter } from "next/navigation";
import { capitalizeFirstLetter } from "@/utils";

const HandlePostForm = ({
  type,
  postId,
  threadId,
  ownerId,
}: {
  type: string;
  postId: number;
  threadId: number;
  ownerId: number;
}) => {
  const [formData, setFormData] = useState({
    postId: postId,
    ownerId: ownerId,
    content: "",
    uploadedFile: [],
    threadId: threadId,
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setFormData({ ...formData, content: e.target.value });
  };

  const handleFileChange = (info: any) => {
    const files = info.fileList.map((file: any) => file.originFileObj);
    setFormData({ ...formData, uploadedFile: files });
  };

  const handleSubmit = async () => {
    try {
      const data = new FormData();
      data.append("postId", formData.postId.toString());
      data.append("ownerId", formData.ownerId.toString());
      data.append("content", formData.content);
      data.append("threadId", formData.threadId.toString());

      formData.uploadedFile.forEach((file: File) => {
        data.append("uploadedFile", file);
      });

      const res = await handleForm(type, data);
      console.log("res log ==== ", res.status, res.data);
      if (res.status == 201 && res.data == "PENDING") {
        notification.warning({
          message: "Post Pending",
          description:
            "Your post has been detected as invalid and is waiting for Moderator to validate.",
        });
        window?.location.reload();
      } else if (res.status == 201) {
        window?.location.reload();
      }
    } catch (error) {
      notification.error({
        message: "Error",
        description: "There was an error creating your post.",
      });
      console.error("Error creating post:", error);
    }
  };

  return (
    <div>
      <h1 className="text-center font-bold my-5">{type.toUpperCase()}</h1>
      <Form>
        <Form.Item label="Content">
          <Input.TextArea
            name="content"
            value={formData.content}
            onChange={handleInputChange}
          />
        </Form.Item>
        <Form.Item label="Upload Images">
          <Upload
            multiple
            beforeUpload={() => false} // Prevent automatic upload
            onChange={handleFileChange}
          >
            <Button icon={<UploadOutlined />}>Select Files</Button>
          </Upload>
        </Form.Item>
        <Form.Item className="grid justify-items-center mt-3">
          <Button type="primary" onClick={handleSubmit}>
            {capitalizeFirstLetter(type)}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default HandlePostForm;
