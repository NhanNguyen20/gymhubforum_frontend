import SelectOption from "./SelectOption";
import CheckBoxes from "./CheckBoxes";
import { Button, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

const FormComponent = ({
  field,
  formType,
  handleInputChange,
}: {
  field: any;
  formType: string;
  handleInputChange: (val: string, newVal: string | string[]) => void;
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
    case "fileInput": // UI done, haven't handled for img upload
      return (
        <Upload>
          <Button icon={<UploadOutlined />}>Upload File</Button>
        </Upload>
      );
    case "textArea":
      return (
        <TextArea
          name={field[2]}
          placeholder={field[4]}
          onChange={(e) => {
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
            handleInputChange(field[2], e.target.value);
          }}
        />
      );
  }
};

export default FormComponent;
