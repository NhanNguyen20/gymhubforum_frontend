import React, { useState } from "react";
import { Tag } from "antd";
import { useTag } from "@/context/TagContext";
import { Checkbox } from "antd";
import { formCheckBoxes } from "@/constants";
const { CheckableTag } = Tag;

const CheckBoxes = ({
  selectType,
  updateChange,
}: {
  selectType: string;
  updateChange: (val: string, newVal: string | string[] | number[]) => void;
}) => {
  const { tags } = useTag();
  const [selectedTags, setSelectedTags] = useState<number[]>([]);

  const handleTagChange = (tagId: number, checked: boolean) => {
    const nextSelectedTags = checked
      ? [...selectedTags, tagId]
      : selectedTags.filter((t) => t !== tagId);
    setSelectedTags(nextSelectedTags);
    updateChange("tagSet", nextSelectedTags);
  };

  return (
    <>
      {selectType === "create thread" || selectType === "update thread"
        ? tags.map((tag) => (
            <CheckableTag
              key={tag.id}
              checked={selectedTags.includes(tag.id)}
              onChange={(checked) => handleTagChange(tag.id, checked)}
              style={{
                backgroundColor: selectedTags.includes(tag.id)
                  ? "#f50"
                  : "#686e78",
                color: "white",
                borderColor: selectedTags.includes(tag.id) ? "#F97315" : "#f50",
              }}
            >
              {tag.tagName}
            </CheckableTag>
          ))
        : formCheckBoxes.map(
            (section, index) =>
              section.formType === selectType && (
                <Checkbox.Group
                  key={index}
                  options={section.options}
                  onChange={(e) => {
                    e.map((val) => {
                      parseInt(val);
                    });
                    updateChange(section.name, e);
                  }}
                >
                  {section.title}
                </Checkbox.Group>
              )
          )}
    </>
  );
};

export default CheckBoxes;
