import React from 'react';

const UserBanListTable = () => {
  {/* Example data */}
  const bannedUsers = [
    {
      userName: "LangTuGió",
      banReason: "By registering an account at NeoGAF.com and participating (including but not limited to submitting posts or private messages on NeoGAF.com), you hereby grant NeoGAF LLC and our licensees, distributors, agents, representatives and other authorized users, a perpetual, non-exclusive, irrevocable, fully-paid, royalty-free, sub-licensable and transferable (in whole or part) worldwide license under all copyrights, trademarks, patents, trade secrets, privacy and publicity rights and other intellectual property rights you own or control to use, reproduce, transmit, display, exhibit, distribute, index, comment on, modify, create derivative works based upon, perform and otherwise exploit the messages posted or private messages sent on NeoGAF.com, in whole or in part, in all media formats and channels now known or hereafter devised, for any and all purposes including entertainment, news, advertising, promotional, marketing, publicity, trade or commercial purposes, all without further notice to you, with or without attribution, and without the requirement of any permission from or payment to you or to any other person or entity.",
      banDuration: "1000 years"
    },
    {
      userName: "HoaXu`",
      banReason: "By registering an account at NeoGAF.com and participating (including but not limited to submitting posts or private messages on NeoGAF.com), you hereby grant NeoGAF LLC and our licensees, distributors, agents, representatives and other authorized users, a perpetual, non-exclusive, irrevocable, fully-paid, royalty-free, sub-licensable and transferable (in whole or part) worldwide license under all copyrights, trademarks, patents, trade secrets, privacy and publicity rights and other intellectual property rights you own or control to use, reproduce, transmit, display, exhibit, distribute, index, comment on, modify, create derivative works based upon, perform and otherwise exploit the messages posted or private messages sent on NeoGAF.com, in whole or in part, in all media formats and channels now known or hereafter devised, for any and all purposes including entertainment, news, advertising, promotional, marketing, publicity, trade or commercial purposes, all without further notice to you, with or without attribution, and without the requirement of any permission from or payment to you or to any other person or entity.",
      banDuration: "1000 years"
    },
  ];

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
            {bannedUsers.map((user, index) => (
              <tr key={index} className="hover:bg-gray-50">
                <td className="px-6 py-4 border-b border-gray-300 font-bold text-gray-900">{index + 1}</td>
                <td className="px-6 py-4 border-b border-gray-300 font-bold text-gray-900">{user.userName}</td>
                <td className="px-6 py-4 border-b border-gray-300 text-gray-900">{user.banReason}</td>
                <td className="px-8 py-4 border-b border-gray-300 text-gray-900 font-bold w-32">{user.banDuration}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserBanListTable;
