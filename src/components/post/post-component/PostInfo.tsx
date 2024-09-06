import { PostDetailProps } from "@/types";
import { Image } from "antd";

const PostInfo = ({ postInfo }: { postInfo: PostDetailProps }) => {
  return (
    <div className={postInfo.className}>
      <p className="mb-5 text-gray-500">
        {postInfo.creationDateTime}
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
          <Image
            className="pr-1"
            width={300}
            height={400}
            src={
              postInfo.encodedImage ||
              "https://i.pinimg.com/originals/c8/ab/61/c8ab614eb7f602cf471e1fdefd06f8a1.jpg"
            }
            alt="image"
          />
        </Image.PreviewGroup>
      </div>
    </div>
  );
};

export default PostInfo;
