import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { ChangeEvent } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface Input01Props {
  type: "text" | "password";
  placeholder: string;
  register: UseFormRegisterReturn;
}

const PlaceholderStyle = css`
  &::placeholder {
    color: #fff;
  }
`;

const InputBox = styled.input`
  width: 100%;
  height: 40px;
  border: none;
  padding-left: 15px;
  background-color: none;
  border-bottom: 1px solid #c0c0c0;
  background-color: rgba(255, 255, 255, 0);
  outline: none;
  color: #fff;
  ${PlaceholderStyle}
`;

export default function Input02(props: Input01Props) {
  return (
    <InputBox
      type={props.type}
      placeholder={props.placeholder}
      {...props.register}
    />
  );
}
