import { Checkbox } from "antd";
import { formCheckBoxes } from "@/constants";

const CheckBoxes = ({
  selectType,
  updateChange,
}: {
  selectType: string;
  updateChange: (val: string, newVal: string | string[]) => void;
}) => {
  const formSection = formCheckBoxes.find((s) => s.formType === selectType);

  const options = formSection?.options || [];

  return (
    <>
      {formCheckBoxes.map(
        (section, index) =>
          section.formType === selectType && (
            <Checkbox.Group
              key={index}
              options={options}
              onChange={(e) => updateChange(section.name, e)}
            >
              {section.title}
            </Checkbox.Group>
          )
      )}
    </>
  );
};

export default CheckBoxes;
