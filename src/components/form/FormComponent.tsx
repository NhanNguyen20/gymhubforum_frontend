import SelectOption from "./SelectOption";
import CheckBoxes from "./CheckBoxes";
import { Input, Image, Upload } from "antd";
import TextArea from "antd/es/input/TextArea";

const FormComponent = ({
  field,
  formType,
  handleInputChange,
}: {
  field: any;
  formType: string;
  handleInputChange: (val: string, newVal: string | string[] | any) => void;
}) => {
  switch (field[1]) {
    case "select":
      return (
        <SelectOption selectType={formType} updateChange={handleInputChange} />
      );
    case "selectMany":
      return (
        <CheckBoxes selectType={formType} updateChange={handleInputChange} />
      );
    case "fileInput":
      return (
        <>
          <Upload
            onChange={(e) => {
              handleInputChange(field[2], e.event);
            }}
          ></Upload>
        </>
      );
    case "textArea":
      return (
        <TextArea
          name={field[2]}
          placeholder={field[4]}
          onChange={(e) => {
            e.preventDefault();
            handleInputChange(field[2], e.target.value);
          }}
        />
      );
    default:
      return (
        <Input
          type={field[1]}
          name={field[2]}
          placeholder={field[4]}
          onChange={(e) => {
            e.preventDefault();
            handleInputChange(field[2], e.target.value);
          }}
        />
      );
  }
};

export default FormComponent;
