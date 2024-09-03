"use client";

import React, { useState } from "react";
import { UserBanFormProps } from "@/types";
import Modal from "@/components/mod/Modal";

const UserBanForm: React.FC<UserBanFormProps> = ({ title, joinDate }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const [banReason, setBanReason] = useState("");
  const [banDuration, setBanDuration] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleOpenModal = () => setModalOpen(true);
  const handleCloseModal = () => setModalOpen(false);

  const handleBan = () => {
    if (!banReason || !banDuration) {
      alert("Please provide a ban reason and select a ban duration.");
      return;
    }
    console.log("Ban Reason:", banReason);
    console.log("Ban Duration:", banDuration);
    
    {/*Ban logic - Implement API*/}

    {/* Close the modal after the ban logic is executed */}
    handleCloseModal();
  };

  return (
    <div>
      <button
        className="bg-red-500 text-white px-4 py-2 rounded-md hover:bg-red-600"
        onClick={handleOpenModal}
      >
        Ban User
      </button>

      <Modal isOpen={isModalOpen} onClose={handleCloseModal}>
        <div className="max-w-4xl mx-auto bg-gray-200 p-6 border border-gray-300 rounded-lg mt-8">
          <div className="flex">
            {/* Left Side - User Profile with Search Bar */}
            <div className="w-1/3 p-4 border-r border-gray-300">
              <div className="mb-4">
                <input
                  type="text"
                  placeholder="Search"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full p-2 border border-gray-300 rounded"
                />
              </div>
              <div className="text-center">
                <img
                  src="https://via.placeholder.com/100"
                  alt="User"
                  className="mx-auto rounded-full mb-4"
                />
                <p className="font-bold text-lg">Beta</p>
                <p className="text-sm text-gray-600 mb-4">Member</p>
                <div className="text-left">
                  <p>
                    <strong>Title:</strong> {title}
                  </p>
                  <p>
                    <strong>Join Date:</strong> {joinDate}
                  </p>
                  <p>
                    <strong>Last Seen:</strong> Lorem Ipsum
                  </p>
                </div>
              </div>
            </div>

            {/* Right Side - Ban Form */}
            <div className="w-2/3 p-4">
              <div className="mb-6">
                <label className="block font-bold mb-2">Ban Reasons</label>
                <textarea
                  className="w-full p-2 border border-gray-300 rounded"
                  rows={4}
                  value={banReason}
                  onChange={(e) => setBanReason(e.target.value)}
                  placeholder="Enter the reason for banning the user..."
                ></textarea>
              </div>
              <div className="mb-6">
                <label className="block font-bold mb-2">Ban Duration</label>
                <select
                  className="w-full p-2 border border-gray-300 rounded"
                  value={banDuration}
                  onChange={(e) => setBanDuration(e.target.value)}
                >
                  <option value="">Select Ban Duration</option>
                  <option value="1 Day">1 Day</option>
                  <option value="21 Days">21 Days</option>
                  <option value="1 Month">1 Month</option>
                  <option value="1000 Years">1000 Years</option>
                </select>
              </div>
              <button
                className="bg-red-500 text-white py-2 px-8 rounded hover:bg-red-600"
                onClick={handleBan}
              >
                ✨ Ban ✨
              </button>
            </div>
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default UserBanForm;
