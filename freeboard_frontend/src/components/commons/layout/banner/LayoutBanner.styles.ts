import { CloseOutlined } from "@ant-design/icons";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

// @media screen and (max-width: 500px) {
//   flex-direction: column;
// }

interface ILayoutHeaderStyle {
  isOpen?: boolean;
  onClick?: () => void;
}

const media = css`
  @media screen and (max-width: 1200px) {
    width: 100%;
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
  }
`;

const hover = css`
  &:hover {
    &::after {
      content: ">";
      color: #fff;
      position: absolute;
      top: 0;
      right: 10px;
    }
    font-weight: 500;
    cursor: pointer;
  }
`;

export const Exit = styled(CloseOutlined)`
  font-size: 20px;
  color: #fff;
  position: absolute;
  top: -10px;
  left: 130px;
`;

export const HeaderWrapper = styled.div`
  position: fixed;
  width: 250px;
  height: 100vh;
  border-top-right-radius: 35px;
  border-bottom-right-radius: 35px;
  background-color: #142d4c;
  z-index: 999;
  padding: 40px 75px;
  top: 0;
  left: 0;
  transform: ${(props: ILayoutHeaderStyle) =>
    props.isOpen ? "translateX(0)" : "translateX(-300px)"};
  transition: transform 0.3s ease-in-out;
`;

export const HeaderInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  line-height: 50px;
  position: relative;
`;

export const HomeMenu = styled.h1`
  width: 100px;
  height: 100px;
  overflow: hidden;
  margin-bottom: 40px;
`;

export const Logo = styled.img`
  width: 100px;
  height: 100px;
`;

export const Menu = styled.div``;

export const ListUl = styled.ul`
  list-style: none;
  display: flex;
  flex-direction: column;
`;

export const ListLi = styled.li`
  color: #fbf9f7;
  font-size: 16px;
  font-weight: 300;
  cursor: pointer;
  position: relative;
  ${hover}
`;

export const Sign = styled.div`
  display: flex;
  flex-direction: column;
  color: #fbf9f7;
  font-size: 16px;
  font-weight: 300;
`;

export const Login = styled.div`
  position: relative;
  ${hover}
`;

export const SignUp = styled.div`
  position: relative;
  ${hover}
`;
