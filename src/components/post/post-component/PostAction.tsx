import { EditOutlined, FlagOutlined } from "@ant-design/icons";
import { Button } from "antd";

const PostAction = () => {
  return (
    <div className="grid grid-cols-2">
      <div className="mr-10">
        <Button
          className="mb-2"
          type="default"
          shape="circle"
          icon={<EditOutlined />}
        />
        <p>Edit</p>
      </div>
      <div className="">
        <Button
          className="mb-2"
          type="default"
          shape="circle"
          icon={<FlagOutlined />}
        />
        <p>Report</p>
      </div>
    </div>
  );
};

export default PostAction;
