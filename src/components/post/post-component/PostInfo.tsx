import { PostDetailProps } from "@/types";
import { Image } from "antd";
import { decodeBase64Image } from "@/utils";

const PostInfo = ({ postInfo }: { postInfo: PostDetailProps }) => {
  return (
    <div className={postInfo.className}>
      <p className="mb-5 text-gray-500">
        {postInfo.creationDateTime.toString().slice(0, 10)}
        <span> at </span>
        {postInfo.creationDateTime.toString().slice(11, 19)}
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
          {postInfo.encodedImage &&
            postInfo.encodedImage.length > 0 &&
            postInfo.encodedImage.map((image, index) => (
              <Image
                key={index}
                className="pr-1"
                width={300}
                height={400}
                src={decodeBase64Image(image)}
                alt={`image-${index}`}
              />
            ))}
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

export default PostInfo;
