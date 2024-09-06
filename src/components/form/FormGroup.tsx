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
import { handleForm } from "@/api";

const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

interface FormGroupProps {
  formType: string;
  onSubmit?: () => void;
  classes?: string;
}

const FormGroup = ({ formType, classes, onSubmit }: FormGroupProps) => {
  const [formData, setFormData] = useState({});

  const handleInputChange = (field: string, newVal: string | string[]) => {
    setFormData((prevState) => ({
      ...prevState,
      [field]: newVal,
    }));
  };

  const handleSubmit = () => {
    console.log(formData);
    handleForm(formType, formData);
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
    <div className={classes}>
      <Form
        name="basic"
        initialValues={{ remember: true }}
        onFinish={handleSubmit}
        onFinishFailed={onFinishFailed}
        autoComplete="off"
      >
        <h2 className="text-center capitalize font-semibold text-2xl my-5">
          {formType}
        </h2>
        {formFields.map((field, index) => (
          <Form.Item label={field[0]} key={index}>
            <FormComponent
              formType={formType}
              field={field}
              handleInputChange={handleInputChange}
            />
          </Form.Item>
        ))}

        <Form.Item className="flex justify-center">
          <Button type="primary" htmlType="submit" onClick={onSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormGroup;
