import ReportContentRow from "./ReportContentRow";
import { ThreadReportProps } from "@/types";

const ReportContentTable = ({
  reportList,
}: {
  reportList: ThreadReportProps[];
}) => {
  return (
    <div>
      <div className="overflow-x-auto shadow-md sm:rounded-lg bg-gray-100 p-4">
        <div className="m-auto grid grid-cols-8 w-full h-16 bg-gray-200 content-center text-center mb-3">
          <div className="col-span-1 w-full h-full border-[#DFDFE1]">Content ID</div>
          <div className="col-span-3 w-full border-[#DFDFE1]">Content</div>
          <div className="col-span-2 w-full border-[#DFDFE1]">Reasons</div>
          <div className="col-span-2 w-full">Resolve Actions</div>
        </div>
        {reportList.map((content, index) => (
          <ReportContentRow key={index} threadReport={content} />
        ))}
      </div>
    </div>
  );
};

export default ReportContentTable;
