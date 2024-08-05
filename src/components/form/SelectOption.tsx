import { Select } from "antd";
import { formSelectOption } from "@/constants";

const onSearch = (value: string) => {
  console.log("search:", value);
};

const SelectOption = ({
  selectType,
  updateChange,
}: {
  selectType: string;
  updateChange: (val: string, newVal: string) => void;
}) => {
  const formSection = formSelectOption.find((s) => s.formType === selectType);

  const options = formSection?.options || [];
  return (
    <>
      {formSelectOption.map(
        (section, index) =>
          section.formType === selectType && (
            <Select
              key={index}
              showSearch
              placeholder={section.title}
              onSearch={onSearch}
              options={options}
              onChange={(e) => {
                updateChange(section.name, e);
              }}
            />
          )
      )}
    </>
  );
};

export default SelectOption;
