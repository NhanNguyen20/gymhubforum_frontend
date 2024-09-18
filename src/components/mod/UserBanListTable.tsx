import { BannedMember } from "@/types";
import React from "react";

const UserBanListTable = ({
  bannedMembers,
  onUnbanSuccess,
}: {
  bannedMembers: BannedMember[];
  onUnbanSuccess: (userId: number) => void;
}) => {
  return (
    <div className="w-full">
      <div className="overflow-x-auto shadow-md sm:rounded-lg bg-gray-100 p-4">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 border-b border-gray-300 font-bold text-left text-gray-700 w-1/12">
                No.
              </th>
              <th className="px-6 py-3 border-b border-gray-300 font-bold text-left text-gray-700 w-4/12">
                Username
              </th>
              <th className="px-6 py-3 border-b border-gray-300 text-left text-gray-700 w-80">
                Ban Reason
              </th>
              <th className="px-6 py-3 border-b border-gray-300 text-center text-gray-700 w-32">
                Ban Duration
              </th>
              <th className="px-6 py-3 border-b border-gray-300 text-center text-gray-700 w-28">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {bannedMembers.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b border-gray-300 font-bold text-gray-900 w-1/12">
                  {index + 1}
                </td>
                <td className="px-6 py-4 border-b border-gray-300 font-bold text-gray-900 w-4/12">
                  {user.userName}
                </td>
                <td className="px-6 py-4 border-b border-gray-300 text-gray-900 w-80 break-words">
                  {user.reason}
                </td>
                <td className="px-6 py-4 border-b border-gray-300 text-gray-900 text-center w-32 font-bold">
                  {user.bannedUntil ? new Date(user.bannedUntil).toLocaleDateString() : "Unknown"}
                </td>
                <td className="px-6 py-4 border-b border-gray-300 text-center w-28">
                  <button
                    className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                    onClick={() => onUnbanSuccess(user.id)}
                  >
                    Unban
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserBanListTable;
