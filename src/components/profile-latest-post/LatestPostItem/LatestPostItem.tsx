import { LatestPostItemProps } from "@/types";
import { RetweetOutlined } from "@ant-design/icons";
import React from "react";

const LastestPostItem: React.FC <LatestPostItemProps> = (props) => {
    return (
        <div className={props.className}>
            <p> <RetweetOutlined/> {props.content}</p>
            <p>Date: {props.date}</p>
            <p>Box: {props.boxType}</p>
        </div>
    )
}

export default LastestPostItem