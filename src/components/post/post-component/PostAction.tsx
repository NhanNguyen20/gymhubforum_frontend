"use client";
import { EditOutlined, FlagOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import FormGroup from "@/components/form/FormGroup";
import { useMember } from "@/context/MemberContext";
import { PostInfoProps } from "@/types";
import HandlePostForm from "@/components/form/HandlePostForm";

const PostAction = ({
  authorId,
  post,
  threadId,
}: {
  authorId: string;
  post: PostInfoProps;
  threadId: number;
}) => {
  const { member } = useMember();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);
  const [formData, setFormData] = useState({});
  const [likeCount, setLikeCount] = useState(post.likeCount);

  useEffect(() => {
    setFormData({
      postId: post.id,
      ownerId: post.authorId,
      content: post.content,
      threadId: threadId,
    });
  }, []);

  const handleReportSuccess = (status: number) => {
    if (status === 200) {
      setIsModalOpen(false);
      alert(
        "Your report has been recorded and is waiting for Moderator to verify!"
      );
    }
  };

  const showModal = (type: string) => {
    if (type === "report post") {
      setModalContent(
        <FormGroup
          formType={type}
          passedFormData={formData}
          onSubmit={handleReportSuccess}
        />
      );
    } else {
      setModalContent(
        <HandlePostForm
          type={type}
          postId={post.id}
          threadId={threadId}
          ownerId={parseInt(authorId)}
        />
      );
    }
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="grid grid-cols-2">
      {parseInt(authorId) === member?.id && (
        <div className="mr-10">
          <Button
            className="mb-2"
            type="default"
            shape="circle"
            onClick={() => showModal("update post")}
            icon={<EditOutlined />}
          />
          <p>Edit</p>
        </div>
      )}
      {parseInt(authorId) !== member?.id && (
        <div className="">
          <Button
            className="mb-2"
            type="default"
            shape="circle"
            onClick={() => showModal("report post")}
            icon={<FlagOutlined />}
          />
          <p>Report</p>
        </div>
      )}
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        okButtonProps={{ hidden: true }}
        cancelButtonProps={{ hidden: true }}
      >
        {modalContent}
      </Modal>
    </div>
  );
};

export default PostAction;
