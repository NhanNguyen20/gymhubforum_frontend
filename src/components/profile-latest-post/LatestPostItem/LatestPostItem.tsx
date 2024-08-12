import { LatestPostProp } from "@/types";
import { RetweetOutlined } from "@ant-design/icons";
import React from "react";

const LastestPostItem: React.FC = () => {

    return (
        <div className={""}>
            <span>
                <strong>Alo</strong>
            </span>
            <p> <RetweetOutlined/> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
            <p>Date: {}</p>
            <p>Box: {}</p>
        </div>
    )
}

export default LastestPostItem