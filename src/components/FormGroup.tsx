// "use client";
// import InputField from "./InputField";
// import { LoginFormFields, SignupFormFields } from "@/constants";
// import { useState } from "react";

// // a handler to return specific field component

// const FormGroup = () => {
//   const [formData, setFormData] = useState("");

//   // if expression for formType classification
//   // const initialFormData = SignupFormFields.map((field) => {
//   //   handleInputChange(field[2], field[3])
//   // });

//   const handleInputChange = (fieldName: string, newValue: string) => {
//     setFormData((prevData) => ({
//       ...prevData,
//       [fieldName]: newValue,
//     }));
//   };

//   return (
//     <div>
//       {/* form header to be dynamic here */}
//       <h2 className="text-center my-3">Login Form</h2>

//       {LoginFormFields.map((field, index) => (
//         <InputField
//           key={index}
//           label={field[0]}
//           type={field[1]}
//           name={field[2]}
//           value={formData.value || field[3]}
//           placeholder={field[4]}
//           onChange={() => {
//             handleInputChange;
//           }}
//         />
//       ))}
//     </div>
//   );
// };

// export default FormGroup;
