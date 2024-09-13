import ModButtonGroup from "./ModButtonGroup";
import { PendingThreadReportProps, PostReportProps } from "@/types";
import Tags from "../Tag";

const ReportContentRow = ({
  threadReport,
  postReport,
}: {
  threadReport?: PendingThreadReportProps;
  postReport?: PostReportProps;
}) => {
  return (
    <div className="m-auto grid grid-cols-8 w-full p-3 bg-white mb-1">
      {/* Content ID */}
      <div className="col-span-1">{threadReport?.id || "Unknown"}</div>

      {/* Content (Thread Title or Post Comment) */}
      <div className="col-span-3">{threadReport?.comment || "No content available"}</div>

      {/* Reasons */}
      <div className="col-span-2 flex justify-center">
        <Tags tags={threadReport?.reason || []} limit={1} />
      </div>

      {/* Resolve Actions (buttons) */}
      <div className="col-span-2">
        <ModButtonGroup action="" reportID={threadReport?.id || 0} />
      </div>
    </div>
  );
};

export default ReportContentRow;
