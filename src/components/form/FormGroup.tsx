"use client";
import SelectOption from "./SelectOption";
import CheckBoxes from "./CheckBoxes";
import {
  loginFormFields,
  signupFormFields,
  banMemberFormFields,
  createPostFormFields,
  createThreadFormFields,
  reportFormFields,
} from "@/constants";
import { useState } from "react";
import type { FormProps } from "antd";
import { Form, Button, Input, Upload } from "antd";
import { UploadOutlined } from "@ant-design/icons";
import TextArea from "antd/es/input/TextArea";

const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

const FormGroup = ({ formType }: { formType: string }) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (field: string, newVal: string | string[]) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: newVal,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  // a handler to return specific field component
  const getFormField = (field: any) => {
    switch (field[1]) {
      case "select":
        return (
          <SelectOption
            selectType={formType}
            updateChange={handleInputChange}
          />
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

  const getFormFields = () => {
    switch (formType) {
      case "signup":
        return signupFormFields;
      case "login":
        return loginFormFields;
      case "ban member":
        return banMemberFormFields;
      case "create thread":
        return createThreadFormFields;
      case "create post":
        return createPostFormFields;
      case "report content":
        return reportFormFields;
      default:
        return []; // empty array or handle unknown form types
    }
  };
  const formFields = getFormFields();

  return (
    <div>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h2 className="text-center capitalize">{formType}</h2>
        {formFields.map((field, index) => (
          <Form.Item label={field[0]} key={index}>
            {getFormField(field)}
          </Form.Item>
        ))}

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormGroup;
