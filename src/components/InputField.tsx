// // types: text, email, password, checkbox, select option, disabled
// // conerns (?): 'required' as a prop  , select option(s) as a separate component (by type)

// import { Input } from "antd";

// type InputType =
//   | "text"
//   | "email"
//   | "password"
//   | "checkbox"
//   | "selectOption"
//   | "disabled";

// const InputField = ({
//   label,
//   type,
//   name,
//   value,
//   placeholder,
//   onChange,
// }: {
//   label: string;
//   type: string;
//   name: string;
//   value: string | null;
//   placeholder?: string;
//   onChange: () => void;
// }) => {
//   // const [currValue, setCurrValue] = useState("");

//   return (
//     <div className="mx-10">
//       <h2>{label}</h2>
//       <Input
//         className="mb-3"
//         type={type}
//         placeholder={placeholder}
//         value={value}
//       />
//     </div>
//   );
// };

// export default InputField;
