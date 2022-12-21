import styled from "@emotion/styled";

interface IButton01Props {
  isActive: boolean;
  title: string;
}

const LoginBtn = styled.button`
  border-radius: 50px;
  border: none;
  width: 100%;
  height: 40px;
  cursor: pointer;
  background-color: rgba(255, 255, 255, 1);
`;

export default function Button01(props: IButton01Props) {
  return (
    <LoginBtn
      style={{
        backgroundColor: props.isActive ? "#6ef7e0" : "black",
        color: props.isActive ? "black" : "white",
      }}
    >
      {props.title}
    </LoginBtn>
  );
}
