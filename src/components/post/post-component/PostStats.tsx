import React from "react"
import { PostStatsProp } from "@/types"
import HeartOutlined from "@ant-design/icons/lib/icons/HeartOutlined"
import { Button, Statistic } from "antd"


const PostStats: React.FC<PostStatsProp> = (props) => {
    const likeCount = props.likeCount;
    const likeButton = () => { return <Button type="default" shape = "circle" icon={<HeartOutlined />} />; }
    const getTitle = () => {
        switch (true) {
            case likeCount <= 10:
                return "Chicken Leg";
                break;
            case likeCount <= 20:
                return "Try-harder";
                break;
            case likeCount <= 40:
                return "Gym Rat";
                break;
            case likeCount <= 100:
                return "Gym Bro";
                break;
            case likeCount <= 500:
                return "Acient Gymmer";
                break;
            default:
                return "Mr.Olympia";
                break;
        }
    }


    return (
        <div className={props.className}>
            <Statistic title={likeButton()} value={props.likeCount} />
            <p>{getTitle()}</p>
        </div>
    )
}

export default PostStats