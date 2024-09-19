"use client";
import {
  loginFormFields,
  signupFormFields,
  banMemberFormFields,
  createPostFormFields,
  createThreadFormFields,
  reportPostFormFields,
} from "@/constants";
import { useState, useEffect } from "react";
import type { FormProps } from "antd";
import { Form, Button } from "antd";
import FormComponent from "./FormComponent";
import { handleForm, signup } from "@/api";

const onFinishFailed: FormProps["onFinishFailed"] = (errorInfo) => {
  console.log("Failed:", errorInfo);
};

interface FormGroupProps {
  formType: string;
  onSubmit?: (data: any) => void;
  classes?: string;
  passedFormData?: {};
}

const FormGroup = ({
  formType,
  classes,
  onSubmit,
  passedFormData,
}: FormGroupProps) => {
  const [formData, setFormData] = useState(passedFormData || {});

  const handleInputChange = (
    field: string,
    newVal: string | string[] | any
  ) => {
    setFormData((prevState) => {
      let updatedValue = newVal;

      // Check if the field is 'tags' and transform the data if necessary
      if (field === "tagSet" && Array.isArray(newVal)) {
        updatedValue = newVal.map((tag) => parseInt(tag));
      }

      return {
        ...prevState,
        [field]: updatedValue,
      };
    });
  };

  const handleSubmit = async () => {
    console.log("before submitting ", formData);
    const res = await handleForm(formType, formData);
    console.log(res);
    if (onSubmit) {
      onSubmit(res);
      return;
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
      case "report post":
        return reportPostFormFields;
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
          <Button type="primary" htmlType="submit" onClick={handleSubmit}>
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default FormGroup;
