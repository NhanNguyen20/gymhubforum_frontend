import { Button, Modal, message, Input } from "antd";
import { resolvePendingPost, resolvePendingThread, banMember } from "@/api"; // Correct API imports
import { useState } from "react";

const ModButtonGroup = ({
  postID,
  modID,
  handleResolve,
  isPost,
  threadID, // For posts, threadID is required
  category,  // For threads, category is required
  reason,    // Reason provided for the report
  ownerID,   // Owner ID for the user to ban
}: {
  postID: number;
  modID: number;
  handleResolve: (newToxicStatus: string) => void;
  isPost: boolean; // Determine if it’s a post or a thread
  threadID?: number; // Only for posts
  category?: string; // Only for threads
  reason: string; // Reason for report
  ownerID: number; // New param: Owner ID for the user to ban
}) => {
  const [isResolveModalOpen, setIsResolveModalOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [banReason, setBanReason] = useState<string>("");
  const [banDuration, setBanDuration] = useState<number>(30 * 24 * 60 * 60 * 1000); // Default: 30 days
  const [resolveReason, setResolveReason] = useState<string>(""); // For resolving post/thread
  const [selectedStatus, setSelectedStatus] = useState<string>(""); // To track which status (Not Toxic/Toxic) was chosen

  // Handle banning member
  const handleBan = async () => {
    try {
      console.log('Banning Member:', { modID, ownerID, banDuration, banReason });
      const response = await banMember(modID, ownerID, banDuration, banReason); // Use ownerID instead of postID
      console.log('Ban Member Response:', response);
      message.success("Member banned successfully!");
    } catch (error) {
      console.error("Error banning member:", error);
      message.error("Failed to ban member.");
    }
    setIsModalOpen(false);
  };

  const showModal = () => {
    setIsModalOpen(true);
  };

  const handleCancel = () => {
    setIsModalOpen(false);
    setIsResolveModalOpen(false);
  };

  // Show resolve modal to get reason input before submission
  const showResolveModal = (status: string) => {
    setSelectedStatus(status);
    setIsResolveModalOpen(true);
  };

  // Handle resolving report (either post or thread)
  const handleResolveStatus = async () => {
    try {
      if (isPost && threadID && postID) {
        // Resolve for posts
        console.log('Resolving Post:', { modID, postID, threadID, selectedStatus, resolveReason });
        
        const response = await resolvePendingPost(modID, postID, threadID, selectedStatus, resolveReason);
  
        if (response?.status === 200) {
          console.log('Post resolved successfully with status:', selectedStatus);
          message.success(`Post resolved as "${selectedStatus}" successfully!`);
          handleResolve(selectedStatus); // Remove it from the list if successful
        } else {
          console.error('Post resolution failed with status:', response?.status || 'No status');
          message.error(`Failed to resolve post: ${response?.status || "No status"}`);
        }
      } else if (category && threadID) {
        // Resolve for threads
        console.log('Resolving Thread:', { modID, threadID, category, selectedStatus, resolveReason });
  
        const response = await resolvePendingThread(modID, threadID, category, selectedStatus, resolveReason);
  
        if (response?.status === 200) {
          console.log('Thread resolved successfully with status:', selectedStatus);
          message.success(`Thread resolved as "${selectedStatus}" successfully!`);
          handleResolve(selectedStatus); // Remove it from the list if successful
        } else {
          console.error('Thread resolution failed with status:', response?.status || 'No status');
          message.error(`Failed to resolve thread: ${response?.status || "No status"}`);
        }
      }
    } catch (error) {
      console.error(`Error resolving ${isPost ? "post" : "thread"}:`, error);
      message.error(`Failed to resolve ${isPost ? "post" : "thread"} as "${selectedStatus}".`);
    }
    
    // Close the modal after resolve action is done
    setIsResolveModalOpen(false);
  };  

  return (
    <>
      <div className="flex justify-between items-center gap-1">
        {/* Not Toxic Button */}
        <Button
          type="primary"
          style={{ backgroundColor: "#1FB505", borderColor: "#1FB505" }}
          className="text-white"
          onClick={() => showResolveModal("NOT_TOXIC")} // Open modal for 'NOT_TOXIC' resolution
        >
          Not Toxic
        </Button>

        {/* Toxic Button */}
        <Button
          type="primary"
          ghost
          className="border-2 font-semibold"
          onClick={() => showResolveModal("TOXIC")} // Open modal for 'TOXIC' resolution
        >
          Toxic
        </Button>

        {/* Ban Member Button */}
        <Button type="primary" danger onClick={showModal}>
          Ban Member
        </Button>
        {/* Ban Member Modal */}
        <Modal
          open={isModalOpen}
          onCancel={handleCancel}
          onOk={handleBan}
          okText="Ban Member"
        >
          <div className="mb-4">
            <label className="block font-bold mb-2">Ban Reasons:</label>
            <textarea
              placeholder="Enter your reasons for banning this member..."
              className="w-full p-2 border border-gray-300 rounded"
              value={banReason}
              onChange={(e) => setBanReason(e.target.value)}
            />
          </div>
          <div className="mb-4">
            <label className="block font-bold mb-2">Ban Duration:</label>
            <select
              className="w-full p-2 border border-gray-300 rounded"
              value={banDuration}
              onChange={(e) => setBanDuration(Number(e.target.value))}
            >
              <option value={30 * 24 * 60 * 60 * 1000}>30 days</option>
              <option value={7 * 24 * 60 * 60 * 1000}>7 days</option>
              <option value={365 * 24 * 60 * 60 * 1000}>1 year</option>
            </select>
          </div>
        </Modal>

        {/* Resolve Post/Thread Modal */}
        <Modal
          open={isResolveModalOpen}
          onCancel={handleCancel}
          onOk={handleResolveStatus}
          okText="Resolve"
        >
          <div className="mb-4">
            <label className="block font-bold mb-2">
              Please provide a reason for your decision:
            </label>
            <Input.TextArea
              placeholder="Enter your reason for this decision..."
              value={resolveReason}
              onChange={(e) => setResolveReason(e.target.value)}
              rows={4}
            />
          </div>
        </Modal>
      </div>
    </>
  );
};

export default ModButtonGroup;
