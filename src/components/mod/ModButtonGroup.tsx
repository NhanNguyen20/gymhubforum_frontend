"use client";
import { Button, Flex, Modal } from "antd";
import { useState } from "react";
import FormGroup from "../form/FormGroup";

const ModButtonGroup = ({
  action,
  reportID,
}: {
  action: string;
  reportID: number;
}) => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <Flex gap="small" wrap className="flex justify-between">
        <Button
          type="primary"
          style={{ backgroundColor: "#1FB505", borderColor: "#1FB505" }}
        >
          Not Toxic
        </Button>
        <Button type="primary" ghost className="border-2 font-semibold">
          Toxic
        </Button>
        <div className="div">
          <Button type="primary" danger onClick={showModal}>
            Ban Member
          </Button>
          <Modal
            open={isModalOpen}
            onCancel={handleCancel}
            okButtonProps={{ hidden: true }}
            cancelButtonProps={{ hidden: true }}
          >
            <FormGroup formType="ban member" onSubmit={handleCancel} />
          </Modal>
        </div>
      </Flex>
    </>
  );
};

export default ModButtonGroup;
