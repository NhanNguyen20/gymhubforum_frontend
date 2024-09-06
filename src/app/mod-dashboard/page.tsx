import React from "react";
import ReportContentTable from "@/components/mod/ReportContentTable";
import UserBanListTable from "@/components/mod/UserBanListTable";
import { ThreadReportProps, ThreadCategory } from "@/types";
import UserBanForm from "@/components/mod/UserBanForm";

export default function ModDashboard() {
  const reportList: ThreadReportProps[] = [
    {
      id: 1,
      reason: ["Spam", "Offensive Content"],
      threadCategory: ThreadCategory.FLEXING,
      from: 1620000000000,
      to: 1620086400000,
      comment: "This post violates community guidelines.",
    },
    {
      id: 2,
      reason: ["Harassment"],
      threadCategory: ThreadCategory.ADVICE,
      from: 1620050000000,
      to: 1620126400000,
    },
    {
      id: 3,
      reason: ["Misinformation"],
      threadCategory: ThreadCategory.SUPPLEMENT,
      from: 1620100000000,
      to: 1620186400000,
      comment: "This information is misleading and false.",
    },
    {
      id: 4,
      reason: ["Hate Speech"],
      threadCategory: ThreadCategory.FLEXING,
      from: 1620150000000,
      to: 1620236400000,
      comment: "Contains offensive language towards a group of people.",
    },
  ];

  return (
    <div className="container mx-auto">
      {/* Report Content Section */}
      <div className="mb-16">
        <h2 className="text-2xl font-bold mb-6">Report Content Processing</h2>
        <ReportContentTable reportList={reportList} />
      </div>

      {/* User Ban List Section */}
      <div className="mb-16">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-2xl font-bold">User Ban Lists</h2>

          {/* The UserBanForm component now manages its own modal */}
          <UserBanForm title="Gymmer" joinDate="January 1, 2023" />
        </div>
        <UserBanListTable />
      </div>
    </div>
  );
}
