import ReportContentRow from "./ReportContentRow";
import { PendingThreadReportProps, PendingPostReportProps } from "@/types";

const ReportContentTable = ({
  reportList,
  isPostReport = false,
  modID, // Add modID prop
}: {
  reportList: (PendingThreadReportProps | PendingPostReportProps)[];
  isPostReport?: boolean;
  modID: number; // Pass modID to the rows
}) => {
  return (
    <div className="w-full">
      <div className="overflow-x-auto shadow-md sm:rounded-lg bg-gray-100 p-4">
        <table className="min-w-full bg-white border border-gray-300 table-fixed">
          <thead className="bg-gray-200">
            <tr>
              <th className="px-6 py-3 border-b border-gray-300 font-bold text-left text-gray-700 w-1/12">
                No.
              </th>
              <th className="px-6 py-3 border-b border-gray-300 font-bold text-left text-gray-700 w-4/12">
                Content
              </th>
              <th className="px-6 py-3 border-b border-gray-300 text-left text-gray-700 w-4/12">
                Report Reasons
              </th>
              <th className="px-6 py-3 border-b border-gray-300 text-gray-700 w-3/12">
                Resolve Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {reportList.map((content, index) => (
              <ReportContentRow
                key={index}
                rowIndex={index}
                threadReport={
                  !isPostReport
                    ? (content as PendingThreadReportProps)
                    : undefined
                }
                postReport={
                  isPostReport ? (content as PendingPostReportProps) : undefined
                }
                modID={modID} // Pass the moderator ID to the row
              />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportContentTable;
