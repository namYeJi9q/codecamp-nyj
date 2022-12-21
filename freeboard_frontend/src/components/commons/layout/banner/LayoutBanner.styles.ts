import {
  CloseOutlined,
  MenuFoldOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import { css } from "@emotion/react";
import styled from "@emotion/styled";

// @media screen and (max-width: 500px) {
//   flex-direction: column;
// }

interface ILayoutHeaderStyle {
  isActive?: boolean;
  onClick?: () => void;
}

const media = css`
  @media screen and (max-width: 1200px) {
    width: 100%;
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
`;

export const MenuO = styled(MenuOutlined)`
  color: #fbf9f7;
  opacity: 0.6;
  position: relative;
  top: -10px;
  left: 520px;
  font-size: 28px;
  font-weight: 100;
  border: 1px solid red;
`;

export const MenuF = styled(MenuFoldOutlined)`
  color: #fbf9f7;
  opacity: 0.6;
  position: relative;
  top: -10px;
  right: -120px;
  font-size: 28px;
  font-weight: 100;
`;

export const HeaderWrapper = styled.div`
  width: 250px;
  height: 100%;
  /* border-top-right-radius: 50px;
  border-bottom-right-radius: 50px; */
  background-color: rgba(14, 6, 9, 0.5);
  z-index: 999;
  padding: 40px 75px;
  position: fixed;
  /* transform: ${(props: ILayoutHeaderStyle) =>
    props.isActive ? "translateX(0)" : "translateX(-300px)"}; */
`;

export const HeaderInnerWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  line-height: 50px;
  position: relative;

  ${media}
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
  ${hover}/* display: ${(props: ILayoutHeaderStyle) =>
    props.onClick === undefined ? "none" : "none"}; */
`;

export const SignUp = styled.div`
  position: relative;
  ${hover}
`;
