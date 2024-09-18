import { LatestPostItemProps } from "@/types";
import { getDate } from "@/utils";
import { RetweetOutlined } from "@ant-design/icons";
import Typography from "antd/es/typography";
import React from "react";

const { Paragraph } = Typography;

const LastestPostItem: React.FC <LatestPostItemProps> = (props) => {
    return (
        <div className={props.className}>
            <Paragraph
             ellipsis={{ rows: 1, expandable: false, symbol: '...' }}
             style={{ margin:'0', color:'rgba(0, 0, 0, 0.45)'}}> <RetweetOutlined/> {props.content}</Paragraph>
            <span style={{marginRight:'20px'}}>Date: {getDate(props.creationDate)}</span>
            <span>Box: {props.boxType}</span>
        </div>
    )
}

export default LastestPostItem