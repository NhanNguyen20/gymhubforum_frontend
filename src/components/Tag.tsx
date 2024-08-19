import React from "react";
import { TagsProps } from "@/types";
import { Tag, Popover } from "antd";

const Tags: React.FC<TagsProps> = (props) => {
    const limitedTags = props.limit ? props.tags.slice(0, props.limit) : props.tags;
    const remainingTags = props.limit && props.tags.length > props.limit ? props.tags.slice(props.limit) : [];

    return (
        <div className={props.className}>
            {limitedTags.map(name => (
                <Tag key={name} color="#EF503B">{name}</Tag>
            ))}
            {remainingTags.length > 0 && (
                <Popover content={remainingTags.map(name => (
                    <Tag key={name} color="#EF503B" style={{ marginBottom: '5px' }}>{name}</Tag>
                ))}>
                    <Tag color="#3B62EF">+{remainingTags.length} more</Tag>
                </Popover>
            )}
        </div>
    );
};

export default Tags;

