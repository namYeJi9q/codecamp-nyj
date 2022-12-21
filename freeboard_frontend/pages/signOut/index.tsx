import { LogoutOutlined } from "@ant-design/icons";
import { gql, useMutation } from "@apollo/client";
import { css } from "@emotion/react";
import styled from "@emotion/styled";
import { IMutation } from "../../src/commons/types/generated/types";

const LOG_OUT_USER = gql`
  mutation logoutUser {
    logoutUser
  }
`;

const SignOut = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  color: #fff;
  font-weight: 100;
  cursor: pointer;
  position: absolute;
  bottom: -350px;
  left: 0;
  font-size: 15px;
  transform: scale(1);
  &:hover {
    font-weight: 400;
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const SignOutText = styled.span`
  margin-right: 10px;
`;

export default function SignOutPage() {
  const [logoutUser] = useMutation<Pick<IMutation, "logoutUser">>(LOG_OUT_USER);

  const onClickSignOut = () => {
    logoutUser();
    location.reload();
  };

  return (
    <SignOut onClick={onClickSignOut}>
      <SignOutText>Sign out</SignOutText>
      <LogoutOutlined />
    </SignOut>
  );
}
