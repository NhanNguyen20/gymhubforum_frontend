"use client";
import { EditOutlined, FlagOutlined } from "@ant-design/icons";
import { Button, Modal } from "antd";
import { useEffect, useState } from "react";
import FormGroup from "@/components/form/FormGroup";
import { useMember } from "@/context/MemberContext";
import { findThreadById } from "@/utils";
import { useThread } from "@/context/ThreadContext";

const ThreadAction = ({ threadId }: { threadId: number }) => {
  const { member } = useMember();
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState<JSX.Element | null>(null);
  const [formData, setFormData] = useState({});
  const { allThreads } = useThread();
  const [authorId, setAuthorId] = useState(0);

  useEffect(() => {
    const fetchThread = async () => {
      try {
        const thread = await findThreadById(threadId, allThreads);
        setFormData({
          threadId: thread.id,
          category: thread.threadCategoryEnum,
        });
        setAuthorId(parseInt(thread.authorId));
      } catch (error) {
        console.error("Failed to fetch thread:", error);
      }
    };

    fetchThread();
  }, []);

  const handleReportSuccess = (status: number) => {
    if (status === 200) {
      setIsModalOpen(false);
      alert(
        "Your report has been recorded and is waiting for Moderator to verify!"
      );
    }
  };

  const handleUpdateSuccess = (status: number) => {
    if (status === 200) {
      setIsModalOpen(false);
      window?.location.reload();
    }
  };

  const showModal = (type: string) => {
    setModalContent(
      <FormGroup
        formType={type}
        onSubmit={
          type == "report thread" ? handleReportSuccess : handleUpdateSuccess
        }
        passedFormData={formData}
      />
    );
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setModalContent(null);
  };

  return (
    <div className="absolute inset-y-0 ml-20">
      {authorId === member?.id ? (
        <>
          <Button
            className="mb-2"
            type="default"
            shape="circle"
            onClick={() => showModal("update thread")}
            icon={<EditOutlined />}
          />
          <p>Edit</p>
        </>
      ) : (
        <>
          <Button
            className="mb-2"
            type="default"
            shape="circle"
            onClick={() => showModal("report thread")}
            icon={<FlagOutlined />}
          />
          <p>Report</p>
        </>
      )}
      <Modal
        open={isModalOpen}
        onCancel={handleCancel}
        okButtonProps={{ disabled: true, hidden: true }}
        cancelButtonProps={{ hidden: true }}
      >
        {modalContent}
      </Modal>
    </div>
  );
};

export default ThreadAction;
