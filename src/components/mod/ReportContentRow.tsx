import ModButtonGroup from "./ModButtonGroup";
import { ThreadReportProps, PostReportProps } from "@/types";
import Tags from "../Tag";

const ReportContentRow = ({
  threadReport,
  postReport,
}: {
  threadReport?: ThreadReportProps;
  postReport?: PostReportProps;
}) => {
  return (
    <div className="m-auto grid grid-cols-8 w-full p-3 bg-white mb-1">
      <div className="col-span-1">
        {threadReport?.id || postReport?.id || "Unknown"}
      </div>
      <div className="col-span-3">
        {threadReport?.comment ||
          postReport?.comment ||
          "No additional comment"}
      </div>
      <div className="col-span-2 flex justify-center">
        {(threadReport && (
          <Tags tags={threadReport.reason} limit={threadReport.reason.length} />
        )) ||
          (postReport && (
            <Tags tags={postReport.reason} limit={postReport.reason.length} />
          )) ||
          "No reason provided"}
      </div>
      <div className="col-span-2">
        <ModButtonGroup action="" reportID={0} />
      </div>
    </div>
  );
};

export default ReportContentRow;
