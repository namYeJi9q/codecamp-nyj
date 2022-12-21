import { UseFormRegisterReturn } from "react-hook-form";

interface IInputProps {
  type: "text" | "password";
  register: UseFormRegisterReturn;
  placeholder: string;
}

export default function Input01(props: IInputProps) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      {...props.register}
    />
  );
}
