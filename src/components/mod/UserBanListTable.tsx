import React from "react";

const UserBanListTable = ({ bannedMembers }: { bannedMembers: any[] }) => {
  return (
    <div className="w-full">
      <div className="overflow-x-auto shadow-md sm:rounded-lg bg-gray-100 p-4">
        <table className="min-w-full bg-white border border-gray-300">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 border-b border-gray-300 font-bold text-left text-gray-700">No.</th>
              <th className="px-6 py-3 border-b border-gray-300 font-bold text-left text-gray-700">Username</th>
              <th className="px-6 py-3 border-b border-gray-300 text-left text-gray-700">Ban Reason</th>
              <th className="px-6 py-3 border-b border-gray-300 text-left text-gray-700 w-32">Ban Duration</th>
            </tr>
          </thead>
          <tbody>
            {bannedMembers.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b border-gray-300 font-bold text-gray-900">{index + 1}</td>
                <td className="px-6 py-4 border-b border-gray-300 font-bold text-gray-900">{user.userName}</td>
                <td className="px-6 py-4 border-b border-gray-300 text-gray-900">{user.reason}</td>
                <td className="px-8 py-4 border-b border-gray-300 text-gray-900 font-bold w-32">
                  {user.bannedUntil ? new Date(user.bannedUntil).toLocaleDateString() : "Unknown"}
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
