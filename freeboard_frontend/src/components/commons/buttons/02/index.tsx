import styled from "@emotion/styled";
import { MouseEvent } from "react";

interface IButton02Props {
  onClick?: (event: MouseEvent<HTMLButtonElement>) => void;
  title?: string;
  style?: any;
}
const Button = styled.button`
  width: 162px;
  height: 48px;
  border: none;
  font-weight: 500;
  font-size: 16px;
  color: #002b5b;
  background-color: #cdf9ee;
  margin: 0 15px;
  border-radius: 50px;

  :hover {
    background-color: #6ef7e0;
  }
`;

export default function Button02(props: IButton02Props) {
  return (
    <Button onClick={props.onClick} title={props.title} style={props.style}>
      {props.title}
    </Button>
  );
}
