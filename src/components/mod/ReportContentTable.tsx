import ReportContentRow from "./ReportContentRow";
import { ThreadReportProp } from "@/types";

const ReportContentTable = ({
  reportList,
}: {
  reportList: ThreadReportProp[];
}) => {
  return (
    <div>
      <div className="bg-[#DFDFE1] p-4">
        <div className="m-auto grid grid-cols-8 w-full h-10 bg-white content-center text-center mb-3">
          <div className="col-span-1 w-full h-full border-r-4 border-[#DFDFE1]">
            Content ID
          </div>
          <div className="col-span-3 w-full border-r-4 border-[#DFDFE1]">
            Content
          </div>
          <div className="col-span-2 w-full border-r-4 border-[#DFDFE1]">
            Reasons
          </div>
          <div className="col-span-2 w-full">Resolve Actions</div>
        </div>
        {reportList.map((content, index) => (
          <ReportContentRow key={index} threadReport={content} />
        ))}
        <ReportContentRow />
        <ReportContentRow />
      </div>
    </div>
  );
};

export default ReportContentTable;
