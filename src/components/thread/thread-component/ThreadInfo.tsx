import { ThreadInfoProp } from "@/types";
import { Flex, Tag } from "antd";

const ThreadInfo = ({ props }: { props: ThreadInfoProp }) => {
  return (
    <div>
      <h1 className="font-semibold text-4xl mb-3">{props.name}</h1>
      <div>
        Started by{" "}
        <span className="font-extrabold text-cyan-600">{props.authorName}</span>{" "}
        - {props.creationDateTime}
        <span className="ml-8">
          <Flex gap="4px 0" wrap className="inline">
            <Tag color="success">Body Building</Tag>
            <Tag color="processing">Processing</Tag>
            <Tag color="warning">Weight Gain</Tag>
            <Tag color="default">Sharing</Tag>
          </Flex>
        </span>
      </div>
    </div>
  );
};

export default ThreadInfo;
