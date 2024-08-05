import React from "react";
import { ThreadStatsProp } from "@/types";
import { Statistic } from "antd";
import { CommentOutlined, EyeOutlined } from "@ant-design/icons";

const ThreadStats : React.FC<ThreadStatsProp> = (props) => {
    return (
        <div>
            <Statistic title = {<CommentOutlined />} value = {props.postCount}/>
            <Statistic title = {`Latest Post`} value = {props.lastUpload}/>
            <Statistic title = {<EyeOutlined />} value = {props.viewCount}/>
        </div>
    )
}

export default ThreadStats