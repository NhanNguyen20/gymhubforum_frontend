import { PostDetailProp } from "@/types";
import { Image } from "antd";

const PostInfo = ({ postInfo }: { postInfo: PostDetailProp }) => {
  return (
    <div className={postInfo.className}>
      <p className="mb-5 text-gray-500">
        {/* {postInfo.date} */}A missing date time...
        <span className="float-right">#{postInfo.postId}</span>
      </p>

      <div className="pl-4">
        <p className="mb-5">{postInfo.content}</p>
        <Image.PreviewGroup
          preview={{
            onChange: (current, prev) =>
              console.log(`current index: ${current}, prev index: ${prev}`),
          }}
        >
          {postInfo.encodedImages.map((img, index) => (
            <Image
              className="pr-1"
              key={index}
              width={300}
              height={400}
              src={img}
              alt="image"
            />
          ))}
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

export default PostInfo;
