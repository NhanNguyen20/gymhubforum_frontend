"use client";
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
import { Form, Button } from "antd";
import FormComponent from "./FormComponent";

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
            <FormComponent
              formType={formType}
              field={field}
              handleInputChange={handleInputChange}
            />
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
