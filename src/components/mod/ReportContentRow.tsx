import ModButtonGroup from "./ModButtonGroup";
import { PendingThreadReportProps, PendingPostReportProps } from "@/types";

const ReportContentRow = ({
  threadReport,
  postReport,
  rowIndex,
  modID,
}: {
  threadReport?: PendingThreadReportProps;
  postReport?: PendingPostReportProps;
  rowIndex: number;
  modID: number;
}) => {
  const isPost = !!postReport;
  const contentID = isPost ? postReport?.postID : threadReport?.threadId;
  const ownerID = isPost ? postReport?.ownerId : threadReport?.ownerId; // Add this line to retrieve ownerID

  const handleResolve = (newToxicStatus: string) => {
    console.log(`Resolved ${isPost ? "post" : "thread"} as ${newToxicStatus}`);
    // Additional actions after resolving, if needed
  };

  return (
    <tr className="hover:bg-gray-50">
      {/* Row Number */}
      <td className="px-6 py-5 border-b border-gray-300 font-bold text-gray-900 text-left">
        {rowIndex + 1}
      </td>

      {/* Content (Thread Title or Post Comment) */}
      <td className="px-6 py-5 border-b border-gray-300 font-bold text-gray-900 break-words">
        {isPost
          ? postReport?.content || "No content available"
          : threadReport?.title || "No title available"}
      </td>

      {/* Reasons */}
      <td className="px-6 py-5 border-b border-gray-300 text-gray-900 break-words">
        {isPost
          ? postReport?.reason || "No reason provided"
          : threadReport?.reason || "No reason provided"}
      </td>

      {/* Resolve Actions (buttons) */}
      <td className="px-4 py-5 border-b border-gray-300 text-gray-900 w-32 text-center">
        <ModButtonGroup
          postID={contentID || 0}
          modID={modID}
          handleResolve={handleResolve}
          isPost={isPost}
          threadID={postReport?.threadId} // Pass threadID for posts
          category={threadReport?.threadCategory} // Pass category for threads
          reason={isPost ? postReport?.reason || "" : threadReport?.reason || ""}
          ownerID={ownerID || 0} // Pass the ownerID to the ModButtonGroup
        />
      </td>
    </tr>
  );
};

export default ReportContentRow;
